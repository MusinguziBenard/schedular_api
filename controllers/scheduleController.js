const db = require('../models');
const Schedule = db.Schedule;

const scheduleExam = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json({ message: 'Exam scheduled successfully', details: schedule });
    } catch (error) {
        res.status(400).json({ message: 'Error scheduling exam', error });
    }
};

const scheduleQuiz = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json({ message: 'Quiz scheduled successfully', details: schedule });
    } catch (error) {
        res.status(400).json({ message: 'Error scheduling quiz', error });
    }
};

const scheduleEvent = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json({ message: 'Event scheduled successfully', details: schedule });
    } catch (error) {
        res.status(400).json({ message: 'Error scheduling event', error });
    }
};

const scheduleProject = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json({ message: 'Project scheduled successfully', details: schedule });
    } catch (error) {
        res.status(400).json({ message: 'Error scheduling project', error });
    }
};

const checkAvailability = async (req, res) => {
    const { date, time, location } = req.body;
    try {
        const conflict = await Schedule.findOne({ where: { start_date: date, start_time: time, location } });
        if (conflict) {
            res.status(200).json({ message: 'Conflict found', conflict });
        } else {
            res.status(200).json({ message: 'No conflict, availability confirmed' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error checking availability', error });
    }
};

const resolveConflict = async (req, res) => {
    const { activity_id } = req.body;
    try {
        const conflict = await Schedule.findByPk(activity_id);
        if (conflict) {
            res.status(200).json({ message: 'Conflict resolved', conflict });
        } else {
            res.status(404).json({ message: 'Conflict not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error resolving conflict', error });
    }
};

const updateSchedule = async (req, res) => {
    const { activity_id, updates } = req.body;
    try {
        const schedule = await Schedule.findByPk(activity_id);
        if (schedule) {
            await schedule.update(updates);
            res.status(200).json({ message: 'Schedule updated successfully', schedule });
        } else {
            res.status(404).json({ message: 'Schedule not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating schedule', error });
    }
};

const deleteSchedule = async (req, res) => {
    const { activity_id } = req.body;
    try {
        const schedule = await Schedule.findByPk(activity_id);
        if (schedule) {
            await schedule.destroy();
            res.status(200).json({ message: 'Schedule deleted successfully' });
        } else {
            res.status(404).json({ message: 'Schedule not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error deleting schedule', error });
    }
};

const viewUpcomingSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll({
            where: { start_date: { [db.Sequelize.Op.gte]: new Date() } }
        });
        res.status(200).json({ schedules });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching upcoming schedules', error });
    }
};

const viewExpiredSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll({
            where: { end_date: { [db.Sequelize.Op.lte]: new Date() } }
        });
        res.status(200).json({ schedules });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching expired schedules', error });
    }
};

const searchSchedules = async (req, res) => {
    const { query } = req.body;
    try {
        const schedules = await Schedule.findAll({ where: query });
        res.status(200).json({ schedules });
    } catch (error) {
        res.status(400).json({ message: 'Error searching schedules', error });
    }
};

module.exports = {
    scheduleExam,
    scheduleQuiz,
    scheduleEvent,
    scheduleProject,
    checkAvailability,
    resolveConflict,
    updateSchedule,
    deleteSchedule,
    viewUpcomingSchedules,
    viewExpiredSchedules,
    searchSchedules
};