import Icon from "@/views/components/shared/icons";

export default function Content() {
  return (
    <div className="product-content">
      <div className="content-head">
        <h2 className="prod-title">Boxy fit patch sweatshirt</h2>
        <div className="prod-review">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name={i + 1 > 4 ? "star_outline" : "star_solid"} />
            ))}
          </div>
          4.0
        </div>
        <h2 className="prod-price">999 MAD</h2>
      </div>
      <div className="content-core">
        <div className="variant var-color">
          <label className="label">Color:</label>
          <div className="options">
            <button
              className="color"
              style={{ backgroundColor: "#1d3557" }}></button>
            <button
              className="color"
              style={{ backgroundColor: "#ffff" }}></button>
            <button
              className="color"
              style={{ backgroundColor: "#faedcd" }}></button>
            <button
              className="color"
              style={{ backgroundColor: "#fb6f92" }}></button>
            <button
              className="color"
              style={{ backgroundColor: "#83c5be" }}></button>
          </div>
        </div>
        <div className="variant var-badge">
          <label className="label">Size:</label>
          <div className="options">
            <button className="icon">XS</button>
            <button className="icon">S</button>
            <button className="icon" disabled>
              M
            </button>
            <button className="icon">L</button>
            <button className="icon">XL</button>
          </div>
        </div>
        <div className="countdown-box">
          <div className="visitors">
            <span>10</span> visitors are live now!
          </div>
          <div className="time">
            <div className="tab">
              <span>10</span> Days
            </div>
            <div className="tab">
              <span>22</span> Hours
            </div>
            <div className="tab">
              <span>58</span> Minutes
            </div>
            <div className="tab">
              <span>16</span> Seconds
            </div>
          </div>
        </div>
        {/* <form className="variant check-out-form">
          <label className="label">Customer information:</label>
          <div className="inputs">
            <input type="text" placeholder="Full name" />
            <input type="number" placeholder="Phone" />
            <input type="text" placeholder="Address" />
          </div>
        </form> */}
        {/* <div className="variant var-radio">
          <label className="label">Fit:</label>
          <div className="options">
            <label>
              <input type="radio" name="fit" />
              Regular
            </label>
            <label>
              <input type="radio" name="fit" />
              Oversized
            </label>
            <label>
              <input type="radio" name="fit" />
              Relaxed
            </label>
          </div>
        </div> */}
        {/* <div className="variant var-dropdown">
          <label className="label">Pattern:</label>
          <select>
            <option value="">- Select Pattern -</option>
            <option value="solid">Solid</option>
            <option value="striped">Striped</option>
            <option value="plaid">Plaid</option>
            <option value="floral">Floral</option>
          </select>
        </div> */}
        <div className="add-to-cart-box">
          <div className="quantity">
            <button className="minus-quantity icon">
              <Icon name="minus" />
            </button>
            <span className="value-add-quantity">0</span>
            <button className="add-quantity icon">
              <Icon name="plus" />
            </button>
          </div>
          <button className="add-btn primary">Add to cart</button>
        </div>
      </div>
      <article className="content-description">
        <div className="desc-section">
          <h4>COMPOSITION</h4>
          <p>
            Boxy fit sweatshirt made of cotton fabric with a napped interior.
            Featuring a hood, long sleeves, contrast patch appliqué on the back
            and ribbed trims. We work with monitoring programmes to ensure
            compliance with our social, environmental and health and safety
            standards for our products. To assess compliance, we have developed
            a programme of audits and continuous improvement plans.
          </p>
        </div>
        <div className="desc-section">
          <h4>CERTIFIED MATERIALS</h4>
          <p>
            Nowadays, recycled polyester is mainly made from PET plastic waste.
            This is a type of plastic that is widely used in a variety of items,
            such as plastic bottles. Using recycled materials helps limit the
            production of virgin polyester fibre. It is certified to the
            Recycled Claim Standard (RCS), which verifies the recycled content
            and tracks it from source to final product.
          </p>
        </div>
      </article>
    </div>
  );
}
