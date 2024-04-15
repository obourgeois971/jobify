import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import {
  JOB_MATIN_SOIR,
  JOB_OUI_NON,
  JOB_STATUS,
  JOB_TYPE,
} from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import FormRowTextArea from '../components/FormRowTextArea';

const singleJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-jobs');
    }
  };
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/jobs/${params.id}`, data);
      queryClient.invalidateQueries(['jobs']);

      toast.success('Job edited successfully');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditJob = () => {
  const id = useLoaderData();

  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>edit job</h4>
        <div className='form-title'>
          <fieldset>
            <br />
            <br />
            <div className='form-center'>
              <FormRow
                name='dateService'
                type='date'
                defaultValue={job.dateService}
              />

              <FormRowSelect
                name='serviceDu'
                labelText='Service du:'
                defaultValue=''
                list={Object.values(JOB_MATIN_SOIR)}
              />
            </div>
            <br />
            <br />
          </fieldset>
          <br />
          <fieldset>
            <br />
            <br />
            <div className='form-center'>
              <FormRow
                type='text'
                name='nomCapitaine'
                defaultValue={job.nomCapitaine}
              />

              <FormRowSelect
                name='nomCapitaineRadio'
                labelText='A eu une radio!'
                defaultValue=''
                list={Object.values(JOB_OUI_NON)}
              />
            </div>
            <br />
            <br />
          </fieldset>

          <br />
          <fieldset>
            <br />
            <br />

            <div className='form-center'>
              <FormRow
                type='text'
                name='agentDuParcking'
                defaultValue={job.agentDuParcking}
              />

              <FormRowSelect
                name='agentDuParcking'
                labelText='A eu une radio!'
                defaultValue=''
                list={Object.values(JOB_OUI_NON)}
              />
            </div>
            <br />
            <br />
          </fieldset>
          <br />

          <fieldset>
            <br />
            <br />

            <div className='form-center'>
              <FormRow
                type='text'
                name='nomHotesse1'
                defaultValue={job.nomHotesse1}
              />

              <FormRowSelect
                name='hotesseRadio1'
                labelText='A eu une radio!'
                defaultValue=''
                list={Object.values(JOB_OUI_NON)}
              />
            </div>
            <br />
            <br />
          </fieldset>

          <br />

          <fieldset>
            <br />
            <br />

            <div className='form-center'>
              <FormRow
                type='text'
                name='nomHotesse2'
                defaultValue={job.nomHotesse2}
              />

              <FormRowSelect
                name='hotesseRadio2'
                labelText='A eu une radio!'
                defaultValue=''
                list={Object.values(JOB_OUI_NON)}
              />
            </div>

            <br />
            <br />
          </fieldset>

          <br />

          <fieldset>
            <br />
            <br />

            <div className='form-center'>
              <FormRow
                type='text'
                name='nomHotesse3'
                defaultValue={job.nomHotesse3}
              />

              <FormRowSelect
                name='hotesseRadio'
                labelText='A eu une radio!'
                defaultValue=''
                list={Object.values(JOB_OUI_NON)}
              />
            </div>

            <br />
            <br />
          </fieldset>

          <br />

          <fieldset>
            <br />
            <br />

            <div className='form-center'>
              <FormRowTextArea
                type='textarea'
                name='Observation'
                defaultValue={job.Observation}
              />
            </div>

            <br />
            <br />
          </fieldset>

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
