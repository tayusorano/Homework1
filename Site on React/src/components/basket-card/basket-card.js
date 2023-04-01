import { useDispatch, useSelector } from "react-redux";
import { removeProductFromBasket, plusItem, minusItem } from "../../store/reducers/products";
import { useState } from "react";

function BasketCard({url, title, price, idx}) {
    const dispatch = useDispatch();
    const [countItem, setCountItem] = useState(1);
    const deleteItem = () => {
        dispatch(removeProductFromBasket(idx));
    }

    const plus = () => {
        setCountItem(countItem + 1);
        // dispatch(plusItem());
    }

    const minus = () => {
        setCountItem(countItem - 1);
        // dispatch(minusItem());
    }
    
    return (
        <li className="basket-card__item">
            <div className="basket-card__left">
                <img src={url} alt="" className="basket-card__img" />
                {/* <div className="basket-card__counter">
                    <img src="/assets/icons/plus.svg" alt="" className="basket-card__counter__plus" onClick={plus}/>
                    <span>{countItem}</span>
                    <img src="/assets/icons/minus.svg" alt="" className="basket-card__counter__minus" onClick={minus}/>
                </div> */}
            </div>
            
            <h3 className="basket-card__title">{title}</h3>

            <div className="basket-card__right">
                <p className="basket-card__price">{price} ₽</p>
                    
                <img src="/assets/icons/cancel.svg" alt="" 
                     className="basket-card__delete"
                     onClick={deleteItem}/>
            </div> 
        </li>
    )
}

export default BasketCard;