import * as t from "io-ts";
import { optional } from "io-ts-extra";
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const CreateBuildingCodec = t.type({
  name: t.string,
});

export interface ICreateBuilding extends t.TypeOf<typeof CreateBuildingCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const CreateQuizCodec = t.type({
  quiz: t.string,
  categoryName: t.string,
  choices: t.array(t.type({ choice: t.string })),
  answer: t.string,
});

export interface ICreateQuiz extends t.TypeOf<typeof CreateQuizCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const SubmitQuestionCodec = t.type({
  user: t.string,
  categoryName: t.string,
  roundQuizes: t.array(t.type({ userChoiceId: t.number, quizId: t.number })),
});

export interface ISubmitQuestion extends t.TypeOf<typeof SubmitQuestionCodec> {}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const GetResultsCodec = t.type({
  name: t.string,
});

export interface IGetResults extends t.TypeOf<typeof GetResultsCodec> {}