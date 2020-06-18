import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
// import Unexpected_A from 'third-library';
const About = ({ router, href }) => {
  console.log(router, href, '---');
  const {
    query: { name }
  } = router;
  return (
    <div>
      <Link href={'/'}>{name}</Link>
    </div>
  );
};
export default withRouter(About);
