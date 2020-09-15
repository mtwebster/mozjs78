// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If the property doesn't have the DontDelete attribute, remove the property
es5id: 11.4.1_A3.3_T1
description: Checking declared variable
flags: [noStrict]
---*/

//CHECK#1
try {
  x = 1;
  delete x;
  x;
  $ERROR('#1: x = 1; delete x; x is not exist');
} catch (e) {
  if (e instanceof ReferenceError !== true) {
    $ERROR('#1: x = 1; delete x; x is not exist');
  }
}

reportCompare(0, 0);
