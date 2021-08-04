import React, {useState} from 'react';
import Header from './components/header';
import ScheduleCards from './components/ScheduleCards';
import ScheduleTable from './components/ScheduleTable';
import './App.css';

function App() {
  const [cardSch, setCardSch] = useState(null);
  console.log(cardSch);
  return (
    <div className="grid-container">
      <header className="header">
        <Header></Header>
      </header>
      <div className='main'>
      <div className='card-list'>
          <ScheduleCards setCardSch={setCardSch}></ScheduleCards>
      </div>
      <div className='schedule-table'>
          <ScheduleTable cardSch={cardSch}></ScheduleTable>
      </div>
      </div>
      <footer className='footer'>
          This is footer area!
      </footer>
    </div>
  );
}

export default App;
