# Vacation Rentals (HomeAway) Prototype 

This project is a clone of HomeAway (www.homeaway.com). Developed purely for <b>learning</b> purposes.

 
## Technologies Used:
  * Front End : React-Redux, HTML, CSS, Bootstrap 
  * Back End  : NodeJS, ExpressJS, JWT, Kafka, Mongoose
  * Database  : MongoDB
 

## Functionality 

### User (Traveler mode)
  * Login
  * Signup
  * Search for a place
  * Book a place
  * View Profile and Update
  * View Past bookings
  
### User (Owner mode)
  * Add a new property to make it available for booking based on
    * Location
    * Property Details
    * Available Booking dates
    * Pictures of the properties
    * Pricing
  * View Profile and Update
  * Search for his properties
  * View Past bookings
  
### Basic Architecture Diagram

![Alt text](HomeAway/ScreenShots/Kafka_Architecture.png?raw=true "Architecture")


## Screenshots

## Traveler Module

Starter Page

![Alt text](HomeAway/ScreenShots/StarterPage.png?raw=true "Starter Page")

Landing Page

![Alt text](HomeAway/ScreenShots/LandingPage.png?raw=true "Landing Page")

Search Places

![Alt text](HomeAway/ScreenShots/SearchPlaces.png?raw=true "Search Places")

Places Description

![Alt text](HomeAway/ScreenShots/PlacesDescription.png?raw=true "Places Description")

Trips Board

![Alt text](HomeAway/ScreenShots/TripsBoard.png?raw=true "TripsBoard")

## Owner Module

### Owner Home Page

![Alt text](HomeAway/ScreenShots/OwnerHome.png?raw=true "Owner Home Page")

### Owner Postings Page

![Alt text](HomeAway/ScreenShots/OwnerPostings.png?raw=true "Owner Postings Page")

### Add Property Page

![Alt text](HomeAway/ScreenShots/Add_Property.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Property_1.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Property_2.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Property_3.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Property_4.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Property_5.png?raw=true "Property Postings Page")

![Alt text](HomeAway/ScreenShots/Add_Propery_6.png?raw=true "Property Postings Page")


### User Profile

![Alt text](HomeAway/ScreenShots/User_Profile.png?raw=true "User Profile Page")



## Installation and Execution:

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Front End 
## Install

    $ git clone https://github.com/mssrinivas/VacationRentals-2.0.git
    $ cd VacationRentals-2.0/HomeAway/FrontEnd
    $ npm install

## Start & watch

    $ npm start

    
## Back End 
## Install

    $ git clone https://github.com/mssrinivas/VacationRentals-2.0.git
    $ cd VacationRentals-2.0/HomeAway/BackEnd
    $ npm install

## Start & watch

    $ npm start


