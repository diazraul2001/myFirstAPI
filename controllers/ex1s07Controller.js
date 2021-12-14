let arr= [
    {
        modelo: " ",
        precio: " ",
        pulgadas: " ",
         ram: " ",
         cpu: " ",
    }
    ]
module.exports= 
 {    
     get: (req, res) => {
         console.log(req.arr);
         res.status(200).send("Done!");
        
    }
add: (req, res) => {
 const parm = req.body;
 arr.push(parm)
console.log(arr)
res.status(200).send("Done!");
 }
modify: (req, res) => {
}
delete: (req, res) => {
    const id
    const value = req.body.modelo;
arr = arr.filter(value);
 }
 console.log(req.arr)
   res.status(200).send("Done!");
}

