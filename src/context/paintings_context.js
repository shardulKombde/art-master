import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/paintings_reducer.'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,

} from '../action'

const initialState = {
    isSidebarOpen:false
}

const PaintingsContext = React.createContext()

export const PaintingsProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initialState)
  
  const openSidebar=() =>{
      dispatch({type: SIDEBAR_OPEN })
  }
  
  const closeSidebar=() =>{
    dispatch({type: SIDEBAR_CLOSE })
}
    return (
    <PaintingsContext.Provider value={{...state,openSidebar,closeSidebar}}>
      {children}
    </PaintingsContext.Provider>
  )
}
// make sure use
export const usePaintingsContext = () => {
  return useContext(PaintingsContext)
}
