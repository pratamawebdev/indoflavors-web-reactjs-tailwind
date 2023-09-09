
#  Indoflavors Web

IndoFlavors is a mini project created as part of the Dibimbing Bootcamp Front End Web Developer. The app aims to introduce and present Indonesia's culinary richness through an online platform. You can explore various Indonesian specialties and easily add them to your shopping cart. The app is equipped with various important features, including an authentication system, user registration, and CRUD (Create, Read, Update, Delete) operations for food.


## Demo

https://indoflavors-web-reactjs-tailwind.vercel.app/


## Installation

To install and run this project in your local environment, follow these steps:

1. **Clone repository**: Clone this repository to your computer with the following command:

   ```bash
   git clone https://github.com/pratamawebdev/indoflavors-web-reactjs-tailwind.git

2. Move to the project directory: Go to the IndoFlavors project directory:
    
    ```bash
     cd Indoflavors

3. Install dependencies: Run the following command to install all the required dependencies:
   
   ```bash
   npm install

4. Run the application: Once the installation is complete, run the application with the following command:

   ```bash
   npm run dev

5. Access the app: The app will run on localhost. Open your browser and visit that address.

## Screenshots

![App Screenshot](https://github.com/pratamawebdev/indoflavors-web-reactjs-tailwind/blob/c15829791503b6af73e062e44696959260ed0c7c/screenshots/Screenshot%202023-09-09%20193212.png)


## Use

Indoflavors app is easy to use:

1. Login: You can login with your account or register if you don't have an account yet.

2. Explore the Menu: Browse through the various Indonesian foods available and add the ones you like to the shopping cart.

3. Manage Cart: View and manage the meals you have added to your shopping cart.

4. CRUD Food: Add, edit or delete available meals.
## Contributing

We invite contributions from the community. If you would like to contribute to the development of IndoFlavors, please follow these steps:

1. Check out the list of available issues or open a new issue if you find a problem.
2. Submit a pull request with your proposed changes.
3. Discuss ideas and changes with our community.

## Penggunaan API External

IndoFlavors uses an [external API](https://mudoapi.tech/) to retrieve data about Indonesian specialties. To access the food data, you can make API calls to the following endpoints:

1. Get List Menu:
GET https://api.mudoapi.tech/menus

2. Get Detail Menu:
Get https://api.mudoapi.tech/menu/{id}

3. Delete Menu:
DELETE https://api.mudoapi.tech/menu/{id}

4. Create Menu:
POST https://api.mudoapi.tech/menu

5. Update Menu:
PUT https://api.mudoapi.tech/menu/{id}

Be sure to read the API documentation for more information on the available parameters and how to use them.