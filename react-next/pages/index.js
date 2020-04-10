import React from 'react';
import cowsay from 'cowsay-browser';
import scss from '../static/index.scss';
import axios from 'axios';
import Link from 'next/link';
const PageApp = ({ data }) => {
  console.log(data);
  return (
    <div className={scss.div}>
      Welcome to next.js!
      <p>wode</p>
      <p>我是刘道云</p>
      <style jsx>
        {`
          p {
            color: red;
          }
        `}
      </style>
      <pre>
        {cowsay.say({
          text: 'say hello!'
        })}
      </pre>
      {/* <img src={require(`./static/a.png`)} alt="my image" /> */}
      {/* <img src={'/static/a.png'}></img> */}
      <Link href={{ pathname: '/about', query: { name: 'ldy' } }}>
        <a>here</a>
      </Link>
    </div>
  );
};
PageApp.getInitialProps = async ({ req }) => {
  const res = await axios('https://api.github.com/repos/zeit/next.js');
  // const json = await res.json();
  // console.log(res.data);
  return { data: res.data };
};
export default PageApp;
