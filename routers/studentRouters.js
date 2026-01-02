const express=require('express');
const router=express.Router();
let students=[
    {id:1, name: "Keerthi", dept:"IT", age:20},
    {id:2, name: "Prasanna", dept:"IT", age:20}
];
router.get('/',(req,res)=>{
    res.json(students);
});
router.put('/:id',(req, res)=>{
    const id =parseInt(req.params.id);
    const updateName= req.body.name;
    students=students.map(student =>
        student.id===id?{...student, name:updateName}:student
    );
    res.json({
        message:"Student updated successfully",
        students
    });
});  
router.post('/',(req, res)=>{
    const newStudents=req.body;
    students.push(newStudents);
    res.status(201).json({
        message:"Student added successfully",
        students
    });
});
router.post('/',(req, res)=>{
    const newStudents=req.body;
    if(Array.isArray(newStudents)){
        students.push(...newStudents);
    }else {
        students.push(newStudents);
    }
    res.status(201).json({
        message:"Student added successfully",
        students
    });
});
router.put('/',(req,res)=>{
    const updates=req.body;
    updates.forEach(update=>{
        students=students.map(student=>
            student.id===update.id
                ?{...student, name: update.name}
                :student
        );
    });
    res.json({
        message:"Student added successfully",
        students
    });
});
router.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    students=students.filter(student=>student.id!==id);
    res.json({
        message:"Student deleted successfully",
        students
    });
});

router.delete('/',(req,res)=>{
    const idsToDelete=req.body;
    students=students.filter(
        student=>!idsToDelete.includes(student.id)
    );
    res.json({
        message:"Student deleted successfully",
        students
    });
});


module.exports=router;