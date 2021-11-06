import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
      })
      .finally(() => setIsLoading(false))
  };

  const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
      })
      .finally(() => setIsLoading(false))

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe
  }, [auth]);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setAuthError(error.message)
    })
      .finally(() => setIsLoading(false))
  };

  return {
    user,
    setUser,
    registerUser,
    logOut,
    loginUser,
    authError,
    isLoading,
    setIsLoading,
  }
}

export default useFirebase;