 import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[firstName , setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')




  const SubmitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What`s your name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-4  text-base placeholder:text-sm"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg   placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What`s your email</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, I agree that Uber or its representatives may contact me
          by email, phone, or SMS (including by automatic telephone dialing
          system) at the email address or number I provide, including for
          marketing purposes. I have read and understand the relevant Driver
          Privacy Statement.
        </p>
      </div>
    </div>
  );
}



export default UserSignup
