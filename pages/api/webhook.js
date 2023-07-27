import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

export default async function handler(req,res){
    await mongooseConnect();

    const endpointSecret = "whsec_04119678a6ca13daf9865366c09c6dac7c322f0cb16a42f047de897b55836eed";

    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object;
            const orderId =  data.metadata.orderId;
            const paid = data.payment_status === 'paid';

            if(orderId && paid){
                await Order.findByIdAndUpdate(orderId, {
                    paid:true,
                })
            }

            console.log(paymentIntentSucceeded)
            break;
        default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send("ok")
}

export const config = {
    api: {bodyParser:false,}
}

// solid-praise-robust-poise
// acct_1NYZV9Gm3mApHP4R