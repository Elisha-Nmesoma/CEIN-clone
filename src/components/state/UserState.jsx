import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function StateProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    email: "",
    username: "",
    password: "",
  });


  return (
    <UserContext.Provider value={{userProfile, setUserProfile}}>
      {children}
    </UserContext.Provider>
  )
};

// Custom hook to use the user context
export const useUserContext = () => useContext(UserContext);
