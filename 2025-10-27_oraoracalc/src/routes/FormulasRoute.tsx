import { useTranslation } from "react-i18next";
import TypescriptCode from "../components/TSCode";
import { formulasArray } from "../data/formulas";
import SEO from "../components/SEO";

import styles from "./FormulasRoute.module.css";

function FormulasRoute() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("formulas.seo.title")}
        description={t("formulas.seo.description")}
      />

      <div className={styles.topContainer}>
        <h1>{t("formulas.generalInfo")}</h1>
        <div>
          <i>{t("formulas.orderOfOperations")}</i> / <i>PADMAS</i>
          <b>
            <span> {t("formulas.inJavascriptTypescript")} </span>
          </b>
          <ol>
            <li>()</li>
            <li>**</li>
            <li>*, %</li>
            <li>+, -</li>
          </ol>
        </div>
        <h2>{t("formulas.formulasInTypescript")}</h2>
      </div>

      <main>
        {formulasArray.map((formula, i) => (
          <div key={i} className={styles.codesContainer}>
            <h3 className={styles.formulaName}>{formula.name}:</h3>
            <TypescriptCode name={formula.name} code={formula.code} />
          </div>
        ))}
      </main>
    </>
  );
}

export default FormulasRoute;
