import './App.css';
import Success from './Success';
import Failure from './Failure';
import { useState } from 'react';

function App() {
  const [login] = useState({ username: 'react', password: '123' });
  const checkLogin = (obj) => {
    if (login.username === obj.user && login.password === obj.pass) {
      console.log('I am at CheckLogin Success');

      return <Success user={obj.user} />;
    } else {
      console.log('I am at CheckLogin Failed');

      return <Failure />;
    }
  };
  const [account, setAccount] = useState({
    user: '',
    pass: '',
  });
  const [component, setComponent] = useState('');
  const handleChange = (e) => {
    console.log(account);
    setAccount({ ...account, [e.target.id]: e.target.value });
  };

  // const [user, setUser] = useState('');
  // const [pass, setPass] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setComponent(checkLogin(account));
  }

  return (
    <div>
      <form id='input_form' onSubmit={handleSubmit}>
        <input
          id='user'
          type='username'
          name='username'
          placeholder='Enter a username'
          value={account.user}
          onChange={handleChange}
          // onChange={(e) => setState(e.target.value)}
          required
        />

        <input
          id='pass'
          type='password'
          name='pass'
          value={account.pass}
          // onChange={(e) => setState(e.target.value)}
          onChange={handleChange}
          placeholder='Enter a password'
        />

        <button>Submit</button>
      </form>

      {component}
    </div>
  );
}

export default App;
