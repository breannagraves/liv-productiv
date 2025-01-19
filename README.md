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

<div><h1 id="markdown-header-livproductiv">LivProductiv</h1>
<p>A website that provides users with tools to be more productive. </p>
<h2 id="markdown-header-run-locally">Run Locally</h2>
<p>Clone the project</p>
<div class="codehilite"><pre><span></span>  git clone https://git.txstate.edu/mhe17/LivProductiv.git
</pre></div>
<p>Install dependencies:</p>
<p>First you must install Node.js on your device</p>
<div class="codehilite"><pre><span></span>  npm install node
</pre></div>
<p>Next you will need Express and Express Sessions</p>
<div class="codehilite"><pre><span></span>  npm install express --save
</pre></div>
<div class="codehilite"><pre><span></span>  npm install express-session --save
</pre></div>
<p>You will also need MySQL for Node.js</p>
<div class="codehilite"><pre><span></span>  npm install mysql --save
</pre></div>
<p>Lastly you will need to install XAMPP Control Panel, the latest versions can be found here:</p>
<p><a href="https://www.apachefriends.org/download.html" rel="nofollow" class="ap-connect-link">https://www.apachefriends.org/download.html</a></p>
<p>Once downloaded, Please start the Apache and MySQL Modules, then navigate to </p>
<div class="codehilite"><pre><span></span>  http://localhost/dashboard/
</pre></div>
<p>in your browser.</p>
<p>You will now need to navigate to phpmyadmin and create a new database:</p>
<p>Please title it:</p>
<p></p><div class="codehilite"><pre><span></span>  nodelogin
</pre></div>
Then create your first table, it will be titled <p></p>
<div class="codehilite"><pre><span></span>  accounts
</pre></div>
<p>and it will have four columns:</p>
<p></p><div class="codehilite"><pre><span></span>  <span class="s2">"id"</span> <span class="s2">"username"</span> <span class="s2">"password"</span> <span class="s2">"email"</span>
</pre></div>
Please make id Type "int(11)" 
Please make username Type "varchar(50)"
Please make password Type "varchar(255)"
Please make email Type "varchar(100)"<p></p>
<p>Next you will create your second table, it will be titled </p>
<p></p><div class="codehilite"><pre><span></span>  goals
</pre></div>
and it will have 5 columns<p></p>
<div class="codehilite"><pre><span></span>  <span class="s2">"question1"</span> <span class="s2">"question2"</span> <span class="s2">"question3"</span> <span class="s2">"question4"</span> <span class="s2">"question5"</span>
</pre></div>
<p>Please make all columns Type "varchar(300)"</p>
<p>You are now ready to start the server</p>
<p>Go to the local project directory where you cloned our project, and open it in VSC or your choice of IDE</p>
<p>Next find the file titled "login.js"</p>
<p>In the terminal, enter</p>
<div class="codehilite"><pre><span></span>  node login.js
</pre></div>
<p>In your broswer please visit</p>
<div class="codehilite"><pre><span></span>http://localhost:3000/
</pre></div>
<p>You are now interacting with our Prototype.</p>
<p>Please feel free to create a new user login or login with Username: Test and Password: Test</p>
<h2 id="markdown-header-authors">Authors</h2>
<p>Breanna Kattner</p>
