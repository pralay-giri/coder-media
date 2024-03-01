import { Router } from "express";

const router = Router();

// Controllers imported
import { testApi } from "../controllers/testapi.controllers";
import { registerUser } from "../controllers/registerUser.controllers";
import { loginUser } from "../controllers/loginUser.controlers";
import { upload } from "../middlewares/multer.middlewares";

// API routes
router.route("/test").get(testApi);
router.route("/register").post(
    upload.fields([
        {
            name: "avater",
            maxCount: 1,
        },
    ]),
    registerUser
);

router.route("/login").post(loginUser);
export default router;
