radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 125)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 125)
    } else if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 30)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 30)
    } else if (receivedNumber == 3) {
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 100)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    } else if (receivedNumber == 4) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 50)
    } else {
        motor.motorStopAll()
    }
})
radio.setGroup(729)
