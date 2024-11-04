import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import ModalSticky from "@/views/components/shared/modal/sticky";

export default function Filter() {
  const [filterMobile, setFilterMobile] = useState(false);

  return (
    <>
      <div className="filter-box">
        <span className="result-count">Showing 9 results</span>
        <div className="filter-options">
          <button className="link">All</button>
          <button className="link">Man</button>
          <button className="link">Woman</button>
          <button className="link">Kids</button>
        </div>
        <div className="filter-sort">
          <label>
            <Icon name="arrows_up_down" size={15} />
            Sort by:
          </label>
          <div className="sort-options">
            <button className="icon">
              Price
              <Icon name="chevron_up" size={15} />
            </button>
            <button className="icon">
              Newest
              <Icon name="chevron_up" size={15} />
            </button>
            <button className="icon">
              A-Z
              <Icon name="chevron_up" size={15} />
            </button>
          </div>
        </div>
        <button
          onClick={() => setFilterMobile(true)}
          className="filter-btn icon">
          <Icon name="adjustments_horizontal" />
        </button>
      </div>

      <ModalSticky
        title="Quick filters"
        subtitle="Filter collections & sort items"
        isOpen={filterMobile}
        setModal={setFilterMobile}>
        <div className="filter-box-mobile">
          <div className="filter-tab">
            <label>Choose collection:</label>
            <div className="options">
              <button className="icon">All</button>
              <button className="icon">Man</button>
              <button className="icon">Woman</button>
              <button className="icon">Kids</button>
            </div>
          </div>
          <div className="filter-tab">
            <label>Sort by:</label>
            <div className="options">
              <button className="icon">
                Price
                <Icon name="chevron_up" size={15} />
              </button>
              <button className="icon">
                Newest
                <Icon name="chevron_up" size={15} />
              </button>
              <button className="icon">
                A-Z
                <Icon name="chevron_up" size={15} />
              </button>
            </div>
          </div>
          <div className="filter-actions">
            <button className="icon">Reset</button>
            <button className="primary">Apply</button>
          </div>
        </div>
      </ModalSticky>
    </>
  );
}
