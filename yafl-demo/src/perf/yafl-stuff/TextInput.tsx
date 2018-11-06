import classnames from "classnames"
import * as React from "react"
import { FieldProps } from "yafl"

export interface InputProps extends FieldProps<any, any> {
  placeholder: string
  label?: string
  type?: string
}

const TextInput: React.SFC<InputProps> = props => {
  const { input, meta } = props
  const { isValid, visited, submitCount, errors = [] } = meta
  const showError = !isValid && (visited || submitCount > 0)
  return (
    <div className="input-group">
      <label htmlFor={input.name}>{props.label}</label>
      <input
        {...input}
        type={props.type}
        placeholder={props.placeholder}
        className={classnames("text-input", {
          error: showError
        })}
      />
      {showError && <div className="input-feedback">{errors[0]}</div>}
    </div>
  )
}

export default TextInput
