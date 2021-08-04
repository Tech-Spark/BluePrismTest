import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function LogEntries({schedules, taskUId, setLogRecord}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const card = schedules.filter((task) => task.taskId === taskUId);
    const [title, setTitle] = useState(card[0].title);
    const [taskId, setTaskId] = useState(card[0].taskId);
    const [name, setName] = useState('');
    const [description, setDescription] = useState(card[0].description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
         try {
            setLoading(true);
            const {data} = await axios.post('/api/retire', {title, taskId, name, description});
            console.log(data);
            setLoading(false);
            setLogRecord(false);
         }catch(err) {
            setError(err.message);
            setLoading(false);
         }
        }
        fetchData();
    }

    useEffect(()=>{

    }, []);
    
    return (
        <div className='form-log-record'>
            <form action="" onSubmit={handleSubmit} className='form-style'>
                {error && <p className='error-style'>{error}</p>}
                {loading && <p className='error-style'>loading...</p>}
                <div className='input-style'>
                    <label htmlFor="">Task Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='input-style'>
                    <label htmlFor="">Task ID</label>
                    <input type="text" onChange={(e)=>setTaskId(e.target.value)} value={taskId}/>
                </div>
                <div className='input-style'>
                    <label htmlFor="">Task given to</label>
                    <select value={name} onChange={(e)=>setName(e.target.value)}>
                        <option value="">{null}</option>
                        <option value='Jhon'>Jhon</option>
                        <option value='Peter'>Peter</option>
                        <option value='Noah'>Noah</option>
                        <option value='David'>David</option>
                    </select>
                </div>
                <div className='input-style'>
                    <label htmlFor="">Descriptions</label>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                </div>
                <div className='input-style style-btn'>
                    <button className='btn-save' type='submit'>Save</button>
                    <em className='btn-cancle' onClick={() => setLogRecord(false)}>Cancle</em>
                </div>
            </form>
        </div>
    )
}
