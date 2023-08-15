import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './index';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>カウント: {counter}</h3>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>trueだよ</h3> : <h3>falseだよ</h3>}
      <button onClick={() => dispatch(login())}>true/false</button>
    </div>
  );
}

export default App;
