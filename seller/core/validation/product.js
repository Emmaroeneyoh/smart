const joi = require("joi");
const { handleError } = require("../utils");




const createProductValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    productname: joi.string().required(),
    category: joi.string().required(),
    productprice: joi.string().required(),
    productbrand: joi.string().required(),
    productimage: joi.string().required(),
    productnegiotable: joi.string().required(),
    productdescription: joi.string().required(),
    sellerid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const updateProductValidation = (req, res, next) => {
  const schema = joi.object({
    // adminId: joi.string().required(),
    productname: joi.string().required(),
    category: joi.string().required(),
    productprice: joi.string().required(),
    productbrand: joi.string().required(),
    productimage: joi.string().required(),
    productnegiotable: joi.string().required(),
    productdescription: joi.string().required(),
    sellerid: joi.string().required(),
    productid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const retrievesellerproductValidation = (req, res, next) => {
  const schema = joi.object({
   
    sellerid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};



module.exports = {
createProductValidation , updateProductValidation , retrievesellerproductValidation
};
