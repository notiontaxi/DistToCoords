class TestDistancesToCoords

  distances = [
    [  0,  25,   20,  42,   40]
    [ 25,  0,    32,  30.4, 47]
    [ 20,  32,   0,   32,   20]
    [ 42,  30.4, 32,  0,    32]
    [ 40,  47,   20,  32,   0]
  ]

  converter = new Converter()
  testArray = converter.getPointArray(distances)

  console.log testArray