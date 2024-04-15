const FormRowTextArea = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-textarea'
        defaultValue={defaultValue || ''}
        onChange={onChange}
        rows='5'
        cols='330'
        required
      />
    </div>
  );
};
export default FormRowTextArea;
