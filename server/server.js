const express = require('express')
const app = express()
const cors = require('cors')
const {v4:uuid} = require('uuid')
const stripe  = require('stripe')('sk_test_51MnxckSBqeTFR9qwmG2aC3NtF5LXbDENTzxtqMGUXW4scQQoJp07DLNsGeeZZEyuKwapd1XFHPP6AhxFJx6WVjtE00aYoKeqSO')
// const stripe  = require('stripe')('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')

app. use(cors())
app.use(express.json())
app.use('/payments', async (req, res)=>{
    const { product, token} = req.body
    const transactionKey = uuid();
    console.log(product);
    console.log(token);
   return stripe.customers.create({
        email: token.email,
        source: token.id    
    })
    // .then((customer) => {
    //     customer.charges.create({
    //     amount: product.price,
    //     currency: "inr",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //     description: product.name
    // })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
        })
    })
        // try {
        //     const customer = await stripe.customers.create({
        //         email : token.email,
        //         source : token.id
        //     })
        //     const charges = await stripe.charges.create({
        //         amount : product.price,
        //         currency: 'inr',
        //         customer: customer.id,
        //         receipt_email: token.email,
        //         description: product.name
        //     })
        //     return res.json(charges)
        // } catch (error) {
        //     console.log(error);
        // }
// })

app.listen(8000, () => {
    console.log(`server listen on the ${8000}`);
})