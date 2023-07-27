import React from 'react'
import {useNavigate} from 'react-router-dom'


import CustomPrimaryButton from '../../Components/CustomPrimaryButton'
import RedirectInfo from '../../Components/RedirectInfo'

const LoginPageFooter = ({handleLogin,isFormValid}) => { 
  const Navigate=useNavigate()
  const handlePushToRegisterPage=()=>{
    Navigate('/register')
  }
  return (
    <div>
      <CustomPrimaryButton
        label="Log in"
        additionalStyles={{marginTop:'30px'}}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{marginTop:'5px'}}
        redirectHandler={handlePushToRegisterPage}
      />
    </div>
  )
}

export default LoginPageFooter
