
const router = require("express").Router();
const nodemailer = require("nodemailer");

const {
    restrict,
    validateChangePassword
} = require("./user-middleware");
const users = require("./user-model");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.TRANSPORTER,
        pass: process.env.PASS,

    },
})

router.put("/:id", restrict, validateChangePassword, (req, res, next) => {
    users.updateUser(req.params.id, req.body)
        .then(([user]) => {
            res.status(201).json(user)
        })
        .catch(next);
})

router.get("/:id", restrict, (req, res, next) => {
    users.findById(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next);
})

router.post("/", (req, res, next) => {
    const { feedback } = req.body;

    const msg = {
        from: process.env.TRANSPORTER,
        to: process.env.RECEIVER,
        subject: "New Feedback For Use My Tech",
        text: `${feedback}`
    }

    transporter.sendMail(msg, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json("Thanks for your feedback!");
        }
    });
})

module.exports = router;