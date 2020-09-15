// |reftest| error:SyntaxError
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a syntax error if AsyncFunctionBody contains SuperProperty is true
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async(foo) => { super.prop };
