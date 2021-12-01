const express = require("express");
const {sequelize,Booktable} = require("./models");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/Booktable",async(req,res)=>{  //get all book data
    const Book = await Booktable.findAll();
    return res.status(200).json(Book);
});


// app.get("/Authers",async(req,res)=>{  //get all author data
//     const Auther = await Authers.findAll();
//     return res.status(200).json(Auther);
// });

app.post("/Booktable",async(req,res)=>{ //post book data
    const {book_id,title,author,edition,publisher,summary,ISBN,genre,url} = req.body;
    const Book = await Booktable.create({book_id,title,author,edition,publisher,summary,ISBN,genre,url});
    return res.status(200).json(Book);
});

// app.post("/Authers",async(req,res)=>{  //post auther data

//     const {AutherName} = req.body;
//     const Auther = await Authers.create({AutherName});
//     return res.status(200).json(Auther);
// });






const PORT = 5002;
app.listen({port:PORT},async()=>{
    console.log(`server started at ${PORT}`)
    try{
    await sequelize.sync();
    }catch(e)
    {
        console.log(e);
    }
})