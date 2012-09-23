class Point

  constructor: (@x = 0, @y = 0) ->

  distanceTo: (otherPoint) ->
    deltaX = otherPoint.x - @x
    deltaY = otherPoint.y - @y
    ##console.log otherPoint
    dist = (Math.round (Math.sqrt(deltaX*deltaX + deltaY*deltaY) * 10))/10
    console.log dist
    dist

window.Point = Point