radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    adjNum += 1
    basic.showNumber(adjNum)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(adjNum)
})
input.onButtonPressed(Button.B, function () {
    adjNum += -1
    basic.showNumber(adjNum)
})
let adjNum = 0
radio.setGroup(88)
adjNum = 0
basic.showIcon(IconNames.Happy)
