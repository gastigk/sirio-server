import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from "../app/modules/user/user.model";

const adminVerify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .send({ message: "JWT Authorization Header Missing" });
    }

    const parts = authorization.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res
        .status(401)
        .send({ message: "Invalid JWT Authorization Header Format" });
    }

    const token = parts[1];
    const decoded = (await jwt.verify(token, `${process.env.JWT_SECRET}`)) as {
      email: string;
    };
    const { email } = decoded;
    const validAdmin = await User.findOne({ email });

    if (!validAdmin || validAdmin.role !== "admin") {
      return res.status(403).send({ message: "User is not an admin" });
    }

    if (email === req.query.email) {
      next();
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  } catch (err) {
    return next("Error verifying JWT token");
  }
};

export default adminVerify;
