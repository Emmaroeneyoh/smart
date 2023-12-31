const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const { coonectdb } = require("./helper/conectdb");
const cors = require("cors");
const app = express();

//for customer
const customerauth = require('./customer/route/auth')
const customerprofile = require('./customer/route/profile')

// for seller 
const sellerauth = require('./seller/route/auth')
const sellerproduct = require('./seller/route/product');
const sellerprofile = require('./seller/route/profile');
const { PORT } = require("./helper/utils");



// for admin 
const adminauth = require('./admin/route/auth')


//connecting the database
coonectdb();

app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const customer = '/customer'
const seller = '/seller'
const admin = '/admin'
//for customer
app.use(customer, customerauth)
app.use(customer, customerprofile)


//for seller
app.use(seller, sellerauth)
app.use(seller, sellerproduct)
app.use(seller, sellerprofile)


//for admin
app.use(admin, adminauth)




//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log("server connected", port);
});
