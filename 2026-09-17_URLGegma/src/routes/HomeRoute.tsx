import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

function HomeRoute() {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <SEO
        title={t("home:htmlTag.title")}
        description={t("home:htmlTag.description")}
      />

      <Container component="main"></Container>
    </>
  );
}

export default HomeRoute;
