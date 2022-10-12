import { createContext, useReducer, useState } from 'react'
import Reducer from './Reducer'
// import Data from './Data'
import axios from 'axios'

//global context
export const GlobalContext = createContext()

//global context provider
export function GlobalProvider({ children }) {
  const [congestions, dispatch] = useReducer(Reducer, [])
  const [showModal, setShowModal] = useState(null)

  //data from homepage and refine search
  async function handleSearch(data) {
    // console.log('POST request to backend the following data: ', data)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.post('http://localhost:9000/', data, config)

    console.log(res.data.content)
    console.log('lol: ', data)

    dispatch({ type: 'ADD_CONGESTION', payload: { data: res.data.content } })
  }

  //card dismiss button handler
  function handleDismiss(id) {
    dispatch({ type: 'DISMISS', payload: { id: id } })
  }

  //Card view button handler
  function handleView(congestion) {
    setShowModal(congestion)
  }

  //card save button handler
  function handleSaved(id) {
    dispatch({ type: 'SAVED', payload: { id: id } })
  }

  return (
    <GlobalContext.Provider
      value={{
        handleSearch,
        congestions,
        handleDismiss,
        handleView,
        showModal,
        setShowModal,
        handleSaved,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
