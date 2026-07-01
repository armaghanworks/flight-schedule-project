import React, { useState } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar from 'bpk-component-calendar';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const formatDate = (date) => date.toLocaleDateString();
const formatDateFull = (date) => date.toLocaleDateString('en-US', { 
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
});
const formatMonth = (date) => date.toLocaleString('en-US', { 
  month: 'long', year: 'numeric' 
});

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0 },
  { name: 'Monday', nameAbbr: 'Mon', index: 1 },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2 },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3 },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4 },
  { name: 'Friday', nameAbbr: 'Fri', index: 5 },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6 },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkCalendar
          id="calendar"
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          formatDate={formatDate}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          daysOfWeek={daysOfWeek}
          date={selectedDate}
          onDateSelect={setSelectedDate}
          weekStartsOn={1}
        />
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;