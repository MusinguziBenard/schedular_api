const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.post('/exam', scheduleController.scheduleExam);
router.post('/quiz', scheduleController.scheduleQuiz);
router.post('/event', scheduleController.scheduleEvent);
router.post('/project', scheduleController.scheduleProject);
router.post('/availability/check', scheduleController.checkAvailability);
router.post('/conflict', scheduleController.resolveConflict);
router.put('/update', scheduleController.updateSchedule);
router.delete('/delete', scheduleController.deleteSchedule);
router.get('/upcoming', scheduleController.viewUpcomingSchedules);
router.get('/expired', scheduleController.viewExpiredSchedules);
router.post('/search', scheduleController.searchSchedules);

module.exports = router;