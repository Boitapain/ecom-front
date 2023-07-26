export default function handle(req,res){
    if(req.method !== "POST"){
        res.json("should be a post request!");
        return;
    }
    const {name,email,city,postalCode,streetAddress,Country} = req.body;
}