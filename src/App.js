import Main from "./components/pages/main";
import Profile from "./components/pages/profile";
import Registration from "./components/pages/registration";
import AddPet from "./components/pages/addPet";
import Search from "./components/pages/search";
import Watch from "./components/pages/watch";
import Login from "./components/pages/login";
import More from "./components/pages/more";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main/>}/> 
        <Route path={'/profile'} element={<Profile/>} />
        <Route path={'/registration'} element={<Registration/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/addPet'} element={<AddPet/>} />
        <Route path={'/watch'} element={<Watch/>} />
        <Route path={'/search'} element={<Search/>} />
        <Route path={'/more'} element={<More/>} />
      </Routes>
    </div>
  );
}

export default App;
