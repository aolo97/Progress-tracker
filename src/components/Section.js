import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

const DayLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  font-weight: ${({ isToday }) => (isToday ? 'bold' : 'normal')};
  background-color: ${({ isToday }) => (isToday ? '#ADD8E6' : 'transparent')};
  border-right: 3px solid lightgrey;
  border-radius: ${({ isToday }) => (isToday ? '7px 0 0 7px' : '0')};
`;

const ProgressWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const Section = ({ text, progress, color, isToday }) => (
  <StyledSection>
    <DayLabel isToday={isToday}>{text}</DayLabel>
    <ProgressWrapper>
      <ProgressBar progress={progress} color={color} />
    </ProgressWrapper>
  </StyledSection>
);

export default Section;