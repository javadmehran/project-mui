import React,{useContext} from 'react'
import AuthContext from '../utils/AuthContext'
export default function () {
  const{userId}=useContext(AuthContext)
  return (
    <>
    <p>user id :{userId}</p>
    
    </>
  )
}
