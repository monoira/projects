import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  Paper,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { useDayTranslation } from "../../utils/dayTranslation";
import type { ExerciseSet } from "../../types/program";
import {
  addExercise,
  renameExercise,
  removeExercise,
  updateSet,
  removeSet,
  toggleRestDay,
} from "../../features/program/programSlice";

export function ProgramDayList() {
  const { t } = useTranslation(["program"]);
  const translateDay = useDayTranslation();
  const days = useAppSelector((state) => state.program.days);
  const dispatch = useAppDispatch();
  const setFields: {
    key: keyof ExerciseSet;
    label: string;
    parse: (value: string) => number | null;
  }[] = [
    {
      key: "sets",
      label: t("program:sets"),
      parse: (value) => Number(value) || 1,
    },
    {
      key: "reps",
      label: t("program:reps"),
      parse: (value) => Number(value) || 0,
    },
    {
      key: "weight",
      label: t("program:weight"),
      parse: (value) => (value ? Number(value) : null),
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {days.map((day) => (
        <Paper key={day.id} sx={{ p: 2, opacity: day.restDay ? 0.5 : 1 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {translateDay(day.name)}
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={day.restDay}
                  onChange={() => dispatch(toggleRestDay(day.id))}
                />
              }
              label={t("program:restDay")}
            />
          </Stack>
          <Stack
            spacing={1}
            sx={{ mt: 2, pointerEvents: day.restDay ? "none" : "auto" }}
          >
            {day.exercises.map((exercise) => (
              <Stack
                key={exercise.id}
                spacing={1}
                sx={{
                  p: 1,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <TextField
                    value={exercise.name}
                    onChange={(e) =>
                      dispatch(
                        renameExercise({
                          dayId: day.id,
                          exerciseId: exercise.id,
                          name: e.target.value,
                        }),
                      )
                    }
                    fullWidth
                  />
                  <IconButton
                    aria-label={t("program:removeExercise")}
                    onClick={() =>
                      dispatch(
                        removeExercise({
                          dayId: day.id,
                          exerciseId: exercise.id,
                        }),
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={0.5}>
                  {exercise.sets.map((set, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      {setFields.map(({ key, label, parse }) => (
                        <TextField
                          key={key}
                          type="number"
                          label={label}
                          value={set[key] ?? ""}
                          onChange={(e) =>
                            dispatch(
                              updateSet({
                                dayId: day.id,
                                exerciseId: exercise.id,
                                setIndex: index,
                                updates: { [key]: parse(e.target.value) },
                              }),
                            )
                          }
                          sx={{ flex: 1 }}
                        />
                      ))}
                      <IconButton
                        aria-label={t("program:removeSet")}
                        onClick={() =>
                          dispatch(
                            removeSet({
                              dayId: day.id,
                              exerciseId: exercise.id,
                              setIndex: index,
                            }),
                          )
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            ))}
            <Button
              variant="outlined"
              onClick={() => dispatch(addExercise(day.id))}
            >
              {t("program:addExercise")}
            </Button>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}
