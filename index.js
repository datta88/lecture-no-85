
import express from "express";

const app = express()

app.use(express.json());

const PORT = 5000;

const students = [];

app.get('/health', (req, res) => {
    res.json({ status: "all good,good morning" })
});

app.get('/students', (req, res) => {
    res.json({
        success: true,
        data: students,
        massage: 'Siccessfully fetched all student',
    })
})

app.post('/student', (req, res) => {
    const { name, age, mobile, email } = req.body;

    if (!name) {
        return res.json({
            success: false,
            massage: 'name is required'
        })
    }
    if (!age) {
        return res.json({
            success: false,
            massage: 'age is required'
        })
    }
    if (!mobile) {
        return res.json({
            success: false,
            massage: 'mobile is required'
        })
    }
    if (!email) {
        return res.json({
            success: false,
            massage: 'email is required'
        })
    }

    const id = Math.floor(Math.random() * 1000) + 1;


    const newStudent = {
        id,
        name,
        age,
        mobile,
        email,
    }

    // const newStudent = {

    //     'id':id,
    //     'name':name,
    //     'age':age,
    //     'mobile':mobile,
    //     'email':email,
    // }

    students.push(newStudent);

    res.json({
        success: true,
        data: newStudent,
        massage: 'successfully added new student'
    })
})

app.get('/student', (req, res) => {
    const {id}  = req.query;

    let student = null;

    students.forEach((std) => {
        if (std.id == id)
        {
            student = std
        }
    });


    if (student == null) {
        return res.json({
            success: false,
            massage: 'student not faund',
        })
    }

    res.json({
        success: true,
        data: student,
        massage: 'successfully fetched student',
    })
});











// [app.get('/addstudent', (req, res) => {
//     const id = req.query;

//     let astudent = null;

//     student.forEach((stud) => {
//         if (astudent.id == id) {
//             astudent = stud;
//         }
//     })

//     if(astudent == null){
//         return res.json({
//             success: false,
//             data: astudent,
//             massage: 'student not faund'
//         })
//     }
//     res.json({
//         success: true,
//         data: astudent,
//         massage: 'successfully fetched student'
//     })
// });]

// const student = [];
// const {id, name , mobile , email} = req.query;
// app.post('/students', (req,res)=>{
//     const id = Math.floor(Math.random()*1000)
//     const students{
//         // id:id,
//         name:name,
//         mobile:mobile,
//         email:email,
//     };
// })
// app.get('/std',(req,res)=>{
// })

// app.get('/student',(req,res)=>{
//     res.send("hello word")
// })




app.listen(PORT, () => {
    console.log(`Server is running ${PORT}.`)
})