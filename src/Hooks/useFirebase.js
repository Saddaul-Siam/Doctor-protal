import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to the database
        saveUser(email, name, 'POST');

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

  // login user
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

  // sign In With Google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError("");
        const destination = location?.state?.from || '/';
        history.replace(destination)
      }).catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // onAuthStateChanged 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe
  }, [auth]);

  // log out user
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setAuthError(error.message)
    })
      .finally(() => setIsLoading(false))
  };

  // save user information
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`http://localhost:5000/users`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => console.log(result))
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  return {
    user,
    admin,
    token,
    setUser,
    registerUser,
    loginUser,
    authError,
    isLoading,
    setIsLoading,
    signInWithGoogle,
    logOut,
  }
}

export default useFirebase;