const { Captians } = require("../models")
const db = require("../models")
const logger = require("../logger");

module.exports.getAllCaptian = async (req, res) => {
    try {
        const captianToBeHired = await Captians.findAll({
            include: [{
                model: db.Booking
            }]
        })
        let captiansArray = [];
        captianToBeHired.forEach(element => {
            const bookingArray = [];
            element.Bookings.forEach((booking) => {
                bookingArray.push({
                    bookedby: booking.bookedby,
                    sourceDestination: booking.sourceDestination,
                    startedAt: booking.startedAt,
                    captianId: booking.captianId
                })
            })
            captiansArray.push({
                firstName: element.firstName,
                lastName: element.lastName,
                bookings: bookingArray.length ? bookingArray : "not booked yet",
                captianLocation: element.captianLocation
            })
        });
        return res.status(200).json({ message: "ok", data: captiansArray });
    } catch (error) {
        logger.error(`internal server error`)
        return res.status(400).json({ message: "failed" });
    }
};

module.exports.hireCaptian = async (req, res) => {
    try {
        const captiansCanBeHired = [];
        const captiansAvailable = await Captians.findAll({
            where: {
                isBooked: false
            }
        })
        captiansAvailable.forEach(captians => {
            captiansCanBeHired.push({
                firstName: captians.firstName,
                lastName: captians.lastName,
                captianLocation: captians.captianLocation
            })
        })
        return res.status(200).json({ message: "ok", data: captiansCanBeHired });
    } catch (error) {
        logger.error(`internal server error`)
        return res.status(400).json({ message: "failed" });
    }
}