# impactjs-bezier

A drop-dead simple implementation of bezier curves for ImpactJS.

## Overview

To install, copy the file `bezier.js` into your `lib/game/system` directory.
Then reference from your `requires` like so:

    ig.module(
      'game.behaviors.bezierMovement'
    )
    .requires(
      'impact.impact',

      'game.behaviors.baseBehavior',
      'game.system.bezier'
    )
    .defines(function() {
      // ...
    });

## Usage

There are two functions, `bezierPoint` and `bezierTangent`. Each takes
five arguments:

  * The value of the start point.
  * The value of the first control point.
  * The value of the second control point.
  * The value of the end point.
  * The `t` value, between 0 and 1.

The functions will both return a number between the start and end point. To use
this in a 2d settings simply invoke the function twice, one for the x coordinate
and another time for the y coordinate.

## Credit

My initial version not present in this repo owes a great deal to [this great
article on bezier curves][bezier].

This code was entirely lifted [from the excellent processing.js][proccessing]
library. I used the functions `bezierPoint` and `bezierTanget`.

  [bezier]: http://www.moshplant.com/direct-or/bezier/math.html
  [processing]: https://github.com/processing-js/processing-js/blob/8dc803c0c29cf2aa99d734bc9cb5bb003a7966e8/src/Processing.js#L8281
