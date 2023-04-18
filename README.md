# FANtium API

![fan](https://user-images.githubusercontent.com/18735075/232774183-726ff577-c30e-4323-8aee-e5887c26cd04.png)

Populate the three collections above with the information from the database.
- Variables will be Bronze, Silver, Gold and the labels / additional text.
- The information to be populated beneath the image from the database are:
    - Percentage of Ownership
    - Number of the collection remaining
    - Price (in USD)
    - Perks within each token
    - Status - to be enabled or disabled

# Technology Used

The API has been built with:

- Express.js framework (Node v18)
- Postgresql Database

# UI and API Documentation

- To preview the UI, proceed to https://master.d2jrcp5smfrdab.amplifyapp.com/ .
- To access the API hosted on the AWS cloud platform -->> https://fantium.onrender.com/

# Features

1.  Fetch Collections data from a postgresql db

## Schema name
- db

## Database columns
- collection_id<Primary key>
- perks
- percentage_ownership
- price
- status
- number_collection_remaining

# Installation

1. Ensure you have installed Node v18.
2. Clone the repo in your local machine.
3. Navigate to the project folder(./api)
4. Install all the requirements of the project by typing:
   `npm install`

## Environment variables

- `HOST_NAME='your_host_name_here'`
- `HOST_PORT='your_host_port_here'`
- `NAME='your_user_name_here'`
- `DATABASE='your_database_name_here'`
- `PASSWORD='you_database_password_here'`
- `INFURA_ID='your_infura_id_here'`

- Type in terminal:
  `npm run dev`


# API Endpoints

| Resource URL                                 | Methods | Description                                        |
| ---------------------------------------------| ------- | -------------------------------------------------- |
| /                                            | GET     | Home                                               |
| /collections                                 | GET     | Collections                                        |
