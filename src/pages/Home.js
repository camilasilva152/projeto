import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import trash from "../assets/trash.png";
import edit from "../assets/edit.png";
import Modal from "../components/Modal";

function Home() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((response) => {
      setUsers(response.data.results);
    });
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
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
            users.map((user, i) => (
              <div className="item">
                <span>
                  {user.name.first} {user.name.last}
                </span>
                <span>{user.gender}</span>
                <span>{new Date(user.dob.date).toLocaleDateString()}</span>
                <span>
                  <img
                    src={trash}
                    alt="icone deletar"
                    onClick={() => deleteUser(i)}
                  />
                  <img
                    src={edit}
                    alt="icone editar"
                    onClick={() => setUser(user)}
                  />
                </span>
              </div>
            ))}
        </div>
      </div>
      <Modal user={user} onClose={() => setUser(null)} setUsers={setUsers} />
    </>
  );
}
export default Home;
