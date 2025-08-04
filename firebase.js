// استيراد مكتبات Firebase من CDN (للعمل مع HTML مباشرة)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyC4nTxcqzJqkake-lPm2M85Ys14PpNfm54",
  authDomain: "khalid-9966.firebaseapp.com",
  projectId: "khalid-9966",
  storageBucket: "khalid-9966.appspot.com",
  messagingSenderId: "175956750797",
  appId: "1:175956750797:web:2de315703f5bff79379484",
  measurementId: "G-8NJ3313RRB"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة Firestore و Storage
const db = getFirestore(app);
const storage = getStorage(app);

// تصدير المتغيرات لاستخدامها في باقي الصفحات
export { app, db, storage };