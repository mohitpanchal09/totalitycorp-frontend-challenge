const router = require('express').Router();
const User =require('../models/User')
const jwt= require('jsonwebtoken');
const CryptoJs =require('crypto-js');
// register
router.post("/register", async (req,res)=>{
    
    const newUser = new User({
        username:req.body.username,
        fullname:req.body.fullname,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(req.body.password,process.env.PASS_KEY).toString(),
    })
    // 200- successful
    // 201- sucessfully edit
    try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})




// login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json('Wrong credentials');
    }

    const decryptedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    );
    const originalpassword = decryptedPassword.toString(CryptoJs.enc.Utf8);

    if (originalpassword !== req.body.password) {
      return res.status(401).json('Wrong password');
    }
    // jwt
    const accessToken =jwt.sign(
        {
            id:user._id,
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
    );

    const {password, ...others}=user._doc
    res.status(200).json({others,accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

// module.exports = router;


module.exports= router;


