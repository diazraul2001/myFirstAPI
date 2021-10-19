// module.exports.list = (req, res) => {
//     req.query
//     };
// module.exports.profile = (req, res) => {
//         req.query
//         };

const users = [
    {name: 'jhon'},
    {name: 'david'}, 
    {name: 'maria'}
];
const status= {
    ok:200,
};
        module.exports = {
            list: (req, res) => {
                res.status(200).send(users)
            },
            // profile: () => {

            // }
        }