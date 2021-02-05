import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login, logout} from './actions';
import { useState } from 'react'

function App() {
  const counter = useSelector( state => state.counter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();

  const [increaseValue, setIncreaseValue] = useState(0)
  const [decreaseValue, setDecreaseValue] = useState(0)

  const increaseHandler = e => {
    e.preventDefault()
    dispatch(increment(parseInt(increaseValue)))
    setIncreaseValue(0)
  }

  const decreaseHandler = e => {
    e.preventDefault()
    dispatch(decrement(parseInt(decreaseValue)))
    setDecreaseValue(0)
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <form onSubmit = {increaseHandler}>
        <input 
          name = "increment" 
          value = {increaseValue} 
          onChange = { e => setIncreaseValue(e.target.value)}
        />
        <button type = "submit" >Increase</button>
      </form>
      <form onSubmit = {decreaseHandler}>
        <input 
          name = "decrement" 
          value = {decreaseValue} 
          onChange = { e => setDecreaseValue(e.target.value)}
        />
        <button type = "submit" >Decrease</button>
      </form>
      <br/>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {isLogged && <h1>Important info {}</h1>}
    </div>
  );
}

export default App;
