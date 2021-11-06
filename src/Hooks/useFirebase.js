import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  const auth = getAuth();

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    });
    return () => unsubscribe
  }, [auth]);

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setError(error.message)
    });
  };

  return {
    user,
    setUser,
    registerUser,
    logOut,
    loginUser,

  }
}

export default useFirebase;