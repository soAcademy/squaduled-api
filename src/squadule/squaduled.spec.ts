import { checkAvailableRoom, checkIsOfficeHour } from "./squaduled.resolver";
var localizedFormat = require("dayjs/plugin/localizedFormat");
const dayjs = require("dayjs");
dayjs.extend(localizedFormat);

describe("Squaduled", () => {
  // test("AvailableDay", async () => {
  // const inputData = {
  //   startDatetime: "2022-03-25 10:00:00.000",
  //   endDatetime: "2022-03-25 12:00:00.000",
  // };
  // const startTimeExtractDate = dayjs(inputData.startDatetime).format("dddd");
  // const endTimeExtractDate = dayjs(inputData.endDatetime).format("dddd");
  // const result = await checkIsOfficeHour(inputData);
  // console.log("checkIsOfficeHour", result);
  // expect(result.extractDate === startTimeExtractDate).toBe(true);
  // expect(result.extractDate === endTimeExtractDate).toBe(true);
  // expect(result.dayIsOpen === true).toBe(true);
  // expect(result.isInputStartTimeOnAvailableTime === true).toBe(true);
  // expect(result.isInputEndTimeOnAvailableTime === true).toBe(true);
  // expect(result.compareResult === false).toBe(true);
  // expect(result === true).toBe(true);
  // });

  // test("AvailableRoom", async () => {
  //   const inputData = {
  //     capacity: 30,
  //   };
  //   const result = await checkAvailableRoom(inputData);
  //   console.log("checkIsOfficeHour", result);

  //   expect(result===result.toThrowError(
  //     'No rooms available for the given capacity.'
  //   )).toBe(true);
  // });
});
