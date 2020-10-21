const {db} = require("../util/admin");

exports.getAllListings = (req,res)=>{
    db
    .collection("listings")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
        let listings = []
        data.forEach(doc=>{
            listings.push({
              listingId: doc.id,
              ...doc.data()
            })
        });
        return res.json(listings);
    }) 
    .catch(err => {
      console.error(err);
      res.status(500).json({error: err.code})
    });
 }

 exports.postOneListing = (req, res) => {
    //prevent GET, can use express
  
    const newListing = {
      body: req.body.body,
      userHandle: req.user.handle,
      createdAt: new Date().toISOString()
    }
  
    db
      .collection("listings")
      .add(newListing)
      .then(doc => {
        res.json({message: `document: ${doc.id} created successfully`})
      })
      .catch(err => {
        res.status(500).json({error: "Something went wrong"});
        console.error(err);
      })
  }