import "./styles/App.css";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import {useSelector} from 'react-redux'
function App() {
  const loggedIn = useSelector(state => state.user.loggedIn)

  return (
    <div className="App">
      {/* <header className="App-header">


       
      </header> */}
      <BrowserRouter>
          <Routes>
            
            <Route path="*" element={!loggedIn?(<Main/>):(<Navigate replace to="/login" />)} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

