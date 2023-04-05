import "../files/form.css";
export const Form = () => {
  return (
    <form className="form-jewel">
      <h1 className="titulo">Su Pedido</h1>
      <div className="container">
        <div className="form-group">
          <label className="nombre" htmlFor="name">Nombre</label>
          <input className="entrada" id="name" type="text"></input>
        </div>
        <div className="form-group">
          <label className="nombre" htmlFor="lastname">Apellido</label>
          <input className="entrada" id="lastname" type="text"></input>
        </div>
        <div className="form-group">
          <label className="nombre" htmlFor="email">Correo</label>
          <input className="entrada" id="email" type="email"></input>
        </div>
        <div className="form-group">
          <label className="nombre" htmlFor="number">Celular</label>
          <input className="entrada" id="number" type="text"></input>
        </div>
        <div className="form-group">
          <label className="nombre" htmlFor="piedra">Tipo de Gema</label>
          <select className="piedra seleccion" id='piedra'>
            <option value='ruby'>Ruby</option>
            <option value='diamante'>Diamante</option>
            <option value='sirconio'>Sircolnio</option>
          </select>
        </div>
        <div className="form-group">
          <label className="nombre" htmlFor="metal">Tipo de Metal</label>
          <select className="metal seleccion" id='metal'>
            <option value='oro-rosado'>Oro Rosado</option>
            <option value='oro-blanco'>Oro Blanco</option>
            <option value='oro-amarillo'>Oro Amarillo</option>
            <option value='platino'>Platino</option>
          </select>
        </div>
        <div className="form-group">
          <button className="boton">Enviar Formulario</button>
        </div>
        <div className="form-group">
          <button className="boton clear">Borrar Formulario</button>
        </div>
      </div>
    </form>
  );
};
