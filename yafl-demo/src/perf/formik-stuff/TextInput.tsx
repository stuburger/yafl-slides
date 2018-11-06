import * as React from "react"
import { getIn, FieldProps } from "formik"
import classnames from "classnames"

interface Props extends FieldProps<any> {
  label: string
  type: string
  placeholder: string
}

const TextInput: React.SFC<Props> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, field.name)
  const touch = getIn(touched, field.name)
  const showError = touch && error

  return (
    <div className="input-group">
      <label htmlFor={field.name}>{props.label}</label>
      <input
        {...field}
        type={props.type}
        placeholder={props.placeholder}
        className={classnames("text-input", {
          error: showError
        })}
        {...props}
      />
      {showError && <div className="input-feedback">{error}</div>}
    </div>
  )
}

export default TextInput
