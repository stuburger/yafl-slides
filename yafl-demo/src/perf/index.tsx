import * as React from "react"
import { data } from "./data"
import YaflForm from "./YaflForm"
import FormikForm from "./FormikForm"

class FormCompare extends React.Component<any> {
  render() {
    return (
      <div>
        <div className="col-3">
          <h2>YAFL</h2>
          <YaflForm data={data} />
        </div>
        <div className="col-3">
          <h2>Formik</h2>
          <FormikForm data={data} />
        </div>
      </div>
    )
  }
}

export default FormCompare
