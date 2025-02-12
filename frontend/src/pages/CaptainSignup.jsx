import { useState } from 'react';
import { Link } from 'react-router-dom';


const CaptainSignup = () => {
  
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
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <h3 className="text-lg w-full  font-medium mb-2">What`s your name</h3>
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

          <h3 className="text-lg font-medium mb-2">What`s our your email</h3>
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
          <Link to="/captain-login" className="text-blue-600">
            Captain Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and Terms of
          Service apply.
        </p>
      </div>
    </div>
  );
}




export default CaptainSignup
