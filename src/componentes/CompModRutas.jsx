const ModRutas = () => {
    return(
        <div>
            <div className="row fluid p-3" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h1 className="col-10 text-center">Crear y modificar rutas</h1>
                </div>
            </div>

            <div class="container">
                <table class="table text-center table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Ruta</th>
                            <th scope="col">Lugar Origen</th>
                            <th scope="col">Lugar Destino</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" align-items-center">
                            <td>1</td>
                            <td>Barranquilla</td>
                            <td>Cartagena</td>
                            <td><button type="button" class="btn btn-primary mx-4">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Medellin</td>
                            <td>Bogota</td>
                            <td><button type="button" class="btn btn-primary mx-4">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Santa Marta</td>
                            <td>Barranquilla</td>
                            <td><button type="button" class="btn btn-primary mx-4">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Medellin</td>
                            <td>Cartagena</td>
                            <td><button type="button" class="btn btn-primary mx-4">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Riohacha</td>
                            <td>Santa Marta</td>
                            <td><button type="button" class="btn btn-primary mx-4">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container d-flex justify-content-center align-items-center" >
            <button type="button" class="btn btn-primary btn-lg mx-4" >Crear nueva ruta</button> 
            <button type="button" class="btn btn-primary btn-lg" >Editar costo por Km</button>
            </div>
        </div>
        
    )   
}

export default ModRutas