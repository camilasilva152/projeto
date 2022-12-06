import { useState } from "react";
import "./Modal.css";

export default function Modal({ user, onClose, setUsers }) {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const onSave = () => {
    const newUser = {
      ...user,
      name: {
        ...user.name,
        first: name || user.name.first,
        last: lastName || user.name.last,
      },
      phone: phone || user.phone,
      email: email || user.email,
    };
    setUsers((prevState) => {
      prevState[prevState.findIndex((u) => u.id.value === user.id.value)] =
        newUser;
      return prevState;
    });
    onClose();
  };

  return !!user ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Editar paciente</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="input">
            <label>Nome</label>
            <input
              type="text"
              value={name || user.name.first}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Sobrenome</label>
            <input
              type="text"
              value={lastName || user.name.last}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Telefone</label>
            <input
              type="text"
              value={phone || user.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Email</label>
            <input
              type="text"
              value={email || user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onSave}>Salvar</button>
        </div>
      </div>
    </div>
  ) : null;
}
