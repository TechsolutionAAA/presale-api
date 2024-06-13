const express = require("express");
const router = express.Router();
const UserCtr = require("../controller/UserCtr");

// middleware
const validationPostRequest = (keys) => {
    return function (req, res, next) {
        keys.forEach(key => {
            if (!req.body[key]) res.status(404).json({ message: `Not found ${key} field!` });
        });
        next();
    }
}

router.get("/test", (req, res) => {
    return res.json({ msg: "API is working well" });
});

router.post("/user/register", UserCtr.signUp);

module.exports = router;