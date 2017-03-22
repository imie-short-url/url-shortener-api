const express = require("express");
const router = express.Router();
const defaultRouter = require("./defaultRouter");
const userRouter = require('./userRouter');

router.use('/', defaultRouter);
router.use('/user', userRouter);

module.exports = router;