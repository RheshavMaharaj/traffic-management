import { createContext, useReducer, useState } from 'react'
import Reducer from './Reducer'
// import Data from './Data'
import axios from 'axios'

//global context
// TODO RM: Update the type
export const GlobalContext = createContext({
  handleSearch: (data: any) => {},
  setShowModal: (status: boolean) => {},
} as any)

export interface ProviderProps {
  children: JSX.Element,
};

//global context provider
export function GlobalProvider({ children }: ProviderProps): JSX.Element {
  const [congestions, dispatch] = useReducer(Reducer, [])
  const [showModal, setShowModal] = useState(false)

  //data from homepage and refine search
  // TODO RM: Update type after discussion with Ahmad
  async function handleSearch(data: any) {
    console.log('running');
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
  // TODO RM: Update type after discussion with Ahmad
  function handleDismiss(id: any) {
    dispatch({ type: 'DISMISS', payload: { id: id } })
  }

  //Card view button handler
  // TODO RM: Update type after discussion with Ahmad
  function handleView(congestion: any) {
    setShowModal(congestion)
  }

  //card save button handler
  // TODO RM: Update type after discussion with Ahmad
  function handleSaved(id: any) {
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
