import express from 'express';
import data from '../data.js';
import Schedule from '../model/scheduleModel.js';
import expressAsyncHandler from 'express-async-handler';


// import logRecord from '../dataLogRecord.js';
const userRouter = express.Router();

userRouter.get('/schedules', (req, res) => {
    res.send(data.schedul);
})

userRouter.get('/schedulesLog', expressAsyncHandler( async(req, res) => {
       const Task = await Schedule.find({});
       if(Task == ''){
           return  res.status(404).send({message: 'There is no schedule has been recorded'})
       }
        res.send(Task);
})
)

userRouter.post('/retire', expressAsyncHandler( async(req, res) => {    
    const {taskId, title, description, name} = req.body;
   const schedule = await Schedule.findOne({taskId:taskId});
   if(schedule){
       res.status(404).send({message:'already exist'});
   }else{
       const schedule = new Schedule({
                name :name,
                title: title,
                description: description,
                taskId:taskId,
                idDone: false
             });
             const newSchedule = await schedule.save();
             return res.send({message: 'schedule has been save successfully!'})
   }
}
))

export default  userRouter;