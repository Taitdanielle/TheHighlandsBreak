[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Taitdanielle/TheHighlandsBreak) 

# TheHighlandsBreak

## Interactive Front-end Development Milestone Project 

The aim of this project was to create and build a Single Page Application (SPA) Interactive Front-end webpage using Google Maps API. The SPA would allows users to search for their next 
Weekend highlands break, and to help users find attractions, restaurants and hotels. 
You can find the live page [here](https://taitdanielle.github.io/TheHighlandsBreak/).

## UX

I started with a desktop approach for this project, By created mockups and wireframes for larger screens then I moved onto creating wireframes for smaller screens. The design of the website
is simple and easy to navigate and use. Wireframes can be found [here](https://github.com/Taitdanielle/TheHighlandsBreak/tree/master/assets/images/wireframes).
Below are user stories that were conducted in order to gain clear goals that needed to be achieved for this webpage.


* I want to choose the city where my break will be
* I want the map to show me points of interest like attractions, restaurants and hotels.
* I want a map to centre on the city I select
* I want to be able to use this on different sized screens
* I want to be able to control the map 
* I want to be able to see the information displayed by the points of interest
* I would like form where I can fill out in order to contact someone to discuss the break and book it

The nav bar is responsive having break points for smaller, medium and large screens. The navigation links disappear on screen width's below 992 pixels and a burger menu icon appears top right. When the burger icon is clicked, it brings a drop down menu with the navigation links displayed vertically down the left-hand side. There is a "to the top button" that appears when the user starts to scroll down the page for ease of navigation at all times and the navigation bar is also fixed to the top of the screen.

The landing and about sections combined make a visually appealing start to the users experience. Designed to give the user a simple message to explore and explain what the web application is there to do. Below the about section there is a carousel of images. The carousel is interactive with buttons on the sides to allow the user to go back and fourth through the images. Each image has a small title on the bottom and a description of what the Image is.

Find your break’ is the message the user first sees on the find section to encourage them to use the app. Simple instructions are written to ensure there is no confusion on how to use the app.The search bar easily prompts to search for a city in Scotland. The input for the city destination uses Google Maps autocomplete function speeding up the process and also providing better usability on touch screens as it can save further typing. The three POI buttons once tapped or clicked sets the application off bringing back the results. Each tile and marker when clicked or tapped presents a neat info window anchored above the POI marker on the map. Different font weight has been used in order to give the text in the tiles some hierarchy with out creating the font bigger. 
The booking section provides a easy to use contact form  A image was used for the background of this section with the booking form itself having a white opacity to make it really stand out. Once the form has been submitted a modal is displayed thanking them.
During the process of designing this SPA,  I had a lot of trouble with adding the emailJS function to my form as I wanted the user to get a meal regarding the information they had filled out. I decided to take this out as it was very time consuming.


## Features

### Features on this website are:

* The links in the navigation when hovered over turn light grey to indicate which link the users cursor is over.
* When hovering over any links the cursor changes from a pointer to a hand.
* The carousel in the about section has interactive buttons.
* The country input field has a autocomplete function to aide the user in finding the city they wish to visit.
* The map appears when the city is inputted into the search bar
* Markers on the map when clicked or tapped bring up an info window with detailed information about that POI.
* The booking form uses custom input validation script to check the values before they are submitted.
* A successful form submission will display a modal with a thank you message.
* The modal can be closed using the close cross, close button, or by clicking anywhere outside the modal.

### Future features

* More POIs 
* Travel blog describing experiences in different cities around the world.
* Adding email to the booking form so it sends the information to an email address using emailJS.
* Price checker for flights and hotels.
* User accounts so searches can be saved.


## Technologies Used

### Below are a list of the programming languages, technologies and frameworks used for this website.

* HTML5
* CSS3
* JavaScript
* JQuery
* Markdown
  * Used to write the README.md file.
* Bootstrap4.3.1 framework
  * The website uses bootstrap framework for it's grid system, page layout, button styling and responsive navigation bar.
* Gitpod was the IDE used to write the code for this website.
* Balsamic was used to create the wireframes for this project
* Google Fonts
* Git
  * Version control
* Github
* Font Awesome
  * For social media icons and Glyph icons
* Google Chrome Developer Tools

## Testing

### I conducted testing across different platforms and web browsers in order to make sure the website worked correctly, and looked great across each one. I also asked friends and family to test across their own devices and to give me honest opinions and feedback.
When about to submit the last push I received an email stating that the The page build failed for the `master` branch with the following error: Unable to build page. Please try again later.
I was advised by creating a file named .nojekyll (it doesn't need any contents) in the root of your repository to see if it resolves the errors."
and also filed a report to GitHub as nothing came of adding the file. 
### Platforms:

* Samsung Galaxy s10+
  * Google Chrome
  * Samsung web browser

* MacBook Air
  * Google Chrome
  * Firefox
  * Safari

* Lenovo Windows 10 pro
  * Google Chrome

Manual testing was also conducted to ensure the user story objectives where achieved. 

### City

1. City checked autocomplete shows cities from different countries.(UK)
2. Select each city and check autocomplete shows cities
3. When the country and city have been selected the map centres and zooms in on that city.

### POIs

1. Click on 'Find' in navbar.
2. When clicked each POI button displays the correct POIs respectively.
3. When 'All' and no city is selected.
4. When a country and city is selected.
5. Results from the last search are cleared before the next search results are displayed.
6. Markers are cleared on the map before the next markers are displayed.

### Booking form

1. Use navigation link to 'Book' section
2. Try to submit the empty form and verify that an error message about the required fields appears.
3. Try to submit the form with an empty name field and verify that a relevant error message appears.
4. Try to submit the form with invalid values in the name field and verify that a relevant error message appears.
5. Try to submit the form with an empty email field and verify that a relevant error message appears.
6. Try to submit the form with an invalid email address and verify that a relevant error message appears.
7. Try to submit the form with an empty telephone field and verify that a relevant error message appears.
8. Try to submit the form with an invalid telephone number and verify that a relevant error message appears.
9. Try to submit the form with all inputs valid. Modal should be displayed with thank you message.
10. Modal can be closed by clicking on any part of the window outside the modal.
11. Modal can be closed using the closed button or the cross button.

### Map

1. Controls are shown on the map.
2. Drag the map around in all directions.
3. Zoom in and out of the map.
4. Switch between Map and Satellite views.
5. Click on a marker to display more information.


## Deployment

The website was created using Gitpod. Git was used for version control and pushed to a repository hosted on Github.
The website is deployed using Github pages TheHighlandsBreak.

### How to deploy the code locally?
If you wish to run this code locally then please follow the instructions below.

1.	Download the code from the Github repository at [TheHighlandsBreak](https://github.com/Taitdanielle/TheHighlandsBreak)
2.	Click on Clone or download then Download ZIP. This will download the code into a ZIP folder locally on your computer.
3.	Uncompress the ZIP folder.

### Create your own Google API keys

In order to use this code for your own projects you will need to generate your own Google API key. This can be done by following the instructions on the Google Maps API website. Once you have a API key continue to follow on with the steps below to add your key.

1.	Open the index.html page with an IDE or using a text editor of your chose.
2.	At the bottom of the page locate the Google Maps API link in the script section and input your API key after key=. (Make sure to save after you have added your key!)
3.	The code is now ready to be run from either a web server or just locally from your computer. Configuring web servers is not in scope of this README file but instructions are below if you wish to run this locally.
4.	Change to or open the directory the folder is located in.
5.	Open the folder > right click on index.html > Open with > select a web browser. The code will open up in the web browser and will be running locally on your computer.


## Credits

### Code

* Google Map Hotel Search Google Maps examples
  * Creates the search and then sends the query to Google.
  * Code was customised in order to achieve user story objectives.
* Modal 
  * w3schools.com
  * Modal for successful booking form submission.
* BootStrap
  * Carousel 

### Images

* All images for this web site are being used under free commercial license from AdobeStock Apart from one in the carousel which I took myself.

### Icons

* The icons for the POI buttons where sourced under free commercial license from Icon.

### Acknowledgements

I received inspiration for this project from the love of my country and the beautiful places it holds. So much to do in Scotland and see. The scenery from the highlands is beautiful and morepeople should experience it. 
I would also like to thank
  * Tutor Support
  * All the guys on Slack
  * My work mate Cameron who helped me with the results table of the google maps
  
  I really appreciate these guys and what they do, A Massive help especially for a night hawk like myself.