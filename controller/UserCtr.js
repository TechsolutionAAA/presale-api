const userinfoSchema = require("../models/userinfo.js");

// New Function
// Save all user infos when he login with their metamask
exports.signUp = async (req, res) => {
    userinfoSchema
        .findOne({ email: req.body.email })
        .then(async (user_management) => {
            if (user_management) {
                return res.json({ msg: "email already exist" });
            } else {
                if (req.body.email !== undefined) {
                    userinfoSchema
                        .find()
                        .sort({ _id: 1 })
                        .then(async (user) => {
                            const newuserinfoSchema = new userinfoSchema({ email: req.body.email });
                            newuserinfoSchema.save().then((userinfo) => {
                                return res.json({ msg: userinfo });
                            }).catch((err) => console.warn("warning", err));
                        });
                } else {
                    res.json({ status: false, msg: "Email is undefined" });
                }
            }
        });
};