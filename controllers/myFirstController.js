module.exports.helloWorld = (req, res) => {
    const responseObj = {msg: 'Hello World!'};
    const nomAlumnos = ['Alex','Gerard','Roger'];
    const responseStatus = 200;
res.status(responseStatus).send(nomAlumnos);
};