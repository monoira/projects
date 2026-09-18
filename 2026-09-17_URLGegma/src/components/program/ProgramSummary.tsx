import { useAppSelector } from "../../hooks";
import {
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDayTranslation } from "../../utils/dayTranslation";

export function ProgramSummary() {
  const { t } = useTranslation(["program"]);
  const translateDay = useDayTranslation();
  const days = useAppSelector((state) => state.program.days);
  const program = useAppSelector((state) => state.program);

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: "32px" }}>
        {program.name && `${program.name} - `}
        {t("program:programSummary")}
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Stack spacing={1} sx={{ mt: 1 }}>
          {days.map((day) => (
            <Stack
              key={day.id}
              direction="row"
              spacing={1}
              sx={{ alignItems: "baseline" }}
            >
              <Typography
                variant="subtitle2"
                sx={{ minWidth: 96, textTransform: "capitalize" }}
              >
                {translateDay(day.name)}
              </Typography>
              {day.restDay ? (
                <Chip size="small" label={t("program:restDay")} />
              ) : (
                <List dense disablePadding sx={{ flex: 1 }}>
                  {day.exercises.map((exercise) => {
                    const firstSet = exercise.sets[0];
                    const details = firstSet
                      ? `${firstSet.sets}x${firstSet.reps}${firstSet.weight == null ? "" : ` @ ${firstSet.weight}kg`}`
                      : "";

                    return (
                      <ListItem key={exercise.id} disableGutters>
                        <ListItemText
                          primary={`${exercise.name} ${details}`.trim()}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Stack>
          ))}
        </Stack>
      </Paper>
    </>
  );
}
