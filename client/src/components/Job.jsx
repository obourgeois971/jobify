import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  dateService = '',
  serviceDu = '',
  nomCapitaine = '',
  agentDuParcking = '',
  nomHotesse1 = '',
  hotesseRadio1 = '',
  nomHotesse2 = '',
  hotesseRadio2 = '',
  nomHotesse3 = '',
  hotesseRadio3 = '',
  Observation = '',

  position = '',
  company = '',
  jobLocation = '',
  jobType = '',
  createdAt = '',
  jobStatus = '',
}) => {
  const dateServiceDisplay = day(dateService).format('MMM Do, YYYY');
  const date = day(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>Service du {dateServiceDisplay}</h5>
          <p>{serviceDu}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo
            icon={<FaLocationArrow />}
            titre='Capitaine: '
            text={nomCapitaine}
          />
          <JobInfo
            icon={<FaLocationArrow />}
            titre='Agent du parcking: '
            text={agentDuParcking}
          />
          <JobInfo
            icon={<FaLocationArrow />}
            titre='Hotesse 1: '
            text={nomHotesse1}
          />
          <JobInfo
            icon={<FaLocationArrow />}
            titre='Hotesse 2: '
            text={nomHotesse2}
          />
          <JobInfo
            icon={<FaLocationArrow />}
            titre='Hotesse 3: '
            text={nomHotesse3}
          />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={Observation} />
          {/* <div className={`status ${jobStatus}`}>{jobStatus}</div> */}
        </div>
        <footer className='actions'>
          <Link to={`../edit-job/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`../delete-job/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
