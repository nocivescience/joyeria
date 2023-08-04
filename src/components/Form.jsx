import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../files/form.css";
export const Form = () => {
  const [usuarios, setUsuarios] = useState({
    name: "",
    surname: "",
  });
  const [loading, setLoading]= useState(false);
  const [editing, setEditing]= useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if(params.id){
      loadTask(params.id);
    }
  }, [params.id]);
  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:4000/users/${id}`);
    const data = await res.json();
    setUsuarios({
      name: data.name,
      surname: data.surname,
    });
    setEditing(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('clickeo');
    if(params.id){
      const response = await fetch(`http://localhost:4000/users/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios),
      });
      await response.json();
      console.log(response);
    }else{
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        body: JSON.stringify(usuarios),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      console.log(response);
    }
    setLoading(false);
    navigate("/");
  };
  const handleChange = (e) => {
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value,
    })
  };
  return (
    <form className="form-jewel w-50" onSubmit={handleSubmit}>
      <div className="mob-3">
        <div className="form-group">
          <h1 className="display-1 d-flex justify-content-center"
            style={{ 
              textShadow: "2px 2px 10px white",
             }}
          >Formulario</h1>
        </div>
        <div className="form-group"
          style={{ marginTop: "1rem" }}
        >
          <label htmlFor="name" className="form-label">Nombre</label>
          <input style={{backgroundColor:'rgba(0,0,0,0.6)', color:'white'}} type="text" id="name" className="form-control" value={usuarios.name} name="name" onChange={handleChange} />
        </div>
        <div className="form-group"
          style={{ marginTop: "1rem" }}
        >
          <label htmlFor="surname" className="form-label">Apellido</label>
          <input style={{backgroundColor:'rgba(0,0,0,0.6)', color:'white'}} type="text" id="surname" className="form-control" value={usuarios.surname} name='surname' onChange={handleChange} />
        </div>
        <div className="form-group"
          style={{ marginTop: "50px" }}
        >
          <button type="button" className="btn btn-dark">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};
