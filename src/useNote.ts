import { useOutletContext } from "react-router";
import { Note } from "./App";

export function useNote() {

  return useOutletContext<Note>();
}
