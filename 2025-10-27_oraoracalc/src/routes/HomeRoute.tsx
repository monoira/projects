import { useState } from "react";
import type { FormData } from "../types/types";
import styles from "./HomeRoute.module.css";
import SEO from "../components/SEO";

function HomeRoute() {
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
        title="OraOraCalc - Percentage Calculator And Typescript Math Snippets"
        description="Your All-In-One Tool For Quick Percentage Calculations And TypeScript Math Exploration. Simple & Effective"
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
                aria-label="percentage of total number"
                type="number"
                name="percentage"
                defaultValue={formData.percentage}
                onChange={handleInputChange}
              />
              <span className={styles.span}>%</span>
            </div>
            <div className={styles.span}>of</div>
          </div>
          <input
            aria-label="total number you want to get percentage of"
            type="number"
            name="number"
            defaultValue={formData.number}
            onChange={handleInputChange}
          />
          <div className={styles.span}>is</div>
        </div>

        <div>
          <div style={{ textAlign: "center" }}>{answer}</div>
        </div>
      </main>
    </>
  );
}
export default HomeRoute;
