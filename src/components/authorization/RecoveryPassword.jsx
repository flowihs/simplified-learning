import { useEffect, useState } from 'react'
import logo from './../../pages/authorization/img/logo.png'

export default function RecoveryPassword () {
    const [emailRecoveryValue, setEmailRecoveryValue] = useState('')


    return (
        <div className="recovery-mainbox">
            <div className="list">
                <div className="recovery-title-box">
                    <p className="recovery-title">Восстановление пароля</p>
                </div>

                <div className="recovery-input-box">
                    <div className="recovery-input-left-wrapper">
                        <form>
                            <input value={emailRecoveryValue} onChange={(event) => setEmailRecoveryValue(event.target.value)}  className="registration-input email-button" type="text" placeholder="E-mail" required />
                           
                            <button className={emailRecoveryValue && emailRecoveryValue.includes('@') ? 'recovery-button-check active' : 'recovery-button-check'} type="submit">Восстановить</button>
                        </form>
                    </div>

                    <div className="recovery-input-right-wrapper">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}