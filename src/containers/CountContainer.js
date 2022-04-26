import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "../modules/counter";
import { increaseAsync } from "../modules/counter";
import { decreaseAsync } from "../modules/counter";
import Counter from '../components/Counter';

function CounterContainer() {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return(
        <div>
            <Counter number={number} onIncrease={ () => dispatch(increaseAsync()) } onDecrease ={ () => dispatch(decreaseAsync()) }>
                </Counter>           
                
        </div>
    )
}

export default CounterContainer;