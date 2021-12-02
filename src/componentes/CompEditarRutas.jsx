import "./ListarOrdenes.css"

const EditarRutas = () => {
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
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" align-items-center">
                            <td>1</td>
                            <td>Barranquilla</td>
                            <td>Cartagena</td>
                            <td><button type="button" class="btn btn-primary mx-4" data-bs-toggle="modal" data-bs-target="#editUsu">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <div class="modal fade" id="editUsu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Editar ruta #1</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="numRuta" class="col-form-label"># Ruta</label>
                                                    <input type="number" min="0" class="form-control" id="numRuta" value="1"/>
                                                    <label for="LOrigen" class="col-form-label" >Lugar Origen</label>
                                                    <input type="text" class="form-control" id="LOrigen" value="Barranquilla"/>
                                                    <label for="LDestino" class="col-form-label" >Lugar Destino</label>
                                                    <input type="text" class="form-control" id="LDestino" value="Cartagena"/>
                                                    <label for="Distancia" class="col-form-label">Distancia en km</label>
                                                    <input type="number" min="0" class="form-control" id="Distancia" value="100"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary" >Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                <button type="button" class="btn btn-primary btn-lg mx-4" data-bs-toggle="modal" data-bs-target="#crearUsu" >Crear nueva ruta</button> 
                <div class="modal fade" id="crearUsu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Crear nueva ruta</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="numRuta" class="col-form-label"># Ruta</label>
                                        <input type="number" min="0" class="form-control" id="numRuta" />
                                        <label for="LOrigen" class="col-form-label">Lugar Origen</label>
                                        <input type="text" class="form-control" id="LOrigen" />
                                        <label for="LDestino" class="col-form-label">Lugar Destino</label>
                                        <input type="text" class="form-control" id="LDestino" />
                                        <label for="Distancia" class="col-form-label">Distancia en km</label>
                                        <input type="number" min="0" class="form-control" id="Distancia" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" >Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#costokm">Modificar costo por Km</button>
                <div class="modal fade" id="costokm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modificar costo por km</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">El costo actual por km es: $5.000</label>
                                        <h1 class="col-form-label">Ingrese el nuevo costo</h1>
                                        <input type="number" min="0" class="form-control" id="recipient-name" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" >Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )   
}

export default EditarRutas