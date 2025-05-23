const getDayColor = (dayIndex, currentDayIndex) =>
  dayIndex < currentDayIndex ? '#6BFF6B' :
  dayIndex > currentDayIndex ? '#CCCCCC' :
  null;
  
const getHourColor = (hour) =>
  hour >= 0 && hour <= 6 ? '#FF6B6B' :
  hour >= 7 && hour <= 12 ? '#FFFF6B' :
  hour >= 13 && hour <= 18 ? '#FFC06B' :
  hour >= 19 && hour <= 23 ? '#6BFF6B' :
  '#CCCCCC';

const GetProgressColor = (hour, dayIndex, currentDayIndex) => {
  const dayColor = getDayColor(dayIndex, currentDayIndex);
  return dayColor !== null ? dayColor : getHourColor(hour);
};

export default GetProgressColor;
