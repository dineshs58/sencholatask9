import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home />
      
        <Routes>
          
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>
      



    </div>
  );
}

export default App;
