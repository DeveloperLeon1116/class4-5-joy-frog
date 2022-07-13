joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_UP, function () {
    radio.sendNumber(1)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_X, function () {
    radio.sendNumber(5)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_RIGHT, function () {
    radio.sendNumber(4)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_B, function () {
    radio.sendNumber(8)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_LEFT, function () {
    radio.sendNumber(3)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_SPACE, function () {
    radio.sendNumber(0)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_A, function () {
    radio.sendNumber(7)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_DOWN, function () {
    radio.sendNumber(2)
})
joyfrog.on_btn_pressed(joyfrog.JoyBtns.BTN_Y, function () {
    radio.sendNumber(6)
})
joyfrog.joyfrog_init()
radio.setGroup(255)
basic.showIcon(IconNames.Heart)
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    if (joyfrog.joystick_value(joyfrog.JoyDirection.Y) == 0 && joyfrog.joystick_value(joyfrog.JoyDirection.X) == 0) {
        radio.sendNumber(0)
    }
})
