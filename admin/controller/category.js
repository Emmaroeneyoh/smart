const { CategoryModel } = require("../core/db/category");
const { createcategoryModel, updatecategoryModel } = require("../model/category");



const createcategoryController = async (req, res, next) => {
    const {
        category_description, category
      
    } = req.body;
    const categoryname = category.toLowerCase();
    try {
   
      const cat = await CategoryModel.findOne({ category: categoryname});
      if (cat) {
      
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "category already exist",
          data: [],
          error: "category already exist",
        });
      }
  
      const data = {
       categoryname , category_description
        
      };
  
      let trainee = await createcategoryModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
const retrievesinglecategoryController = async (req, res, next) => {
    const {
         categoryid
      
    } = req.body;
    try {
   
      const cat = await CategoryModel.findById(categoryid);
     
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: cat,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
const retrieveallcategoryController = async (req, res, next) => {
   
    try {
   
      const cat = await CategoryModel.find();
     
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: cat,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
  const updatecategoryController = async (req, res, next) => {
    const {
        category_description, category , categoryid
      
    } = req.body;
    const categoryname = category.toLowerCase();
    try {
   
        const cat = await CategoryModel.findById(categoryid);
      if (cat.category != category) {
        return res.status(200).json({
          status_code: 400,
          status: true,
          message: "category already exist",
          error: "category already exist",
        });
      }
  
      const data = {
        category_description, category , categoryid
        
      };
  
      let trainee = await updatecategoryModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "signup process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };