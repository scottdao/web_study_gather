import cowsay from 'cowsay-browser';
export default () => (
  <div>
    Welcome to next.js!
    <pre>
      {cowsay.say({
        text: 'say hello!'
      })}
    </pre>
  </div>
);
