# African Legends

### [Live Site](https://salute03.github.io/ms2-project-africa-legends/)

![Various Devices](https://salute03.github.io/ms2-project-africa-legends/assets/images/fela/responsive.jpg.png)


African Legends is a Milestone 2 project, it is part of the Fullstack WEb Development Course of [Code Institute](https://codeinstitute.net/).

## Project Overview

African legend is an imaginary blog, that is centered on educating people who are interested and curious to know the history of African legends both the past (late) and present.
This web page is focused on African music legends and with informations on African music history. And it is a one page website.
This is for educational purposes only.

## 1. UX

As a user, i expect to:
* Easily navigate through the website.
* Access well defined pictures of the legends.
* locate the legends on the map to know their country of origin.
* See a well colored layout.
* navigate to different sections through the navbar menu in mobile layout.
* Be able to send email to request to know more and give feedback.

## 2. Features

This is a one page website which is divided into four sections:

### The First-sight
The fist sight which takes the view height(vh) of the window and displays a bold glassmorphism style backround with introduction to the page.


### History
This section gives history about African music.

### Legends
This section displays images of African musical legends using card panels(5).

### Map
This section displays google map that shows the country where each legend is from.

### Contact
This section displays a form for sending emails for requests for projects.

* Navbar and footer are the same acroos the three pages.


## 3. Testing

1. **amiresponsive** [Am I Responsive](http://ami.responsivedesign.is/) Used to test responsiveness across a range of devices.
2. **Developer Tools** Chrome, Firefox and Microsoft Edge, web dev tools using iPhone 6,7,8,x plus, smasung s and Ipad as toggle devices to test responsiveness.
3. **Mobile Devices** I used my Google Pixel 3a phone and Amazon Fire tablet to test the site, using this method I found that not all of the fonts were loaded properly originally.
4. **Friends and family** I asked for feedback from friends and family in order to get a users perspective and i got very good feedback.
5.**Lighthouse** A number of issues were resolved using lighthouse. I used lighthouse to determine the rate of performance, accessibility, best practice and SEO.
6.**W3C HTML Validator**(https://validator.w3.org/) Used to identify HTML errors. few errors were identified, which has to do with the modal form.
7.**W3C CSS Validator**(https://jigsaw.w3.org/css-validator/) Used to identify CSS errors.
8. **JSHint** All Javascript and jQuery code on the website has been tested in JSHint

### Manual Testing

1.Expectation 
* The header should reload or return back to top page when clicked.
* The navlinks should open the pages linked to.
* contact form shouuld send email to my oluwasegunogunsakin@gmail.com
* The panels opens each picture one per click and closes it when another one is clicked
* The armburger button should display the menu in the mobile platform.

2.Testing
Each of features was clicked

3.Result
Each of the features responded normarlly to clicks and displayes what was expected.

## 4. Wireframes
I used pen and paper for the wireframes.

## 5. Technologies Used

1. **HTML (Hyper Text Markup Language):** Used throughout the site;  
   HTML: https://www.w3.org/TR/html/ 
2. **CSS (Cascading Style Sheets):** Used throughout the site;
   https://www.w3.org/Style/CSS/Overview.en.html
3. **Bootstrap:** Used to aid responsive design and for componants such as navbars, buttons. This project uses Bootstrap as a framework to assist in page grid layout & navigation.  Bootstrap v4.5 was used.
   https://www.bootstrapcdn.com/
4. **JQuery:** This project uses JQuery to assist in execution of bootstrap.
   https://jquery.com/
5. **GitHub:** THis site was published using GitHub pages.
   http://github.com
6. **Chrome/Firefox/Bing DevTools:** Regularly used to test the the site 
   https://developers.google.com/web/tools/chrome-devtools
7. **Font Awesome:** The social icons,  Facebook, Twitter, Pinterest, Linked-in, instagram and You-tube  in the footer, dumbell icon in the home page, @ icon, cellphone icon and email icon in the contact  were imported from Font Awesome. 
   https://fontawesome.com/icons
8. **Google Font:** Roboto Font family was used throughout the project.
   https://fonts.google.com/
9. **Javascript**(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js)
    **Javascript** was used to put Google Maps on the website and to send emails for a project request using the contact form.
10. **EmailJS**(http://www.emailjs.com/)
    **EmailJS** is an application that was used to add an email template for sending emails via the contact form.
    EmailJS is an aplication that allows users to send emails directly from Javascript.
11. **Maps Javascript API**(https://developers.google.com/maps/documentation/javascript/tutorial)
    **Maps Javascript API** is a library that was used in order to add a map on the page and customize it.

## 6. Development Cycle

* HTML development

The first stage of development was writing the HTML code for the develpopment of the home page, starting with the navbars, the body and foooter. (seen in 'index.html').

* CSS Code

Once I feel comfortable with the HTML structures, I then started applying styles by writing CSS code,
and first i designed the the first-sight with a central display of glassmorphism style with 2 squares that rotates when the page loads, which can be seen on file 'styles.css'.

* Javascript.

I created 3 javascript files, main.js for rendering google map, panel.js for displaying pics and sendEmail.js for sending emails.


## 7. Bug fixing
* One of the rotating squares was hiding in a mobile form and i fixed it by creating @media quary to change the sizes.
* Google map was not rendering and it was fixed by properly updating my Api key from google maps Api.
* The glassmorphism was supposed to be a blurry glass but gitpod editor could not recognice the code "backdrop-filter: blur(25px)" so i manipulated the opacity and increased
it from 1 to 3.  


## 8. Deployment

1. I Created a Github account at https://github.com
   My account url; https://github.com/salute03
2. I installed Git and set up a username and password.
3. I created a repository on Github (https://github.com/salute03/ms2-project-africa-legends)
4. I uploaded all files to my Github repository.
6. To publish the project to see it on the web, I then went into the Settings on my respository, scrolled down to the heading, GitHub Pages. Under the Source setting, I used the drop-down menu to select master branch as a publishing source and saved it. Refreshed the github page, and you are then given a url where your page is published;
Your site is published at https://github.com/salute03/ms2-project-africa-legends/


## 9. Credits

1. **Code Institute**
This project was written using code institute's template https://github.com/Code-Institute-Org/gitpod-full-template. 
2.**Slack**

3.**All** text was written by me .

### Media
Twitter
Slack


## 8. Acknowledgements

1.  My mentor Marcel Mulders for his great support and input.
2.  My peers on **slack** for their generosity in sharing their knowledge and experience. 

##### back to [top](#table-of-contents)
                  