const Point = require('../models/points.model');
const User = require('../models/user.model');
exports.addPoint = async (uid, task, points) => {
    try {
        const newPoints = new Point({
            uid,
            task,
            points
        });
        const savePoints = await newPoints.save();
        const updateUserPoint = await User.findOneAndUpdate({ uid }, { $inc : { points: points }})
        return savePoints;
    }
    catch(err) {
        console.log(err);
        return false;
    }
}