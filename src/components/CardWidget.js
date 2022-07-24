import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CardWidget  = () => {

    const MySwal = withReactContent(Swal)
    const cartAlert = () => {
        MySwal.fire({
            title: <p>En desarrollo</p>,
            icon: "warning",
            button: "Aceptar",
            timer: "2000"
        })
    }

  return (

    <li className="nav-item">
        <a className="nav-link" href="/#" onClick={()=>cartAlert()}>
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning navbar-badge">5</span>
        </a>
    </li>


  )
}

export default CardWidget 