import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/reducers/users';
import { useNavigate } from 'react-router-dom';

function Header({title}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const count = useSelector(state => state.products.countProduct);
    const price = useSelector(state => state.products.allPrice);
    const localSorageUsers = useSelector(state => state.users.localSorageUsers)
    const wordChange = function (number, words) {
        var cases = [2, 0, 1, 1, 1, 2];
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    const logOut = () => {
        localStorage.clear();
        dispatch(removeUser());
        navigate("/");
    }

    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <div className="header__basket">
                <p>{count} {wordChange(count, ['товар', 'товара', 'товаров'])} <br/> на сумму {price} ₽</p> 
                <Link to={'/basket'}><img src='/assets/icons/busket.svg' alt="" /></Link>
                <button className="header__btn-logout" onClick={logOut}>Выйти</button>
            </div>
            
        </div>
    );
}

export default Header;