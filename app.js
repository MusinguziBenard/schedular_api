const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
app.use(bodyParser.json());

db.sequelize.sync()
    .then(() => {
        console.log('Database connected and synchronized');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use('/schedule', scheduleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});