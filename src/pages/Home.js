import {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import trash from '../assets/trash.png';
import edit from '../assets/edit.png';

function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
  axios.get('https://randomuser.me/api/?results=5').then(response => {
    setUser(response.data.results);
  });
  }, []);
  
  useEffect(() => {
  console.log(user);
  }, [user]);
    return (
        <div className="wrapper-home">
          <div className="container-home">
            <div className='header'>
              <h1>Lista de pacientes</h1>
            </div>
            <div className='item'>
              <span>Nome</span>
              <span>Gênero</span>
              <span>Aniversário</span>
              <span>Ações</span>
            {user.map(user => {
            return (
            <div key={user.email}>
            <p>{user.gender}</p>
      </div>
    )
  })}
            </div>
          </div>
        </div>
        
    );
  }
  export default Home;