import "./cart.style.scss";
import { useState } from "react";
import Icon from "@components/shared/icons";
import Empty from "@components/shared/empty";
import Dialog from "@components/shared/dialog";
import Product1 from "@/assets/images/product-1.jpg";
import type { CartDefinition } from "./cart.type";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, setModal }: CartDefinition) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [cart] = useState<number>(2);
  const [isDelete, setDelete] = useState<boolean>(false);
  
  return (
    <div className="cart-container" data-hidden={!isOpen}>
      <div className="cart-box">
        <div className="cart-head">
          <div className="headline">
            <Icon name="cart" />
            {t("components.cart.head.title")}
          </div>
          <button className="icon" onClick={() => setModal(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="cart-core">
          <div className="cart-items">
            {cart > 0 ? (
              <>
                <div className="items-note">
                  <Icon name="cart" />
                  {t("components.cart.core.note")}
                </div>
                {[...Array(cart)].map((_, i) => (
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
                    <button
                      onClick={() => setDelete(true)}
                      className="item-action secondary sm">
                      <Icon name="trash" size={15} />
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <Empty
                icon="cart"
                title={t("components.cart.core.empty.title")}
                subtitle={t("components.cart.core.empty.subtitle")}
              />
            )}
          </div>
          <div className="cart-info">
            <div className="total">
              <label>{t("components.cart.core.total")}</label>
              <h4 className="amount">999 {t("common.currency")}</h4>
            </div>
            <div className="actions">
              <button className="primary" onClick={() => navigate("/product")}>
                {t("components.cart.core.actions.shop_now")}
              </button>
              <button className="icon" onClick={() => setModal(false)}>
                {t("components.cart.core.actions.continue_shopping")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={() => setModal(false)} />

      <Dialog isOpen={isDelete} setModal={setDelete} />
    </div>
  );
};

export default Cart;
