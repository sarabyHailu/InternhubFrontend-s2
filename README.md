# Gebeya Market App Website

This project is a fully functional and responsive website based on the Gebeya Market App design provided in a Figma file. It includes essential features like a Home Page, Cart Page, and Checkout Page. The implementation adheres strictly to the design specifications and incorporates necessary functionalities using JavaScript.

## 🚀 Live Demo

Check out the live demo of the website: 

## 📌 Features

### 1. **Home Page**
- Displays a collection of products with images, descriptions, and prices.
- Includes navigation to other pages (Cart and Checkout).


### 2. **Cart Page**
- **Add-to-cart functionality:** Users can add items to the cart.
- **Modify cart items:**
  - Increase or decrease item quantities.
  - Remove items from the cart.

### 3. **Checkout Page**
- Collects user details via a form (name, address, etc.).
- Displays a success popup with the message "Order Placed Successfully!" after form submission.
- Redirects users back to the Home Page upon submission.
  
### 4. **Responsiveness**
- Optimized for all screen sizes: desktop, tablet, and mobile.
- The design matches the Figma file pixel-perfectly.

## 📂 Project Structure

```plaintext
.
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable components (e.g., Navbar, Footer)
│   ├── pages/              # Page-specific components (Home, Cart, Checkout)
│   ├── assets/             # Images, icons, and other assets
│   ├── styles/             # CSS files
│   └── App.js              # Main React component
├── README.md               # Project documentation
├── package.json            # Project dependencies
└── ...
```

## 🛠️ Technologies Used

- **Frontend:** React.js, TailwindCSS
- **Version Control:** Git
- **Deployment:** [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/)

## 📋 Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sarabyHailu/InternhubFrontend-s2.git
   cd gebeya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## ✅ How to Use

1. **Explore Products:** View the products on the Home Page.
2. **Add to Cart:** Click the "Add to Cart" button to add products to your cart.
3. **Modify Cart:** Adjust item quantities or remove items on the Cart Page.
4. **Checkout:** Fill out your details and place your order on the Checkout Page.


