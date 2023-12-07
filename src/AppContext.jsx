import {useState,createContext, useContext} from 'react';

    
const GlobalContext = createContext();

export const useGlobalContext =() => useContext(GlobalContext);

const AppContext = (props) => {





   


    const [data,setData] = useState('kritika');



  return (
    <GlobalContext.Provider value={{data,setData}}>

        {props.children}

    </GlobalContext.Provider>
    
  )
}

export default AppContext