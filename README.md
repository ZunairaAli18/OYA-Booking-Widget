# OYA Booking Widget

A responsive, bilingual (English/Arabic) booking form widget that allows users to select travel preferences, enter details, and simulate payments using multiple methods like Fawry, STC Pay, or Credit Card.

---

## 🌍 Features

* 🔄 **Language Toggle**: Supports both English and Arabic with dynamic UI translation.
* 📅 **Travel Booking Form**: Capture user info including name, email, travel type, destination, and dates.
* 💰 **Budget Validation**: Ensures a minimum budget before submission.
* 💳 **Payment Simulation**: Mimics a loading experience and returns random success/failure.
* 📱 **Fully Responsive**: Optimized layout for both desktop and mobile screens.
* 📧 **Email Validation**: Checks for valid email format before submission.

---

## 🚀 How to Use

1. **Clone the repository or copy the files** to your project:

```
📁 project-folder/
  ├── index.html
  ├── style.css
  └── script.js
```

2. **Open `index.html`** in your browser to test the widget.

---

## 🧱 File Structure

```
bash
🐝 index.html     # Main HTML layout
🐝 style.css      # Responsive styling
🐝 script.js      # Functionality and language handling
```

---

## 📌 UI Components

* **Form Fields:**

  * Name
  * Email
  * Travel Type (dropdown)
  * Destination
  * Check-in / Check-out Dates
  * Number of Guests
  * Payment Method (radio options)
  * Budget Range (with validation)
  * Interests (checkboxes)

* **Language Toggle**: Switches between English (`en`) and Arabic (`ar`)

---

## 🌐 Language Translation

```js
translations = {
  en: {
    name: "Name",
    email: "Email",
    ...
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    ...
  }
}
```

Automatically updates all UI labels on selection change.

---

## ✅ Form Validation

* Validates:

  * Email format
  * Required fields (destination, dates, interests)
  * Budget threshold (min: 10,000)

---

## 🧪 Simulated Payment

```js
simulatePayment(paymentMethod)
```

* Randomly triggers a "Payment Successful" or "Payment Failed" message.
* Simulates a delay to mimic real-world payment processing.

---

## 🖼 Screenshots

> Add screenshots here if needed (e.g., desktop and mobile views)

---

## 📦 Future Improvements

* Real backend integration (e.g., payment API, booking API)
* Dynamic interest-based recommendations
* Input error highlighting
* Form reset after successful submission

---

## 👩‍💻 Author

Crafted with ❤️ for seamless booking experiences.
Feel free to adapt or extend this widget as per your needs.
