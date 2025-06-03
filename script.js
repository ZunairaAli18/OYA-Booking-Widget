const translations = {
  en: {
    name: "Name",
    email: "Email",
    travelType: "Travel Type",
    destination: "Destination",
    checkin: "Check-in Date",
    checkout: "Check-out Date / Duration",
    guests: "Guests",
    budget: "Budget",
    payment: "Payment Method",
    confirm: "Confirm & Pay"
  },
  ar: {
    name: "الاسم",
  email: "البريد الإلكتروني",
    travelType: "نوع الرحلة",
    destination: "الوجهة",
    checkin: "تاريخ الوصول",
    checkout: "تاريخ المغادرة / المدة",
    guests: "عدد الضيوف",
    budget: "نطاق الميزانية",
    payment: "طريقة الدفع",
    confirm: "تأكيد والدفع"
  }
};

function isValidEmail(email) {
  // Basic email regex pattern
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function simulatePayment(paymentMethod) {
  console.log("Processing payment via:", paymentMethod);

  // Simulate loading
  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  btn.textContent = "Processing...";

  setTimeout(() => {
    // Randomly decide success or failure (for demo)
    const success = Math.random() > 0.2;

    if (success) {
      alert(`${paymentMethod.toUpperCase()} Payment Successful!`);
    } else {
      alert(`${paymentMethod.toUpperCase()} Payment Failed. Please try again.`);
    }

    btn.disabled = false;
    btn.textContent = document.documentElement.lang === "ar"
      ? translations.ar.confirm
      : translations.en.confirm;

  }, 2000); // 2 second delay
}
document.getElementById("languageToggle").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.getElementById("submitBtn").textContent = translations[lang].confirm;
});
//simulate budget
function checkBudget() {
  const budgetInput = document.getElementById("budgetRange");
  const budgetValue = parseInt(budgetInput.value, 10);
  const lang = document.documentElement.dir === "rtl" ? "ar" : "en";

  const messages = {
    en: "Please enter a budget of at least 10,000.",
    ar: "يرجى إدخال ميزانية لا تقل عن 10000."
  };

  if (isNaN(budgetValue) || budgetValue < 10000) {
    alert(messages[lang]);
    budgetInput.focus();
    return false;
  }
  return true;
}


//simulate payment
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("email").value.trim();

  if (!isValidEmail(emailInput)) {
    alert("Please enter a valid email address.");
    e.preventDefault(); // Prevent form submission
  }
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }
  
    simulatePayment(selectedPayment.value);
  
  
});