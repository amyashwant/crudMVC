const Comment = require("../model/commentModel");
const Post = require("../model/postModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.status(200).send({
      success: true,
      message: updatedPost,
    });
  } catch (error) {
    res.status(500).send("error occured at server side");
    console.log(error.message);
  }
};
