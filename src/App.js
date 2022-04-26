import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CountContainer';
import SampleContainer from './containers/SampleContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <SampleContainer></SampleContainer>
    </div>
  );
}

export default App;
