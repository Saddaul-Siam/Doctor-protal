import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => { }).catch((error) => { });
        history.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
      })
      .finally(() => setIsLoading(false))
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || '/';
        history.replace(destination)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage)
      })
      .finally(() => setIsLoading(false))
  };

  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthError("");
        const destination = location?.state?.from || '/';
        history.replace(destination)
      }).catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

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
    signInWithGoogle,
  }
}

export default useFirebase;