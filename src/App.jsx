import React from 'react';
import './App.css';
import Friends from './components/Friends';

function App() {
  return (
    <>
      <Friends name="Sirojbek" age="32" job="Usta duradgor" rasm="siroj" />
      <Friends name="Dilshodbek" age="30" job="Tadbirkor" rasm="dilshod" />
      <Friends name="Oybek" age="28" job="Taxi" rasm="oybek" />
      <Friends name="Sadulla" age="31" job="O'qituvchi" rasm="sadulla" />
      <Friends name="Abdulla" age="33" job="Oshpaz" rasm="abdulla" />
    </>
  );
}

export default App;
