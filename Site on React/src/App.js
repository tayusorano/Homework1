import Menu from "./components/pages/menu";
import Authorisation from "./components/pages/authorisation";
import Registration from "./components/pages/registration";
import Basket from "./components/pages/basket";
import Dish from "./components/pages/dish";
import { Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux";


function App() { 
  const isLogged = useSelector(state => state.users.isUserLogged)

  return (
    <Routes>
      {isLogged
        ?
        <>
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/basket" element={<Basket />} />
          <Route exact path="/dish/:id" element={<Dish />} />
        </>
        :
        <>
          <Route exact path="*" element={<Authorisation />} />
          <Route exact path="/registration" element={<Registration />} />
        </>
      }
        
    </Routes>
  )
  
}

export default App;
