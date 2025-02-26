import { useEffect, useState } from "react"

export const Peticion = ({ }) => {
    const [Personas, setpersonas] = useState([])
    const obtenerdatos = async () => {
        let respuestas = await fetch("https://dummyjson.com/users")
        let data = await respuestas.json()
        setpersonas(data.users)
    }
    useEffect(() => {
        obtenerdatos()
    }, [])
    if (Personas.length == 0) {
        return <h1>Cargando</h1>
    }
    console.log(Personas)
    return <>
        <h1>Usuarios</h1>
        {Personas.map((element, index)=>{
            return <div key={index}>
                <h3>{element.firstName}</h3>
                <h2>{element.age}</h2>
                <h4>{element.age<30?"Menor de 30":"Mayor de 30S"}</h4>

            </div>
        })}

    </>

}