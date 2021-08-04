import React, {useState, useEffect} from 'react'
import axios from 'axios';
import LogEntries from './logEntries';




export default function ScheduleCards({setCardSch}) {
   const [schedules, setSchedules] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [logRecord, setLogRecord] = useState(false);
   const [taskUId, setTaskUId]= useState(null);


   const handleCard = (taskId) => {
         let card = schedules.filter((i) => i.taskId === taskId).map((n)=>n.taskId);
         setCardSch(card);
    }

        const deleteSch = async (taskId) => {
       try {
            setLoading(true);
            const {data} = await axios.delete('/api/unretire', {taskId});
            console.log(data);
         }catch(err) {
            setError(err.message);
            setLoading(false);
         }
        }

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const {data} = await axios.get('/api/schedules');
            setLoading(false);
            setSchedules(data);
         }catch(err) {
            setError(err.message);
            setLoading(false);
         }
      }
      fetchData();
   },[])

    return (
       <>
       {loading ? (<p>Loading...</p>)
       :
       error ? (<p>{error}</p>)
       :(
        <div className='schedule-card-container'>
           <div className='sch-card-container'>
              {error && <p>{error.message}</p>}
              <ul>
                 {schedules.map((task) => {
                    const { taskId } = task;
                  return (
                  <li className='card-body-list' key={taskId} id={taskId} onClick={()=> handleCard(taskId)}>
                   <div className='card-body'>
                      <div className='title-card'>
                        <i onClick={()=> deleteSch(taskId)} className={`fa fa-times-circle fa-2x delete-icon`}></i>
                        <h3>{task.title}</h3>
                      </div>
                      <p>{task.description}</p>
                      <p>Time Box: {task.time}</p>
                      <div className='card-body-button'>
                         <button onClick={()=> {
                           setTaskUId(taskId);
                           setLogRecord(true)}
                           }>Retire</button>
                     </div> 
                   </div>
                  </li>

                 )})}
              </ul>
                  {logRecord && <LogEntries schedules={schedules} taskUId={taskUId} setLogRecord={setLogRecord}></LogEntries>}
           </div>
        </div>
       )
       }
       </>
    )
}
