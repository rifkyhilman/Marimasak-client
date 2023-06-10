const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
    "abcasdjhajksdhasdhjashdjhasdhjkasdhasjdaskd()asdsadcvxcxv[xcv]]xcvsdfcvmwehehe";

//EndPoint Register
router.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.send({ message: "Email Sudah Terdaftar!", alert: false });
        }

        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
            userType,
        });

        res.send({ message: "Pendaftaran Berhasil!", alert: true });
    } catch (error) {
        res.send({ message: "Terjadi kesalahan", alert: false });
    }
});

//EndPoint Login
router.post("/login-user", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.send({ message: "Email Tidak Terdaftar", alert: false });
    }
    if (await bcrypt.compare(password, user.password)) {
        const dataSend = {
            _id: user._id,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
        };

        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
            expiresIn: "15m",
        });

        return res.send({
            message: "Login Berhasil!",
            alert: true,
            data: dataSend,
            token: token
        });
    }

    return res.send({ message: "Password Salah!", alert: false });
});

//EndPoint User Data
router.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET, (err, res) => {
            if (err) {
                return "token expired";
            }
            return res;
        });
        console.log(user);
        if (user == "token expired") {
            return res.send({ status: "error", data: "token expired" });
        }

        const useremail = user.email;
        User.findOne({ email: useremail })
            .then((data) => {
                res.send({ status: "ok", data: data });
            })
            .catch((error) => {
                res.send({ status: "error", data: error });
            });
    } catch (error) { }
});

module.exports = router;
