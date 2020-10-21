const functions = require('firebase-functions');
const express = require("express");
const app = express();
//const serviceAccount = require("./tenggara-apps-firebase-adminsdk-o19p2-416ddbe8fc.json");
const {getAllListings, postOneListing} = require("./handlers/listings")
const {signup, login} = require("./handlers/users")
const FBAuth = require("./util/fbauth")
//one endpoint two method must use one function and check the method
//except we use express

//Listing routes
app.get("/listings",getAllListings)
app.post("/listing", FBAuth, postOneListing);
//Users routes
app.post("/signup", signup);
app.post("/login", login);
/*
 exports.createListing = functions.https.onRequest( (req, res) => {
  //prevent GET, can use express
  if (req.method !== "POST") {
    return res.status(400).json({error: "Method not allowed"})
  }
  const newListing = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: admin.firestore.Timestamp.fromDate(new Date())
  }

  admin
    .firestore()
    .collection("listings")
    .add(newListing)
    .then(doc => {
      res.json({message: `document: ${doc.id} created successfully`})
    })
    .catch(err => {
      res.status(500).json({error: "Something went wrong"});
      console.error(err);
    })
});*/

// https://baseurl.com/listings <== dont want, want to add "/api" prefix
exports.api = functions.region("asia-southeast2").https.onRequest(app); //will turn into multiple route