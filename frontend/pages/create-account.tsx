import Link from 'next/link';
import React from 'react';
import RegisterBox from '../components/RegisterBox';
import { withApollo } from '../lib/apollo';
import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const CreateAccountPage = () => (
  <>
    {/* RegisterBox handles all register logic. */}
    <RegisterBox />
    <hr />
    Already have an account?{' '}
    <Link href='/signin'>
      <a>Sign in</a>
    </Link>
  </>
);

CreateAccountPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (loggedInUser.me) {
    // Already signed in? No need to continue.
    // Throw them back to the main page
    redirect(context, '/');
  }

  return {};
};

export default withApollo(CreateAccountPage);
