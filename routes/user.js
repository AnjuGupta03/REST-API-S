const express = require('express');
const router = express.Router();

//routes
//REST API
router.get('/', async (req, res) =>{
  try {
    const users = await user.find({});
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//GET /api/users/1 -get the user with id 1
//GET /api/users/2 -get the user with id 2

router.get('/:id', async (req, res) => {
  try {
    const User = await user.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(User);
  } catch (err) {
    console.error('Error fetching user:', err);
    return res.status(500).send('Server Error');
  }
});

//patch
router.patch('/:id', async (req, res) => {
  await user.findByIdAndUpdate(req.params.id, { lastName: "changed"})
  return res.json({ status: "success"})
});

//delete
router.delete('/:id', async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  return res.json({ status:sucess});
});
  

router.post('/api/users', async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({msg: "All fields are required" });
    
  }
  const result = await user.create({
    firstName: body.first_name,
    lastName:  body.last_name,
    email: body.email,
    gender: body.gender,
    jobtitle: body.job_title,
  
  });
  console.log("result", result );
  return res.status(201).json({ msg: "success" })
});

//app.post("/api/users", (req, res) => {
  //const body = req.body;
  //users.push({ ...body, id: users.length + 1 });
  //fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //return res.status(201).json({ status:"pending" })
  //})
  //});

 
//HTML DOCUMENTATION
//router.get('/users', async (req, res) => {
  //const allDbusers = await user.find({});
 // const html =`
  //<ul>
    //${allDbusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
   // </ul>`;
  //res.send(html);
//});

module.exports = router;