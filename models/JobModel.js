import mongoose from 'mongoose';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
const JobSchema = new mongoose.Schema(
  {
    dateService: String,
    serviceDu: String,
    nomCapitaine: String,
    nomCapitaineRadio: String,
    agentDuParcking: String,
    nomHotesse1: String,
    hotesseRadio1: String,
    nomHotesse2: String,
    hotesseRadio2: String,
    nomHotesse3: String,
    hotesseRadio3: String,
    Observation: String,
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
