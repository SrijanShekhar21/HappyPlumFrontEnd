import { useState } from "react";


const useValidation = () => {

  const eventHandler = (id, val)=> {
    switch (id) {
      // accept only letters and length of character up to 30
      case "alphabet":
        if (!new RegExp(/^[a-zA-Z]{1,30}$/).test(val))
          return "Enter alphabets only";
        else {
          return "";
        }

      // accept only letters and space in between characters
      case "alphabetsAndSpace":
        if (!new RegExp(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).test(val))
          return "Input should contain alphabets with spaces only in between";
        else {
          return "";
        }

      // accept letters, numbers, and special characters
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(val)
        )
          return "Enter a valid email address";
        else {
          return "";
        }

      // accept string length between 8 and 12 characters, at least one lowercase and uppercase letter, one digit, and one special character.
      case "password":
        if (
          !new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]\\|:;"'<>,.?/~]).{8,12}$/
          ).test(val)
        )
          return "Invalid password. Password must be 8 to 12 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
        else {
          return "";
        }

      // pattern to check for Indian phone numbers
      case "mobile":
        if (!new RegExp(/^[6-9]\d{9}$/).test(val))
          return "Invalid mobile number";
        else {
          return "";
        }

      // For first loading form phone number
      case "phone":
        if (!new RegExp(/^(\+91)?[0]?(91)?[789]\d{9}$/).test(val))
          return "Invalid mobile number";
        else {
          return "";
        }

 

      // accept only numbers without starting from zero
      case "numeric":
        if (!new RegExp(/^[1-9][0-9]*$/).test(val))
          return "Enter numbers only";
        else {
          return "";
        }

      // accept both letters and numeric value
      case "alphanumeric":
        if (!new RegExp(/^[0-9a-zA-Z,-]+$/).test(val))
          return "Enter characters and numbers only";
        else {
          return "";
        }

      // accept letters, numbers, whitespace, punctuation marks, comma, and special characters
      case "address":
        if (!new RegExp(/^[a-zA-Z0-9\s,-]+$/).test(val))
          return "Enter valid address";
        else {
          return "";
        }
        case "alphanumericdot":
        if (!new RegExp(/^[a-zA-Z0-9\s,.,-]+$/).test(val))
          return "Enter valid text";
        else {
          return "";
        }

      // matches any alphabetic character (upper or lowercase), digit, space, comma, period, exclamation mark, question mark, single or double quotation marks, or hyphen.
      case "message":
        if (!new RegExp(/^[a-zA-Z0-9\s.,!?'"-]*$/).test(val))
          return "Invalid message";
        else return "";


     
      default:
        return "";
    }
  };

  return { eventHandler };
};

export default useValidation;
