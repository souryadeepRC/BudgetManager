import { useReducer } from "react"


const initialState = { value: '', isTouched: false }


const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true }
    }
    if (action.type === 'RESET') {
        return initialState
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
    const onResetHandler = () => {
        dispatch({ type: 'RESET' })
    }
    const isValidData = validateValue(inputState.value)

    const hasError = !isValidData && inputState.isTouched
    return {
        value : inputState.value,
        isValidData,
        hasError,
        isTouched : inputState.isTouched,
        onChangeHandler,
        onBlurHandler,
        onResetHandler
    }
}
export default useInput