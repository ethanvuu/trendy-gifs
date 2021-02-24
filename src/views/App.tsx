import { Provider } from 'react-redux';
import store from 'store/rootStore';

import './App.css';

import GiphyList from 'views/GiphyList'


function App() {
  return (
    <Provider store={store}>
      <GiphyList/>
    </Provider>
  );
}

export default App;
