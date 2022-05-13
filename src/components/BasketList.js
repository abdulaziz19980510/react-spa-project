import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {order, incrementQuantity, decrementQuantity} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  
  return(
    <div className="bsk">
      <ul className="collection basket-list">
      <li className="collection-item active">
        Basket
      </li>
      {order.length ? order.map(item => {
        return(
          <BasketItem 
          key={item.id} 
          {...item} 
          removeFromBasket={props.removeFromBasket}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
          />
        )
      }): <li className="collection-item">Basket is empty</li>}
      <li className="collection-item active">
        Total Price: {totalPrice} <b>$</b>
      </li>
      <i className="material-icons basket-close" onClick={props.handleBasketShow}>close</i>
    </ul>
    </div>
  
  )
}