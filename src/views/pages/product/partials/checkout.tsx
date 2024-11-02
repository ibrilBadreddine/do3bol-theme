import { useState } from "react";
import ModalSticky from "@/views/components/shared/modal/sticky/modal-sticky";

export default function ExpressCheckout() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="express-checkout-area">
      <ModalSticky
        title="Customer information"
        subtitle="Fill out this form, and we'll contact you soon 👋"
        isOpen={modal}
        setModal={setModal}>
        <form className="check-out-form">
          <input type="text" placeholder="Full name" />
          <input type="number" placeholder="Phone" />
          <input type="text" placeholder="Address" />
          <button className="primary">Buy now</button>
        </form>
      </ModalSticky>
      <div className="add-to-cart">
        <button onClick={() => setModal(true)} className="add-btn primary">
          Buy now
        </button>
      </div>
    </div>
  );
}
