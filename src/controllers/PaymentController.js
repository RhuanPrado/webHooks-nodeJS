const Payment = require('../models/Payment');
const webhooks = require('node-webhooks');


module.exports = {

    async index(req, res){
        
        try{
            const paymentList = await Payment.find({});
            return res.json(paymentList);
        }catch(err){
            return res.status(400).json({message:"list failed", error: err });
        }
    },

    async store(req, res){
        try{
            
            const {title, value, status} = req.body;
            const payment = await Payment.create({
                title,
                value,
                status
            });

            if(payment){
                const hooks = registerHooks();
                hooks.trigger('callback_hook', {msg: " new payment created", data: payment});
            }
            return res.json(payment);

        }catch(err){
            return res.status(400).send({ message: "create failed", error: err })
        }
    }

}

const registerHooks = ()=>{
    return new webhooks({
        db: {
            'callback_hook':['http://localhost:9000/webhook-client']
        }
    });
}