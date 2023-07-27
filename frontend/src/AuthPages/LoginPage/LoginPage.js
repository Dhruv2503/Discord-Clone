import React,{useEffect, useState} from 'react'
import { validateLoginForm } from '../../utils/validators'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AuthBox from '../../Components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import LoginPageFooter from './LoginPageFooter'
import { login } from '../../store/actions/authActions'



export default function Login() {
  const [mail,setMail] =useState('');
  const [password,setPassword]=useState('')
  const [isFormValid,setIsFormValid]=useState(false)
  const Navigate=useNavigate()
  const Dispatch=useDispatch()

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}));
  },[mail,password]);

  const handleLogin=()=>{
    const userDetails={
      mail,
      password
    }
    Dispatch(login(userDetails,Navigate))
  };
  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInputs
       mail={mail}
       setMail={setMail}
       password={password}
       setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}
