import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState} from "react";

function Registration() {
    const loginReg = useRef();
    const passwordReg = useRef();
    const [messageLog, setmessageLog] = useState('');
    const [messagePass, setmessagePass] = useState('');
    const navigate = useNavigate();

    const newUser = () => {
        
        if (loginReg.current.value == '') {
            setmessageLog('Поле не должно быть пустым');
        }
        if (passwordReg.current.value == '') {
            setmessagePass('Поле не должно быть пустым');
        }
        if (loginReg.current.value.length <= 4 && loginReg.current.value.length > 0) {
            setmessageLog('Поле должно содержать не менее 4-х символов');
        } 
        if (passwordReg.current.value.length <= 4 && passwordReg.current.value.length > 0) {
            setmessagePass('Поле должно содержать не менее 4-х символов');
        }
        else if (loginReg.current.value.length > 4 && passwordReg.current.value.length > 4) {
            let localSorageUsers = JSON.parse(localStorage.getItem('users')) || [];
            setmessageLog('');
            setmessagePass('');
            if (localSorageUsers.length === 0) {
                localSorageUsers.push({login: loginReg.current.value, password: passwordReg.current.value});
                localStorage.setItem('users', JSON.stringify(localSorageUsers));
            } else if (localSorageUsers.length > 0) {
                if (localSorageUsers.some(user => Object.values(user)[0] == loginReg.current.value)) {
                    setmessageLog('Этот логин уже зарегестрирован');
                } else {
                    localSorageUsers.push({login: loginReg.current.value, password: passwordReg.current.value});
                    localStorage.setItem('users', JSON.stringify(localSorageUsers));
                    navigate("/menu");
                }
            }
        }
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <p className="auth__reg"><Link to='/'>Авторизоваться</Link></p>
                <form className="auth__form">
                    <h2 className="auth__title">РЕГИСТРАЦИЯ</h2>
                    <div className="auth__inputWrapper wrapper-first">
                        <input 
                            className="auth__input" 
                            type="text" 
                            placeholder="Логин"
                            ref={loginReg}
                            ></input>
                        <div className="auth__wrong-inp">{messageLog}</div>
                    </div>
                    <div className="auth__inputWrapper wrapper-second">
                        <input 
                            className="auth__input" 
                            type="password" 
                            placeholder="Пароль" 
                            ref={passwordReg}
                            ></input>
                        <div className="auth__wrong-inp">{messagePass}</div>
                    </div>
                    <div className="auth__inputWrapper">
                        <label className="auth__label">
                            <input type="checkbox" className="custom-input"></input>
                            <div className="auth__checkmark" id="authCheck"></div>
                            <div className="auth__checkbox-text"> Я согласен получать обновления на почту</div>
                        </label>
                    </div>
                    <div className="auth__wrong"></div>
                </form>
                <button className="auth__button" onClick={newUser}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Registration;