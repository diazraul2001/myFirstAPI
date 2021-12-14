const status= {
    ok: 200,
    NotFound: 404,

};
module.exports= {
    ej1: (req, res) => {
        const num=req.query.num;
        if(req.query.num){
        const ran = Math.random()*num;
        const round = Math.round(ran);
        res.status(200).send({round: round});
        
    }
    },
    ej2: (req, res) => {
        let array = [2,3,8,9,7,3,5,6];
        array = array.map((el)=> el* req.query.num);
        
        res.status(200).send({random});
    }
}