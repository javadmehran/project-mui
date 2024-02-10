import React,{useState} from 'react'
import AuthContext from './utils/AuthContext'
import Main from './Components/Main'
import ChangeId from './Components/ChangeId'

export default function App() {
  const [userId,setUserId]=useState(1)
  const handleChangeUser=(id)=>{
setUserId(id)
  }
  return (
    <>
    <AuthContext.Provider value={{userId,handleChangeUser}}>
      <Main/>
      <ChangeId/>
    </AuthContext.Provider>
    </>
  )
}
