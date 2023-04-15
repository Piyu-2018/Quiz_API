import React, {createContext, useState, useContext, useEffect} from 'react'

const stateContext = createContext();



export default function useStateContext() {
    const { context, setContext } = useContext(stateContext)
    return {
        context,
        setContext: obj => { 
            setContext({ ...context, ...obj }) }
    };
}

export function ContextProvider({children}) {

  const [context, setContext] = useState({})

  const getFreshContext =() =>{
    if(localStorage.getItem('context')===null){
        const newContext = {
            participantId:0,
            timeTaken:0,
            selectedOptions:[]
        }
        localStorage.setItem('context', JSON.stringify(newContext))
        setContext(newContext)
    }else{
        setContext(localStorage.getItem('context'))
    }
    // return JSON.parse(localStorage.getItem('context'))
}

useEffect(() => {
    // localStorage.setItem('context', JSON.stringify(context))
    getFreshContext()
  },[context])

  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}
    </stateContext.Provider>
  )
}
