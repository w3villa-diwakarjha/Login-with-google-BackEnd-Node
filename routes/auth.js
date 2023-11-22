const router= require('express').Router();
const passport= require('passport');
// When Login Failed by the google

router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error:true,
        message: "Login Failure",
    });
});
// For Login the user
router.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            error: false,
            message: "Successfully Logged in",
            user: req.user,
        });
    }
    else{
        res.status(403).json({error: true, message: "Not Authorized"});
    }
});
// These Are the Two Route which is Used From Oauth2.0 
router.get(
    "/google/callback",
    passport.authenticate("google",{
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get("/google",passport.authenticate("google",["profile","email"]));

// Perform The Logout Operation 
router.get("/logout", (req, res) => {
    // Perform any additional cleanup or tasks before logging out
  
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
  
      // Redirect or respond as needed after successful logout
      res.redirect(process.env.CLIENT_URL);
    });
  });
  

module.exports= router;
