# liv-productiv
A website that provides users with multiple tools to increase productivity in life, work, and school. 

Features:
* Password protected login, with sign in validation
* Productitvity Timer
* Various music selections to aid in focus
* Goal Tracker
* Quiz to recommend personalized self help book recommendations 

Front end - HTML/CSS/JS. 
Backend - Node.js/Express, SQL, PHP

LivProductiv
A website that provides users with tools to be more productive.

Run Locally
Clone the project

  git clone https://git.txstate.edu/mhe17/LivProductiv.git
Install dependencies:

First you must install Node.js on your device

  npm install node
Next you will need Express and Express Sessions

  npm install express --save
  npm install express-session --save
You will also need MySQL for Node.js

  npm install mysql --save
Lastly you will need to install XAMPP Control Panel, the latest versions can be found here:

https://www.apachefriends.org/download.html

Once downloaded, Please start the Apache and MySQL Modules, then navigate to

  http://localhost/dashboard/
in your browser.

You will now need to navigate to phpmyadmin and create a new database:

Please title it:

  nodelogin
Then create your first table, it will be titled
  accounts
and it will have four columns:

  "id" "username" "password" "email"
Please make id Type "int(11)" Please make username Type "varchar(50)" Please make password Type "varchar(255)" Please make email Type "varchar(100)"
Next you will create your second table, it will be titled

  goals
and it will have 5 columns
  "question1" "question2" "question3" "question4" "question5"
Please make all columns Type "varchar(300)"

You are now ready to start the server

Go to the local project directory where you cloned our project, and open it in VSC or your choice of IDE

Next find the file titled "login.js"

In the terminal, enter

  node login.js
In your broswer please visit

http://localhost:3000/
You are now interacting with our Prototype.

Please feel free to create a new user login or login with Username: Test and Password: Test

Authors
Breanna Graves
