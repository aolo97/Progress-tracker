import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from './components/Section';
import getDayProgressColor from './components/GetProgressColor';

const Title = styled.h1`
  color: #b19cd9;
  margin-bottom: 20px;
  text-align: center;
`;

const Clock = styled.p`
  text-align: center;
  color: #666;
  margin-top: -10px;
  margin-bottom: 30px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
`;


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const currentDayIndex = (currentTime.getDay() + 6) % 7;
  const currentHour = currentTime.getHours();

  const weeklyProgressData = daysOfWeek.map((day, index) => {
    const isToday = index === currentDayIndex;
    const progress = isToday ? Math.floor((currentHour / 24) * 100) : index < currentDayIndex ? 100 : 0;
    const color = isToday || index < currentDayIndex ? getDayProgressColor(currentHour) : '#CCCCCC';

    return {
      id: index,
      text: day,
      progress: `${progress}%`,
      color,
      isToday,
    };
  });

  return (
    <>
      <Title>Weekly Progress Tracker</Title>
      <Clock>Current Time: {currentTime.toLocaleTimeString()}</Clock>
      <SectionsContainer>
        {weeklyProgressData.map((data) => (
          <Section key={data.id} {...data} />
        ))}
      </SectionsContainer>
    </>
  );
};

export default App;
