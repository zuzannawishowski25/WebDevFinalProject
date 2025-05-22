import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFyiEa5B6vyLZ3wkiFoVRJVqAFA857AsE",
  authDomain: "webdevfinalproject-c3c71.firebaseapp.com",
  projectId: "webdevfinalproject-c3c71",
  storageBucket: "webdevfinalproject-c3c71.firebasestorage.app",
  messagingSenderId: "1039002524146",
  appId: "1:1039002524146:web:ff858b3afbea137a71b36b",
  measurementId: "G-46LJ5QTB8P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const counterRef = doc(db, "counters/clicks");

async function loadCounter() {
  const snap = await getDoc(counterRef);
  if (!snap.exists()) {
    await setDoc(counterRef, { value: 0 });
    document.getElementById("counter").innerText = 0;
  } else {
    document.getElementById("counter").innerText = snap.data().value;
  }
}

async function incrementCounter() {
  const snap = await getDoc(counterRef);
  const current = snap.data().value;
  await setDoc(counterRef, { value: current + 1 });
  document.getElementById("counter").innerText = current + 1;
}

async function resetCounter() {
  await setDoc(counterRef, { value: 0 });
  document.getElementById("counter").innerText = 0;
}

async function incrementCounter() {
    const snap = await getDoc(counterRef);
    const current = snap.data().value;
    console.log("Current value:", current);
    await setDoc(counterRef, { value: current + 1 });
    console.log("New value written:", current + 1);
    document.getElementById("counter").innerText = current + 1;
  }
  
window.onload = loadCounter;
