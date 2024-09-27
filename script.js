const login = document.getElementById("login");

const checkDataUser = () => {
  const checkDataInLocalStorage = JSON.parse(localStorage.getItem("signupData"));
  if (!checkDataInLocalStorage) return;

  login.innerHTML = `<a href="./profile_user/index.html">Hi ${checkDataInLocalStorage.firstname}</a>`;
};

checkDataUser();

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.querySelector("ul.mobile");

// تفعيل أو تعطيل عرض القائمة المنسدلة عند الضغط على الزر
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
