class Circle

  constructor:(@pivot = new Point(0,0), @radius = 1)->
    @currentSpherePosition = new Point(@radius,0)
    @currentSpherePosition.x += @pivot.x
    @currentSpherePosition.y += @pivot.y
    @currentAngle = 0.0

  setToNextPixel: ->
    ##console.log("x: #{@currentSpherePosition.x} y: #{@currentSpherePosition.y}")
    @currentAngle += 0.01 ## radiant
    @currentSpherePosition.x = Math.round(@pivot.x + @radius * Math.cos(@currentAngle))
    @currentSpherePosition.y = Math.round(@pivot.y + @radius * Math.sin(@currentAngle))

window.Circle = Circle