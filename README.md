This is a Next.js project using Styled-Components and MongoDB to make an e-commerce selling page. 

In case you want to run it, use `yarn dev` :) 

## Front page

Using Styled-Components the front page possesses multiple elements to display information from the database.
The Front Page is composed of one featured object, and the 10 newest objects added on the website.
<br /><br />
<img width="656" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/20787774-929a-4509-920b-d0eb3092b242"><br/>
It is currently composed of three other pages: The Products page (displaying all products), the specific product page (displaying the information of a specific product), and the Cart page (displaying the product inside the cart and allowing the client to pass an order).

### Products page
This project uses mongoose library to fetch the informations from the database with models and api linked to it.
<img width="389" align="left" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/7f9d250f-926d-483c-b09c-8042ae943b13">
<img width="360" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/e08c0992-bd63-4f62-8136-65b6c5975922">
<br clear="left"/>

The products information are passed down to components made to display them inside a list of objects that redirect to a specific Product page.
<br/>
<img width="633" align="left" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/319c4e79-be46-4882-9796-c54bdd69fb25">
<img width="197" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/f6b4eb81-07a3-479c-a00d-c6198a50cb85">
<br clear="left" />

### Single Product page

Just like the products info are displayed inside a component, this page fetches specific information about the product and display them.

<img width="656" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/b8a6730d-ba48-4620-a3c9-964fe16a13d6">

### Cart page

This page displays the products that are inside your cart once you're finished and want to pass the order. The page itself uses the stripe library to redirect users to a payement page.

<img width="656" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/18dfd647-d6f7-4e71-98c2-485b977db8ca">

The information passed throught the api are sent to stripe API, generating a payement page specifically for your cart content. Once the payement is done, you're directly redirected to the Cart page and an order is created inside the database.

<img width="531" alt="image" align="left" src="https://github.com/Boitapain/ecom-front/assets/108083652/91d74b36-d504-46a7-af1c-165a8c9646ad">
<img width="420" alt="image" src="https://github.com/Boitapain/ecom-front/assets/108083652/4e591bb2-0c94-437c-ad6d-860773cd07ba">
<br clear="left"/>
