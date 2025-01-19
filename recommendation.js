//global
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
//fifty question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var result = document.getElementById("result");

//listenrs for answer choices
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);

//functions to calculate results 
function result1() {
    result1Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function result2() {
    result2Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function result3() {
    result3Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function result4() {
    result4Score++, questionCount++;
    if (questionCount >= 5) {
        updateResult();
    }
}
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
function updateResult() {
    if (result1Score >= 3) {

        result.innerHTML = "The 7 Habits of Highly Effective People by Stephen Covey";
        
        description.innerHTML = "This book was originally published back in 1989 and has sold more than 25 million copies since its release. Its focus is an approach that pivots on aligning with your “character ethic”, which happens by forming a series of seven habits. These habits allow the reader to move from dependence to interdependence for maximum effectiveness in life."
        
        show_image("https://res.cloudinary.com/monday-blogs/w_333,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/The-7-Habits-of-Highly-Effective-People-bookcover.jpg", 333, 500, "image");
    } else if (result2Score > 3) {
        result.innerHTML =
        "Deep Work: Rules for Focused Success in a Distracted World by Cal Newport";
        
        description.innerHTML ="Newport’s Deep Work is a book that focuses on eliminating the clutter, noise, and distraction of the modern world so you can focus on deep, productive work. This is especially difficult in a world of technology (think buzzing phones, never-ending notifications, and a flooded email inbox.) If you need to simplify and get rid of the things in the way of your deep work, this book is for you.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_333,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Deep-Work-Rules-for-Focused-Success-in-a-Distracted-World-bookcover-min.jpg", 333, 500, "image");
    } else if (result3Score > 3) {
        result.innerHTML = "Zen to Done by Leo Babauta";
        
        description.innerHTML ="If you want an ultra-simple productivity system, look no further. This book is the “Art of Tidying Up” …but for your workday. Focusing on habits and structure, you’ll learn how to become more mindful and at peace with what’s on your to-do list so you can logically and thoughtfully tackle your work.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_344,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Zen-to-Done-bookcover-min.jpg", 333, 500, "image");
    } else if (result4Score > 3) {
        result.innerHTML = "Essentialism: The Disciplined Pursuit of Less by Greg McKeown";
        
        description.innerHTML ="Essentialism is a book for the person feeling frazzled by having too much to do and not enough time. The Amazon description sums this approach up nicely: “Essentialism is not a time management strategy or a productivity technique. It is a systematic discipline for discerning what is absolutely essential, then eliminating everything that is not, so we can make the highest possible contribution towards the things that really matter.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_333,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Essentialism-The-Disciplined-Pursuit-of-Less-bookcover-min.jpg", 333, 500, "image");
    } else if (result1Score >= 2) {
        result.innerHTML = "How to be a Productivity Ninja: Worry Less, Achieve More and Love What You Do by Graham Allcott";
        
        description.innerHTML ="Written by one of the UK’s foremost productivity experts, this book is all about making the most of your attention, beating procrastination, and learning to work smarter–not harder. By reading it, you’ll gain tactics for guarding your time (and will teach you how to be ruthless, if needed) as well as insights into how to stay calm and work with a clear mind";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_323,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/How-to-be-a-Productivity-Ninja-bookcover-min.jpg", 333, 500, "image");
    } else if (result2Score >= 2) {
        result.innerHTML = "Free to Focus by Michael Hyatt";
        
        description.innerHTML ="More than 25,000 professionals use the ideas outlined in this book to have more productive workdays. It teaches you how to: Filter your tasks and commitments, cut out the nonessentials, eliminate interruptions and distractions, and set boundaries that protect your focus and drive results. If you want a simple, no-nonsense approach to productivity with only three steps, this is the right book for you.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_324,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Free-to-Focus-bookcover-min.jpg", 333, 500, "image");
    } else if (result3Score >= 2) {
        result.innerHTML = "Principles: Life and Work by Ray Dalio";
        
        description.innerHTML ="Written by the founder of Bridgewater Associates, one of the most important private companies in the United States, this book is all about the unconventional principles he’s developed, refined, and used over the past 40 years in business and in life. If you want to get more familiar with terms like “radical honesty” and “radical transparency” (with no BS!) this is simple and easy to read book that’ll hit all the important notes for you.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_296,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Principles-Life-and-Work-bookcover-min.jpg", 333, 500, "image");
    } else if (result4Score >= 2) {
        result.innerHTML = "Getting Things Done: The Art of Stress-Free Productivity by David Allen";
        
        description.innerHTML ="This book was crafted for the business crowd and has spawned a whole offshoot of seminars, courses, and workbooks that people around the world swear by. With tips and principles around organization, prioritization, and clear goal-setting, this book also shares some meaningful insight into how to include relaxation as part of the big-picture strategy.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_332,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Getting-Things-Done-Art-of-Stress-Free-Productivity-bookcover-min.jpg", 333, 500, "image");
    } else {

        result.innerHTML = "Scrum: The Art of Doing Twice the Work in Half the Time by Jeff Sutherland";
        
        description.innerHTML ="You may have heard of the term “scrum” in the management world–it’s based on the rugby formation in which the entire team locks its arms to gain control of the ball. In the business environment, this term (and the idea behind it) is all about spotting what is wrong with the way we currently do work. The author of this book coined the term, and shares his (sometimes blunt) ideas on how to eliminate it from your workday for maximum productivity.";
        
        show_image("https://res.cloudinary.com/monday-blogs/w_674,h_1024,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/02/Scrum-The-Art-of-Doing-Twice-the-Work-in-Half-the-Time-bookcover-min.jpg", 333, 500, "image");
    }
}