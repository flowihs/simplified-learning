import { useEffect, useState } from 'react'
import logo from './../../pages/authorization/img/logo.png'

export default function AuthorizationSection ({recoveryLink}) {
    const [nicknameInput, setNicknameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')


    return (
        <div className="authorization-input-box">
        <div className="authorization-input-left-wrapper">
            <form>
                <input value={nicknameInput} onChange={(event) => setNicknameInput(event.target.value)} className="authorization-input" type="text" placeholder="Nickname" required />
                <input value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} className="authorization-input" type="password" placeholder="Password" required />
                <div className='authorization-link-box'>
                    <a className="authorization-link" onClick={recoveryLink}> Забыли пароль?</a>
                </div>
                
                <button className={!nicknameInput || !passwordInput ? 'authorization-button-check' : 'authorization-button-check active'} type="submit">Войти</button>
            </form>


        </div>
        <div className="authorization-input-right-wrapper">
            <img src={logo} alt="" />
        </div>
    </div>

    )
}