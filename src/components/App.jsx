import { Route, Routes } from "react-router-dom";
import MoneyTrack from "../moneytrack";
import Header from "../header";

const App =()=>{
    return(
    <>
    <Header />
        <Routes>
          <Route path="/" element={<MoneyTrack/>}/>
        </Routes>
    </>
    )
  }
  
  export default App;
  
  