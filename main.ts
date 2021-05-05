/**
 * https://www.instructables.com/Microbit-Compass/
 */
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.A, function () {
    retning += -1
    if (retning < 0) {
        retning = 7
    }
})
input.onButtonPressed(Button.AB, function () {
    text_list = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    basic.clearScreen()
    basic.showString("" + (text_list[retning]))
})
input.onButtonPressed(Button.B, function () {
    retning += 1
    if (retning > 7) {
        retning = 0
    }
})
let text_list: string[] = []
let retning = 0
retning = 0
basic.showString("kompas")
/**
 * først afgør hvilke grad den ligger under derefter vurder hvilken retning den vil pege mod
 */
basic.forever(function () {
    if (input.compassHeading() >= 23 && input.compassHeading() < 68) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.West)
        }
    } else if (input.compassHeading() >= 68 && input.compassHeading() < 113) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.SouthWest)
        }
    } else if (input.compassHeading() >= 113 && input.compassHeading() < 158) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.South)
        }
    } else if (input.compassHeading() >= 158 && input.compassHeading() < 203) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.SouthEast)
        }
    } else if (input.compassHeading() >= 203 && input.compassHeading() < 248) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.East)
        }
    } else if (input.compassHeading() >= 248 && input.compassHeading() < 293) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.NorthEast)
        }
    } else if (input.compassHeading() >= 293 && input.compassHeading() < 338) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.North)
        }
    } else if (input.compassHeading() >= 0 && input.compassHeading() < 23 || input.compassHeading() <= 338 && input.compassHeading() <= 360) {
        if (retning == 0) {
            basic.showArrow(ArrowNames.North)
        } else if (retning == 1) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (retning == 2) {
            basic.showArrow(ArrowNames.East)
        } else if (retning == 3) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (retning == 4) {
            basic.showArrow(ArrowNames.South)
        } else if (retning == 5) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (retning == 6) {
            basic.showArrow(ArrowNames.West)
        } else if (retning == 7) {
            basic.showArrow(ArrowNames.NorthWest)
        }
    }
})
