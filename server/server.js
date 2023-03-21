const express = require('express')
const app = express()

app.use(express.json())
app.use('/payments', (req, res)=>{
    console.log(req.body);
    // console.log(res);
})

app.listen(8000, () => {
    console.log(`server listen on the ${8000}`);
})