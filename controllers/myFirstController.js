module.exports.helloWorld = (req, res) => {
    let responseObj = {};
    const nomAlumnos = ["Gerard","Khadija","Alex","Roger","Xavier","Eric","Miquel","Alba","Raul","Marc","Jordi","Marc","Pol"];
    responseObj.alumnos = nomAlumnos;
    responseObj.countAulumnos = nomAlumnos.length;
    const responseStatus = 200;
res.status(responseStatus).send(responseObj);
};