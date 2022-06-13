import { useReducer } from "react"


const initialState = { value: '', isTouched: false }


const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true }
    }
    return initialState
}
const useInput = validateValue => {
    const [inputState, dispatch] = useReducer(inputReducer, initialState)

    const onChangeHandler = event => {
        dispatch({ type: 'INPUT', value: event.target.value })
    }
    const onBlurHandler = () => {
        dispatch({ type: 'BLUR' })
    }
    const isValidData = validateValue(inputState.value)

    const hasError = !isValidData && inputState.isTouched
    return {
        value : inputState.value,
        isValidData,
        hasError,
        onChangeHandler,
        onBlurHandler
    }
}
export default useInput