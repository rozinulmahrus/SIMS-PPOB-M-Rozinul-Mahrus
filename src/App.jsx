// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout";
import Profile from "./pages/Profile/Profile";
import Topup from "./pages/Topup/Topup";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transaction/Transaction";

function App() {
  return (
    <>
      {/* <div className="flex w-full justify-center gap-5 min-h-screen items-center border border-green-700">
        <Register/>
      </div>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/topup" element={<Topup/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/transaction/:id" element={<Transaction/>}/>
            <Route path="/transaction-history" element={<TransactionHistory/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Layout> */}
        {/* <Topup/> */}
        {/* <TransactionHistory/>
      </Layout> */}
    </>
  )
    
}

export default App
