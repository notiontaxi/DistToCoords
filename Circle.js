(function() {
  var Circle;

  Circle = (function() {

    function Circle(pivot, radius) {
      this.pivot = pivot != null ? pivot : new Point(0, 0);
      this.radius = radius != null ? radius : 1;
      this.currentSpherePosition = new Point(this.radius, 0);
      this.currentSpherePosition.x += this.pivot.x;
      this.currentSpherePosition.y += this.pivot.y;
      this.currentAngle = 0.0;
    }

    Circle.prototype.setToNextPixel = function() {
      this.currentAngle += 0.01;
      this.currentSpherePosition.x = Math.round(this.pivot.x + this.radius * Math.cos(this.currentAngle));
      return this.currentSpherePosition.y = Math.round(this.pivot.y + this.radius * Math.sin(this.currentAngle));
    };

    return Circle;

  })();

  window.Circle = Circle;

}).call(this);
