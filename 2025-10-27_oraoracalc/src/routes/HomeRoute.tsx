import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { FormData } from "../types/types";
import styles from "./HomeRoute.module.css";
import SEO from "../components/SEO";

function HomeRoute() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    percentage: 20,
    number: 200,
  });

  const answer = (formData.percentage / 100) * formData.number;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <SEO
        title={t("home.seo.title")}
        description={t("home.seo.description")}
      />
      <main className={styles.main}>
        <div>
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                aria-label={t("home.percentageInputLabel")}
                type="number"
                name="percentage"
                defaultValue={formData.percentage}
                onChange={handleInputChange}
              />
              <span className={styles.span}>%</span>
            </div>
            <div className={styles.span}>{t("home.of")}</div>
          </div>
          <input
            aria-label={t("home.numberInputLabel")}
            type="number"
            name="number"
            defaultValue={formData.number}
            onChange={handleInputChange}
          />
          <div className={styles.span}>{t("home.is")}</div>
        </div>

        <div>
          <div style={{ textAlign: "center" }}>{answer}</div>
        </div>
      </main>
    </>
  );
}
export default HomeRoute;
