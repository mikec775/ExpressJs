const mongoose = require('mongoose');
const Location = mongoose.model('Location');


const locationsCreate = function(req, res) {
  Location.create({ 
  name: req.body.name,
  address: req.body.address,
  facilities: req.body.facilities.split(","), 
  coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)], openingTimes: [{
  days: req.body.days1,
  opening: req.body.opening1,
  closing: req.body.closing1,
  closed: req.body.closed1,
  }, {
  days: req.body.days2,
  opening: req.body.opening2,
  closing: req.body.closing2,
  closed: req.body.closed2,
  }]
  }).then((err, location) => { 
  if (err) {
  res
  .status(400)
  .json(err);
  } else {
  res
  .status(201)
  .json(location);
  }
  })
  };
  
const locationsListByDistance = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };

  const locationsReadOne = function (req, res) {
    if (req.params && req.params.locationid) {  
      Location
        .findById(req.params.locationid)
        .then((location, err) => {
          if (!location) {
            res	
              .status(404) 
              .json({	
                "message": "locationid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(location);
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "No locationid in request"
        });		
    }
  };
  
const locationsUpdateOne = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };
const locationsDeleteOne = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };





module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
