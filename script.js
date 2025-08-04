// script.js

// التحقق من أن المستخدم مسجل الدخول
export function checkUserLoggedIn() {
    const userName = localStorage.getItem("userName");
    const phone = localStorage.getItem("phone");

    if (!userName || !phone) {
        window.location.href = "register.html"; // إذا ما فيه تسجيل، يروح لصفحة التسجيل
    }
}

// تسجيل الخروج (اختياري)
export function logoutUser() {
    localStorage.removeItem("userName");
    localStorage.removeItem("tribe");
    localStorage.removeItem("phone");
    window.location.href = "register.html";
}

// عرض رسالة ترحيب في الصفحات
export function showWelcomeMessage() {
    const userName = localStorage.getItem("userName");
    if (userName) {
        console.log(مرحباً بك، ${userName});
    }
} 
