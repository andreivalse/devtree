import { Router } from "express";

const router = Router();

//Routing
router.post('/auth/register', (req, res) =>{
    console.log(req.body)
    res.send('Registro de usuario')
})

export default router;