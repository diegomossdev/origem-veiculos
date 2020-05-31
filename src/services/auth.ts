interface Response {
  token: string,
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'token123',
        user: {
          name: 'Diego',
          email: 'diego@mossmann.dev',
        },
      })
    }, 1500);
  });
}