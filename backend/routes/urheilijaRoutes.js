const express = require("express");
const router = express.Router();

const urheilijaController = require("../controllers/urheilijaController");

router.get("/", urheilijaController.haeUrheilijat);
router.post("/", urheilijaController.lisaaUrheilija);
router.delete("/:id", urheilijaController.poistaUrheilija);
router.put("/:id", urheilijaController.muokkaaUrheilija);

module.exports = router;