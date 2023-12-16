const User = require("../models/UserModel");

module.exports.addToLikedVideos = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(
        (movie) => movie.id === data.id
      );
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...likedMovies, data],
          },
          {
            new: true,
          }
        );
      } else {
        return res.json({ msg: "Movie already liked" });
      }
    } else {
      await User.create({
        email,
        likedMovies: [data],
      });
    }
    return res.json({ msg: "Movie added to liked videos" });
  } catch (error) {
    return res.json({ msg: "Error on adding movie" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", likedMovies: user.likedMovies });
    } else {
      return res.json({ msg: "User not found" });
    }
  } catch (error) {
    return res.json({ msg: "Error on getting liked movies" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { likedMovies: { id: movieId } } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: "User with given email not found." });
    }

    return res.json({
      msg: "Movie successfully removed.",
      likedMovies: user.likedMovies,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error removing movie from the liked list", error });
  }
};
