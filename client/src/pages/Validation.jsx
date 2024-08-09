import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const Validation = () => {
  return (
    <div>
      <div className="App">
      <h1>Formulario de Registro</h1>
      <Formik
        initialValues={{ email: 'inbioslab@gmail.com', password: '123456' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Formulario enviado', values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  )
}

export default Validation
