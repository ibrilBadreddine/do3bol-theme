import { useState } from "react";
import ModalSticky from "@/views/components/shared/modal/sticky";
import { useTranslation } from "react-i18next";

export default function ExpressCheckout() {
  const { t } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="express-checkout-area">
      <ModalSticky
        title={t("pages.product.checkout.title")}
        subtitle={t("pages.product.checkout.subtitle")}
        isOpen={modal}
        setModal={setModal}>
        <form className="check-out-form">
          <input
            type="text"
            placeholder={t(
              "pages.product.content.variants.form.fields.full_name.placeholder"
            )}
          />
          <input
            type="number"
            placeholder={t(
              "pages.product.content.variants.form.fields.phone.placeholder"
            )}
          />
          <input
            type="text"
            placeholder={t(
              "pages.product.content.variants.form.fields.email.placeholder"
            )}
          />
          <button className="primary">
            {t("pages.product.checkout.action")}
          </button>
        </form>
      </ModalSticky>
      <div className="add-to-cart">
        <button onClick={() => setModal(true)} className="add-btn primary">
          {t("pages.product.checkout.action")}
        </button>
      </div>
    </div>
  );
}
