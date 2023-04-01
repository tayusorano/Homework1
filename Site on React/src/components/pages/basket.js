import BasketCard from '../basket-card/basket-card'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/reducers/users';
import { deleteAll } from '../../store/reducers/products';

function Basket() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsBasket = useSelector(state => state.products.basketProducts);
    const price = useSelector(state => state.products.allPrice);

    const logOut = () => {
        localStorage.clear();
        dispatch(removeUser());
        navigate("/");
    }

    const deleteAllProducts = () => {
        dispatch(deleteAll());
        alert('Заказ сформирован');
    }

    return (
        <div className="basket">
            
                <header className="basket__header">
                    <div className="basket__left">
                        <Link to={'/menu'}><img src="/assets/icons/back.svg" alt="" className="basket__return" /></Link>
                        <h2 className="basket__title">Корзина с выбранными товарами</h2>
                    </div>
                    <button className="basket__btn-logout" onClick={logOut}>Выйти</button>
                </header>

            <div className="basket__container">    
                <ul className="basket__list">
                    {productsBasket.map(item => {
                        return (
                            <BasketCard
                            key={item.idx}
                            // key={item.id}
                            idx={item.idx}
                            // id={item.id}
                            url={item.url}
                            title={item.title}
                            price={item.price}
                            count={item.count}
                        />
                        )
                    })}
                </ul>
            </div>

            <footer>
                <div className="basket-footer__line"></div>
                <div className="basket-footer__container">
                    <h3 className="basket-footer__price">Заказ на сумму: <span>{price} ₽</span></h3>
                    <button className="basket-footer__btn" onClick={deleteAllProducts}>Оформить заказ</button>
                </div>
            </footer>
        
        </div>
    );
}

export default Basket;