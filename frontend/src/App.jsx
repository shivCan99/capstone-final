import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";
import Success from "./layout/Success";
import Cancel from "./layout/Cancel";
import SubscriptionPlans from "./layout/SubscriptionPlans";
import Main from "./layout/Main";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/plans" element={<SubscriptionPlans />} />    
          <Route path="/main" element={<Main />}/>     
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
