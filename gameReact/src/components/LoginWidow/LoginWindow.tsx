import React from "react";
import s from './LoginWindow.module.css'

const LoginWindow = () => {
  return (
    <div className={s.login}>
      <div className={s.area}>
      <div className={s.text}>Please login</div>
      <div>
        <textarea className={s.email}>email</textarea>
      </div>
      <div>
        <textarea className={s.password}>password</textarea>
      </div>
      <div>
        <button className={s.button}>Login!</button>
      </div>
      </div>
    </div>
  );
};

export default LoginWindow;
export {};
