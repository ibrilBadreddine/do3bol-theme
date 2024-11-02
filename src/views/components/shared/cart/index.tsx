import "./cart.style.scss";
import Icon from "@/views/components/shared/icons";
import type { CartDefinition } from "./cart.type";
import Product1 from "@/assets/images/product-1.jpg";

const Cart = ({ isOpen, setModal }: CartDefinition) => {
  return (
    <div className="cart-container" data-hidden={!isOpen}>
      <div className="cart-box">
        <div className="cart-head">
          <div className="headline">
            <Icon name="cart" />
            My cart
          </div>
          <button className="icon" onClick={() => setModal(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="cart-core">
          <div className="cart-items">
            <div className="items-note">
              <Icon name="cart" />
              You have 3 items in your list chart
            </div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="cart-item">
                <div className="cart-detail">
                  <img src={Product1} alt="" className="item-img" />
                  <div className="item-info">
                    <div className="headlines">
                      <p>Boxy fit patch sweatshirt</p>
                      <span>999 MAD</span>
                    </div>
                    <div className="quantity">
                      <button className="minus-quantity icon">
                        <Icon name="minus" size={15} />
                      </button>
                      <span className="value-add-quantity">0</span>
                      <button className="add-quantity icon">
                        <Icon name="plus" size={15} />
                      </button>
                    </div>
                  </div>
                </div>
                <button className="item-action secondary sm">
                  <Icon name="trash" size={15} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-info">
            <div className="total">
              <label>Total</label>
              <h4 className="amount">999 MAD</h4>
            </div>
            <div className="actions">
              <button className="primary">Shop now</button>
              <button className="icon" onClick={() => setModal(false)}>
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={() => setModal(false)} />
    </div>
  );
};

export default Cart;
