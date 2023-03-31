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

// todo resolve update room api ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  let reqStartTime = dayjs(args.startDatetime).toDate();
  let reqEndTime = dayjs(args.endDatetime).toDate();
  const bookingsByRoomId = await prisma.booking.findMany({
    where: {
      roomId: args.roomId,
    },
  });
  const dataInput = {
    data: {
      startDatetime: reqStartTime,
      endDatetime: reqEndTime,
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
  };
  let result;
  if (bookingsByRoomId.length !== 0) {
    const unableBookingTime = bookingsByRoomId
      .map((booking) => {
        const bookStart = booking.startDatetime;
        const bookEnd = booking.endDatetime;
        const isTimeRequiredBefore =
          reqStartTime < bookStart && bookStart >= reqEndTime;
        const isTimeRequiredAfter =
          reqEndTime > bookEnd && bookEnd <= reqStartTime;
        const isAbleToBook = isTimeRequiredBefore || isTimeRequiredAfter;
        return isAbleToBook;
      })
      .find((check) => check === false);

    if (unableBookingTime === false) {
      return (result = { result: false });
    } else {
      return await prisma.booking.create(dataInput);
    }
  } else {
    return await prisma.booking.create(dataInput);
  }
};

export const getAllBooking = () => prisma.booking.findMany({
  include: {
    room:true,
    user: true,
  },
});

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

// ++++ ++++ ++++ LOG IN ++++ ++++ ++++

export const logIn = (args: IDeleteBooking) =>
  prisma.user.delete({
    where: {
      id: args.id,
    },
  });
// ++++ ++++ ++++ CHECK IS ROOM AVAILABLE ++++ ++++ ++++
export const checkAvailableRoom = async (args: ICheckAvailableRoom) => {
  const rooms = await prisma.room.findMany({
    include: {
      roomToFacility: {
        include: {
          facility: true,
        },
      },
      building: true,
    },
  });
  const bookings = await prisma.booking.findMany();
  const reqStartTime = dayjs(args.startDatetime);
  const reqEndTime = dayjs(args.endDatetime);

  // filter rooms by capacity
  const filterRoomByCaps = rooms
    .filter((room) => room.capacityMax >= args.capacity)
    .map((room) => {
      const roomFacilities = room.roomToFacility.map((facility) => {
        return {
          facilityId: facility.facility.id,
          facilityName: facility.facility.name,
        };
      });
      return {
        id: room.id,
        name: room.name,
        buildingId: room.buildingId,
        buildingName: room.building?.name,
        floor: room.floor,
        capacityMax: room.capacityMax,
        roomFacilities: roomFacilities,
      };
    });
  let results;
  if (filterRoomByCaps.length !== 0) {
    // หาห้องที่ไม่สามารถจองได้ในช่วงเวลานั้น เพื่อเอาไปฟิลเตอร์ออกจาก filterRoomByCaps
    const unableBookingRoomId = bookings
      .map((booking) => {
        const bookStart = booking.startDatetime;
        const bookEnd = booking.endDatetime;
        const isTimeRequiredBefore =
          reqStartTime.toDate() < bookStart && bookStart >= reqEndTime.toDate();
        const isTimeRequiredAfter =
          reqEndTime.toDate() > bookEnd && bookEnd <= reqStartTime.toDate();
        const isAbleToBook = isTimeRequiredBefore || isTimeRequiredAfter;
        return {
          ...booking,
          bookStart,
          bookEnd,
          reqStartTime,
          reqEndTime,
          isAbleToBook,
        };
      })
      .filter((check) => check.isAbleToBook === false)
      .map((room) => room.roomId);

    const AvailableRoom = filterRoomByCaps.filter(
      (room) => !unableBookingRoomId.includes(room.id)
    );

    results =  AvailableRoom
    
    // results = {
    //   filterRoomByCaps,
    //   unableBookingRoomId,
    //   AvailableRoom,
    // };
  } else {
    results = filterRoomByCaps;
  }
  return results;
};
// ++++ ++++ ++++ CHECK IS OFFICE DAY AND OFFICE HOUR ++++ ++++ ++++
export const checkIsOfficeHour = async (args: ICheckIsOfficeHour) => {
  const officeHours = await prisma.officeHour2.findMany();
  const extractDate = dayjs(args.startDatetime).format("dddd");
  const inputStartDate = dayjs(args.startDatetime);
  const inputEndDate = dayjs(args.endDatetime);

  let result;
  let dayIsOpen = false;
  let dayOpenTime = "00:00:00";
  let dayCloseTime = "00:00:00";
  // CHECK DAY
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
  // CHECK TIME
  if (dayIsOpen === true) {
    // separate hour/minute/second and convert to number
    const dayOpenTimeHour = +dayOpenTime.substring(0, 2);
    const dayOpenTimeMinute = +dayOpenTime.substring(3, 5);
    const dayOpenTimeSecond = +dayOpenTime.substring(6, 8);
    const dayCloseTimeHour = +dayCloseTime.substring(0, 2);
    const dayCloseTimeMinute = +dayCloseTime.substring(3, 5);
    const dayCloseTimeSecond = +dayCloseTime.substring(6, 8);

    // const mockHours = new Date();
    // convert as dayjs format then convert to js dateTime by putting .toDate()
    const officeDayOpen = dayjs(inputStartDate)
      .set("hour", dayOpenTimeHour)
      .set("minute", dayOpenTimeMinute)
      .set("second", dayOpenTimeSecond)
      .toDate();
    const officeDayClose = dayjs(inputStartDate)
      .set("hour", dayCloseTimeHour)
      .set("minute", dayCloseTimeMinute)
      .set("second", dayCloseTimeSecond)
      .toDate();

    const isInputEndTimeOnAvailableTime =
      officeDayClose >= inputEndDate.toDate() &&
      inputEndDate.toDate() > officeDayOpen;
    const isInputStartTimeOnAvailableTime =
      officeDayClose > inputStartDate.toDate() &&
      inputStartDate.toDate() >= officeDayOpen;

    const compareResult =
      isInputStartTimeOnAvailableTime && isInputEndTimeOnAvailableTime;

    // for debug
    result = {
      officeHours,
      // extractDate,
      // dayIsOpen,
      // dayOpenTimeHour,
      // dayOpenTimeMinute,
      // dayOpenTimeSecond,
      // dayCloseTimeHour,
      // dayCloseTimeMinute,
      // dayCloseTimeSecond,
      // inputStartDate,
      // inputEndDate,
      // officeDayOpen,
      // officeDayClose,
      // isInputStartTimeOnAvailableTime,
      // isInputEndTimeOnAvailableTime,
      result: compareResult,
    };
  } else {
    result = { officeHours, result: false };
  }

  return result;
};

// ++++ ++++ ++++ TEST POSTMAN ++++ ++++ ++++
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
