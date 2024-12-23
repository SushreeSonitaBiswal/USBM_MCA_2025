const express = require("express");
const{
   
        registerUser,
        getAllUsers,
        getUserById,
        updateUser,
        deleteUser


   
} = require("../controllers/userController");
const router = express.Router();

//create

router.post("/register",registerUser);

//Read All
router.get("/",getAllUsers);

//Read By Id
router.get("/:id",getUserById);

// //Update
router.patch("/:id",updateUser);//certain portion
// router.put("/:id",updateUser)//for total updatation

// //Delete
router.delete("/:id",deleteUser);

module.exports = router;