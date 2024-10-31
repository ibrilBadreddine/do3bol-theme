import Icon from "@/views/components/shared/icons";

export default function Filter() {
  return (
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
            <Icon name="chevron_up" />
          </button>
          <button className="icon">
            A-Z
            <Icon name="chevron_up" />
          </button>
        </div>
      </div>
    </div>
  );
}
