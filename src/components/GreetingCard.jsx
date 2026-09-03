import React from "react";
import Button from "./Button";

export default function GreetingCard({ name, message }) {
  const onClickHandler = () => {

    alert(`Hello ${name}, you clicked the button!`);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to My App, {name}</h1>
      <p clasName="text-base text-red-200 p-2">{message}</p>

      <div className="flex p-2 items-center justify-center">
        <Button onClick={onClickHandler}>Click Me</Button>
      </div>

      <form action="">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="border p-2 rounded-md"
          ></textarea>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
