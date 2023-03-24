import { PrismaClient } from "../../prisma/client";
import {
  ICheckAvailableRoom,
  ICheckIsOfficeHour,
  ICreateBooking,
  ICreateBuilding,
  ICreateFacility,
  ICreateRoom,
  ICreateUser,
  IDeleteBooking,
  // IDeleteBuilding,
  IDeleteFacility,
  IDeleteRoom,
  IHello,
  IUpdateBooking,
  IUpdateFacility,
  IUpdateOfficeHour1,
  IUpdateOfficeHour2,
  IUpdateRoom,
  IUpdateUser,
} from "./squaduled.interface";
var localizedFormat = require("dayjs/plugin/localizedFormat");
const dayjs = require("dayjs");
dayjs.extend(localizedFormat);
// import dayjs from 'dayjs' // ES 2015
// dayjs.extend(LocalizedFormat)

export const prisma = new PrismaClient();

// BUILDING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createBuilding = (args: ICreateBuilding) =>
  prisma.building.create({
    data: {
      name: args.name,
    },
  });

export const getAllBuilding = () => prisma.building.findMany();

// export const deleteBuilding = (args: IDeleteBuilding) =>
//   prisma.building.delete({
//     where: {
//       id: args.id,
//     },
//   });

// FACILITY +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createFacility = (args: ICreateFacility) =>
  prisma.facility.create({
    data: {
      name: args.name,
    },
  });

export const getAllFacility = () => prisma.facility.findMany();

export const updateFacility = (args: IUpdateFacility) =>
  prisma.facility.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const deleteFacility = (args: IDeleteFacility) =>
  prisma.facility.delete({
    where: {
      id: args.id,
    },
  });

// ROOM +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createRoom = (args: ICreateRoom) =>
  prisma.room.create({
    data: {
      name: args.name,
      floor: args.floor,
      capacityMax: args.capacity,
      building: {
        connect: {
          id: args.buildingId,
        },
      },
      roomToFacility: {
        create: args.facilities,
      },
    },
    include: {
      roomToFacility: true,
      building: true,
    },
  });

export const getAllRoom = () =>
  prisma.room.findMany({
    include: {
      roomToFacility: {
        include: {
          facility: true,
        },
      },
      building: true,
    },
  });

export const getRoomByBuildingId = async (args: { buildingId: number }) => {
  let result = await prisma.room.findMany({
    where: {
      buildingId: args.buildingId,
    },
    include: {
      roomToFacility: {
        include: {
          facility: true,
        },
      },
      building: true,
    },
  });

  //flat
  let resultMap = result.map((result) => {
    const roomToFacility = result.roomToFacility.map((facility) => {
      return { facilityId: facility.id, facilityName: facility.facility.name };
    });

    return {
      ...result,
      facilities: roomToFacility,
    };
  });

  return resultMap;
};

// update room api ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const updateRoom = async (args: IUpdateRoom) => {
  //clear roomToFacility
  await prisma.roomToFacility.deleteMany({
    where: { roomId: args.id },
  });

  //add roomToFacility
  await prisma.roomToFacility.createMany({
    data: args.facilities.map((facility) => {
      return { roomId: args.id, facilityId: facility.facilityId };
    }),
  });

  //update
  return await prisma.room.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      capacityMax: args.capacity,
    },
    include: {
      roomToFacility: {
        include: {
          facility: true,
        },
      },
      building: true,
    },
  });
};

//++++++++++++++++++++++++

export const deleteRoom = (args: IDeleteRoom) =>
  prisma.room.delete({
    where: {
      id: args.id,
    },
  });

// OFFICE HOUR 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getAllOfficeHour1 = () => prisma.officeHour1.findMany();

export const updateOfficeHour1 = (args: IUpdateOfficeHour1) =>
  prisma.officeHour1.update({
    where: {
      id: args.id,
    },
    data: {
      day: args.day,
      isOpen: args.open,
      openTime: args.openTime,
      closeTime: args.closeTime,
    },
  });

// OFFICE HOUR 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getAllOfficeHour2 = () => prisma.officeHour2.findMany();

export const updateOfficeHour2 = (args: IUpdateOfficeHour2) =>
  prisma.officeHour2.update({
    where: {
      id: args.id,
    },
    data: {
      isOpenMonday: args?.isOpenMonday ?? undefined,
      openingTimeMonday: args.openingTimeMonday ?? undefined,
      closingTimeMonday: args.closingTimeMonday ?? undefined,
      isOpenTuesday: args.isOpenTuesday ?? undefined,
      openingTimeTuesday: args.openingTimeTuesday ?? undefined,
      closingTimeTuesday: args.closingTimeTuesday ?? undefined,
      isOpenWednesday: args.isOpenWednesday ?? undefined,
      openingTimeWednesday: args.openingTimeWednesday ?? undefined,
      closingTimeWednesday: args.closingTimeWednesday ?? undefined,
      isOpenThursday: args.isOpenThursday ?? undefined,
      openingTimeThursday: args.openingTimeThursday ?? undefined,
      closingTimeThursday: args.closingTimeThursday ?? undefined,
      isOpenFriday: args.isOpenFriday ?? undefined,
      openingTimeFriday: args.openingTimeFriday ?? undefined,
      closingTimeFriday: args.closingTimeFriday ?? undefined,
      isOpenSaturday: args.isOpenSaturday ?? undefined,
      openingTimeSaturday: args.openingTimeSaturday ?? undefined,
      closingTimeSaturday: args.closingTimeSaturday ?? undefined,
      isOpenSunday: args.isOpenSunday ?? undefined,
      openingTimeSunday: args.openingTimeSunday ?? undefined,
      closingTimeSunday: args.closingTimeSunday ?? undefined,
    },
  });

// BOOKING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createBooking = async (args: ICreateBooking) => {
  let startDateFormat = dayjs(args.startDatetime).toDate();
  let endDateFormat = dayjs(args.endDatetime).toDate();
  return await prisma.booking.create({
    data: {
      startDatetime: startDateFormat,
      endDatetime: endDateFormat,
      room: {
        connect: {
          id: args.roomId,
        },
      },
      user: {
        connect: {
          id: args.userId,
        },
      },
    },
    include: { user: true, room: true },
  });
};

export const getAllBooking = () => prisma.booking.findMany();

export const updateBooking = (args: IUpdateBooking) =>
  prisma.booking.update({
    where: {
      id: args.id,
    },
    data: {
      startDatetime: args.startDatetime ?? undefined,
      endDatetime: args.endDatetime ?? undefined,
      roomId: args.roomId ?? undefined,
    },
  });

export const deleteBooking = (args: IDeleteBooking) =>
  prisma.booking.delete({
    where: {
      id: args.id,
    },
  });

// USER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createUser = (args: ICreateUser) =>
  prisma.user.create({
    data: {
      officerId: args.officerId,
      firstName: args.firstName,
      lastName: args.lastName,
      phone: args.phone,
      email: args.email,
      userName: args.userName,
      password: args.password,
      role: args.role,
    },
  });

export const getAllUser = () => prisma.user.findMany();

export const updateUser = (args: IUpdateUser) =>
  prisma.user.update({
    where: {
      id: args.id,
    },
    data: {
      firstName: args.firstName ?? undefined,
      lastName: args.lastName ?? undefined,
      phone: args.phone ?? undefined,
      email: args.email ?? undefined,
      userName: args.userName ?? undefined,
      password: args.password ?? undefined,
      role: args.role ?? undefined,
    },
  });

export const deleteUser = (args: IDeleteBooking) =>
  prisma.user.delete({
    where: {
      id: args.id,
    },
  });

// VALIDATE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const logIn = (args: IDeleteBooking) =>
  prisma.user.delete({
    where: {
      id: args.id,
    },
  });

export const checkAvailableRoom = async (args: ICheckAvailableRoom) => {
  const rooms = await prisma.room.findMany();
  const bookings = await prisma.booking.findMany();
  const roomFitToCapacity = rooms.filter(
    (room) => room.capacityMax >= args.capacity
  );

  if (roomFitToCapacity.length === 0) {
    
    return false;
  } else {
    return true;
  }

};

export const checkIsOfficeHour = async (args: ICheckIsOfficeHour) => {
  const officeHours = await prisma.officeHour2.findMany();
  const extractDate = dayjs(args.startDatetime).format("dddd");
  const inputStartDate = dayjs(args.startDatetime);
  const inputEndDate = dayjs(args.endDatetime);

  let result;
  let dayIsOpen = false;
  let dayOpenTime = "00:00:00";
  let dayCloseTime = "00:00:00";
  switch (extractDate) {
    case "Monday":
      dayIsOpen = officeHours[0].isOpenMonday;
      dayOpenTime = officeHours[0].openingTimeMonday;
      dayCloseTime = officeHours[0].closingTimeMonday;
      break;
    case "Tuesday":
      dayIsOpen = officeHours[0].isOpenTuesday;
      dayOpenTime = officeHours[0].openingTimeTuesday;
      dayCloseTime = officeHours[0].closingTimeTuesday;
      break;
    case "Wednesday":
      dayIsOpen = officeHours[0].isOpenWednesday;
      dayOpenTime = officeHours[0].openingTimeWednesday;
      dayCloseTime = officeHours[0].closingTimeWednesday;
      break;
    case "Thursday":
      dayIsOpen = officeHours[0].isOpenThursday;
      dayOpenTime = officeHours[0].openingTimeThursday;
      dayCloseTime = officeHours[0].closingTimeThursday;
      break;
    case "Friday":
      dayIsOpen = officeHours[0].isOpenFriday;
      dayOpenTime = officeHours[0].openingTimeFriday;
      dayCloseTime = officeHours[0].closingTimeFriday;
      break;
    case "Saturday":
      dayIsOpen = officeHours[0].isOpenSaturday;
      dayOpenTime = officeHours[0].openingTimeSaturday;
      dayCloseTime = officeHours[0].closingTimeSaturday;
      break;
    case "Sunday":
      dayIsOpen = officeHours[0].isOpenSunday;
      dayOpenTime = officeHours[0].openingTimeSunday;
      dayCloseTime = officeHours[0].closingTimeSunday;
      break;
  }

  if (dayIsOpen === true) {
    const dayOpenTimeHour = +dayOpenTime.substring(0, 2);
    const dayOpenTimeMinute = +dayOpenTime.substring(3, 5);
    const dayOpenTimeSecond = +dayOpenTime.substring(6, 8);
    const dayCloseTimeHour = +dayCloseTime.substring(0, 2);
    const dayCloseTimeMinute = +dayCloseTime.substring(3, 5);
    const dayCloseTimeSecond = +dayCloseTime.substring(6, 8);
    const dayOpen = dayjs(inputStartDate)
      .set("hour", dayOpenTimeHour)
      .set("minute", dayOpenTimeMinute)
      .set("second", dayOpenTimeSecond)
      .toDate();
    const dayClose = dayjs(inputStartDate)
      .set("hour", dayCloseTimeHour)
      .set("minute", dayCloseTimeMinute)
      .set("second", dayCloseTimeSecond)
      .toDate();

    const isInputEndTimeOnAvailableTime =
      dayClose >= inputEndDate.toDate() && inputEndDate.toDate() > dayOpen;
    const isInputStartTimeOnAvailableTime =
      dayClose > inputStartDate.toDate() && inputStartDate.toDate() >= dayOpen;

    const compareResult =
      isInputStartTimeOnAvailableTime && isInputEndTimeOnAvailableTime;

    // for debug
    // result = {
    //   extractDate,
    //   dayIsOpen,
    //   dayOpenTimeHour,
    //   dayOpenTimeMinute,
    //   dayOpenTimeSecond,
    //   dayCloseTimeHour,
    //   dayCloseTimeMinute,
    //   dayCloseTimeSecond,
    //   inputStartDate,
    //   inputEndDate,
    //   dayOpen,
    //   dayClose,
    //   isInputStartTimeOnAvailableTime,
    //   isInputEndTimeOnAvailableTime,
    //   compareResult,
    // };
    result = {
      result: compareResult,
    };
  } else {
    result = { result: false };
  }

  return result;
};

export const hello = async (args: IHello) => {
  let myDayJs = dayjs().format("LLLL");
  let myDayJSToDate = dayjs().toDate();
  let executed = new Date();
  let id = new Date().getTime();
  let input = "2001-03-22";
  let inputDayJsParsed = dayjs(input)
    .set("hour", 5)
    .set("minute", 55)
    .set("second", 15);
  let inputDayJsParsedXX = inputDayJsParsed.format("LLLL");
  let startFormat = dayjs(args.start).format("LLLL");
  let startToDate = dayjs(args.start).toDate();
  let extractDate = dayjs(args.start).format("dddd");
  let extractStartTime = dayjs(args.start).format("HH:mm");
  let result = {
    id: id,
    name: args.name,
    startFormat,
    startToDate,
    executed: executed,
    myDayJs,
    myDayJSToDate,
    inputDayJsParsedXX,
    extractDate,
    extractStartTime,
  };

  return result;
};

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
