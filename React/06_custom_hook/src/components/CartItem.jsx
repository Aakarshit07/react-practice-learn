import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item?.name}</h4>
        <p>{item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <Minus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <Plus />
          </button>
          <button onClick={() => onRemove(item.id)}>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
