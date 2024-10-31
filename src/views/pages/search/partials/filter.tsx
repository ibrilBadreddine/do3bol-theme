import Icon from "@/views/components/shared/icons";

export default function Filter() {
  return (
    <div className="filter-box">
      <div className="filter-head">
        <Icon name="funnel" />
        Filter
      </div>
      <div className="filter-core">
        <div className="select-filter">
          <span>Select collection</span>
          <div className="options">
            <button className="opt icon">
              <Icon name="check" size={15} />
              All
            </button>
            <button className="opt icon">
              <Icon name="check" size={15} />
              Man
            </button>
            <button className="opt icon">
              <Icon name="check" size={15} />
              Woman
            </button>
            <button className="opt icon">
              <Icon name="check" size={15} />
              kids
            </button>
          </div>
        </div>
        <div className="select-filter">
          <span>Sort by</span>
          <div className="options">
            <button className="opt icon">
              <Icon name="chevron_up" />
              Price
            </button>
            <button className="opt icon">
              <Icon name="chevron_up" />
              Newest
            </button>
            <button className="opt icon">
              <Icon name="chevron_up" />
              A-Z
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
