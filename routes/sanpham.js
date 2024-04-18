const sanphamController = require("../controllers/sanphamController");

const router = require("express".Router());

//Add sanpham
router.post("/", sanphamController.addSanpham);

module.exports = router;