const express = require('express')
const router = express.Router()

//getting all subscribe
router.get('/',(req,res)=>{
res.send('Hello world')
})
//geting one
router.get('/:id',(req,res)=>{
req.params.id

})
//creating one
router.post('/',(req,res)=>{

})
//updating one
router.patch('/:id',(req,res)=>{

})
//deleting one
router.delete('/:id',(req,res)=>{

})
module.exports = router
