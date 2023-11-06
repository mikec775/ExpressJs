
const requestOptions = { 
    url : 'http://localhost:3000/api/', 
    method : 'GET', 
    json : {}, 
    qs : { 
    offset : 20 
    } 
    }; 
    

    const request = require('request');

    const apiOptions = { 
      server : 'https://localhost:3000' 
    }; 
    
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = ' https://expressrebder.onrender.com'; 
    }
 
    
    request(requestOptions, (err, response, body) => { 
      if (err) { 
      console.log(err); 
      } else if (response.statusCode === 200) { 
      console.log(body); 
      } else { 
      console.log(response.statusCode); 
      } 
    });


    const _renderHomepage = function(req, res, responseBody){ 
        res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: responseBody 
        });
        };
        

    const homelist = function(req, res){
        const path = '/api/locations'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}, 
        qs : { 
        lng : -0.9690884, 
        lat : 51.455041, 
        maxDistance : 20 
        } 
        };
        request(requestOptions, (err, response, body) => { 
            _renderHomepage(req, res, body); 
            } 
            );
            };
             
        

    /* GET 'Location info' page */
    const locationInfo = function(req, res){
        res.render('location-info', { title: 'Location info' });
    };
        
    /* GET 'Add review' page */
    const addReview = function(req, res){
        res.render('location-review-form', { title: 'Add review' });
    };
        
    
    module.exports = {
    homelist,
    locationInfo,
    addReview
    };
    
 