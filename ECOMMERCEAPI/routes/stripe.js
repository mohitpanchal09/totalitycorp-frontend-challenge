const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51NUArmSGpkdTpRlzxI1CIk5USsHVymSmwZo8gVeBqULNijGeoPBBjtFQMnuJdl4weWJpZqKYSiac3VMKIOiLV4r900PEfBzEum"
const stripe = require("stripe")(KEY);

router.post("/create-checkout-session", async (req, res)=>{
  try{
      const session = await stripe.checkout.sessions.create({
          payment_method_types:["card"],
          mode:"payment",
          line_items: req.body.items.map(item => {
              return{
                  price_data:{
                      currency:"inr",
                      product_data:{
                          name: item.name
                      },
                      unit_amount: (item.price)*100,

                  },
                  quantity: item.quantity
              }
          }),
          success_url: 'http://localhost:3000/orders/success',
          cancel_url: 'http://localhost:3000/cancel'
      })

      res.json({url: session.url})

  }catch(e){
   res.status(500).json({error:e.message})
  }
})


module.exports = router;
