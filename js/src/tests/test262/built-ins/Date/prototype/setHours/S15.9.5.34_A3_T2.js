// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setHours property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.sethours
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.setHours.length !== true) {
  $ERROR('#1: The Date.prototype.setHours.length property does not have the attributes DontDelete');
}

if (Date.prototype.setHours.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.setHours.length property does not have the attributes DontDelete');
}

reportCompare(0, 0);
