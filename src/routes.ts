import {
  checkAvailableRoomHandler,
  checkIsOfficeHourHandler,
  createBookingHandler,
  createBuildingHandler,
  createFacilityHandler,
  createRoomHandler,
  createUserHandler,
  deleteBookingHandler,
  // deleteBuildingHandler,
  deleteFacilityHandler,
  deleteRoomHandler,
  getAllBookingHandler,
  getAllBuildingHandler,
  getAllFacilityHandler,
  getAllOfficeHour1Handler,
  getAllOfficeHour2Handler,
  getAllRoomHandler,
  getAllUserHandler,
  getRoomByBuildingIdHandler,
  helloHandler,
  logInHandler,
  updateBookingHandler,
  updateFacilityHandler,
  updateOfficeHour1Handler,
  updateOfficeHour2Handler,
  updateRoomHandler,
} from "./squadule/squaduled.handler";

export const AppRoutes = [
  //todo: create route for project squaduled
  {
    path: "/squaduled/createBuilding",
    method: "post",
    action: createBuildingHandler,
  },
  {
    path: "/squaduled/getAllBuilding",
    method: "post",
    action: getAllBuildingHandler,
  },
  // {
  //   path: "/squaduled/deleteBuilding",
  //   method: "post",
  //   action: deleteBuildingHandler,
  // },
  {
    path: "/squaduled/createFacility",
    method: "post",
    action: createFacilityHandler,
  },
  {
    path: "/squaduled/getAllFacility",
    method: "post",
    action: getAllFacilityHandler,
  },
  {
    path: "/squaduled/updateFacility",
    method: "post",
    action: updateFacilityHandler,
  },
  {
    path: "/squaduled/deleteFacility",
    method: "post",
    action: deleteFacilityHandler,
  },
  {
    path: "/squaduled/createRoom",
    method: "post",
    action: createRoomHandler,
  },
  {
    path: "/squaduled/getAllRoom",
    method: "post",
    action: getAllRoomHandler,
  },
  {
    path: "/squaduled/getRoomByBuildingId",
    method: "post",
    action: getRoomByBuildingIdHandler,
  },
  {
    path: "/squaduled/updateRoom",
    method: "post",
    action: updateRoomHandler,
  },
  {
    path: "/squaduled/deleteRoom",
    method: "post",
    action: deleteRoomHandler,
  },
  {
    path: "/squaduled/getAllOfficeHour1",
    method: "post",
    action: getAllOfficeHour1Handler,
  },
  {
    path: "/squaduled/updateOfficeHour1",
    method: "post",
    action: updateOfficeHour1Handler,
  },
  {
    path: "/squaduled/getAllOfficeHour2",
    method: "post",
    action: getAllOfficeHour2Handler,
  },
  {
    path: "/squaduled/updateOfficeHour2",
    method: "post",
    action: updateOfficeHour2Handler,
  },
  {
    path: "/squaduled/createBooking",
    method: "post",
    action: createBookingHandler,
  },
  {
    path: "/squaduled/getAllBooking",
    method: "post",
    action: getAllBookingHandler,
  },
  {
    path: "/squaduled/updateBooking",
    method: "post",
    action: updateBookingHandler,
  },
  {
    path: "/squaduled/deleteBooking",
    method: "post",
    action: deleteBookingHandler,
  },
  {
    path: "/squaduled/createUser",
    method: "post",
    action: createUserHandler,
  },
  {
    path: "/squaduled/getAllUser",
    method: "post",
    action: getAllUserHandler,
  },
  {
    path: "/squaduled/logIn",
    method: "post",
    action: logInHandler,
  },
  {
    path: "/squaduled/checkIsOfficeHour",
    method: "post",
    action: checkIsOfficeHourHandler,
  },
  {
    path: "/squaduled/checkAvailableRoom",
    method: "post",
    action: checkAvailableRoomHandler,
  },
  {
    path: "/squaduled/hello",
    method: "post",
    action: helloHandler,
  },
];
