import { useEffect, useState } from 'react'
import './../../index.css'
import React from 'react'
import AuthorizationSection from '../../components/authorization/AuthorizationSection'
import RegistrationSection from '../../components/authorization/RegistrationSection'
import RecoveryPassword from '../../components/authorization/RecoveryPassword'


export function Authorization () {
    const [autButton, setAutButton] = useState(true)
    const [regButton, setRegButton] = useState(false)
    const [authorization, setAuthorization] = useState(true)
    const [recovery, setRecovery] = useState(false)

    const clickRegButton = () => {
        setAutButton(false)
        setRegButton(true)
    }

    const clickAutButton = () => {
        setAutButton(true)
        setRegButton(false)
    }

    const recoveryLinks = () => {
        setRecovery(true)
        setAuthorization(false)
    }

    const Login = () => {

        return (
            <div className="authorization-mainbox">
                <div className="list">
                    <div className="authorization-button-box">
                        <button onClick={clickAutButton} className={autButton === true ? 'authorization-button active' : 'authorization-button'}>Авторизация</button>
                        <button onClick={clickRegButton} className={regButton === true ? 'authorization-button active' : 'authorization-button'}>Регистрация</button>
                    </div>

                    {autButton === true ? <AuthorizationSection recoveryLink={recoveryLinks} /> : <RegistrationSection />}

                </div>
            </div>
        )
       
    }

    const Recovery = () => {
        return (
            <RecoveryPassword />
        )
    }

    return (
        <>
            {authorization && Login()}
            {recovery && Recovery()}
        </>   
    )
}

