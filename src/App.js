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
    postal_code: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("printing form data")
    console.log(formData);
    
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        {/*first name*/}
        <label htmlFor="firstName">Enter your firstName</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Mohammad"
          onChange={changeHandler}
          value={formData.firstName}
        />

        {/*last name*/}
        <br />
        <label htmlFor="lastName">Enter your lastName</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Varis"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />

        {/*email*/}
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="movaris85@gmail.com"
          onChange={changeHandler}
          value={formData.email}
        />

        {/*country dropdown menu*/}
        <br />
        <label htmlFor="country">country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>United Satates</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        {/*street address*/}
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="123 main"
          onChange={changeHandler}
          value={formData.streetAddress}
        />

        {/*city*/}
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Lucknow"
          onChange={changeHandler}
          value={formData.city}
        />

        {/*state*/}
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Uttar Pradesh"
          onChange={changeHandler}
          value={formData.state}
        />

        {/*postal code*/}
        <br />
        <label htmlFor="postal_code">Postal code/Zip</label>
        <br />
        <input
          type="text"
          id="postal_code"
          name="postal_code"
          placeholder="201301"
          onChange={changeHandler}
          value={formData.postal_code}
        />

        <br />
        <br />
        <label>By Email</label>
        <br />

        {/*comments*/}
        <div className="comments">
          <input
            type="checkbox"
            name="comments"
            id="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">comments</label>
            <p>get notified when someone comments</p>
          </div>
        </div>
        <br />

        {/*offers*/}
        <div>
          <input
            type="checkbox"
            name="offers"
            id="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">offers</label>
            <p>get notified when offers are available</p>
          </div>
        </div>
        <br />

        {/*candidate*/}
        <div>
          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidate}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">candidates</label>
            <p>get notified when a candidate applies for a job</p>
          </div>
        </div>
        <br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your phone</p>

          <input
          type="radio"
          id="pushEverything"
          name="pushNotification"
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br/>

          <input
          type="radio"
          id="pushEmail"
          name="pushNotification"
          value="Same as email"
          onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br/>

          <input
          type="radio"
          id="pushNothing"
          name="pushNotification"
          value="No push notification"
          onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push notification</label>
        </fieldset>

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
