import { NextFunction, Request, Response, Router } from "express";

// Define the route handler functions
const index = async (req: Request, res: Response, next: NextFunction) => {
  res.send("hi BaseRoute");
};

// Create a function to initialize the routes and return the router
const BaseRouter = (): Router => {
  const router = Router();

  // Set up the routes
  router.get("/", index);

  return router;
};

export default BaseRouter;
