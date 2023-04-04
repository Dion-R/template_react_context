import React, {createContext, useContext, useReducer} from 'react'
import reducer from "../reducer/SomethingReducer"

const SomethingContext = createContext();
const initalState = {}

const  SomethingProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initalState);


  return (
   <SomethingContext.Provider value = {{name: "Dion"}}>
        {children}
   </SomethingContext.Provider>
  )
}

const useSomethingContext = () => useContext(SomethingContext);

export {SomethingProvider, useSomethingContext}

