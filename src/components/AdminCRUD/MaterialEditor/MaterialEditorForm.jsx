import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    if (!values.title && !values.link) {
      toast.error('🦇 please fill in the form fields!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      actions.resetForm();
      return;
    }
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        console.log(isSubmitting);
        return (
          <Form>
            <label>
              <Field name="title" type="text" />
              <span>Title</span>
            </label>
            <label>
              <Field name="link" type="text" />
              <span>Link</span>
            </label>

            <button type="submit" disabled={isSubmitting}>
              Add Material
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
