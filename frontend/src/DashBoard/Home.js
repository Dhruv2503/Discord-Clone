import {useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate=useNavigate()
  return (
    useEffect(()=>{
       navigate("/dashboard")
    },[])
  )
}

export default Home
