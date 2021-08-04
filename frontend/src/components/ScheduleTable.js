import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export default function ScheduleTable({cardSch}) {
   const [ schedual, setSchedual] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [davidRecord, setDavidRecord] = useState(false);
   const [peterRecord, setPeterRecord] = useState(false);
   const [noahRecord, setNoahRecord] = useState(false);
   const [jhonRecord, setJhonRecord] = useState(false);
   const myRef = useRef(null); 
   const myRef2 = useRef(null); 
   const myRef3 = useRef(null); 
   const myRef4 = useRef(null); 

    useEffect(() => {
        const fetchData = async () => {
         try {
            setLoading(true);
            const {data} = await axios.get('/api/schedulesLog');
            setSchedual(data);
            setLoading(false);
         }catch(err) {
            setError(err.message);
            setLoading(false);
         }
      }
        fetchData();
      const jhonTable = () => {
        let  schJhon = myRef.current.children;
        if(cardSch !== null){
            for(let i = 0; i < schJhon.length; i++){
                if(schJhon[i].id === cardSch[0]){
                    setJhonRecord(true);
                    schJhon[i].className= 'active';
                }
            }
    }
   }
    const peterTable = () => {
        let  schPeter = myRef2.current.children;
        if(cardSch !== null){
            for(let i = 0; i < schPeter.length; i++){
                if(schPeter[i].id === cardSch[0]){
                    setPeterRecord(true);
                    schPeter[i].className= 'active';
                }
            }
    }
   }
     const noahTable = () => {
        let  schNoah = myRef3.current.children;
        if(cardSch !== null){
            for(let i = 0; i < schNoah.length; i++){
                if(schNoah[i].id === cardSch[0]){
                    setNoahRecord(true)
                    schNoah[i].className= 'active';
                }
            }
    }
   }
    const davidTable = () => {
        let  schDavid = myRef4.current.children;
        if(cardSch !== null){
            for(let i = 0; i < schDavid.length; i++){
                if(schDavid[i].id === cardSch[0]){
                    schDavid[i].className= 'active';
                    setDavidRecord(true);
                }

            }
    }
   }
  jhonTable();
  peterTable();
  noahTable();
  davidTable();
    }, [cardSch]);


    return (
        <div className='card-list-cont'>
           <div>
               <h4>Jhon</h4>
                <ul className='table-list-record' ref={myRef}>
                {schedual.filter((s) => s.name === 'Jhon').map((tsk) =>(
                    <li key={tsk.taskId} id={tsk.taskId}>
                       {!jhonRecord ? (<p>Schedule ID:{tsk.taskId}</p>)
                        :
                         (
                           <>
                            <h3>{tsk.title}</h3>
                            <p>Status: {tsk.isDone ?<em>complete <i className="fa fa-check-circle fa-2x myIcon"></i></em>: <em>Incomplete</em>}</p>
                           </>
                         )
                        }
                   </li>
                ))
                }  
               </ul> 
           </div>
           <div>
               <h4>Peter</h4>
               <ul className='table-list-record' ref={myRef2}>
                {schedual.filter((s) => s.name === 'Peter').map((tsk) =>(
                    <li key={tsk.taskId} id={tsk.taskId}>
                       {!peterRecord ? (<p>Schedule ID:{tsk.taskId}</p>)
                        :
                         (
                           <>
                            <h3>{tsk.title}</h3>
                            <p>Status: {tsk.isDone ?<em>complete <i className="fa fa-check-circle fa-2x myIcon"></i></em>: <em>Incomplete</em>}</p>
                           </>
                         )
                        }
                   </li>
                ))
                }  
               </ul>
           </div>
           <div>
               <h4>Noah</h4>
               <ul className='table-list-record' ref={myRef3}>
                {schedual.filter((s) => s.name === 'Noah').map((tsk) =>(
                    <li key={tsk.taskId} id={tsk.taskId}>
                       {!noahRecord ? (<p>Schedule ID:{tsk.taskId}</p>)
                        :
                         (
                           <>
                            <h3>{tsk.title}</h3>
                            <p>Status: {tsk.isDone ?<em>complete <i className="fa fa-check-circle fa-2x myIcon"></i></em>: <em>Incomplete</em>}</p>
                           </>
                         )
                        }
                   </li>
                ))
                }  
               </ul>
           </div>
           <div>
               <h4>David</h4>
               <ul className='table-list-record' ref={myRef4}>
                {schedual.filter((s) => s.name === 'David').map((tsk) =>(
                    <li key={tsk.taskId} id={tsk.taskId}>
                        {!davidRecord ? (<p>Schedule ID:{tsk.taskId}</p>)
                        :
                         (
                           <>
                            <h3>{tsk.title}</h3>
                            <p>Status: {tsk.isDone ?<em>complete <i className="fa fa-check-circle fa-2x myIcon"></i></em>: <em>Incomplete</em>}</p>
                           </>
                         )
                        }
                   </li>
                ))
                }  
               </ul> 
           </div>
        </div>
    )
}
