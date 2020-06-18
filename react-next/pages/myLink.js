import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
// import Unexpected_A from 'third-library';
const MyLink = ({ router, href }) => {
  console.log(router, href, '---');
  const {
    query: { name }
  } = router;
  return <div>mu</div>;
};
export default withRouter(MyLink);
