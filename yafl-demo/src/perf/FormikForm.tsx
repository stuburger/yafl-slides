import { Field, FieldArray, Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"
import TextInput from "./formik-stuff/TextInput"
import { Person } from "./data"

interface Props {
  data: { people: Person[] }
}

const schema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required(),
      age: Yup.string()
        .min(5)
        .required()
    })
  )
})

class FormikForm extends React.Component<Props> {
  onSubmit = (values: any) => {
    // tslint:disable-next-line:no-console
    console.log(values)
  }

  render() {
    return (
      <Formik
        initialValues={this.props.data}
        validationSchema={schema}
        validateOnBlur={true}
        onSubmit={this.onSubmit}
        render={({ values, errors }) => (
          <FieldArray
            name="people"
            render={arrayHelpers => (
              <div>
                {values.people.map((friend: Person, index: number) => (
                  <div key={index}>
                    <Field
                      name={`people.${index}.name`}
                      component={TextInput}
                      label="Name"
                    />
                    <Field
                      label="Age"
                      type="number"
                      component={TextInput}
                      name={`people.${index}.age`}
                    />
                  </div>
                ))}
              </div>
            )}
          />
        )}
      />
    )
  }
}

export default FormikForm
