import styled from 'styled-components';

const Bar = styled.div`
  background-color: ${({ color }) => color};
  height: 100%;
  width: ${({ progress }) => progress};
  border-radius: 0 7px 7px 0;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ progress, color }) => {
  return <Bar progress={progress} color={color} />;
};

export default ProgressBar;