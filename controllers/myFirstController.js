module.exports.helloWorld = (req, res) => {
    let responseObj = {};
    const nomAlumnos = ['Alex','Gerard','Roger'];
    responseObj.alumnos = nomAlumnos;
    responseObj.countAulumnos = nomAlumnos.length;
    const responseStatus = 200;
res.status(responseStatus).send(responseObj);
};