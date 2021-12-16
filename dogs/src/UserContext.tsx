import React from 'react'
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext({});

export const UserStorage = ({ children }: any) => {

  const [data, setData] = React.useState<any>(null);
  const [login, setLogin] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<any>(false);
  const [error, setError] = React.useState<any>(null);

  async function getUser(token: any) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: any, password: any) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
