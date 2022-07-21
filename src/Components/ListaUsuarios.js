import React from 'react'

const ListaUsuarios = ({usuarios, manejarBorrado}) => {
    const manejarClick = () =>{
        manejarBorrado();
    }

  return (
    <div>
        {usuarios.map((usuario, index) => <p key={index}>{usuario}</p> )}
        <button onClick={manejarClick}>Borrar Lista</button>
    </div>
  )
}

export default ListaUsuarios