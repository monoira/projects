import LZString from "lz-string";
import type { Program } from "../types/program";

type CompactSet = [number, number | null, number];

interface CompactExercise {
  n: string;
  s: CompactSet[];
}

interface CompactDay {
  n: string;
  r?: boolean;
  e: CompactExercise[];
}

interface CompactProgram {
  n: string;
  d: CompactDay[];
}

export function compressProgram(program: Program): string {
  const compact: CompactProgram = {
    n: program.name,
    d: program.days.map((day) => ({
      n: day.name,
      r: day.restDay,
      e: day.exercises.map((ex) => ({
        n: ex.name,
        s: ex.sets.map((set) => [set.reps, set.weight ?? null, set.sets]),
      })),
    })),
  };
  return LZString.compressToEncodedURIComponent(JSON.stringify(compact));
}

export function decompressProgram(encoded: string): Program | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    const compact: CompactProgram = JSON.parse(json);

    if (!compact || !Array.isArray(compact.d)) return null;

    return {
      name: compact.n ?? "",
      days: compact.d.map((day) => ({
        id: crypto.randomUUID(),
        name: day.n ?? "",
        restDay: day.r ?? false,
        exercises: (day.e ?? []).map((ex) => ({
          id: crypto.randomUUID(),
          name: ex.n ?? "",
          sets: (ex.s ?? []).map((set) => ({
            reps: set[0] ?? 0,
            weight: set[1],
            sets: set[2] ?? 1,
          })),
        })),
      })),
    };
  } catch {
    return null;
  }
}
