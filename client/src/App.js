import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes'

function App() {
  return (
    <div className='App'>
      <Routes>
        {
          routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
