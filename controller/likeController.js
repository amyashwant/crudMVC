// const { findByIdAndUpdate } = require("../model/commentModel");
const Like = require("../model/likeModel");
const Post = require("../model/postModel");

exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).send({ success: true, message: updatedPost });
  } catch (error) {
    res.status(500).send("error occured at server side");
    console.log(error.message);
  }
};

exports.unLike = async (req, res) => {
  try {
    const { post, like } = req.body;
    // const like = new Like({ post, user });
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.status(200).send({ success: true, message: updatedPost });
  } catch (error) {
    res.status(500).send("error occured at server side");
    console.log(error.message);
  }
};
