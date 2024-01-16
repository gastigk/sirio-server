import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import logger from "./helpers/looger";
// Import routes
import UserRouter from "./app/modules/user/user.route";
import SettingsRouter from "./app/modules/setting/setting.route";
import productRoute from "./app/modules/product/product.route";
import userInputRoute from "./app/modules/user-input/user-input.route";
import PaymentRoute from "./app/modules/payment/payment.route";
import paymentSuccess from "./app/modules/OrderProduct/orderSuccess.route";
import blogRoute from "./app/modules/blog/blog.route";
import teamRoute from "./app/modules/team/team.route";

// Initialize express application
const app: Application = express();

// Use cors middleware
app.use(cors());

// Use middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/user", UserRouter);
app.use("/setting", SettingsRouter);
app.use("/product", productRoute);
app.use("/user-input", userInputRoute);
app.use("/payment", PaymentRoute);
app.use("/success", paymentSuccess);
app.use("/blog", blogRoute);
app.use("/team", teamRoute);

// Handle 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
