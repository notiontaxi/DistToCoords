(function() {
  var Converter;

  Converter = (function() {

    function Converter(points) {
      this.points = points != null ? points : [];
      this.precision = 1.0;
    }

    Converter.prototype.getPointArray = function(distances) {
      var eachPoint, _i, _len, _ref;
      this.distances = distances;
      this.points[0] = new Point(0, 0);
      this.points[1] = new Point(this.distances[0][1], 0);
      _ref = this.distances;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        eachPoint = _ref[_i];
        if (_i > 1) this.findLocation(eachPoint, _i);
      }
      return this.points;
    };

    Converter.prototype.findLocation = function(point, i) {
      var circle, radius, _results;
      radius = this.distances[i - 2][i];
      circle = new Circle(new Point(this.points[i - 2].x, this.points[i - 2].y), radius);
      console.log(circle);
      _results = [];
      while (!(this.coordinateFound(circle, point, i) || circle.currentAngle > Math.PI * 2)) {
        _results.push(circle.setToNextPixel());
      }
      return _results;
    };

    Converter.prototype.coordinateFound = function(circle, point, i) {
      var distance1, distance2, distance_1_OK, distance_2_OK, positionFound;
      distance1 = circle.currentSpherePosition.distanceTo(this.points[i - 1]);
      distance_1_OK = (distance1 - this.distances[i][i - 1]) < this.precision;
      if (i > 2) {
        distance2 = circle.currentSpherePosition.distanceTo(this.points[i - 3]);
        distance_2_OK = (distance2 - this.distances[i][i - 3]) < this.precision;
      } else {
        distance_2_OK = true;
      }
      positionFound = distance_1_OK && distance_2_OK;
      if (positionFound) this.points[i] = circle.currentSpherePosition;
      return positionFound;
    };

    return Converter;

  })();

  window.Converter = Converter;

}).call(this);
