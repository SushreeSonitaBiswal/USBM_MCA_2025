 const express = require ("express");//common js method

 const app = express();
 require('dotenv').config();

// Helper function to read data from data.json
const read = () => {
  try {
    const data = fs.readFileSync('data.json'); // Read the file
    return JSON.parse(data); 
  } catch (err) {
    console.error("Error reading file", err);
    return [];  
  }
};


 //Route for Products
 app.get("/",(req,res) => {
    const data = read();
    res.status(200).send({msg:"It's working"});
});
const port = process.env.PORT || 8000;
// // const port = 8000;
app.listen(port, () => 
    { console.log( `Server running on port ${port}`);
 });

 

 