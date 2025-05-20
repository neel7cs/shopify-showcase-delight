
# Product Page Implementation

## Overview

This project implements a responsive e-commerce product page with features commonly found in Shopify themes. The page is built using vanilla HTML, CSS, and JavaScript without any external libraries.

## Features Implemented

1. **Scrollable Product Images Gallery**
   - Main image with thumbnails on the side
   - Clicking a thumbnail updates the main image
   - Scrollable thumbnails navigation
   - Image zoom on hover/click

2. **Size Chart Button with Modal**
   - Modal popup showing a sample size chart table
   - Dismissible via close button, ESC key, and overlay click

3. **Product Variants**
   - Color variations displayed as swatches
   - Size variations shown as buttons
   - Selection visually updates the product state
   - Selections saved in localStorage

4. **Compare Colors Button**
   - Opens a modal to compare colors side-by-side
   - Allows selection of up to 4 colors to compare visually

5. **Pairs Well With Carousel**
   - Horizontally scrollable row with complementary products
   - Navigation buttons for easy scrolling
   - Product cards with image, title, price, and add to cart button

6. **Product Bundle Suggestion**
   - Shows a bundle of products that work well together
   - Includes individual prices and a combined discounted total
   - Single "Add Bundle to Cart" button

7. **Tabs for Product Info**
   - Three tabs: Description, Product Information, and Shipping Details
   - Tabs toggle content visibility using JavaScript

8. **Related Products Section**
   - Grid of 4 related product cards
   - Cards include image, product name, price, and optional badges

9. **Bonus Features**
   - Image zoom on hover/click for the main product image
   - Selections saved using localStorage
   - Micro-interactions (transitions, hover effects, animations)
   - Fully responsive layout (mobile, tablet, desktop)

## How to Run Locally

1. Clone this repository or download the ZIP file
2. Extract the files to a folder on your computer
3. Open the `index.html` file in a web browser

Alternatively, you can use a local development server:

```bash
# Using Node.js http-server
npx http-server

# Using Python
python -m http.server
```

## Folder Structure

```
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Local Storage API
