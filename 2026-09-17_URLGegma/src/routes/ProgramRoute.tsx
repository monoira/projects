import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loadProgram, initialState } from "../features/program/programSlice";
import { decompressProgram } from "../utils/programUrlState";
import { ProgramDayList } from "../components/program/ProgramDayList";
import { ProgramHeader } from "../components/program/ProgramHeader";
import { ProgramSummary } from "../components/program/ProgramSummary";
import SEO from "../components/SEO";

export default function ProgramRoute() {
  const { t } = useTranslation(["home", "program"]);
  const { encoded } = useParams();
  const dispatch = useAppDispatch();
  const program = useAppSelector((state) => state.program);

  useEffect(() => {
    if (encoded) {
      const program = decompressProgram(encoded);
      if (program) {
        dispatch(loadProgram(program));
      }
    } else {
      dispatch(loadProgram(initialState));
    }
  }, [encoded, dispatch]);

  return (
    <>
      <SEO
        title={
          program.name
            ? `${t("home:htmlTag.title")} - ${program.name}`
            : t("home:htmlTag.title")
        }
        description={
          program.name
            ? `${t("home:htmlTag.description")} - ${program.name}`
            : t("home:htmlTag.description")
        }
      />

      <Container
        component="main"
        sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
      >
        <ProgramSummary />
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", paddingBottom: "16px", marginTop: "24px" }}
        >
          {t("program:title")}
        </Typography>
        <ProgramHeader />
        <ProgramDayList />
      </Container>
    </>
  );
}
