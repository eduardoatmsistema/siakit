import { createContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/apiClient';

import { destroyCookie, setCookie, parseCookies } from 'nookies'


type AuthContextData = {
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type SignUpProps = {
  name: string;
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
const history = useNavigate();

  try{
    destroyCookie(undefined, '@nextauth.token')
    history('/');
  }catch{
    console.log('erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const history = useNavigate();
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  useEffect(() => {

    // tentar pegar algo no cookie
    const { '@nextauth.token': token } = parseCookies();

    if(token){
      api.get('/me').then(response => {
        const { id, name, email } = response.data;

        setUser({
          id,
          name,
          email
        })

      })
      .catch(() => {
        //Se deu erro deslogamos o user.
        signOut();
      })
    }


  }, [])

  async function signIn({ email, password }: SignInProps){
    try{
      const response = await api.post('/session', {
        email,
        password
      })
      // console.log(response.data);

      const { id, name, token } = response.data;

      localStorage.setItem('@', token)

      setUser({
        id,
        name,
        email,
      })
      console.log('Logado com sucesso!')

      //Redirecionar o user para /dashboard
      history('/maintenance')


    }catch(err){
      console.log("ERRO AO ACESSAR ", err)
    }
  }


  async function signUp({ name, email, password}: SignUpProps){
    try{
      
      const response = await api.post('/users', {
        name,
        email,
        password
      })

      console.log("Conta criada com sucesso!")
      history('/')

    }catch(err){
      console.log("erro ao cadastrar ", err)
    }
  }

  return(
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}