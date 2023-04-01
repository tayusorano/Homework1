import uuid from 'react-uuid';
import { Link } from "react-router-dom";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {addProductsInBasket} from "../../store/reducers/products";
import { useDispatch } from "react-redux";

function Dish({url, title, price, weight}) {
    const {id} = useParams();
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();
    const dish = products.find(item => item.id == id);

    const addProduct = () => {
        const item = {
            id: dish.id,
            idx: uuid(),
            url: dish.url,
            title: dish.title,
            price: dish.price,
        }

        dispatch(addProductsInBasket(item));
    }

    return (
        <div className="dish__page">
            <div className="dish__header">
                <Link to={'/menu'}><img src="/assets/icons/back.svg" alt="" className="dish__return" /></Link>
                <Header/>
            </div>
            <div className="dish__info">
                <img src={dish.url} alt="dish" className="dish__img"/>
                <div className="dish__right">
                    <div className="dish__title">{dish.title}</div>
                    <div className="dish__descr">Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.</div>
                    <div className="dish__bottom">
                        <div className="dish__pr-wh">
                            <span className="dish__price">{dish.price} ₽ </span> 
                            <span className="dish__weight">/{dish.weight}</span> 
                        </div>
                        <button className="dish__basket" onClick={addProduct}>В корзину</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Dish;