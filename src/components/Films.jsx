import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line react/prop-types
const Films = ({films = []}) => {
  return (
    <div className='container'>
      <div className="row">
        {films.map((item, index) => (
        <div key={index} className="col-7 col-sm-3 mb-4">
          <div className="card w-2 p-3  align-items-center">
            <img className="" style={{with:550, height: 250}} src={item.imagen} alt="" />
              <div className='card-body'>
                <h5 className="card-title">{item.nombre}</h5>
                <hr />
                <p className="d-inline-flex gap-1">
                  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Mas información
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <p>Calificación: {item.calificacion} </p>
                    <p>Director: {item.director} </p>
                    <p>Fecha de estreno: {item.fechaEstreno} </p>
                    <p>Tiempo de duración: {item.tiempoDuracion} </p>
                    <p>Genero: {item.genero} </p>
                    <p>Distribuidor: {item.distribuidor} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Films