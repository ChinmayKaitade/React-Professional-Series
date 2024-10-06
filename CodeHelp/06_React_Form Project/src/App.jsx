import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the Form Data");
    console.log(formData);
  }

  return (
    <div className="m-16">
      <div className="mt-2 w-[950px] mx-auto border shadow-lg container min-h-screen my-24 rounded-md">
        <h1 className="text-center text-4xl text-blue-500 py-2 m-2 font-semibold uppercase">
          Registration Form
        </h1>
        <form onSubmit={submitHandler} className="min-h-screen ">
          <div className="w-full mt-5 px-7">
            <label htmlFor="firstName" className="font-semibold">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Chinmay"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="lastName" className="font-semibold">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Kaitade"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="chinmaykaitade123@gmail.com"
              value={formData.email}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="country" className="font-semibold">
              Country
            </label>

            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            >
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="streetAddress" className="font-semibold">
              Street Address
            </label>

            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="1234 Main St"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="city" className="font-semibold">
              City
            </label>

            <input
              type="text"
              name="city"
              id="city"
              placeholder="Nagpur"
              value={formData.city}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="state" className="font-semibold">
              State / Province
            </label>

            <input
              type="text"
              name="state"
              id="state"
              placeholder="Maharashtra"
              value={formData.state}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <div className="w-full px-7">
            <label htmlFor="postalCode" className="font-semibold">
              ZIP / Postal Code
            </label>

            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="440002"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full mt-2 px-3 py-2 border border-slate-400 rounded-md"
            />
          </div>

          <br />

          <fieldset className="w-full px-7 flex flex-col">
            <legend className="font-semibold">By Email</legend>

            <div className="flex gap-3">
              <input
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
              />

              <div className="mt-5">
                <label
                  htmlFor="comments"
                  value="comments"
                  className="font-semibold"
                >
                  Comments
                </label>
                <p className="text-gray-500 font-semibold">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                id="candidates"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
              />

              <div className="mt-5">
                <label
                  htmlFor="candidates"
                  value="candidates"
                  className="font-semibold"
                >
                  Candidates
                </label>
                <p className="text-gray-500 font-semibold">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />

              <div className="mt-5">
                <label
                  htmlFor="offers"
                  value="offers"
                  className="font-semibold"
                >
                  Offers
                </label>
                <p className="text-gray-500 font-semibold">
                  Get notified when someones a candidate accepts or rejects an
                  offer.
                </p>
              </div>
            </div>
          </fieldset>

          <br />

          <fieldset className="w-full px-7">
            <legend className="font-semibold">Push Notifications</legend>
            <p className="text-gray-500 font-semibold">
              These are delivered via SMS to your mobile phone.
            </p>

            <div className="mt-4">
              <div>
                <input
                  type="radio"
                  id="pushEverything"
                  name="pushNotifications"
                  value="Everything"
                  onChange={changeHandler}
                />

                <label
                  htmlFor="pushEverything"
                  className="mt-4 py-2 ml-3 font-semibold"
                >
                  Everything
                </label>
              </div>

              <div className="mt-1">
                <input
                  type="radio"
                  id="pushEmail"
                  name="pushNotifications"
                  value="Same as email"
                  onChange={changeHandler}
                />

                <label htmlFor="pushEmail" className="ml-3 font-semibold">
                  Same as Email
                </label>
              </div>

              <div className="mt-1">
                <input
                  type="radio"
                  id="pushNothing"
                  name="pushNotifications"
                  value="No Push Notifications"
                  onChange={changeHandler}
                />

                <label htmlFor="pushNothing" className="ml-3 font-semibold">
                  No Push Notifications
                </label>
              </div>
            </div>
          </fieldset>

          <div className="my-5 mx-7">
            <button className="bg-blue-500 text-white font-bold rounded-md px-4 py-1 hover:bg-blue-600 transition-all duration-200">
              Save
            </button>
          </div>
        </form>
      </div>

      <h3 className="text-center font-semibold text-[21px]">
        © Copyrights | Made by ❤️‍🔥 with Chinmay Kaitade.
      </h3>
    </div>
  );
}

export default App;
