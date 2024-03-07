import { Router } from "express";

// import controllers
import { savePost } from "../controllers/posts.controllers";
import { upload } from "../middlewares/multer.middlewares";

const router = Router();

// routes defines for posts
router
    .route("/post")
    .post(upload.fields([{ name: "post", maxCount: 1 }]), savePost);
