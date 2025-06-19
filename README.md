# 🛒 React Native Add to Cart App

A simple yet fully functional **Add to Cart** mobile app built using **React Native CLI** and styled with **Tailwind CSS for React Native**. This project showcases essential mobile development skills such as hooks, state management, UI layout, and APK generation — and includes extra features for a realistic e-commerce experience.

---

## 📦 Features

### ✅ Core Features

- **📋 Static Product List**
  - 4 predefined products with `productName`, `description`, and `price`
  - Displayed using a responsive grid (2-column on tablets, 1-column on phones)

- **🛒 Add to Cart Functionality**
  - Add products to the cart
  - Remove individual items
  - Automatically updates cart state

- **🧺 Cart Display**
  - Real-time display of item quantity
  - Product name and unit price shown per item
  - Real-time total amount calculation

- **🏷️ Voucher System (Bonus Feature)**
  - Input field to apply a discount code
  - Supports `discount10` code (10% off)
  - Shows updated discounted total
  - Clearable voucher button to remove discount
  - Displays an error message if voucher is invalid

---

## ✨ Additional Enhancements

- **🔁 Quantity-Based Cart**
  - Same items are not duplicated in the list
  - Quantities are incremented (e.g. `x 2`)
  - Unit price is shown alongside quantity

- **❌ Clearable Discount Code**
  - A button to remove the applied voucher
  - Discount resets and total is recalculated

- **📐 Responsive Layout**
  - Adapts to tablet and mobile screens:
    - Grid layout changes based on screen size
    - Button layouts stack or row align dynamically

- **🔠 TypeScript Support**
  - Fully typed state hooks and custom hooks
  - Safer and scalable structure

- **🔌 Modular Codebase**
  - Business logic is separated using custom hooks:
    - `useCart.ts` for cart logic
    - `useVoucher.ts` for voucher logic
  - Clean reusable components:
    - `ProductItem.tsx`
    - `Cart.tsx`

---

## App Screenshots

### Phone View

![image](https://github.com/user-attachments/assets/e22fa906-8959-497f-8415-b0d53537e12f)

![image](https://github.com/user-attachments/assets/a13e8e1f-60c4-4378-a051-1652c7cc6450)

### Tablet View

![image](https://github.com/user-attachments/assets/9b4ebc7e-d319-4c96-969e-b3fed7b85be0)

![image](https://github.com/user-attachments/assets/9c50710c-c5bc-4053-a102-6fb5f664f50d)

---

## Notes

- The APK file can be found in the root directory (app-release.apk).
