const translations = {
  en: {
    travelType: "Travel Type",
    destination: "Destination",
    checkin: "Check-in Date",
    checkout: "Check-out Date / Duration",
    guests: "Guests",
    payment: "Payment Method",
    confirm: "Confirm & Pay"
  },
  ar: {
    travelType: "نوع الرحلة",
    destination: "الوجهة",
    checkin: "تاريخ الوصول",
    checkout: "تاريخ المغادرة / المدة",
    guests: "عدد الضيوف",
    payment: "طريقة الدفع",
    confirm: "تأكيد والدفع"
  }
};

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

//simulate payment
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }

  simulatePayment(selectedPayment.value);
});