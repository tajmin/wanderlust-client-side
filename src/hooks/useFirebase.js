import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //email signup
    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => setErrorMessage(error.message))
            .finally(() => { setLoading(false) });
    }

    //email login
    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => setErrorMessage(error.message))
            .finally(() => { setLoading(false) });
    }

    //google sign-in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    //update user info
    const updateUserInfo = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            }).catch((error) => {
                setErrorMessage(error.message)
            });
    }

    //log out user
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setLoading(false));
    }

    //observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else { }
            setLoading(false);
        });
    }, [])

    return { user, loading, errorMessage, signUpUsingEmail, signInUsingEmail, signInUsingGoogle, logOut, updateUserInfo }

}

export default useFirebase;