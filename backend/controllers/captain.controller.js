const captainModel = require('../models/captain.model');
const captainService = require('../service/captain.service');
const { validationResult } = require('express-validator');
const blacklistModel = require('../models/blacklistToken.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const iscaptainexist = await captainModel.findOne({ email });
    if (iscaptainexist) {
        return res.status(400).json({ message: 'Captain already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const captain = await captainService.createCaptain({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        }
    });
    
    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });
    
    res.status(201).json({
        message: 'Captain created successfully',
        captain,
        token
    });
}

module.exports.loginCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(400).json({ message: 'Captain does not exist' });
    }
    const isMatch = await bcrypt.compare(password, captain.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });
    res.cookie("token" ,token)
    res.status(200).json({
        message: 'Captain logged in successfully',
        captain,
        token
    });
}

module.exports.getCaptainProfile = async (req, res, next) => {
     res.status(200).json({
        message: 'Captain profile fetched successfully',
        captain: req.captain
    });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }
    const blacklistToken = await blacklistModel.create({
        token: token
    })
    res.clearCookie("token");
    res.status(200).json({
        message: 'Captain logged out successfully'
    });
}

