module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        activity_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE
        },
        start_time: {
            type: DataTypes.STRING
        },
        end_time: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        proctor: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Schedule;
};