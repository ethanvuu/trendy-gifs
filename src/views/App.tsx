import { Provider } from 'react-redux';
import store from 'store/rootStore';
import 'antd/dist/antd.css';
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
