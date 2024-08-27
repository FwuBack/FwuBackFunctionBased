import { NextFunction, Request, Response, Router } from "express";
import {
  signup,
  login,
  logout,
  getProfile,
  loginByPhone,
  sendOtp,
  verifyOtp,
  sendEmailOtp,
  verifyEmailOtp,
  googleAuth,
  googleAuthCallback,
  forgotPasswordController,
  resetPasswordController,
  getCotravellers,
  updateCoTraveller,
  newCoTraveller,
  deleteCoTraveller,
  signupByEmail,
} from "../controllers/userController";
import passport from "passport";
import { isAuthenticated } from "../middleware/authenticate";

const userRouter = Router();
// Initialize routes function
const initializeRoutes = (router: Router) => {
  const path = "/";

  // // Define routes
  router.get(`${path}profile`, isAuthenticated, getProfile);
  router.get(`${path}auth/google`, googleAuth);

  // Callback route for Google to redirect to
  router.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    googleAuthCallback,
  );

  router.get(`${path}cotravellers`, isAuthenticated, getCotravellers);
  router.post(`${path}signup`, signup);
  router.post(`${path}signupByEmail`, signupByEmail);
  router.post(
    `${path}login`,
    passport.authenticate("local", { session: true }),
    login,
  );

  router.post(`${path}logout`, logout);
  router.post(`${path}loginByPhone`, loginByPhone);
  router.post(`${path}send-otp`, sendOtp);
  router.post(`${path}verify-otp`, verifyOtp);
  router.post(`${path}send-email-otp`, sendEmailOtp);
  router.post(`${path}verify-email-otp`, verifyEmailOtp);
  router.post(`${path}forgot-password`, forgotPasswordController);
  router.post(`${path}reset-password`, resetPasswordController);
  router.post(`${path}cotravellers`, isAuthenticated, newCoTraveller);
  router.patch(
    `${path}cotravellers/:coTravellerId`,
    isAuthenticated,
    updateCoTraveller,
  );

  /* *****DELETE******
      ==============================================*/

  router.delete(
    `${path}cotravellers/:coTravellerId`,
    isAuthenticated,
    deleteCoTraveller,
  );

  // Add other routes if needed
  // router.delete(`${path}deleteUser`, APP.MIDDLEWARES.AUTH, deleteUser);
};

initializeRoutes(userRouter);

// Export the initialized router
export default userRouter;
