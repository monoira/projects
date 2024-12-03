import { useState } from "react";
import type { IFormData } from "../types/types";
import SEO from "../SEO";

const mainStyles: React.CSSProperties = {
  padding: "clamp(20px, 10%, 40px)",
  textAlign: "center",
  fontSize: "2rem",
};

const spanStyles: React.CSSProperties = {
  padding: "8px",
};

function HomePage() {
  const [formData, setFormData] = useState<IFormData>({
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
        title="Percento - Percentage Calculator And Typescript Math Snippets"
        description="Your All-In-One Tool For Quick Percentage Calculations And TypeScript Math Exploration. Simple & Effective"
      />
      <main style={mainStyles}>
        <div>
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="number"
                name="percentage"
                defaultValue={formData.percentage}
                onChange={handleInputChange}
              />
              <span style={spanStyles}>%</span>
            </div>
            <div style={spanStyles}>of</div>
          </div>
          <input
            type="number"
            name="number"
            defaultValue={formData.number}
            onChange={handleInputChange}
          />
          <div style={spanStyles}>is</div>
        </div>

        <div>
          <div style={{ textAlign: "center" }}>{answer}</div>
        </div>
      </main>
    </>
  );
}
export default HomePage;
