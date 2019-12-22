var db = require("../models");
const stripe = require("stripe")("sk_test_c9FfxLCFgbd0z459pCweEIKx00DqdPgiHq");

module.exports = function(app) {
  app.get("/api/rooms", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Room.findAll({}).then(function(dbhotel) {
      res.json(dbhotel);
    });
  });

  // Create a new example
  app.post("/charge", function(req, res) {
    const token = req.body.stripeToken; // Using Express
    (async () => {
      const charge = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "Example charge",
        source: token
      });
      res.json({ charge });
    })();
    res.redirect("/thankyou");
  });


  app.post("/client", function(req, res) {
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }).then(function(dbClient) {
      res.json(dbClient);
    });
  });


  app.post("/api/client", function(req, res) {

    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }).then(function(dbClient) {
      res.json(dbClient);
    });
  });
};

// Token is created using Stripe Checkout or Elements!
// Get the payment token ID submitted by the form:
