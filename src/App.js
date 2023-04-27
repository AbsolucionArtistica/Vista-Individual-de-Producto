import React from "react";

const Mujer = () => {
    return (
        <>
            <div className="row">
                <div className="col-5 d-flex justify-content-center"> <img className="imagenProducto" src="https://thumbs.dreamstime.com/b/parte-delantera-de-la-camiseta-algod%C3%B3n-blanco-masculino-una-macho-sobre-un-colgador-aislado-fondo-sin-imprimir-188080429.jpg" /></div>
                <div className="col-4"><h1 className="fs-3">Polera Mujer<br /></h1><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-regular fa-star fs-4"></i>(4)<br />
                    <div className="row"><div className="col-2 mx-2"><label for="inputTalla" className="form-label">Talla</label></div><div className="col-2 mx-2"><label for="inputCantidad" className="form-label">Cantidad</label></div><br /></div>
                    <select id="inputTalla" className="form-select-sm mx-1 w-25"><option>Seleccione...</option><option>...</option></select><select id="inputCantidad" className="form-select-sm mx-1 w-25"><option>Seleccione...</option><option>...</option></select><br />
                    <div className="row justify-content-center"><div className="col-12"><button type="button" className="btn btn-primary btn-sm m-2 botonNaranjo w-50">Agregar al carrito</button></div></div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 m-5 d-flex"><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-solid fa-star fs-4"></i><i className="fa-regular fa-star fs-4"></i><p> comentarios(4)</p></div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Recomendaciones</h1>
                </div>
                <div className="col-12 d-flex">
                    <img className="imagenSugerenciaProducto m-1" src="https://www.shutterstock.com/image-vector/blank-tshirt-on-hanger-260nw-123155623.jpg" />
                    <img className="imagenSugerenciaProducto m-1" src="https://www.shutterstock.com/image-vector/blank-tshirt-on-hanger-260nw-123155623.jpg" />
                    <img className="imagenSugerenciaProducto m-1" src="https://www.shutterstock.com/image-vector/blank-tshirt-on-hanger-260nw-123155623.jpg" />
                    <img className="imagenSugerenciaProducto m-1" src="https://www.shutterstock.com/image-vector/blank-tshirt-on-hanger-260nw-123155623.jpg" />
                    <img className="imagenSugerenciaProducto m-1" src="https://www.shutterstock.com/image-vector/blank-tshirt-on-hanger-260nw-123155623.jpg" />
                </div>
            </div>
        </>
    )
}

export default Mujer

