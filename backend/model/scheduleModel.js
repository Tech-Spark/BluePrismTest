import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    taskId: {type: Number, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    isDone: {type:Boolean, default: false}
}, {
    timestamps: true,
});

const User = mongoose.model('Schedule', scheduleSchema);

export default User;