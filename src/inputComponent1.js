import React from "react";
import "./styles.css";

const inputMail = document.querySelector(".input");
const mailError = document.querySelector("#mail-error");
export default function Email() {
  return (
    <>
      <label htmlFor="input-mail">Email address</label>
      <input id="input-mail" type="email" />
      <p id="mail-error"></p>
    </>
  );
}

export { inputMail, mailError };
