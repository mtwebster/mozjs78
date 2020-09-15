#!/bin/sh

set -e
set -x

autoconf2.13 old-configure.in > old-configure
autoconf2.13 configure.in > configure
if [ "$WITH_SYSTEM_ICU" != yes ]; then
    ( cd ../../intl/icu/source; autoreconf -fi --verbose )
fi
