import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

function ErrorRoute() {
  const { t } = useTranslation(["common"]);

  return <Container component="main">{t("common:error")}</Container>;
}

export default ErrorRoute;
