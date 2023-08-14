import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './index';

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);

  return (
    <div className="App">
      <h3>カウント: {counter}</h3>
      {isLogin ? <h3>ログインしてるよ</h3> : <h3>ログインしてないよ</h3>}
    </div>
  );
}

export default App;
