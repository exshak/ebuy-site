import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'
import { Signin } from '../components/Signin'
import { withApollo } from '../lib/apollo'

export default withApollo(() => (
  <Layout title='Signin'>
    <Signin />
    <hr />
    New?{' '}
    <Link href='/signup'>
      <a>Create account</a>
    </Link>
  </Layout>
))

// import Link from 'next/link'
// import React from 'react'
// import SigninBox from '../components/SigninBox'
// import { withApollo } from '../lib/apollo'
// import checkLoggedIn from '../lib/checkLoggedIn'
// import redirect from '../lib/redirect'

// const SigninPage = () => (
//   <>
//     {/* SigninBox handles all login logic. */}
//     <SigninBox />
//     <hr />
//     New?{' '}
//     <Link href='/create-account'>
//       <a>Create account</a>
//     </Link>
//   </>
// )

// SigninPage.getInitialProps = async (context: any) => {
//   const { loggedInUser } = await checkLoggedIn(context.apolloClient)

//   if (loggedInUser.me) {
//     // Already signed in? No need to continue.
//     // Throw them back to the main page
//     redirect(context, '/')
//   }

//   return {}
// }

// export default withApollo(SigninPage)
