import mongoose from "mongoose"

const connectDB = async (MONGO_URI: string | undefined): Promise<void> => {
if(MONGO_URI){
  mongoose.connect(MONGO_URI)
.then(()=>{
  console.log('connected to data base')
})
.catch((error:any)=>{
    console.log(error)
})
}
}
export default connectDB