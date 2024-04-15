import Wrapper from '../assets/wrappers/JobInfo';

const JobInfo = ({ icon, titre = '', text }) => {
  return (
    <Wrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>
        {' '}
        {titre} {text}
      </span>
    </Wrapper>
  );
};
export default JobInfo;
