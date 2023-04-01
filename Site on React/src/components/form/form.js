import { useState } from "react";

function Form({message, messageInp, handleClick}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <div className="auth__inputWrapper wrapper-first">
                <input 
                    className="auth__input" 
                    type="text" 
                    placeholder="Логин" 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}></input>
                <div className="auth__wrong-inp">{messageInp}</div>
            </div>
            <div className="auth__inputWrapper wrapper-second">
                <input 
                    className="auth__input" 
                    type="password" 
                    placeholder="Пароль" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <div className="auth__wrong-inp">{messageInp}</div>
            </div>
            <div className="auth__inputWrapper">
                <label className="auth__label">
                    <input type="checkbox" className="custom-input"></input>
                    <div className="auth__checkmark" id="authCheck"></div>
                    <div className="auth__checkbox-text"> Я согласен получать обновления на почту</div>
                </label>
            </div>
            <div className="auth__wrong">{message}</div>
        </>
    )
}

export default Form;