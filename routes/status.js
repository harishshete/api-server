var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

router.get('/health/live', function(req, res, next) {
    res.status(200).json({
        status: 'ok',
        check: 'liveness',
        timestamp: new Date().toISOString()
    });
});

router.get('/health/ready', function(req, res, next) {
    // Mongoose readyState: 1 means connected.
    if (mongoose.connection.readyState === 1) {
        return res.status(200).json({
            status: 'ok',
            check: 'readiness',
            db: 'connected',
            timestamp: new Date().toISOString()
        });
    }

    return res.status(503).json({
        status: 'error',
        check: 'readiness',
        db: 'not-connected',
        timestamp: new Date().toISOString()
    });
});

router.get('/', function(req, res, next) {
    res.status(200).json({
        message : "DocPulse API is up and running!"
    })
//  res.render('index', { title: 'Express' });
});

module.exports = router;