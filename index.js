const express=require('express');
const app=express();
const PORT = 3000;

const studentRoutes=require('./routers/studentRouters');

app.use(express.json());

app.use('/students',studentRoutes);

app.get('/',(req,res)=>{
       res.send('Student management API is running');
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});