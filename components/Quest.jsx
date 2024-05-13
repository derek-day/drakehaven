'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { useParams } from 'next/navigation';

import questData from '../questData';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const checkIdValidity = (id) => {
  const resultat = questData.find((character) => `:${character.id}` === id);
  if (resultat !== undefined) return true;
  return false;
};


class Quest extends React.Component {
  render() {
    let { id } = this.props.params;
    const isQuestInAPI = checkIdValidity(id);
    const questInfo = getCharacterInfo(id);
    if (isQuestInAPI == false) return <Navigate to="*" />;
    return questInfo ;
  }
}

const getCharacterInfo = (id) => {
  return questData.map((element) => {
    if (`:${element.id}` === id) {
      return <p key={id}>{element.title}</p>;
    }
  });
};



// export default withPageAuthRequired(function Quest() {
//   return (
//     <>
//       <div className="mb-5" data-testid="csr">
//         <h1 data-testid="csr-title">Client-side Rendered Page</h1>
//         <div data-testid="csr-text">
//           <p>
//             You can protect a client-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
//             logged in users will be able to access it. If the user is logged out, they will be redirected to the login
//             page instead.
//           </p>
//           <p>
//             Use the <code>useUser</code> hook to access the user profile from protected client-side rendered pages. The{' '}
//             <code>useUser</code> hook relies on the <code>UserProvider</code> Context Provider, so you need to wrap your
//             custom <a href="https://nextjs.org/docs/advanced-features/custom-app">App Component</a> with it.
//           </p>
//           <p>
//             You can also fetch the user profile by calling the <code>/api/auth/me</code> API route.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// });
