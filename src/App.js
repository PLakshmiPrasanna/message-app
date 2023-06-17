import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './addMessage';
import Container from './addMessage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container/>
      </Provider>
    </div>
  );
}

export default App;
