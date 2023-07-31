This is a Next.js project using Styled-Components and MongoDB to make an e-commerce selling page.
This project was made to learn Next.js using an online tutorial : [Build a Fullstack E-commerce using Next.js ](https://www.youtube.com/watch?v=dTFXufTgfOE)
> A big thanks to Dawid for providing this tutorial and explanations!

In case you want to run it, use `yarn dev` :) 

## Front page

Using Styled-Components the front page possesses multiple elements to display information from the database.
The Front Page is composed of one featured object, and the 10 newest objects added on the website.
<br /><br />
<img width="833" alt="256886119-20787774-929a-4509-920b-d0eb3092b242" src="https://github.com/Boitapain/ecom-front/assets/108083652/961d9d9a-bc29-4dc3-92c4-739c1c4384f2">
<br/>
It is currently composed of three other pages: The Products page (displaying all products), the specific product page (displaying the information of a specific product), and the Cart page (displaying the product inside the cart and allowing the client to pass an order).

### Products page
This project uses mongoose library to fetch the informations from the database with models and api linked to it.
<img width="407" align="left" alt="2" src="https://github.com/Boitapain/ecom-front/assets/108083652/7630198a-0314-49a9-82d6-7027fc0e5b4d">
<img width="398" alt="3" src="https://github.com/Boitapain/ecom-front/assets/108083652/bbd7ce59-44bd-4219-8a62-3534880efc73">
<br clear="left"/>

The products information are passed down to components made to display them inside a list of objects that redirect to a specific Product page.
<br/>
<img width="744" align="left" alt="4" src="https://github.com/Boitapain/ecom-front/assets/108083652/5adb3a52-28c0-49c9-a3f0-6f1e37bd3b6a">
<img width="197" alt="5" src="https://github.com/Boitapain/ecom-front/assets/108083652/7bc547c2-e57d-472d-8cc0-2185faa46b03">
<br clear="left" />

### Single Product page

Just like the products info are displayed inside a component, this page fetches specific information about the product and display them.

<img width="833" alt="6" src="https://github.com/Boitapain/ecom-front/assets/108083652/24f01bbd-caba-46a2-a6ce-159aa1f333a2">

### Cart page

This page displays the products that are inside your cart once you're finished and want to pass the order. The page itself uses the stripe library to redirect users to a payement page.

<img width="833" alt="7" src="https://github.com/Boitapain/ecom-front/assets/108083652/e6f0e527-ef3d-4a1e-a54e-3a68a83d495b">


The information passed throught the api are sent to stripe API, generating a payement page specifically for your cart content. Once the payement is done, you're directly redirected to the Cart page and an order is created inside the database.

<img width="537" align="left" alt="8" src="https://github.com/Boitapain/ecom-front/assets/108083652/37756e61-943a-49f4-b0d8-6f4a993741cb">
<img width="437" alt="9" src="https://github.com/Boitapain/ecom-front/assets/108083652/71a9c60b-8389-4ceb-94c4-1edfecdd7f16">
<br clear="left"/>
