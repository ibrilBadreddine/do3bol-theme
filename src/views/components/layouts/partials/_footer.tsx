import { Link } from "react-router-dom";
import StoreLogo from "@/assets/images/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-core">
        <div className="store-box">
          <Link to="/">
            <img src={StoreLogo} alt="store logo" />
          </Link>
        </div>
        <div className="links-box">
          <div className="navigation">
            <p>{t("layouts.footer.navigation.terms.title")}</p>
            <div className="links">
              <Link to="/">
                {t("layouts.footer.navigation.terms.terms_and_conditions")}
              </Link>
              <Link to="/">
                {t("layouts.footer.navigation.terms.return_policy")}
              </Link>
              <Link to="/">
                {t("layouts.footer.navigation.terms.privacy_policy")}
              </Link>
            </div>
          </div>
          <div className="navigation">
            <p>{t("layouts.footer.navigation.us.title")}</p>
            <div className="links">
              <Link to="/">{t("layouts.footer.navigation.us.about_us")}</Link>
              <Link to="/">{t("layouts.footer.navigation.us.how_to_pay")}</Link>
              <Link to="/">
                {t("layouts.footer.navigation.us.shipping_and_delivery")}
              </Link>
            </div>
          </div>
          <div className="navigation">
            <p>{t("layouts.footer.navigation.contact.title")}</p>
            <div className="links">
              <Link to="/">
                {t("layouts.footer.navigation.contact.contact_us")}
              </Link>
              <Link to="/">{t("layouts.footer.navigation.contact.faq")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">{t("layouts.footer.copyrights")}</div>
    </footer>
  );
}
