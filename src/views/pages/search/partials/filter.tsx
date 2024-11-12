import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import ModalSticky from "@/views/components/shared/modal/sticky";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const Filter: React.FC<{
  products_length: number;
  sort: { field: "price" | "newest" | "a-z"; order: "asc" | "desc" };
  setSort: (field: "price" | "newest" | "a-z", order: "asc" | "desc") => void;
}> = ({ products_length, setSort, sort }) => {
  const { t } = useTranslation();
  const { collection_id } = useParams();
  const [filterMobile, setFilterMobile] = useState(false);

  const collections = [
    {
      label: t("pages.collections.partials.filter.categories.options.opt_1"),
      path: "",
    },
    {
      label: t("pages.collections.partials.filter.categories.options.opt_2"),
      path: "man",
    },
    {
      label: t("pages.collections.partials.filter.categories.options.opt_3"),
      path: "woman",
    },
    {
      label: t("pages.collections.partials.filter.categories.options.opt_4"),
      path: "kids",
    },
  ];

  const sorts = [
    {
      id: "price",
      label: t("pages.collections.partials.filter.sort.options.opt_1"),
    },
    {
      id: "newest",
      label: t("pages.collections.partials.filter.sort.options.opt_2"),
    },
    {
      id: "a-z",
      label: t("pages.collections.partials.filter.sort.options.opt_3"),
    },
  ];
  return (
    <>
      {/* Desktop */}
      <div className="filter-box">
        <span className="result-count">
          {t("pages.collections.partials.filter.count", {
            length: products_length,
          })}
        </span>
        <div className="filter-options">
          {collections.map((col, i) => (
            <Link
              key={i}
              to={`/collections/${col.path}`}
              className={`link ${
                (!col.path && !collection_id) || col.path === collection_id
                  ? "active-link"
                  : ""
              }`}>
              {col.label}
            </Link>
          ))}
        </div>
        <div className="filter-sort">
          <label>
            <Icon name="arrows_up_down" size={15} />
            {t("pages.collections.partials.filter.sort.label")}
          </label>
          <div className="sort-options">
            {sorts.map((sor) => (
              <button
                onClick={() =>
                  sor.id === sort.field
                    ? setSort({
                        field: sor.id,
                        order: sort.order === "asc" ? "desc" : "asc",
                      })
                    : setSort({ field: sor.id, order: sort.order })
                }
                key={sor.id}
                className={`icon ${
                  sor.id === sort.field ? "active-sort" : ""
                }`}>
                {sor.label}
                <div className="sort-icon">
                  <Icon
                    name="arrow_down"
                    size={sort.order === "desc" ? 15 : 10}
                  />
                  <Icon name="arrow_up" size={sort.order === "asc" ? 15 : 10} />
                </div>
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setFilterMobile(true)}
          className="filter-btn icon">
          <Icon name="adjustments_horizontal" />
        </button>
      </div>

      {/* Mobile */}
      <ModalSticky
        title={t("pages.collections.partials.filter.head.title")}
        subtitle={t("pages.collections.partials.filter.head.subtitle")}
        isOpen={filterMobile}
        setModal={setFilterMobile}>
        <div className="filter-box-mobile">
          <div className="filter-tab">
            <label>
              {t("pages.collections.partials.filter.categories.label")}
            </label>
            <div className="options links">
              {collections.map((col, i) => (
                <Link
                  key={i}
                  to={`/collections/${col.path}`}
                  className={`link-btn icon ${
                    (!col.path && !collection_id) || col.path === collection_id
                      ? "active-sort"
                      : ""
                  }`}>
                  {col.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="filter-tab">
            <label>{t("pages.collections.partials.filter.sort.label")}</label>
            <div className="options">
              {sorts.map((sor) => (
                <button
                  onClick={() =>
                    sor.id === sort.field
                      ? setSort({
                          field: sor.id,
                          order: sort.order === "asc" ? "desc" : "asc",
                        })
                      : setSort({ field: sor.id, order: sort.order })
                  }
                  key={sor.id}
                  className={`icon ${
                    sor.id === sort.field ? "active-sort" : ""
                  }`}>
                  {sor.label}
                  <div className="sort-icon">
                    <Icon
                      name="arrow_down"
                      size={sort.order === "desc" ? 15 : 10}
                    />
                    <Icon
                      name="arrow_up"
                      size={sort.order === "asc" ? 15 : 10}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="filter-actions">
            <button className="icon">
              {t("pages.collections.partials.filter.actions.reset")}
            </button>
            <button className="primary">
              {t("pages.collections.partials.filter.actions.apply")}
            </button>
          </div>
        </div>
      </ModalSticky>
    </>
  );
};

export default Filter;
