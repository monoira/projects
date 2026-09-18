import { useParams } from "react-router";
import { useAppSelector } from "../hooks";
import { compressProgram } from "../utils/programUrlState";

export function useHasUnsavedChanges(): boolean {
  const params = useParams();
  const program = useAppSelector((state) => state.program);
  const savedParam = params.encoded;

  if (!savedParam) {
    return (
      program.name !== "" || program.days.some((d) => d.exercises.length > 0)
    );
  }

  return compressProgram(program) !== savedParam;
}
