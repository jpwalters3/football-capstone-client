import Landing from './pages/Landing'
import ViewRoster from './pages/ViewRoster'
import Login from './pages/Login'
import ViewSchedule from './pages/ViewSchedule'
import './styles/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route path = "/Home" element = {<Landing />}/>
          <Route path = "/Roster" element = {<ViewRoster />}/>
          <Route path = "/Schedule" element = {<ViewSchedule />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
