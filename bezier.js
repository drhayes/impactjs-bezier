ig.module(
  'game.system.bezier'
)
.defines(function() {
  'use strict';

  // With the help of: http://www.moshplant.com/direct-or/bezier/math.html
  // Code totally stolen from processing.js.

  // 0 <= t <= 1
  window.bezierPoint = function bezierPoint(a,b,c,d,t) {
    return (1-t)*(1-t)*(1-t)*a+3*(1-t)*(1-t)*t*b+3*(1-t)*t*t*c+t*t*t*d;
  }

  window.bezierTangent = function bezierTangent(a,b,c,d,t) {
    return (3*t*t*(-a+3*b-3*c+d)+6*t*(a-2*b+c)+3*(-a+b));
  }
});
