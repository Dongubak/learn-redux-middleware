function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <p>{ number }</p>
            <button onClick={ onIncrease }>+</button>
            <button onClick={ onDecrease }>-</button>
        </div>
    )
}

export default Counter;