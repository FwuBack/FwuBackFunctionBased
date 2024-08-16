import express from "express";
// import BaseRouter from "./baseRoutes";
// import HomeRoutes from "@Routes/homeRoutes";
import userRouter from "../routes/userRoutes";

/**
 * Function to initialize all routes.
 *
 * @param app - The express application instance.
 */
const initializeRoutes = (app: express.Application): void => {
  //Set up routes
  // app.use("/fwu/api/v1/", BaseRouter());
  // app.use("/fwu/api/v1/home/", HomeRoutes());
  app.use("/fwu/api/v1/user/", userRouter);
};

export default initializeRoutes;
