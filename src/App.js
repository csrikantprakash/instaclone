import './App.css';
import LandingPage from './components/LandingPage/js/landing_page';
import PostView from './components/PostView/js/PostView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/form/js/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/postview" element={<PostView/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
