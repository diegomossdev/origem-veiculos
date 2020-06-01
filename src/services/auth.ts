import api from '../services/api';

interface Response {
  token: string,
  user: {
    id: Number;
    name: string;
    email: string;
    admin: Boolean;
  };
}

export async function signIn(email: string, password: string): Promise<Response> {
  const {data} = await api.post('sessions', {email, password});

  return new Promise((resolve) => {
    resolve({
      token: data.token,
      user: {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        admin: data.user.admin,
      },
    })
  });
}