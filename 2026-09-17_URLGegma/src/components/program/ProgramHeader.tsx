import { useAppDispatch, useAppSelector } from "../../hooks";
import { TextField, Box, Button, Snackbar, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { setProgramName } from "../../features/program/programSlice";
import { compressProgram } from "../../utils/programUrlState";
import { useHasUnsavedChanges } from "../../hooks/useHasUnsavedChanges";

export function ProgramHeader() {
  const { t } = useTranslation(["program"]);
  const program = useAppSelector((state) => state.program);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const hasUnsavedChanges = useHasUnsavedChanges();
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    const encoded = compressProgram(program);
    navigate(`/program/${encoded}`);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label={t("program:programName")}
        value={program.name}
        onChange={(e) => dispatch(setProgramName(e.target.value))}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant={hasUnsavedChanges ? "contained" : "outlined"}
          color="primary"
          onClick={handleSave}
        >
          {t("program:save")}
        </Button>
        <Button
          variant="outlined"
          onClick={handleCopy}
          disabled={!hasUnsavedChanges && !params.encoded}
        >
          {t("program:copy")}
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success">{t("program:copySuccess")}</Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
