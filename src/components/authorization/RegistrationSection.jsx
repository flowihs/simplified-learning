import { useEffect, useState } from 'react'
import logo from './../../pages/authorization/img/logo.png'

export default function RegistrationSection () {
    const [nicknameInput, setNicknameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [repeatPasswordInput, setRepeatPasswordInput] = useState('')

    const [passwordInputStyle, setpasswordInputStyle] = useState({border: '1px solid #437055'})
    const [repeatpasswordInputStyle, setRepeatpasswordInputStyle]  = useState({border: '1px solid #437055'})
    const [emailInputStyle, setEmailInputStyle] = useState({border: '1px solid #437055'})
    const [nicknameStyle, setNicknameStyle] = useState({border: '1px solid #437055'})

    const latin = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']


    useEffect (() => {
        if (passwordInput.length < 8 ) {
            setpasswordInputStyle({border: '1px solid #ff3b3b'})
        } 
        
        if (passwordInput.length === 0 ||passwordInput.length > 8) {
            setpasswordInputStyle({border: '1px solid #437055'})
        }

    }, [passwordInput]) 

    useEffect (() => {

        if (passwordInput === repeatPasswordInput || repeatPasswordInput === 0) {
            setRepeatpasswordInputStyle({border: '1px solid #437055'})
        }

        if (passwordInput !== repeatPasswordInput) {
            setRepeatpasswordInputStyle({border: '1px solid #ff3b3b'})
        }
    }, [repeatPasswordInput])

    useEffect(() => {      
        const lowerCaseNickname = emailInput.toLowerCase();
        const containsLatinLetter = latin.some((letter) => lowerCaseNickname.includes(letter));

        if (emailInput.includes('@') && containsLatinLetter) {
            setEmailInputStyle({ border: '1px solid #437055' });
        } 

        if (!containsLatinLetter || !emailInput.includes('@')) {
            setEmailInputStyle({ border: '1px solid #ff3b3b' });
        } 

        if (emailInput.length === 0) {
            setEmailInputStyle({ border: '1px solid #437055' });
        }

    }, [emailInput])

    useEffect(() => {
        const lowerCaseNickname = nicknameInput.toLowerCase();
        const containsLatinLetter = latin.some((letter) => lowerCaseNickname.includes(letter));
    
        
        if (!containsLatinLetter ) {
            setNicknameStyle({ border: '1px solid #ff3b3b' });
        } 
        
        if (containsLatinLetter || nicknameInput.length === 0) {
            setNicknameStyle({ border: '1px solid #437055' });
        }

    }, [nicknameInput])
    
    
    const registerButtonClass =
        passwordInputStyle.border === '1px solid #437055' &&
        emailInputStyle.border === '1px solid #437055' &&
        nicknameStyle.border === '1px solid #437055' &&
        repeatpasswordInputStyle.border === '1px solid #437055' &&
        nicknameInput &&
        passwordInput &&
        emailInput &&
        repeatPasswordInput
            ? 'registration-button-check active'
            : 'registration-button-check'


    return (
        <div className="registration-input-box">
            <div className="registration-input-left-wrapper">
                <form>
                    {nicknameStyle.border === '1px solid #ff3b3b' ? <p style={{color: 'red', marginBottom: 5, marginLeft: 5}}>Никнейм введен некорректно</p> : ''}
                    <input style={nicknameStyle} value={nicknameInput} onChange={(event) => setNicknameInput(event.target.value)} className="registration-input nickname-button" type="text" placeholder="Nickname" required />
                    {emailInputStyle.border === '1px solid #ff3b3b' ? <p style={{color: 'red', marginBottom: 5, marginLeft: 5}}>Почта введена некорректно</p> : ''}
                    <input style={emailInputStyle} value={emailInput} onChange={(event) => setEmailInput(event.target.value)} className="registration-input email-button" type="text" placeholder="E-mail" required />
                    {passwordInputStyle.border === '1px solid #ff3b3b' ? <p style={{color: 'red', marginBottom: 5, marginLeft: 5}}>Никнейм должен содержать в себе минимум 8 символов, должен быть на латинице. </p> : ''}
                    <input style={passwordInputStyle} value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} className="registration-input password-button" type="password" placeholder="Password" required />
                    {repeatpasswordInputStyle.border === '1px solid #ff3b3b' ? <p style={{color: 'red', marginBottom: 5, marginLeft: 5}}>Пароли должны совпадать</p> : ''}
                    <input style={repeatpasswordInputStyle} value={repeatPasswordInput} onChange={(event) => setRepeatPasswordInput(event.target.value)} className="registration-input repeat-password-button" type="password" placeholder="Repeat password" required />
                    <button  onClick={console.log(nicknameInput)} className={registerButtonClass} type="submit">Зарегистрироваться</button>
                </form>


            </div>
            <div className="registration-input-right-wrapper">
                <img src={logo} alt="" />
            </div>
        </div>

    )
}