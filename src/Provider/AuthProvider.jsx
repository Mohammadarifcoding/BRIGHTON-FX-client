import { createContext, useEffect, useState } from "react";
import Auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const OUT = () => {
    setLoading(true);
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
     
            setUser(currentUser);
            setLoading(false);
         
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Google = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(Auth, provider);
  };

  const update = (name, photo) => {
    setLoading(true);
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const In = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const AuthInfo = { loading, user, In, update, Google, OUT, creatUser };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;