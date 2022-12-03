import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import trash from "../assets/trash.png";
import edit from "../assets/edit.png";

function Home() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div className="wrapper-home">
      <div className="container-home">
        <div className="header">
          <h1>Lista de pacientes</h1>
        </div>
        <div className="item">
          <span>Nome</span>
          <span>Gênero</span>
          <span>Aniversário</span>
          <span>Ações</span>
        </div>
        {users &&
          users.map((user) => (
            <div className="item">
              <span>
                {user.name.first} {user.name.last}
              </span>
              <span>{user.gender}</span>
              <span>{new Date(user.dob.date).toLocaleDateString()}</span>
              <span>
                <img src={trash} alt="icone deletar" />
                <img src={edit} alt="icone editar" />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
