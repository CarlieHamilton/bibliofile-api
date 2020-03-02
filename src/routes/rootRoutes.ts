import express from 'express';
export const router = express.Router();

router.get("/", (req, res) => {
    console.log("you got rooted");
    console.log("get on '/'");
    res.json({
        message: "BiblioFile - Cataloguing All The Books For Fun"
    })
})