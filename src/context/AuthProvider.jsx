import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const forgotPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    const resetPassword = ()=>{
        return updatePassword(user, newPassword)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    //Observe use State: 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)

        })
        return()=>{
            unSubscribe();
        }


    },[])


    const authinfo ={
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        updateUserProfile,
        forgotPassword, 
    }
    return (
        <AuthContext value={authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;