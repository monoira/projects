export interface ExerciseSet {
  reps: number;
  weight: number | null;
  sets: number;
}

export interface Exercise {
  id: string;
  name: string;
  sets: ExerciseSet[];
}

export interface WorkoutDay {
  id: string;
  name: string;
  exercises: Exercise[];
  restDay: boolean;
}

export interface Program {
  name: string;
  days: WorkoutDay[];
}
