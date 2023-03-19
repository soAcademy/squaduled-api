import {
  createBuildingHandler,
  getAllBuildingHandler,
  createFacilityHandler,
  getAllFacilityHandler,
  updateFacilityHandler,
  deleteFacilityHandler,
  createRoomHandler,
  getAllRoomHandler,
  createBookingHandler,
  getAllBookingHandler,
  getAllUserHandler,
  logInHandler,
  checkIsOfficeHourHandler,
  checkAvailableRoomHandler,
  getAllOfficeHourHandler,
  updateOfficeHourHandler,
  updateRoomHandler,
  deleteRoomHandler
} from "./squaduled/squaduled.handler";


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
    action:updateFacilityHandler,
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
    path: "/squaduled/getAllOfficeHour",
    method: "post",
    action: getAllOfficeHourHandler,
  },
  {
    path: "/squaduled/updateOfficeHour",
    method: "post",
    action:updateOfficeHourHandler,
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
];
