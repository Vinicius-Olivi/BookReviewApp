const express = require("express");
const router = express.Router(); // create a router
const profilesController = require("../controllers/profileController");

router.get("/profiles", profilesController.getProfiles);
router.get("/profile/:username", profilesController.getProfileByUsername);
router.post("/profile", profilesController.createProfile);
router.patch("/profiles/:username", profilesController.editProfile);
router.delete("/profiles/:username", profilesController.deleteProfile);

module.exports = router;
