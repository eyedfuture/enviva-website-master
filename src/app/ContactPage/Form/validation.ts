import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  message: Yup.string().required(),
});

export default schema;
