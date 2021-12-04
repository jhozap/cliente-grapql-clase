import { useQuery } from '@apollo/client'
import React from 'react'
import GET_CURSOS from '../Apollo/gql/getCursos'
import Curso from './Curso'

const Cursos = () => {

    const { loading, data, error } = useQuery(GET_CURSOS)

    return (
        <div>
            {loading && <p>Cargando...</p>}
            {error && <p>se ha presentado un error </p>}
            {data && data.Cursos.map((curso) => {
                return <Curso key={curso.id} curso={curso}/>
            })}
        
        </div>
    )
}

export default Cursos

