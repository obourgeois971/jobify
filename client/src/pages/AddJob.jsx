import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';

import { JOB_MATIN_SOIR, JOB_OUI_NON } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import FormRowTextArea from '../components/FormRowTextArea';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added successfully ');
      return redirect('all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Service</h4>

        <div className='form-row'>
          <fieldset>
            <br />
            <br />
            <div className='form-center'>
              <FormRow name='dateService' type='date' />

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
              <FormRow type='text' name='nomCapitaine' />

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
              <FormRow type='text' name='agentDuParcking' />

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
              <FormRow type='text' name='nomHotesse1' />

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
              <FormRow type='text' name='nomHotesse2' />

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
              <FormRow type='text' name='nomHotesse3' />

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
              <FormRowTextArea type='textarea' name='Observation' />
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
export default AddJob;
