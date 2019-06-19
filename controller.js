// controller.js
const getMessage = require('./service').getMessage;

exports.ask = (req, res, next) => {

  //console.log( req.body);

  //res.send('POST request to the --- homepage ' + JSON.stringify(req.body.input));

  return getMessage(req.body)
    .then(output => {
      res.status(200);
      res.send(output);
    })
    .catch(next);
};
