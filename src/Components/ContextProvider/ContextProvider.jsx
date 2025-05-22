import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';
import Swal from 'sweetalert2';





export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // google signIn

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user


                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} Logged in successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then((error) => {
                console.log(error)
            })
    }




    // create a new user 

    const register = (userName, email, photo, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const currentUser = user.user

                // update profile kortasi ar register theke deoyar data ei khane raktasi jate dekhaite pari

                updateProfile(currentUser, {
                    displayName: userName,
                    photoURL: photo
                })
                console.log(currentUser)
            })
            .then((error) => {
                console.log(error)
            })
    }

    // login existing user

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // const currentUser = user.user;
            })
            .then((error) => {
                console.log(error)
            })
    }


    // observe current user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // logout user

    const logout = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "You have Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then((error) => {
                console.log(error)
            })
    }

    // sending value of auth as an object
    const authValue = {
        register,
        user,
        login,
        logout,
        googleLogin

    }

    return (
        <div>
            <AuthContext.Provider value={authValue} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;