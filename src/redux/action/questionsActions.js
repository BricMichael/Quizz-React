import { types } from "../types";

export const correctAnswerAction = () => ({ type: types.correctAnswer });

export const resetStateAction = () => ({ type: types.resetScore });