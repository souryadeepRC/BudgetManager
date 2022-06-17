import Input from "../Input/Input"

const Form = props => {
    return (
        <div  className={props.className}>
            {
                props.fieldList.map(field => {
                    return (
                        <Input
                            key={field.id}
                            label={field.static.label}
                            labelInfo={field.static.labelInfo}
                            input={{
                                ...field.static.input,
                                value: field.action.value,
                                onChange: field.action.onChangeHandler,
                                onBlur: field.action.onBlurHandler
                            }}
                            errorMessage={field.static.ErrorMsg}
                            isValidInput={field.action.hasError}
                        />
                    )
                })
            }
        </div>
    )
}
export default Form