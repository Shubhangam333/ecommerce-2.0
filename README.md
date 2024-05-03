# Ecommerce Website README

Welcome to the README for our Ecommerce Website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack! This document will provide an overview of the project structure, how to set up the environment, and how to run the application.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [Running the Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

Our Ecommerce Website is a modern web application that allows users to browse, search, and purchase products online. It is built using the MERN stack, which provides a robust and scalable foundation for building full-stack JavaScript applications. The frontend is developed using React.js, providing a dynamic and interactive user interface, while the backend is powered by Node.js and Express.js, with data stored in a MongoDB database.

## Features

- User authentication and authorization
- Product browsing and searching
- Shopping cart functionality
- Secure checkout process
- Order history and tracking
- Admin dashboard for managing products and orders

## Project Structure

- .gitignore
- README.md
- package-lock.json
- package.json
- tailwind.config.js
- vite.config.js
- src
  - App.jsx
  - index.css
  - main.jsx
  - pages
    - Address.jsx
    - Admin
      - AdminRoute.jsx
      - Dashboardpage.jsx
    - Authentication.jsx
    - Cart.jsx
    - Categorypage.jsx
    - CheckOut.jsx
    - Error.jsx
    - Home.jsx
    - ProductDetails.jsx
    - User
      - Orders.jsx
      - PrivateRoute.jsx
      - Profile.jsx
  - redux
    - api
      - address
        - addressapi.js
      - auth
        - authapi.js
      - category
        - categoryapi.js
      - order
        - orderapi.js
      - payment
        - paymentapi.js
      - product
        - productapi.js
      - style
        - styleapi.js
      - user
        - userapi.js
    - slice
      - authSlice.js
      - cartSlice.js
      - dashboardSlice.js
      - sortSlice.js
    - store.js
  - assets
    - react.svg
    - shopping-cart.svg
    - wishList-empty-icon.png
  - components
    - Address
      - AddressCard.jsx
      - AddressContainer.jsx
      - AddressForm.jsx
      - AddressSection.jsx
      - AddressSummary.jsx
    - Admin
      - Category
        - CategoryDashboard.jsx
        - CategoryForm.jsx
        - CategoryHeader.jsx
        - CategoryList.jsx
        - CreateCategory.jsx
        - EditCategory.jsx
      - Dashboard
        - Breadcrumb.jsx
        - Dashboard.jsx
        - DashboardHeader.jsx
        - MainContainer.jsx
        - MegaMenu
          - MegaMenu.jsx
          - MenuHeader.jsx
          - MenuItem.jsx
          - SubMenu.jsx
        - MenuBtn.jsx
        - SearchInput.jsx
      - Orders
        - AdminOrderDetails.jsx
        - AdminOrderHeader.jsx
        - OrderList.jsx
      - Products
        - CreateProduct.jsx
        - ProductDashboard.jsx
        - ProductForm.jsx
        - ProductHeader.jsx
        - ProductList.jsx
      - Style
        - CreateStyle.jsx
        - EditStyle.jsx
        - StyleDashboard.jsx
        - StyleForm.jsx
        - StyleHeader.jsx
        - StyleList.jsx
      - Table.jsx
      - Users
        - UsersList.jsx
    - Authentication
      - AuthComponent.jsx
      - LoginForm.jsx
      - RegisterForm.jsx
    - Carousel
      - ImageSlider.jsx
      - MainCarousel.jsx
    - Cart
      - CartDetails.jsx
      - CartItem.jsx
      - CartSection.jsx
      - CartSummary.jsx
    - Categories
      - Categories.jsx
      - Categorycard.jsx
      - Categorylisting.jsx
    - Categorypage
      - Breadcrumb.jsx
      - Category.jsx
      - Categoryheader.jsx
      - Categorynav.jsx
      - Categorynavsection.jsx
      - Mainsection.jsx
      - Primaryfilter.jsx
      - ProductDetails
        - ProductComponent.jsx
        - ProductContent.jsx
        - ProductImageSection
          - ImageCaraousel.jsx
          - ProductImageModal.jsx
          - ProductImages.jsx
        - RatingComponent.jsx
        - Review
          - ReviewCard.jsx
          - ReviewComponent.jsx
          - ReviewForm.jsx
          - ReviewList.jsx
      - Products
        - Filter
          - FilterBreadCrumb.jsx
          - Price
            - PriceFilter.jsx
            - PriceRadioInput.jsx
          - PriceFilterItem.jsx
          - Style
            - CheckboxInput.jsx
            - SearchInput.jsx
          - StyleFilter.jsx
          - StyleFilterItem.jsx
        - Pagination.jsx
        - Productcard.jsx
        - Productnavfilter.jsx
        - Productsection.jsx
      - Secondaryfilter.jsx
      - Sortfilter.jsx
    - Checkout
      - CheckOutContainer.jsx
      - CheckOutItemCard.jsx
      - CheckOutSection.jsx
      - CheckOutSummary.jsx
    - Footer
      - Footer.jsx
    - Header
      - Header.jsx
    - Home
      - MainComponent.jsx
      - ProductCard.jsx
    - Layout
      - DashBoardLayout.jsx
      - Layout.jsx
      - ProfileLayout.jsx
    - Loader
      - Loader.jsx
      - loader.css
    - Navbar
      - Navbar.jsx
      - PrimaryNav.jsx
      - SecondaryNav.jsx
      - SecondarytopNav.jsx
      - Topnav.jsx
    - Navbtns
      - Navbtn.jsx
    - Payment
      - Cancel.jsx
      - Payment.jsx
      - PaymentForm.css
      - PaymentForm.jsx
      - PaymentPage.jsx
      - Success.jsx
    - Profile
      - OrderHeader.jsx
      - OrderInfo
        - AddressDetails.jsx
        - OrderDetails.jsx
        - OrderPaymentDetails.jsx
        - OrderedProductList.jsx
        - ProductCard.jsx
      - OrderList.jsx
      - ProfileDetails.jsx
      - ProfileHeader.jsx
      - ProfileNav.jsx
      - UserOrderTable.jsx
    - Scroll
      - ScrollToTop.jsx
    - Wishlist
      - Emptywishlist.jsx
      - Mainwishlist.jsx
      - WishListCard.jsx
      - WishListSection.jsx



## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shubhangam333/ecommerce-2.0.git
   cd ecommerce-2.0
   ```
# Install backend dependencies
   cd server
   npm install

# Install frontend dependencies
   cd client
   npm install

Set up environment variables:

2. Create a .env file in the server directory.
Define environment variables such as MongoDB connection URI, JWT secret, etc.
Database setup:

3. Ensure MongoDB is installed and running on your local machine or use a cloud MongoDB service.
Create a new database for the application and configure the connection URI in the .env file.

## Running the Application

1. Run the server and webapp:

cd server
npm run dev

## Access the application:
Open your web browser and go to http://localhost:5173 to view the Ecommerce Website.

## Contributing
We welcome contributions from the community! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

