import './App.css'
import {HashRouter as Router, Routes,Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import EditProgramm from './pages/editProgram';
import LoadProgramm from './pages/loadProgram';
import Layout from './components/Layout';

function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/editProgram' element={<EditProgramm/>}/>
            <Route path='/loadProgram' element={<LoadProgramm/>}/>
            </Route>

          </Routes>
      </Router>
    </>
  )
}

export default App
