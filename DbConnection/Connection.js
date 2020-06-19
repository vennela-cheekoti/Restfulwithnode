const mongoose= require('mongoose');

const URI='mongodb+srv://vennela:cheekoti@cluster0-urzy0.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectDB=async()=>{
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connected to DB")
}

module.exports=connectDB;