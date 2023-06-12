input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 8 == input.temperature() > 30) {
        basic.showNumber(input.temperature())
        basic.showString("T F")
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(input.temperature())
        basic.showString("T OK")
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200 == pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showString("H F")
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showString("H OK")
        basic.showIcon(IconNames.Yes)
    }
})
