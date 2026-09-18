import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Program, ExerciseSet } from "../../types/program";

const DEFAULT_DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const initialState: Program = {
  name: "",
  days: DEFAULT_DAYS.map((dayName) => ({
    id: dayName,
    name: dayName,
    exercises: [],
    restDay: false,
  })),
};

const findDay = (state: Program, dayId: string) =>
  state.days.find((d) => d.id === dayId);
const findExercise = (state: Program, dayId: string, exerciseId: string) =>
  findDay(state, dayId)?.exercises.find((e) => e.id === exerciseId);

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgramName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addDay: (state) => {
      state.days.push({
        id: crypto.randomUUID(),
        name: "newDay",
        exercises: [],
        restDay: false,
      });
    },
    removeDay: (state, action: PayloadAction<string>) => {
      state.days = state.days.filter((d) => d.id !== action.payload);
    },
    toggleRestDay: (state, action: PayloadAction<string>) => {
      const day = findDay(state, action.payload);
      if (day) {
        day.restDay = !day.restDay;
      }
    },
    addExercise: (state, action: PayloadAction<string>) => {
      const day = findDay(state, action.payload);
      if (day) {
        day.exercises.push({
          id: crypto.randomUUID(),
          name: "",
          sets: [{ reps: 0, weight: null, sets: 1 }],
        });
      }
    },
    removeExercise: (
      state,
      action: PayloadAction<{ dayId: string; exerciseId: string }>,
    ) => {
      const day = findDay(state, action.payload.dayId);
      if (day) {
        day.exercises = day.exercises.filter(
          (e) => e.id !== action.payload.exerciseId,
        );
      }
    },
    renameExercise: (
      state,
      action: PayloadAction<{
        dayId: string;
        exerciseId: string;
        name: string;
      }>,
    ) => {
      const exercise = findExercise(
        state,
        action.payload.dayId,
        action.payload.exerciseId,
      );
      if (exercise) exercise.name = action.payload.name;
    },
    addSet: (
      state,
      action: PayloadAction<{ dayId: string; exerciseId: string }>,
    ) => {
      const exercise = findExercise(
        state,
        action.payload.dayId,
        action.payload.exerciseId,
      );
      if (exercise) exercise.sets.push({ reps: 0, weight: null, sets: 1 });
    },
    removeSet: (
      state,
      action: PayloadAction<{
        dayId: string;
        exerciseId: string;
        setIndex: number;
      }>,
    ) => {
      const exercise = findExercise(
        state,
        action.payload.dayId,
        action.payload.exerciseId,
      );
      if (exercise) exercise.sets.splice(action.payload.setIndex, 1);
    },
    updateSet: (
      state,
      action: PayloadAction<{
        dayId: string;
        exerciseId: string;
        setIndex: number;
        updates: Partial<ExerciseSet>;
      }>,
    ) => {
      const exercise = findExercise(
        state,
        action.payload.dayId,
        action.payload.exerciseId,
      );
      if (exercise && exercise.sets[action.payload.setIndex]) {
        Object.assign(
          exercise.sets[action.payload.setIndex],
          action.payload.updates,
        );
      }
    },

    loadProgram: (_state, action: PayloadAction<Program>) => {
      return action.payload;
    },
  },
});

export const {
  setProgramName,
  addDay,
  removeDay,
  addExercise,
  removeExercise,
  renameExercise,
  addSet,
  removeSet,
  updateSet,
  toggleRestDay,
  loadProgram,
} = programSlice.actions;
export const programReducer = programSlice.reducer;
