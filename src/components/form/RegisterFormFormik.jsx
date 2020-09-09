import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

class RegisterFormFormik extends React.Component {
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <Formik
          initialValues={{
            firstName: 'John',
            lastName: 'Doe',
            email: 'jd@doe.com',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={RegisterSchema}
        >
          {({ errors, touched }) => (
            <Form>
              {/* {console.log(touched)} */}
              <label htmlFor="firstName">Firstname</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Firstname"
              />
              {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
              <br />

              <label htmlFor="lastName">Lastname</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Lastname"
              />
              {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
              <br />

              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="text" placeholder="Email" />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <br />

              <button type="submit">submit</button>
              <button type="reset">reset</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default RegisterFormFormik
