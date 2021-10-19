// module.exports.list = (req, res) => {
//     req.query
//     };
// module.exports.profile = (req, res) => {
//         req.query
//         };

const users = [
    {id:1, name: 'jhon'},
    {id:2, name: 'david'}, 
    {id:3, name: 'maria'}
];
const status= {
    ok: 200,
    NotFound: 404,

};
        module.exports = {
            list: (req, res) => {
                console.log(req.body);
                res.status(200).send(users);
            },
             profile: (req,res) => {
                //  console.log(req.params.userId);
                const user = users.find((user)=> user.id == req.params.userId);
                if(user){
                    res.status(status.ok).send(user);
                }else {
                    const msg = { error: "User Id not Found"};
                    res.status(status.NotFound).send(user);
                }
               
            }
        }