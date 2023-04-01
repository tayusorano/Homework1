import Card from "../cards/card";
// import { products } from "../cards/products";
import { useSelector } from "react-redux";

function MainBlock({addItem}) {

    const products = useSelector(state => state.products.products);

    return (
        <ul className="main"> 
            {products.map(key => {
                return (
                    <Card
                    key={key.id}
                    id={key.id}
                    url={key.url}
                    title={key.title}
                    descr={key.descr}
                    price={key.price}
                    weight={key.weight}
                    />
                )
                })}
        </ul>
    );
}

export default MainBlock;