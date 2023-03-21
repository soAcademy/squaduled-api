import * as t from "io-ts";
import { optional } from "io-ts-extra";
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const CreateBuildingCodec = t.type({
  name: t.string,
});

export interface ICreateBuilding extends t.TypeOf<typeof CreateBuildingCodec> {}
//+++++++++++++++++++++++++
// export const DeleteBuildingCodec = t.type({
//   id: t.number,
// });

// export interface IDeleteBuilding extends t.TypeOf<typeof DeleteBuildingCodec> {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const CreateFacilityCodec = t.type({
  name: t.string,
});

export interface ICreateFacility extends t.TypeOf<typeof CreateFacilityCodec> {}
//+++++++++++++++++++++++++
export const getRoomByBuildingIdCodec = t.type({
  buildingId: t.number,
});
//+++++++++++++++++++++++++
export const UpdateFacilityCodec = t.type({
  id: t.number,
  name: t.string,
});

export interface IUpdateFacility extends t.TypeOf<typeof UpdateFacilityCodec> {}
//+++++++++++++++++++++++++
export const DeleteFacilityCodec = t.type({
  id: t.number,
});

export interface IDeleteFacility extends t.TypeOf<typeof DeleteFacilityCodec> {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const CreateRoomCodec = t.type({
  name: t.string,
  floor: t.string,
  capacity: t.number,
  buildingId: t.number,
  facilities: t.array(t.type({ facilityId: t.number })),
});

export interface ICreateRoom extends t.TypeOf<typeof CreateRoomCodec> {}
//+++++++++++++++++++++++++
export const UpdateRoomCodec = t.type({
  id: t.number,
  name: t.string,
  capacity: t.number,
  facilities: t.array(t.type({ facilityId: t.number })),
});

export interface IUpdateRoom extends t.TypeOf<typeof UpdateRoomCodec> {}
//+++++++++++++++++++++++++
export const DeleteRoomCodec = t.type({
  id: t.number,
});

export interface IDeleteRoom extends t.TypeOf<typeof DeleteRoomCodec> {}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const UpdateOfficeHour1Codec = t.type({
  id: t.number,
  day: t.string,
  open: t.boolean,
  openTime: t.string,
  closeTime: t.string,
});

export interface IUpdateOfficeHour1
  extends t.TypeOf<typeof UpdateOfficeHour1Codec> {}
//+++++++++++++++++++++++++
export const UpdateOfficeHour2Codec = t.type({
  id: t.number,
  isOpenMonday: optional(t.boolean),
  openingTimeMonday: optional(t.string),
  closingTimeMonday: optional(t.string),
  isOpenTuesday: optional(t.boolean),
  openingTimeTuesday: optional(t.string),
  closingTimeTuesday: optional(t.string),
  isOpenWednesday: optional(t.boolean),
  openingTimeWednesday: optional(t.string),
  closingTimeWednesday: optional(t.string),
  isOpenThursday: optional(t.boolean),
  openingTimeThursday: optional(t.string),
  closingTimeThursday: optional(t.string),
  isOpenFriday: optional(t.boolean),
  openingTimeFriday: optional(t.string),
  closingTimeFriday: optional(t.string),
  isOpenSaturday: optional(t.boolean),
  openingTimeSaturday: optional(t.string),
  closingTimeSaturday: optional(t.string),
  isOpenSunday: optional(t.boolean),
  openingTimeSunday: optional(t.string),
  closingTimeSunday: optional(t.string),
});

export interface IUpdateOfficeHour2
  extends t.TypeOf<typeof UpdateOfficeHour2Codec> {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const CreateBookingCodec = t.type({
  startDatetime: t.string,
  endDatetime: t.string,
  roomId: t.number,
  userId: t.number,
});

export interface ICreateBooking extends t.TypeOf<typeof CreateBookingCodec> {}
//+++++++++++++++++++++++++
export const UpdateBookingCodec = t.type({
  userId: t.number,
  startDatetime: optional(t.string),
  endDatetime: optional(t.string),
  roomId: optional(t.number),
});

export interface IUpdateBooking extends t.TypeOf<typeof UpdateBookingCodec> {}
//+++++++++++++++++++++++++
export const DeleteBookingCodec = t.type({
  id: t.number,
});

export interface IDeleteBooking extends t.TypeOf<typeof DeleteBookingCodec> {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const CreateUserCodec = t.type({
  officerId: t.string,
  firstName: t.string,
  lastName: t.string,
  phone: t.string,
  email: t.string,
  userName: t.string,
  password: t.string,
  role: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
//+++++++++++++++++++++++++
export const UpdateUserCodec = t.type({
  id: t.number,
  firstName: optional(t.string),
  lastName: optional(t.string),
  phone: optional(t.string),
  email: optional(t.string),
  userName: optional(t.string),
  password: optional(t.string),
  role: optional(t.string),
});

export interface IUpdateUser extends t.TypeOf<typeof UpdateUserCodec> {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const GetResultsCodec = t.type({
  name: t.string,
});

export interface IGetResults extends t.TypeOf<typeof GetResultsCodec> {}

export const HelloCodec = t.type({name:t.string})
export interface IHello extends t.TypeOf<typeof HelloCodec> {}