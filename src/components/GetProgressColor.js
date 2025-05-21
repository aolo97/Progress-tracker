const GetProgressColor = (hour) => {
  if (hour >= 0 && hour <= 6) return '#FF6B6B';      
  if (hour >= 7 && hour <= 12) return '#FFFF6B';     
  if (hour >= 13 && hour <= 18) return '#FFC06B';    
  if (hour >= 19 && hour <= 23) return '#6BFF6B';    
  return '#CCCCCC';                                  
};

export default GetProgressColor;
