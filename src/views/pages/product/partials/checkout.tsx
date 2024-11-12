import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Toast from "@components/shared/toast";
import ModalSticky from "@components/shared/modal/sticky";
import { useNavigate } from "react-router-dom";

export default function ExpressCheckout() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);

  // TODO: Duplicated handler (to remove)
  const [hasError, setError] = useState<boolean>(false);
  const [checkout, setCheckout] = useState([
    {
      type: "text",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.full_name.placeholder"
      ),
    },
    {
      type: "number",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.phone.placeholder"
      ),
    },
    {
      type: "email",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.email.placeholder"
      ),
    },
  ]);

  /**
   *
   * @param e
   * @param index
   */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setCheckout(
      checkout.map((field, idx) =>
        index === idx ? { ...field, value: e.target.value } : field
      )
    );
  };

  const buyNow = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (checkout.find((field) => !field.value)) {
      setModal(false);
      setError(true);
    } else {
      navigate("/thank-you");
    }
  };
  return (
    <div className="express-checkout-area">
      <ModalSticky
        title={t("pages.product.checkout.title")}
        subtitle={t("pages.product.checkout.subtitle")}
        isOpen={modal}
        setModal={setModal}>
        <form onSubmit={buyNow} className="check-out-form">
          {checkout.map((field, i) => (
            <input
              key={i}
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={(e) => handleInputChange(e, i)}
            />
          ))}
          <button type="submit" className="primary">
            {t("pages.product.checkout.action")}
          </button>
        </form>
      </ModalSticky>
      <div className="add-to-cart">
        <button onClick={() => setModal(true)} className="add-btn primary">
          {t("pages.product.checkout.action")}
        </button>
      </div>

      <Toast variant="error" show={hasError} close={setError} />
    </div>
  );
}
