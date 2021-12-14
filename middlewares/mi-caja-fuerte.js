module.exports.checkNumQueryInteger = (req, res, next)=>
{
    req.query.num = Number(req.query.num);
    if(!Number.isNaN(req.query.num)){
        if(Number.isInteger(req.query.num)){
            next();
        }else{
            res.status(400).send({
                message: '"num" param must be integer'
            });
        }
    }else{
        res.status(400).send({
            message: '"num" param must be numeric'
        });
    }
};
module.exports.checkString = (req, res, next)=>
{
        if(req.query.string ==='micajafuerte' ) {
            next();
        }else{
            res.status(400).send({
                message: '"num" param must be integer'
            })
        }
    };
