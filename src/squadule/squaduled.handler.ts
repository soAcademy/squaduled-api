import { Request, Response } from "express";
import { createBuilding, getAllBooking, getAllBuilding, getAllFacility, getAllOfficeHour, getAllRoom, getAllUser } from "./squaduled.resolver";
export const createBuildingHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createBuilding({
      name: args.name,
    }); 
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getAllBuildingHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllBuilding();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const createFacilityHandler = async (req: Request, res: Response) => {};
export const getAllFacilityHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllFacility();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateFacilityHandler = async (req: Request, res: Response) => {};
export const deleteFacilityHandler = async (req: Request, res: Response) => {};
export const createRoomHandler = async (req: Request, res: Response) => {};
export const getAllRoomHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllRoom();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateRoomHandler = async (req: Request, res: Response) => {};
export const deleteRoomHandler = async (req: Request, res: Response) => {};
export const getAllOfficeHourHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllOfficeHour();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateOfficeHourHandler = async (
  req: Request,
  res: Response
) => {};
export const createBookingHandler = async (req: Request, res: Response) => {};
export const getAllBookingHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllBooking();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getAllUserHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllUser();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const logInHandler = async (req: Request, res: Response) => {};
export const checkIsOfficeHourHandler = async (
  req: Request,
  res: Response
) => {};
export const checkAvailableRoomHandler = async (
  req: Request,
  res: Response
) => {};


// import { Request, Response } from "express";
// import { createCategory, createQuiz, getAllQuizes, getCategories, getQuizesByCategory, getResults, submitQuestion } from "./trivia.resolver";

// export const createCategoryHandler = async (req: Request, res: Response) => {
//   const args = req?.body;
//   try {
//     const result = await createCategory({
//       name: args.name,
//     }); 
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getCategoriesHandler = async (req: Request, res: Response) => {
//   try {
//     const result = await getCategories();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const createQuizHandler = async (req: Request, res: Response) => {
//   const args = req?.body;
//   try {
//     const result = await createQuiz({
//       quiz: args.quiz,
//       answer: args.answer,
//       categoryName: args.categoryName,
//       choices: args.choices,
//     });
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getAllQuizesHandler = async (req: Request, res: Response) => {
//   try {
//     const result = await getAllQuizes();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getQuizesByCategoryHandler = async (req: Request, res: Response) => {
//   const body = req?.body;
//   try {
//     const result = await getQuizesByCategory(body);
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const submitQuestionHandler = async (req: Request, res: Response) => {
//   const body = req?.body;
//   try {
//     const result = await submitQuestion(body); 
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

// export const getResultsHandler = async (req: Request, res: Response) => {
//   const body = req?.body;
//   try {
//     const result = await getResults(body); 
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };