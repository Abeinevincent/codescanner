const express = require("express");
const router = express.Router();
const models = require("../models/index")

router.get("/:code", async (req, res) => {
    const {code} = req.params;
    // const code = req.params.code
    try {
        const ticket = await models.tickets.findOne({
            where: {
                ticketcode: code
            }
        })
        return res.status(200).json(ticket)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
})
// www.tickets.com?id="kdhfd";
// $id=$_get['id'];

router.put("/:code", async (req, res) => {
    try {
        await models.tickets.update({ TicketStatus: "Used" }, {
            where: {
                TicketCode: req.params.code
            }
        });
        res.status(200).json("Updated successflly")
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router