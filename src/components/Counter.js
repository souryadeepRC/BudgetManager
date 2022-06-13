import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
    const increaseCounterHandler = () => { 
        dispatch({ type: 'INC' })
    }
    const decreaseCounterHandler = () => { 
        dispatch({ type: 'DEC' })
    }
    const resetCounterHandler = () => { 
        dispatch({ type: 'RES' })
    }
    const isResetEligible = counter !== 0
    const isdecreaseEligible = counter > 0 
    return (
        <div className={classes.counter__container}>
            <p>{counter}</p>
            <div className={classes.counter__control}>
                <button onClick={increaseCounterHandler}>UP</button>
                <button onClick={decreaseCounterHandler}disabled={!isdecreaseEligible}>DOWN</button>
                <button onClick={resetCounterHandler} disabled={!isResetEligible}>RESET</button>
            </div>
            <button>Toggle Button</button>
        </div>
    )
}

export default Counter