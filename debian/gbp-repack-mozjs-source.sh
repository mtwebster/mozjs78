#!/bin/bash
# This script is meant to be called by gbp import-orig as postunpack cmd, and
# it uses official mozilla tooling to create the mozjs archive from a firefox
# source tarball, including only the needed files without having us to care
# about doing this filtering.
#
# We depend on bash here, because the script we call depends on it anyways.
set -xe

[ -d "$GBP_TMP_DIR" ] || exit 1

export STAGING="$GBP_TMP_DIR"
export DIST=/dev/null
export MOZJS_NAME="mozjs-repack"

export RSYNC=${RSYNC:-rsync}
# Don't reconfigure the source or create another archive
export AUTOCONF=/bin/true
export TAR=/bin/true

EXTRA_FILES=(
    intl/icu
    intl/icu-patches
    intl/icu_sources_data.py
)

FILTERED_FILES=(
  '*.chm'
  '*.exe'
  '*.pyd'
  '*.a'
  '*.so'
  '*.o'
)

if [ -z "$GBP_SOURCES_DIR" ]; then
    echo "\$GBP_SOURCES_DIR is not defined, need a newer gbp version"
    exit 1
fi

debpath="$(dirname "$0")"

for i in $(grep-dctrl -s Files-Excluded -n - 2> /dev/null < "$debpath/copyright"); do
    FILTERED_FILES+=("./$i")
done

srcpath="$GBP_SOURCES_DIR"
"$srcpath"/js/src/make-source-package.sh

mozjspath="$(find "$STAGING" -mindepth 1 -maxdepth 1 -type d -name "$MOZJS_NAME"'-*')"
set +x

for ((i = 0; i < ${#EXTRA_FILES[@]}; i++)); do
    $RSYNC -a -q "$srcpath/${EXTRA_FILES[$i]}" \
        "$mozjspath/$(dirname "${EXTRA_FILES[$i]}")/"
done

for ((i = 0; i < ${#FILTERED_FILES[@]}; i++)); do
    find_args=()
    [[ "${FILTERED_FILES[$i]}" == .* ]] && find_args=(-mindepth 1 -maxdepth 1)
    find "$mozjspath/$(dirname "${FILTERED_FILES[$i]}")" \
        "${find_args[@]}" \
        -name "$(basename "${FILTERED_FILES[$i]}")" \
        -exec rm -rfv "{}" \; || true
done

find "$mozjspath" -type d -empty -delete

tmpout=$(mktemp /tmp/mozjs-debimport-XXXXXXXXX.diff)
echo "Differencies found with orig saved at $tmpout, consider adjusting filters"
diff -rq "$srcpath" "$mozjspath" > "$tmpout" || true

rm -rf "$srcpath"
mv -v "$mozjspath" "$srcpath"
