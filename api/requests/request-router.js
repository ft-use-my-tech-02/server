const router = require("express").Router();
const requests = require("./request-model");
const {
    restrict
} = require("../users/user-middleware")

router.get("/", restrict, (req,res,next)=>{
   requests.getAll()
   .then(allRequests=>{
       res.json(allRequests)
   })
   .catch(next);
})

router.get("/owner/:owner_id", restrict, (req,res,next)=>{
    requests.getRenterRequests(req.params.owner_id)
    .then(allRequests=>{
        res.json(allRequests)
    })
})

router.get("/renter/:renter_id", restrict, (req,res,next)=>{
    requests.getOwnerResponse(req.params.renter_id)
    .then(allRequests=>{
        res.json(allRequests)
    })
})

router.post("/", restrict, (req,res,next)=>{
    requests.addRequest(req.body)
    .then(([newRequest])=>{
        res.status(201).json(newRequest)
    })
    .catch(next);
})

router.delete("/:request_id", restrict, async (req,res,next)=>{
    try{
        await requests.deleteRequest(req.params.request_id)
        res.end();
    } catch (error) {
        next(error)
    }
})

module.exports = router;
