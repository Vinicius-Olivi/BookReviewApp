const Profile = require("../models/profileModel");

const getProfiles = async (req, res) => {
  // find all users from a mongoose Model method
  const users = await Profile.find({});
  // respond with an object that has a message and the users from the DB
  res.json({
    message: "all users",
    profiles: users,
  });
};

const getProfileByUsername = async (req, res) => {
  // get id from ':id' param from the route (the :id in the route path)
  const { username } = req.params;
  // find todo with Model.findById()
  const profile = await Profile.findById(username);
  // response (res) with .json with the todo found
  res.status(200).json(profile);
};

const createProfile = async (req, res) => {
  // get the text from the req.body
  const { name, username, email, location, dob } = req.body;

  // create new todo object with model
  const profileObj = new Profile({
    name: name,
    username: username,
    email: email,
    location: location,
    dob: dob,
  });
  // await for it to be saved
  const newProfile = await profileObj.save();

  // respond with json()
  res.status(200).json(newProfile);
};

const editProfile = async (req, res) => {
  // get id from ':id' param from the route
  const { id } = req.params;
  //get updated todo data from the request body
  const { title, author, releaseDate, numberOfPages, reviews } = req.body;

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      {
        title: title,
        author: author,
        releaseDate: releaseDate,
        numberOfPages: numberOfPages,
        reviews: reviews,
      },
      {
        new: true,
      },
    );
    if (!updatedProfile)
      return res.status(404).json({ message: "Profile not found" });
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile", error);
  }
};

const deleteProfile = async (req, res) => {
  // get id from ':id' param from the route
  const { username } = req.params;

  const profile = await Profile.findByIdAndDelete(username);
  res.status(200);
  res.json({
    message: `${profile.title} deleted successfully`,
    username: profile.username,
  });
};

module.exports = {
  getProfiles,
  getProfileByUsername,
  createProfile,
  editProfile,
  deleteProfile,
};
