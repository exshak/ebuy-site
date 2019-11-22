import { useApolloClient, useMutation } from '@apollo/react-hooks';
import cookie from 'cookie';
import gql from 'graphql-tag';
import { useRef } from 'react';
import redirect from '../lib/redirect';

const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`;

// TODO: Find a better name for component.
const SigninBox = () => {
  const client = useApolloClient();

  const onCompleted = (data: any) => {
    // Store the token in cookie
    document.cookie = cookie.serialize('token', data.signin.token, {
      sameSite: true,
      path: '/',
      maxAge: 30 * 24 * 60 * 60 // 30 days
    });
    // Force a reload of all the current queries now that the user is
    // logged in
    client.cache.reset().then(() => {
      redirect({}, '/');
    });
  };

  const onError = (error: any) => {
    // If you want to send error to external service?
    console.error(error);
  };

  const [signin, { error }] = useMutation(SIGN_IN, {
    onCompleted,
    onError
  });

  const email: any | null = useRef(null);
  const password: any | null = useRef(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        signin({
          variables: {
            email: email.current.value,
            password: password.current.value
          }
        });

        email.current.value = password.current.value = '';
      }}
    >
      {error && <p>No user found with that information.</p>}
      <input name='email' placeholder='Email' ref={email} />
      <br />
      <input
        name='password'
        placeholder='Password'
        ref={password}
        type='password'
      />
      <br />
      <button>Sign in</button>
    </form>
  );
};

export default SigninBox;
