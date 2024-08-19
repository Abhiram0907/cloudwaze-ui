import './App.css'
import Header from './components/header';
import Menu from './components/menu';
import AppRoutes from './routes';

function App() {

  return (
    <div className="App">
        <div className="approutes">
          <AppRoutes />
        </div>
    </div>
  );
}

export default App
