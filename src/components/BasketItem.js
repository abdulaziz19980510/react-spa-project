import { useContext } from "react";
import {ShopContext} from "../context"

export default function BasketItem(props) {
  const { id, name, price, quantity  } = props;

  const {incrementQuantity, decrementQuantity, removeFromBasket} = useContext(ShopContext)
  return(
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content"> 
      <a className="waves-effect waves-light btn btnq" onClick={() => incrementQuantity(id) }>
        <i className="material-icons left">exposure_plus_1</i>add
      </a>
      <a className="waves-effect waves-light btn btnq" 
      onClick={() => decrementQuantity(id)}
      style={{margin: '0px 10px'}}>
        <i className="material-icons left">exposure_neg_1</i>remove
      </a>
      <a className="waves-effect waves-light btn btnq" 
      onClick={() => removeFromBasket(id)} 
      >
        <i className="material-icons basket-delete"
       >delete_forever</i> delete
      </a>
     
      </span>
    </li>
  )
}