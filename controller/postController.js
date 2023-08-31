const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const savedPost = await Post.create({ title, body });
    res.status(200).send({
      success: true,
      message: savedPost,
    });
  } catch (error) {
    res.status(500).send("error occured at server side");
    console.log(error.message);
  }
};
