#!/bin/sh

: "${SRCDIR:=./js/src}"
: "${BUILDDIR:=./debian/build}"
: "${DEB_HOST_ARCH:=$(dpkg --print-architecture)}"

if "$BUILDDIR/js/src/js" -e 'print("Hello, world")'; then
	echo "Smoke-test successful, continuing with full test suite"
else
	echo "Smoke-test failed: did interpreter initialization fail? (see #873778)"
	exit 1
fi

export DEB_HOST_ARCH

for exclude; do
	EXCLUDES="${EXCLUDES:+${EXCLUDES} }--exclude ${exclude}"
done

if make -C ${BUILDDIR} -k check-jstests; then
	echo "check-jstests successful"
else
	echo "check-jstests failed"
	exit 1
fi

# we want to expand --exclude to several arguments
# shellcheck disable=SC2086
if "${BUILDDIR}"/dist/bin/run-mozilla.sh \
   "${BUILDDIR}"/_virtualenvs/init_py3/bin/python -u \
   "${SRCDIR}"/jit-test/jit_test.py \
   --format=automation \
   --no-slow \
   --no-progress \
   --timeout 600 \
   ${EXCLUDES:-} \
   "${BUILDDIR}"/dist/bin/js basic; then
	echo "check-jit-test successful"
else
	echo "check-jit-test failed"
	exit 1
fi
