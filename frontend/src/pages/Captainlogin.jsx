 import { useState } from 'react';
import { Link } from 'react-router-dom';

const Captainlogin = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[captainData , setCaptainData] = useState([])


  const SubmitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email:email,
      password: password
    })
    console.log(captainData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-3"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What`s your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?
          <Link to="/captain-signup" className="text-blue-600">
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#f3c164] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sing in as User
        </Link>
      </div>
    </div>
  );
}



export default Captainlogin
