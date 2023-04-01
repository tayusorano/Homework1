import uuid from 'react-uuid';
import { addProductsInBasket, plusItem } from "../../store/reducers/products";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Card({url, title, descr, price, weight, id}) {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const basketProducts = useSelector(state => state.products.basketProducts);

    const addProduct = (e) => {
        e.stopPropagation();
        // if (basketProducts.find(item => item.id == id)) {
        //     console.log('same');
        //     dispatch(plusItem(item.count));
        // }
        const item = {
            id: id,
            idx: uuid(),
            url: url,
            title: title,
            price: price,
            count: 1
        }

        dispatch(addProductsInBasket(item));
        // dispatch(plusItem(item.count));
    }

    const linkDish = () => {
        navigation(`/dish/${id}`)
    }

    return (
        <li className="card"
            onClick={linkDish}>
            <img src={url} alt="" className="card__img" />
            <h3 className="card__title">{title}</h3>
            <p className="card__descr">{descr}</p>
            <div className="card__add">
                <div className="card__info">
                    <p className="card-price">{price} ₽</p>
                    <p className="card-weight">/ {weight}</p>
                </div>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="card__icon" onClick={addProduct}>
                    <circle cx="15" cy="15" r="14.5" stroke="white"/>
                    <path d="M15 9.28564V20.3571" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>  
        </li>
    );
}

export default Card;