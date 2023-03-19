import { PrismaClient } from "../../prisma/client";
import { ICreateBuilding } from "./squaduled.interface";

export const prisma = new PrismaClient();

// BUILDING %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const createBuilding = (args: ICreateBuilding) =>
  prisma.triviaCategory.create({
    data: {
      name: args.name,
    },
  });

export const getAllBuilding = () => prisma.triviaCategory.findMany();


// FACILITY %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const createFacility = () => {};

export const getAllFacility = () => prisma.triviaCategory.findMany();

export const updateFacilityHandler = () => {};

export const deleteFacilityHandler = () => {};

// ROOM %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const createRoom = () => {};

export const getAllRoom = () => prisma.triviaCategory.findMany();

export const updateRoomHandler = () => {};

export const deleteRoomHandler = () => {};

// OFFICE HOUR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const getAllOfficeHour = () => prisma.triviaCategory.findMany();

export const updateOfficeHour = () => {};

// BOOKING %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const createBooking = () => {};

export const getAllBooking = () => prisma.triviaCategory.findMany();

export const updateBookingHandler = () => {};

export const deleteBookingHandler = () => {};

// USER %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const createUser = () => {};

export const getAllUser = () => prisma.triviaCategory.findMany();

export const updateUserHandler = () => {};

export const deleteUserHandler = () => {};

// export const updateCategory = (args: { id: number; name: string }) =>
//   prisma.triviaCategory.update({
//     where: {
//       id: args.id,
//     },
//     data: {
//       name: args.name,
//     },
//   });

// QUIZ %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// export const createQuiz = (args: ICreateQuiz) =>
//   prisma.triviaQuiz.create({
//     data: {
//       quiz: args.quiz,
//       answer: { create: { choice: args.answer } },
//       choices: { create: args.choices },
//       category: {
//         connect: {
//           name: args.categoryName,
//         },
//       },
//     },
//   });

// export const updateQuiz = (args: {
//   quizId: number;
//   quiz: string;
//   answer: string;
//   categoryName: string;
//   choices: { choice: string }[];
// }) =>
//   prisma.triviaQuiz.update({
//     where: {
//       id: args.quizId,
//     },
//     data: {
//       quiz: args.quiz,
//       answer: { create: { choice: args.answer } },
//       choices: { create: args.choices },
//       category: {
//         connect: {
//           name: args.categoryName,
//         },
//       },
//     },
//   });

// export const getAllQuizes = () => prisma.triviaQuiz.findMany();

// export const getQuizesByCategory = async (args: { categoryName: string }) => {
//   const quizes = await prisma.triviaQuiz.findMany({
//     where: {
//       categoryName: args.categoryName,
//     },
//     include: { choices: true, answer: true },
//   });
//   const result = quizes
//     .sort((a, b) => Math.random() - 0.5)
//     .slice(0, 3)
//     .map((r) => ({
//       id: r.id,
//       quiz: r.quiz,
//       choices: [
//         ...r.choices
//           .sort((a, b) => Math.random() - 0.5)
//           .slice(0, 3)
//           .map((c) => ({
//             id: c.id,
//             choice: c.choice,
//           })),
//         {
//           id: r.answer.id,
//           choice: r.answer.choice,
//         },
//       ].sort((a, b) => Math.random() - 0.5),
//     }));

//   return result;
// };
// // ROUND %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// export const submitQuestion = async (args: ISubmitQuestion) => {
//   try {
//     const questions = await prisma.triviaQuiz.findMany({
//       where: {
//         categoryName: args.categoryName,
//         OR: args.roundQuizes.map((r) => ({ id: r.quizId })),
//       },
//       include: { answer: true },
//     });
//     console.log("QuestionByCat", questions);

//     const totalScore = args.roundQuizes.reduce((acc, r) => {
//       const findQuestion = questions.find((q) => q.id === r.quizId);
//       if (!findQuestion) {
//         throw new Error(`Question with id ${r.quizId} not found`);
//       }
//       const sumScore = findQuestion.answerChoiceId === r.userChoiceId;
//       return acc + (sumScore ? 1 : 0);
//     }, 0);
//     console.log("Total score:", totalScore);
//     // return totalScore;
//     const result = prisma.triviaRound.create({
//       data: {
//         user: args.user,
//         categoryName: args.categoryName,
//         score: totalScore,
//         roundQuizes: {
//           create: args.roundQuizes.map((r) => ({
//             userChoiceId: r.userChoiceId,
//             quizId: r.quizId,
//           })),
//         },
//       },
//     });
//     return result;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };
// // RESULTS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// export const getResults = (args: IGetResults) =>
//   prisma.triviaRound.findMany({
//     where: {
//       categoryName: args.name,
//     },
//     orderBy: { score: "desc" },
//   });
