import './App.css';
import Appfooter from './components/Appfooter';
import Appbody from './components/Appbody';
import Appheader from './components/NavBar';
import { UserProvider } from './context/usercontext';
import { CountProvider } from './context/CountContext'
import { useReducer } from "react"

function App() {
  const reducerFun = (count, action) =>{
    switch(action){
        case "increment" : return count+1
        case "decrement" : return count-1
        case "reset" : return 0
        default: return count
    }
}
const initialState = 0
const [count,dispatch] = useReducer(reducerFun,initialState)
  return (
    <CountProvider value = { {count:count, dispatch:dispatch }} >
      <UserProvider value = "Anusuryadevi">
            <Appbody></Appbody>
      </UserProvider>
      </CountProvider>
  );
}


export default App;
