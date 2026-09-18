import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { Box, Link, Stack, type SxProps, type Theme } from "@mui/material";
import ColorSchemeDropdown from "./ColorSchemeDropdown";
import LanguageChangeDropdown from "./LanguageChangeDropdown";

const navLinkStyles: SxProps<Theme> = {
  color: "text.primary",
  px: 1.5,
  py: 1,
  borderBottom: 2,
  borderColor: "transparent",
  "&.active": { borderColor: "primary.main" },
};

function Header() {
  const { t } = useTranslation(["navigation"]);

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        borderBottom: 1,
        borderColor: "divider",
        px: 2,
        pt: 0.5,
      }}
    >
      <Stack component="nav" direction="row">
        <Link
          component={NavLink}
          end
          to="/"
          underline="none"
          sx={navLinkStyles}
        >
          {t("navigation:home")}
        </Link>

        <Link
          component={NavLink}
          end
          to="/program"
          underline="none"
          sx={navLinkStyles}
        >
          {t("navigation:program")}
        </Link>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <LanguageChangeDropdown />
        <ColorSchemeDropdown />
      </Stack>
    </Box>
  );
}

export default Header;
