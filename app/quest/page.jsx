// 'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

// import { useParams } from 'next/navigation';

import questData from './questData';

// import projectlist from '@/app/projects.json'
import {notFound} from "next/navigation";

export async function generateStaticParams() {
  return questData.map((p) => ({
    questpage: p.id.toString(),
  }))
}

export default function Quest (questpage) {
// export default function Quest({params: {questpage}}: { params: { questpage: string } }) {

// export default function Quest({params: {questpage}} {
// export default function Quest({params: {questpage}}: { params: { questpage: string } }) {
  const project = questData.find(p => p.id === questpage)
  if (!project) {
    notFound()
  }

  return (
    <main>
      <p>ID Here:{project.id}</p>
      <p>Title Here:{project.title}</p>
      <p>Info Here:{project.info}</p>
    </main>
  )
}


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
