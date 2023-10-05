<img width="1440" alt="Screenshot 2023-10-05 at 12 59 10 PM" src="https://github.com/mohitpanchal09/totalitycorp-frontend-challenge/assets/90472961/65f0b689-60a2-4159-a72a-e5a40e1be3cf"># Totality Corp Frontend Challenge

Welcome to my submission for the Totality Corp Frontend Developer Assignment. In this project, I have developed an intermediate-level e-commerce website using React, following the provided guidelines.

## Features Implemented

- **Product Listing:** 
  - Display a variety of products with images, names, prices, and "Add to Cart" buttons.
  - Implemented filters to allow users to sort products by category, price range, or ratings.

- **Shopping Cart:** 
  - Implemented a cart section to display the added products, quantities, and total cost.
  - Remove items from the cart.
  - Display real-time updates of the cart total and item count.

- **Checkout:** 
  - Implemented a checkout process that calculates the total cost of items in the cart.
  - Allow users to make payments for their purchases.

- **Payment Gateway Integration with Stripe:**
  - Integrated the Stripe payment gateway to facilitate secure online payments.
  - Users can make payments for their orders using credit/debit cards.

- **Responsive Design:** 
  - Ensured the website is responsive and works seamlessly on both desktop and mobile devices.
  - Optimized the layout for different screen sizes.

- **User Authentication (Optional):** 
  - Provided user registration and login functionalities.
  - Display the user's name and avatar when logged in.

## Tech Stack Used

- React
- Redux for state management
- MongoDb for database
- Stripe for payment gateway integration
  
## State Management with Redux

- **Redux**: 
  - I have implemented state management using Redux to efficiently manage the application's global state.
  - Redux helps in managing complex application states, such as user authentication, shopping cart data.

### User Authentication and JWT Token

- **User Authentication**: 
  - I have integrated user authentication features into the project.
  - Users can register and log in to access personalized features.
  
- **JWT Token**: 
  - Upon successful authentication, the user receives a JWT (JSON Web Token) for secure and stateless authentication.
  - The JWT token is stored in the browser's local storage for persistence across sessions.
  - Security measures have been taken to ensure sensitive data is securely stored and managed.

## Local Storage

- **Local Storage**: 
  - Browser's local storage is utilized to store the JWT token and user details.
  - Storing the token locally allows for seamless user authentication on subsequent visits.
  - Security measures have been taken to ensure the safety of sensitive user data.

## Data Flow

- **Data Flow with Redux**:
  - I have provided a clear and structured data flow within the application using Redux.
  - Actions and reducers handle user authentication, shopping cart updates, and payment processing.

## Installation and Usage

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/totalitycorp-frontend-challenge.git
   
2. Navigate to the project directory:
-  cd totalitycorp-frontend-challenge
3. Install dependencies:
-  npm install
## Usage
1. start the development server:
- npm start
2. Please replace `your_stripe_api_key` actual key.
- REACT_APP_STRIPE_KEY=your_stripe_api_key
3. Explore the Application:

Navigate through the e-commerce website to view products.
Add products to your cart, increase or decrease quantities, and remove items.
Proceed to checkout to simulate the payment process (if you have set up Stripe).
You can also test user authentication features if implemented.

## Live Demo

-You can access the live demo of this project: [https://totalitycorp--frontend--challenge.vercel.app/].

## Screenshots

[You can include screenshots of your project here to showcase the UI and functionality.]

## Feedback and Contact

I welcome any feedback or questions regarding this project. Please feel free to reach out to me:

- Email: [panchalmohitg2002@gmail.com]
- LinkedIn: [(https://www.linkedin.com/in/mohit-kumar-0ba38b195/)]

Thank you for considering my submission.

---
Mohit Kumar
