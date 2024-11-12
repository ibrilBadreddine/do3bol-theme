import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import ModalSticky from "@/views/components/shared/modal/sticky";
import { useTranslation } from "react-i18next";

const Filter: React.FC<{
  products_length: number;
  setSort: (field: "price" | "newest" | "a-z", order: "asc" | "desc") => void;
}> = ({ products_length, setSort }) => {
  const { t } = useTranslation();
  const [filterMobile, setFilterMobile] = useState(false);

  return (
    <>
      <div className="filter-box">
        <span className="result-count">
          {t("pages.collections.partials.filter.count")}
        </span>
        <div className="filter-options">
          <button className="link">
            {t("pages.collections.partials.filter.categories.options.opt_1")}
          </button>
          <button className="link">
            {t("pages.collections.partials.filter.categories.options.opt_2")}
          </button>
          <button className="link">
            {t("pages.collections.partials.filter.categories.options.opt_3")}
          </button>
          <button className="link">
            {t("pages.collections.partials.filter.categories.options.opt_4")}
          </button>
        </div>
        <div className="filter-sort">
          <label>
            <Icon name="arrows_up_down" size={15} />
            {t("pages.collections.partials.filter.sort.label")}
          </label>
          <div className="sort-options">
            <button className="icon">
              {t("pages.collections.partials.filter.sort.options.opt_1")}
              <Icon name="chevron_up" size={15} />
            </button>
            <button className="icon">
              {t("pages.collections.partials.filter.sort.options.opt_2")}
              <Icon name="chevron_up" size={15} />
            </button>
            <button className="icon">
              {t("pages.collections.partials.filter.sort.options.opt_3")}
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
        title={t("pages.collections.partials.filter.head.title")}
        subtitle={t("pages.collections.partials.filter.head.subtitle")}
        isOpen={filterMobile}
        setModal={setFilterMobile}>
        <div className="filter-box-mobile">
          <div className="filter-tab">
            <label>
              {t("pages.collections.partials.filter.categories.label")}
            </label>
            <div className="options">
              <button className="icon">
                {t(
                  "pages.collections.partials.filter.categories.options.opt_1"
                )}
              </button>
              <button className="icon">
                {t(
                  "pages.collections.partials.filter.categories.options.opt_2"
                )}
              </button>
              <button className="icon">
                {t(
                  "pages.collections.partials.filter.categories.options.opt_3"
                )}
              </button>
              <button className="icon">
                {t(
                  "pages.collections.partials.filter.categories.options.opt_4"
                )}
              </button>
            </div>
          </div>
          <div className="filter-tab">
            <label>{t("pages.collections.partials.filter.sort.label")}</label>
            <div className="options">
              <button className="icon">
                {t("pages.collections.partials.filter.sort.options.opt_1")}
                <Icon name="chevron_up" size={15} />
              </button>
              <button className="icon">
                {t("pages.collections.partials.filter.sort.options.opt_2")}
                <Icon name="chevron_up" size={15} />
              </button>
              <button className="icon">
                {t("pages.collections.partials.filter.sort.options.opt_3")}
                <Icon name="chevron_up" size={15} />
              </button>
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
