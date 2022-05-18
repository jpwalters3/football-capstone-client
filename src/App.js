import React, {useState} from 'react'
import Landing from './pages/Home/Landing'
import ViewRoster from './pages/Home/ViewRoster'
import Login from './pages/login'
import ViewSchedule from './pages/Home/ViewSchedule'
import Statistics  from './pages/Home/Statistics'
import EditGame from './pages/Admin/EditGame'
import MasterView from './pages/Admin/MasterView'
import EditPlayer from './pages/Admin/EditPlayer'
import EditClub from './pages/Admin/EditClub'
import './styles/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const TokenContext = React.createContext(null);
export const AdminContext = React.createContext(null);

function App() {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <TokenContext.Provider value = {[token,setToken]}>
        <AdminContext.Provider value = {[isAdmin,setIsAdmin]}>
      <Router>
        
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route path = "/Home" element = {<Landing />}/>
          <Route path = "/Home/Roster" element = {<ViewRoster />}/>
          <Route path = "/Home/Schedule" element = {<ViewSchedule />}/>
          <Route path = "/Statistics" element = {<Statistics />}/>
          <Route path = "/Admin/EditGame" element = {<EditGame />}/>
          <Route path = "/Admin" element = {<MasterView/>}/>
          <Route path = "/Admin/EditPlayer" element = {<EditPlayer />}/>
          <Route path = "/Admin/EditClub" element = {<EditClub/>}/>
        </Routes>
        
      </Router>
      </AdminContext.Provider>
        </TokenContext.Provider>
    </div>
  );
}

export default App;
