module.exports = function (req, res, next) {
    const age= req.query.age;
    if(age){
        next();
    }
  }