import * as React from "react"
import { createFormContext } from "yafl"
import TextInput, { InputProps } from "./yafl-stuff/TextInput"
import { min, required } from "./yafl-stuff/validators"
import { Person } from "./data"

interface Props {
  data: { people: Person[] }
}

const { Field, Form, Repeat, Section } = createFormContext<{
  people: Person[]
}>()

const isNumber = min(5)

class YaflForm extends React.Component<Props, any> {
  state = { errors: {} }
  onSubmit = (values: any) => {
    // tslint:disable-next-line:no-console
    console.log(values)
  }

  render() {
    return (
      <React.StrictMode>
        <Form initialValue={this.props.data} onSubmit={this.onSubmit}>
          <Repeat<Person> name="people">
            {people => {
              return people.map((person, i) => (
                <Section key={i} name={i}>
                  <Field<string>
                    name="name"
                    label="Name"
                    placeholder="Name"
                    component={TextInput}
                    validate={required}
                  />
                  <Field<number, InputProps>
                    name="age"
                    label="Age"
                    type="number"
                    placeholder="number"
                    component={TextInput}
                    validate={[required, isNumber]}
                  />
                </Section>
              ))
            }}
          </Repeat>
        </Form>
      </React.StrictMode>
    )
  }
}

export default YaflForm
