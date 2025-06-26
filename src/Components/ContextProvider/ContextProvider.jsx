import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';
import Swal from 'sweetalert2';






export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // google signIn

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user


                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${user.displayName} Logged in successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });

               

            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: 'Unable to login with Google',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
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
                // console.log(currentUser)
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: 'Unable to register',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // login existing user

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // const currentUser = user.user;
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: 'Unable to login',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    // observe current user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

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
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Unable to logout",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // sending value of auth as an object
    const authValue = {
        register,
        user,
        login,
        logout,
        googleLogin,
        loading

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