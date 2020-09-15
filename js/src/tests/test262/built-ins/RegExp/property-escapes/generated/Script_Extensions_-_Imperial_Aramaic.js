// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Imperial_Aramaic`
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
    [0x010840, 0x010855],
    [0x010857, 0x01085F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Imperial_Aramaic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Imperial_Aramaic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Armi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Armi}"
);
testPropertyEscapes(
  /^\p{scx=Imperial_Aramaic}+$/u,
  matchSymbols,
  "\\p{scx=Imperial_Aramaic}"
);
testPropertyEscapes(
  /^\p{scx=Armi}+$/u,
  matchSymbols,
  "\\p{scx=Armi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x010856
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01083F],
    [0x010860, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Imperial_Aramaic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Imperial_Aramaic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Armi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Armi}"
);
testPropertyEscapes(
  /^\P{scx=Imperial_Aramaic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Imperial_Aramaic}"
);
testPropertyEscapes(
  /^\P{scx=Armi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Armi}"
);

reportCompare(0, 0);
