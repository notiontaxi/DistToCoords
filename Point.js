(function() {
  var Point;

  Point = (function() {

    function Point(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
    }

    Point.prototype.distanceTo = function(otherPoint) {
      var deltaX, deltaY, dist;
      deltaX = otherPoint.x - this.x;
      deltaY = otherPoint.y - this.y;
      return dist = (Math.round(Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 10)) / 10;
    };

    return Point;

  })();

  window.Point = Point;

}).call(this);
