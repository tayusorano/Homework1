
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logIn } from "../../store/reducers/users";

function Authorisation() {
    const dispatch = useDispatch();
    const loginAuth = useRef();
    const passwordAuth = useRef();
    const [messageLog, setmessageLog] = useState('');
    const [messagePass, setmessagePass] = useState('');
    const [messageAll, setmessageAll] = useState('');
    const navigate = useNavigate();

    const isLogged = useSelector(state => state.users.isUserLogged)

    const checkUser = () => {
        let usersInfo = JSON.parse(localStorage.getItem('users'));
        console.log(usersInfo)
        if (usersInfo.length === 0) {
            setmessageAll('Зарегестрируйтесь, пожалуйста');
        }
        if (loginAuth.current.value == '') {
            setmessageLog('Поле не должно быть пустым');
        }
        if (passwordAuth.current.value == '') {
            setmessagePass('Поле не должно быть пустым');
        }
        if (usersInfo.some(user => Object.values(user)[0] == loginAuth.current.value && Object.values(user)[1] == passwordAuth.current.value)) {
            setmessageLog('');
            setmessagePass('');
            setmessageAll('');
            dispatch(logIn());
            navigate('/menu');
        }
        if (usersInfo.some(user => Object.values(user)[0] !== loginAuth.current.value || Object.values(user)[1] !== passwordAuth.current.value)) {
            setmessageAll('Логин или пароль неверен');
        }

    }

    return (
        <div className="auth">
            <div className="auth__container">
                <p className="auth__reg"><Link to='/registration'>Зарегистрироваться</Link></p> 
                <form className="auth__form">
                    <h2 className="auth__title">ВХОД</h2>
                    <div className="auth__inputWrapper wrapper-first">
                        <input 
                            className="auth__input" 
                            type="text" 
                            placeholder="Логин" 
                            ref={loginAuth}
                            ></input>
                        <div className="auth__wrong-inp">{messageLog}</div>
                    </div>
                    <div className="auth__inputWrapper wrapper-second">
                        <input 
                            className="auth__input" 
                            type="password" 
                            placeholder="Пароль" 
                            ref={passwordAuth}
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
                    <div className="auth__wrong">{messageAll}</div>
                </form>
                <button className="auth__button" onClick={checkUser}>Войти</button>
            </div>
        </div>
    )
}

export default Authorisation;