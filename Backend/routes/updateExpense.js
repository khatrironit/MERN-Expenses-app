const express = require('express')
const router = express.Router()


router.post('/',(req,res,next)=>{
    res.write(JSON.stringify(req.body.Name))
    res.end()
})

module.exports = router