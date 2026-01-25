import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {

  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    }
  })

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext
