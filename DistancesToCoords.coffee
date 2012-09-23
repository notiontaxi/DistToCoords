class Converter


  constructor:(@points = [])->
    @precision = 1.0 ## should be between 0.1 and 1.0

  getPointArray: (@distances) ->
    ## first point is at (0,0)
    @points[0] = new Point(0,0)
    ## second point is on the x-axis - position is distance to point 0
    @points[1] = new Point(@distances[0][1],0) 
    ## find locations from all other points
    @findLocation eachPoint, _i for eachPoint in @distances when _i > 1  
    @points  


  findLocation: (point, i) ->
    ## radius == distance from reference point #1
    radius = @distances[i-2][i] ## 5
    circle = new Circle(new Point(@points[i-2].x, @points[i-2].y), radius)
    console.log circle
    ##console.log(circle)
    circle.setToNextPixel() until @coordinateFound(circle, point, i) or circle.currentAngle > Math.PI*2

    
  coordinateFound: (circle, point, i) -> 
    distance1 = circle.currentSpherePosition.distanceTo(@points[i-1]) 
    distance_1_OK = (distance1 - @distances[i][i-1]) < @precision
    ##console.log @points[i-2]
    if i > 2
      distance2 = circle.currentSpherePosition.distanceTo(@points[i-3])
      distance_2_OK = (distance2 - @distances[i][i-3]) < @precision
      ##console.log circle.currentSpherePosition
      ##console.log distance1
      ##console.log @points 
    else
      distance_2_OK = true
    
    positionFound = distance_1_OK and distance_2_OK    
    ##console.log i
    
    @points[i] = circle.currentSpherePosition if positionFound 
    positionFound

window.Converter = Converter;