import TypescriptCode from "../components/TSCode";
import { formulasArray } from "../data/formulas";
import SEO from "../components/SEO";

import styles from "./FormulasRoute.module.css";

function FormulasRoute() {
  return (
    <>
      <SEO
        title="OraOraCalc Formulas - Math Formula Snippets Written In Typescript"
        description="Quickly Calculate Percentages And Explore Practical TypeScript Math Implementations. Ideal For Students And Developers"
      />

      <div className={styles.topContainer}>
        <h1>General Info</h1>
        <div>
          <i>Order of Operations</i> / <i>PADMAS</i>
          <span> in </span>
          <b>Javascript / Typescript</b>
          <ol>
            <li>()</li>
            <li>**</li>
            <li>*, %</li>
            <li>+, -</li>
          </ol>
        </div>
        <h2>Formulas In Typescript</h2>
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
