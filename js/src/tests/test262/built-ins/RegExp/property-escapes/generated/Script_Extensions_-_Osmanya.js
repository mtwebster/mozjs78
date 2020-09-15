// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Osmanya`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010480, 0x01049D],
    [0x0104A0, 0x0104A9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Osmanya}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Osmanya}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Osma}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Osma}"
);
testPropertyEscapes(
  /^\p{scx=Osmanya}+$/u,
  matchSymbols,
  "\\p{scx=Osmanya}"
);
testPropertyEscapes(
  /^\p{scx=Osma}+$/u,
  matchSymbols,
  "\\p{scx=Osma}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01047F],
    [0x01049E, 0x01049F],
    [0x0104AA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Osmanya}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Osmanya}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Osma}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Osma}"
);
testPropertyEscapes(
  /^\P{scx=Osmanya}+$/u,
  nonMatchSymbols,
  "\\P{scx=Osmanya}"
);
testPropertyEscapes(
  /^\P{scx=Osma}+$/u,
  nonMatchSymbols,
  "\\P{scx=Osma}"
);

reportCompare(0, 0);
