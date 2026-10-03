import { Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation(["common"]);

  return (
    <Box
      component="footer"
      sx={{
        minHeight: 64,
        display: "grid",
        placeItems: "center",
        borderTop: 1,
        borderColor: "divider",
        fontWeight: "bold",
      }}
    >
      <Link href="https://github.com/monoira" target="_blank">
        {t("common:author")}
      </Link>
    </Box>
  );
}

export default Footer;
