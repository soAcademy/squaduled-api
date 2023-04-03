import { Request, Response } from "express";
import {
  CheckAvailableRoomCodec,
  CheckIsOfficeHourCodec,
  CreateBookingCodec,
  CreateBuildingCodec,
  CreateFacilityCodec,
  CreateRoomCodec,
  CreateUserCodec,
  DeleteBookingCodec,
  DeleteBuildingCodec,
  DeleteFacilityCodec,
  DeleteRoomCodec,
  getRoomByBuildingIdCodec,
  HelloCodec,
  LoginCodec,
  UpdateBookingCodec,
  UpdateBuildingCodec,
  UpdateFacilityCodec,
  UpdateRoomCodec,
} from "./squaduled.interface";
import {
  createBuilding,
  createFacility,
  createRoom,
  deleteFacility,
  deleteRoom,
  getAllBooking,
  getAllBuilding,
  getAllFacility,
  getAllOfficeHour1,
  getAllOfficeHour2,
  getAllRoom,
  getAllUser,
  getRoomByBuildingId,
  updateFacility,
  updateRoom,
  checkIsOfficeHour,
  hello,
  createUser,
  updateOfficeHour2,
  createBooking,
  deleteBooking,
  updateBooking,
  checkAvailableRoom,
  deleteBuilding,
  updateBuilding,
  getBuildingById,
  logIn,
} from "./squaduled.resolver";
var jwt = require("jsonwebtoken");

//---------------Validate token

const isAuthorized = (req: Request, onlyAdmin: boolean) => {
  try {
    const isLogin = jwt.verify(
      req.header("authorization"),
      process.env.SECRET_KEY
    );
    if (onlyAdmin) {
      if (isLogin.role !== "admin") return false;
    }
  } catch (error) {
    return false;
  }
  return true;
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createBuildingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CreateBuildingCodec.decode(body)._tag === "Right") {
      const result = await createBuilding(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getAllBuildingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllBuilding();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getBuildingByIdHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteBuildingCodec.decode(body)._tag === "Right") {
      const result = await getBuildingById(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateBuildingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (UpdateBuildingCodec.decode(body)._tag === "Right") {
      const result = await updateBuilding(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteBuildingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteFacilityCodec.decode(body)._tag === "Right") {
      const result = await deleteBuilding(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const createFacilityHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CreateFacilityCodec.decode(body)._tag === "Right") {
      const result = await createFacility(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getAllFacilityHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllFacility();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateFacilityHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (UpdateFacilityCodec.decode(body)._tag === "Right") {
      const result = await updateFacility(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const deleteFacilityHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteFacilityCodec.decode(body)._tag === "Right") {
      const result = await deleteFacility(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const createRoomHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CreateRoomCodec.decode(body)._tag === "Right") {
      const result = await createRoom(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getAllRoomHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllRoom();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getRoomByBuildingIdHandler = async (
  req: Request,
  res: Response
) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (getRoomByBuildingIdCodec.decode(body)._tag === "Right") {
      const result = await getRoomByBuildingId(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateRoomHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (UpdateRoomCodec.decode(body)._tag === "Right") {
      const result = await updateRoom(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const deleteRoomHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteRoomCodec.decode(body)._tag === "Right") {
      const result = await deleteRoom(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getAllOfficeHour1Handler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllOfficeHour1();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateOfficeHour1Handler = async (
  req: Request,
  res: Response
) => {};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const getAllOfficeHour2Handler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllOfficeHour2();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateOfficeHour2Handler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteRoomCodec.decode(body)._tag === "Right") {
      const result = await updateOfficeHour2(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const createBookingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CreateBookingCodec.decode(body)._tag === "Right") {
      const result = await createBooking(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getAllBookingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllBooking();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateBookingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (UpdateBookingCodec.decode(body)._tag === "Right") {
      const result = await updateBooking(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteBookingHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (DeleteBookingCodec.decode(body)._tag === "Right") {
      const result = await deleteBooking(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createUserHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CreateUserCodec.decode(body)._tag === "Right") {
      const result = await createUser(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getAllUserHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");
  try {
    const result = await getAllUser();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const logInHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    if (LoginCodec.decode(body)._tag === "Right") {
      //check is office hour
      const result = await logIn(req.body);

      if (!result.error) {
        res.status(200).json(result);
      }else{
        res.status(401).json(result)
      }
      
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const checkAvailableRoomHandler = async (
  req: Request,
  res: Response
) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");
  const body = req?.body;
  try {
    if (CheckAvailableRoomCodec.decode(body)._tag === "Right") {
      //check is office hour
      const result = await checkAvailableRoom(req.body);

      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const checkIsOfficeHourHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, false)) return res.status(401).json("Unauthorized");

  const body = req?.body;
  try {
    if (CheckIsOfficeHourCodec.decode(body)._tag === "Right") {
      //check is office hour
      const result = await checkIsOfficeHour(req.body);

      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const helloHandler = async (req: Request, res: Response) => {
  if (!isAuthorized(req, true)) return res.status(401).json("Unauthorized");

  const body = req?.body;
  try {
    if (HelloCodec.decode(body)._tag === "Right") {
      const result = await hello(body);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: String("Error invalid codec") });
    }
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
