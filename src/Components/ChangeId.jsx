import React,{useContext} from 'react'
import AuthContext from '../utils/AuthContext'
export default function ChangeId() {
  const{handleChangeUser}=useContext(AuthContext)
  return (
    <>
    <input type='text' onChange={(e)=>handleChangeUser(e.target.value)}></input>
    
    </>
  )
}
