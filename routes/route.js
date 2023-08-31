const { createComment } = require("../controller/commentController");
const { createPost } = require("../controller/postController");
const { createLike } = require("../controller/likeController");
const { unLike } = require("../controller/likeController");
const express = require("express");
// const app = express();
const router = express.Router();

router.post("/comment", createComment);
router.post("/post", createPost);
router.post("/like", createLike);
router.post("/unlike", unLike);
module.exports = router;
