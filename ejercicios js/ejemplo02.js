const alumnos = [
    {
        nombre: 'Romina',
        nota:'7'
    },
    {
        nombre: 'Martina',
        nota:'5'
    },
    {
        nombre: 'Camila',
        nota:'10'
    },
    {
        nombre: 'Gino',
        nota:'9'
    },
    {
        nombre: 'Facundo',
        nota: '6'
    }
]
for (let i = 0; i < alumnos.length; i++) {
    document.write(`<h3>alumno</h3><li>${alumnos[i].nombre} = ${alumnos[i].nota} </li>`)
}
const aprobados = alumnos.filter(alumno =>alumno.nota >6)
console.log(aprobados);
