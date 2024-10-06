import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(e) {
  //   // console.log("Printing First Name");
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }

  // function changeLastNameHandler(e) {
  //   // console.log("Printing Last Name");
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  // Better Way ✅
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  } // syntax for formHandling compulsory

  function submitHandler(e) {
    e.preventDefault();

    // print
    console.log("Finally Printing the entireform data..");
    console.log(formData);
  }

  return (
    <div className="App">
      <h1>React Forms</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />

        <textarea
          placeholder="Enter comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />

        <div id="checkbox-div">
          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
          />

          <label htmlFor="isVisible">Am I visible ?</label>
        </div>

        <br />

        <div id="radio-div">
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />

          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            // name="mode2"
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Online-Mode"}
          />

          <label htmlFor="Offline-Mode">Offline Mode</label>
        </div>

        <div id="dropdown-div">
          <label htmlFor="favCar">Tell me your Favorite Car ?</label>

          <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
          >
            <option value="scorpio">Scorpio</option>
            <option value="fortuner">Fortuner</option>
            <option value="thar">Thar</option>
            <option value="legender">Legender</option>
            <option value="defender">Defender</option>
          </select>
        </div>

        {/* <input type="submit" value="submit">
          Submit
        </input> */}

        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
