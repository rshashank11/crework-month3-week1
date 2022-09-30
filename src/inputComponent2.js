import React from "react";
import "./styles.css";

const inputPw = document.querySelector("#input-pw");
const pwError = document.querySelector("#pw-error");
export default function Password() {
  return (
    <>
      <div>
        <label htmlFor="input-pw">Password</label>
        <a href="/">Forgot password?</a>
      </div>
      <input id="input-pw" type="password" />
      <p id="pw-error"></p>
    </>
  );
}

export { inputPw, pwError };
