import connect from "../../utils/database"


export default async function handler(req, res){
   const {db} =  await connect()

   const user = {
      username: req.body.username,
      senha: req.body.senha
   }

   const response = await db.collection("users").findOne()

    res.status(200).json(response)

}
