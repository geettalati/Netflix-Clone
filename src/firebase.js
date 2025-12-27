import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfp1r6BCXNnySb1y1sfphqgyAomCDzohs",
  authDomain: "netflix-clone-d72f6.firebaseapp.com",
  projectId: "netflix-clone-d72f6",
  storageBucket: "netflix-clone-d72f6.appspot.com",
  messagingSenderId: "823218361794",
  appId: "1:823218361794:web:0406c8511e4aa48906f25b",
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);



export const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

   
    await updateProfile(res.user, { displayName: name });

    
    await addDoc(collection(db, "users"), {
      uid: res.user.uid,
      name,
      email,
      authProvider: "local",
      createdAt: new Date(),
    });
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const logout = async () => {
  await signOut(auth);
};

export { auth, db };
