import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  setColorScheme,
  type ColorScheme,
} from "../features/colorScheme/colorSchemeSlice";
import { useAppDispatch } from "../hooks";
import Palette from "@mui/icons-material/Palette";

function ColorSchemeDropdown() {
  const { t } = useTranslation(["common"]);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const changeColorScheme = (scheme: ColorScheme) => {
    dispatch(setColorScheme(scheme));
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="small"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Palette />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => changeColorScheme("dark")}>
          {t("common:colorSchemes.dark")}
        </MenuItem>
        <MenuItem onClick={() => changeColorScheme("light")}>
          {t("common:colorSchemes.light")}
        </MenuItem>
      </Menu>
    </>
  );
}
export default ColorSchemeDropdown;
