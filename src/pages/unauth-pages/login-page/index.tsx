import React, { useEffect, useState } from "react";
import isEmail from '../../../utils/validation/isEmail';
// import logo from './logo.svg';
// import './App.css';
import { useUser } from "../../../store/hooks";
import { LOCAL_STORAGE_KEY } from "../../../consts";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const { userLogin } = useUser();

  useEffect(() => {
    const { JWT_TOKEN } = LOCAL_STORAGE_KEY;

    if (localStorage.getItem(JWT_TOKEN)) {
      history.push("/home");
    }
  });

  const handleLogin = async () => {

    //Validate Email and Password.
    if (email == '') {
      setEmailError('Please input this field.');
      return;
    }
    if (password == '') {
      setEmailError('Please input this field.');
      return;
    }
    if (!isEmail(email)) {
      setEmailError('Email is not valid.');
      return;
    }

    const loginSuccess = await userLogin(email, password);

    if (loginSuccess) {
      history.push("/home");
    }

  }
  return (
    <div>
      <div className="flex mx-auto py-6 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-6xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")` }}></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Login</h2>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" value={email} onChange={e => setEmail(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email"></input>
            {emailError && <p className="text-left text-xs text-red-500 mt-1">{emailError}</p>}
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
              <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
            </div>

            <input id="loggingPassword" value={password} onChange={e => setPassword(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password"></input>
            { passwordError && <p className="text-left text-xs text-red-500 mt-1">{passwordError}</p> }
          </div>

          <div className="mt-8">
            <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
