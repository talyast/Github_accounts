var express = require('express');
var router = express.Router();

saved =[]


router.post('/save', function (req, res, next) {
    const got = req.body
   for (let i of saved)
     if(i.name === got.name) {
         res.json({list:saved,message:"this name has been saved already"})
         return
     }

    saved.push(req.body)
    res.json({list:saved,message:"the name has been saved successfully"})

})
router.post('/delete', function (req, res, next)
{
    let index =-1
    const got = req.body
    for (let i of saved){
        index++
        if(i.name === got.name) {

            saved.splice(index, 1)
            res.json({list: saved, message: "the name has been deleted successfully"})
            return
        }
    }
    res.json({list:saved,message:"the name can not be deleted"})

})
module.exports = router;
