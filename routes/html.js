const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html')
    );
})

router.get("/", (req, res) =>{
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



module.exports = Router;
