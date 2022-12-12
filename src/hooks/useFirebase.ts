import { initializeApp, getApps } from 'firebase/app'
import {getAuth, GoogleAuthProvider, signOut, getAdditionalUserInfo, signInWithPopup,deleteUser, signInWithEmailAndPassword,createUserWithEmailAndPassword, sendPasswordResetEmail, FacebookAuthProvider, updateProfile} from 'firebase/auth'
import { errorMessage } from '../Constants'
import { getFirebaseError } from '../utils/firebaseErrors'
import { useAlert } from '.'

// <- initialization ->
const firebaseConfig = {
    apiKey: process.env.firebaseApiKey,
    authDomain: process.env.firebaseAuthDomain,
    projectId: process.env.firebaseProjectId,
    storageBucket: process.env.firebaseStorageBucket,
    messagingSenderId: process.env.firebaseMessagingSenderId,
    appId: process.env.firebaseAppId,
    measurementId: process.env.firebaseMeasurementId
  }
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig)
}
export const auth = getAuth(app)
// 


async function signupWithEmail (email: string, password: string, name: string, setAlert: Function) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        if (!user.displayName) {
            await updateProfile(user, {
                displayName: name
            })
        }
        setAlert(`Hello ${name.split(" ")[0]}! Good to have you onboard. `, 'success')
        return ({
            success: true,
            message: 'user created successfuly',
            data: user
        })
    }
    catch(err: any) {
        const {code, message} = err
        setAlert( getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}

// -------------------------------
async function handleSignOut (setAlert: Function) {
    try {
        const currentUser = await auth.currentUser
        if (!currentUser) {
            return setAlert(`But 😲 ! You are not logged in`, 'info')
        }
        await signOut(auth)
        return setAlert(` 👋 See you later buddy!`)
    }
    catch(err: any) {
        const {code, message} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}

async function handleGoogleLogin (setAlert: Function) {
    try {
        
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // 
        const res = await signInWithPopup(auth, provider)
        const user = res.user; 
        const isNewUser = getAdditionalUserInfo(res)?.isNewUser
        const credentials = GoogleAuthProvider.credentialFromResult(res)
        const token = credentials?.accessToken;
        // 
        if (isNewUser) {
            await deleteUser(user)
            return setAlert(`Buddy! Create an account to continue.`)
        }
        setAlert(`Hello ${user?.displayName ? user.displayName.split(" ")[0] : ''}! Welcome back`, 'success')
        return ({
            success: true,
            message: `users data`,
            data: user
        })
    }
    catch(err: any) {
        const {code, message} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}

async function handleGoogleSignup (setAlert: Function) {
    try {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // 
        const res = await signInWithPopup(auth, provider)
        const user = res.user;
        const isNewUser = getAdditionalUserInfo(res)?.isNewUser
        const credentials = GoogleAuthProvider.credentialFromResult(res)
        const token = credentials?.accessToken;
        //
        if (!isNewUser) {
            await signOut(auth)
            setAlert('Account already exist. Login to continue')
            return
        }
        setAlert(`Hello ${user?.displayName ? user.displayName.split(" ")[0] : ''}! Good to have you onboard. `, 'success')
        return ({
            success: true,
            message: `users data`,
            data: user
        })
    }
    catch(err: any) {
        const {code, message} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}


async function handleLoginWithEmailAndPassword (email: string, password: string, setAlert: Function) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user

        setAlert(`Hello ${user?.displayName ? user.displayName.split(" ")[0] : ''}! Welcome back`, 'success')
        return ({
            success: true,
            message: `welcome ${user.displayName}`,
            data: user
        })
    }
    catch(err: any) {
        const {code, message} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}


async function sendResetPasswordLink (email: string, setAlert: Function) {
    try {
        await sendPasswordResetEmail(auth, email)
        setAlert(`Password reset link sent to ${email}`)
        return ({
            success: true,
            message: 'reset email sent',
            data: null
        })
    }
    catch(err: any) {
        const {code, message} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(getFirebaseError(code) || message)
    }
}

// // 
// async function handleFacebookLogin (setAlert) {
//     try {
        
//         const provider = new FacebookAuthProvider();
//         provider.setCustomParameters({
//             'display': 'popup'
//           });
//         // 
//         const res = await signInWithPopup(auth, provider)
//         console.log(res)
//         const user = res.user; 
//         const isNewUser = getAdditionalUserInfo(res)?.isNewUser
//         const credentials = GoogleAuthProvider.credentialFromResult(res)
//         const token = credentials?.accessToken;
//         // 
//         if (isNewUser) {
//             await deleteUser(user)
//             setAlert(`Buddy 😉 ! You are new here.`)
//             return
//         }
//         setAlert(`Welcome 😊 ${user.displayName}`)
//         return ({
//             success: true,
//             message: `users data`,
//             data: user
//         })
//     }
//     catch(err) {
//         const {message, code} = err
//         setAlert(firebaseErrors[code] || message, 'error')
//         return errorMessage(err)
//     }
// }

// export defaults
export default function useFirebase () {

    const {setAlert} = useAlert()

    return ({
        auth,
        emailSignup: (email: string, password: string, name: string) => signupWithEmail(email, password, name, setAlert),
        signOut: () => handleSignOut(setAlert),
        googleLogin: () => handleGoogleLogin(setAlert),
        googleSignup: () => handleGoogleSignup(setAlert),
        emailSignin: (email: string, password: string) => handleLoginWithEmailAndPassword(email, password, setAlert),
        sendResetPasswordLink: (email: string) => sendResetPasswordLink(email, setAlert),
    })
}