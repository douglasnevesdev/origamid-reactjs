import React from 'react'
import { Link } from 'react-router-dom';

function LoginForm() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );

}

export default LoginForm
