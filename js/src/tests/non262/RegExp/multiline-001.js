/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:          RegExp/multiline-001.js
 *  ECMA Section:
 *  Description:        Based on ECMA 2 Draft 7 February 1999
 *
 *  Date:               19 February 1999
 */

var SECTION = "RegExp/multiline-001";
var TITLE   = "RegExp: multiline flag";
var BUGNUMBER="343901";

printBugNumber(BUGNUMBER);

var woodpeckers = "ivory-billed\ndowny\nhairy\nacorn\nyellow-bellied sapsucker\n" +
  "northern flicker\npileated\n";

AddRegExpCases( /.*[y]$/m, woodpeckers, woodpeckers.indexOf("downy"), ["downy"] );

AddRegExpCases( /.*[d]$/m, woodpeckers, woodpeckers.indexOf("ivory-billed"), ["ivory-billed"] );

test();


function AddRegExpCases
( regexp, pattern, index, matches_array ) {

  // prevent a runtime error

  if ( regexp.exec(pattern) == null || matches_array == null ) {
    AddTestCase(
      regexp + ".exec(" + pattern +")",
      matches_array,
      regexp.exec(pattern) );

    return;
  }

  AddTestCase(
    regexp.toString() + ".exec(" + pattern +").length",
    matches_array.length,
    regexp.exec(pattern).length );

  AddTestCase(
    regexp.toString() + ".exec(" + pattern +").index",
    index,
    regexp.exec(pattern).index );

  AddTestCase(
    regexp + ".exec(" + pattern +").input",
    pattern,
    regexp.exec(pattern).input );


  for ( var matches = 0; matches < matches_array.length; matches++ ) {
    AddTestCase(
      regexp + ".exec(" + pattern +")[" + matches +"]",
      matches_array[matches],
      regexp.exec(pattern)[matches] );
  }
}
