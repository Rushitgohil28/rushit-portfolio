//HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rushit Gohil | Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="icon.png">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>
<!-- ================= ADVANCED CHATBOT ================= -->

<div class="chat-toggle" onclick="toggleChat()">💬</div>

<div class="chat-container" id="chatContainer">
    <div class="chat-header">
        <span>Rushit Assistant 🤖</span>
        <span onclick="toggleChat()" class="close-btn">✖</span>
    </div>

    <div class="chat-messages" id="chatMessages">
        <div class="bot-message">
            Hi 👋 I'm Rushit's assistant.  
            Ask me about skills, education, contact, resume or location.
        </div>

        <div class="quick-buttons">
            <button onclick="quickAsk('skills')">Skills</button>
            <button onclick="quickAsk('education')">Education</button>
            <button onclick="quickAsk('contact')">Contact</button>
            <button onclick="quickAsk('resume')">Resume</button>
        </div>
    </div>

    <div class="chat-input">
        <input type="text" id="userInput" placeholder="Ask something..." onkeypress="handleKey(event)">
        <button onclick="sendMessage()">➤</button>
    </div>
</div>

<script src="chatbot.js"></script>

<body>

<!-- ================= NAVBAR ================= -->

<nav>
    <div class="nav-container">
        <div class="logo">Rushit Gohil</div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>


<!-- ================= HOME ================= -->

<section id="home" class="section hero" data-aos="fade-up">
    <div class="container hero-container">

        <div class="hero-text">
            <h1>RUSHIT GOHIL</h1>
            <h3>Fresher | BCA Student</h3>

            <p>
                Final-year BCA student with knowledge of HTML, CSS, JavaScript, and Python.
                Passionate about web development and eager to start my career in IT industry.
            </p>

            <div class="hero-buttons">
                <a href="resume.pdf" download class="btn">Download Resume</a>
                <a href="#contact" class="btn outline">Contact Me</a>
            </div>
        </div>

        <div class="hero-image">
            <img src="photo.jpg" alt="Rushit photo">
        </div>

    </div>
</section>


<!-- ================= ABOUT ================= -->

<section id="about" class="section" data-aos="fade-right">
    <div class="container">
        <h2>About Me</h2>

        <div class="grid">
            <div class="glass card">
                <h3>Profile</h3>
                <p>
                    Quick learner with strong problem-solving ability and academic
                    experience in web and application development.
                    Looking to start my career in the IT industry.
                </p>
            </div>

            <div class="glass card">
                <h3>Career Objective</h3>
                <p>
                    To become a skilled software developer and contribute to innovative
                    projects while continuously improving my technical skills.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ================= EDUCATION ================= -->

<section id="education" class="section" data-aos="fade-left">
    <div class="container">
        <h2>Education</h2>

        <div class="grid">
            <div class="glass card">
                <h3>BCA (Bachelor of Computer Administration)</h3>
                <p><strong>Silver Oak University</strong></p>
                <p>2023 – 2026</p>
                <p>Currently Pursuing 3rd Year (6th Semester)</p>
            </div>
        </div>
    </div>
</section>

<!-- ================= SKILLS ================= -->

<section id="skills" class="section" data-aos="fade-up">
    <div class="container">
        <h2>Professional Skills</h2>

        <div class="grid">
            <div class="glass card">
                <h3>HTML, CSS & JavaScript</h3>
                <p>Basic knowledge of front-end development and website structure creation.</p>
            </div>

            <div class="glass card">
                <h3>Python Programming</h3>
                <p>Familiar with programming fundamentals and logical problem-solving.</p>
            </div>

            <div class="glass card">
                <h3>MS Office</h3>
                <p>Word, Excel, PowerPoint documentation and presentation skills.</p>
            </div>

            <div class="glass card">
                <h3>Git & Version Control</h3>
                <p>Basic understanding of version tracking and collaboration tools.</p>
            </div>

            <div class="glass card">
                <h3>Web Development Fundamentals</h3>
                <p>Understanding of responsive design and development workflow.</p>
            </div>

            <div class="glass card">
                <h3>Problem-Solving Ability</h3>
                <p>Strong analytical thinking and logical approach to challenges.</p>
            </div>
        </div>

        <h2 style="margin-top:70px;">Personal Skills</h2>

        <div class="grid">
            <div class="glass card">Quick learner and adaptable</div>
            <div class="glass card">Good communication skills</div>
            <div class="glass card">Time management skills</div>
            <div class="glass card">Hardworking and responsible</div>
            <div class="glass card">Ability to work under guidance</div>
            <div class="glass card">Eagerness to learn new technologies</div>
            <div class="glass card">Stress Management</div>
            <div class="glass card">Flexibility</div>
        </div>
    </div>
</section>

<!-- ================= CONTACT ================= -->

<section id="contact" class="section" data-aos="fade-down">
    <div class="container">
        <h2>Contact Information</h2>

        <div class="grid">
            <div class="glass card">
                <h3>Phone</h3>
                <p>
                    <a href="tel:+919726489466" class="contact-link">
                      📞 +91 97264 89466
                    </a>
                  </p>
                  
            </div>

            <div class="glass card">
                <h3>Email</h3>
                <p>
                    <a href="mailto:rushit28gohil@gmail.com" class="contact-link">
                      ✉ rushit28gohil@gmail.com
                    </a>
                  </p>
                  
            </div>

            <div class="glass card">
                <h3>Location</h3>
                <p>📍Navrangpura, Ahmedabad – 380009</p>
            </div>
        </div>

        <h2 style="margin-top:70px;">Languages Known</h2>

        <div class="grid">
            <div class="glass card">English</div>
            <div class="glass card">Hindi</div>
            <div class="glass card">Gujarati</div>
        </div>
    </div>
</section>
<!-- ================= FOOTER ================= -->

<footer class="footer">
    <p>© 2026 Rushit Gohil. All Rights Reserved.</p>
  </footer>
  

</body>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({
      duration: 1200,              // slower = smoother
      easing: "cubic-bezier(.25,.8,.25,1)",  // premium easing
      once: false,
      mirror: true,
      offset: 150,
      anchorPlacement: "top-bottom"
    });
  </script>
  
  
</html>



//CSS


/* ================= GLOBAL ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    scroll-behavior: smooth;
    padding-top: 80px; /* Prevent navbar overlap */
}

/* ================= SECTION ================= */

.section {
    padding: 100px 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
}

h1, h2, h3 {
    margin-bottom: 20px;
}

p {
    line-height: 1.6;
    opacity: 0.9;
}

/* ================= NAVBAR ================= */

nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    transition: 0.3s ease;
}

.nav-links li a:hover {
    color: #38bdf8;
}

/* ================= HERO ================= */

.hero {
    text-align: center;
}

/* ================= GRID ================= */

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

/* ================= GLASS CARD ================= */

.glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 15px;
    padding: 25px;
    transition: 0.3s ease;
}

.glass:hover {
    transform: translateY(-8px);
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    color: black;
    box-shadow: 0 15px 30px rgba(56,189,248,0.4);
}

/* ================= CARD ================= */

.card {
    text-align: center;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .nav-links {
        gap: 15px;
    }

    .nav-links li a {
        font-size: 13px;
    }

    .section {
        padding: 80px 15px;
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
/* ================= HERO LAYOUT ================= */

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;
}

.hero-text {
    flex: 1;
}

.hero-buttons {
    margin-top: 25px;
    display: flex;
    gap: 15px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-image img {
    width: 300px;
    border-radius: 20px;
    border: 3px solid rgba(255,255,255,0.2);
    transition: 0.4s ease;
}

.hero-image img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(56,189,248,0.4);
}

/* ================= BUTTONS ================= */

.btn {
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    background: #38bdf8;
    color: black;
    font-weight: 500;
    transition: 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(56,189,248,0.4);
}

.btn.outline {
    background: transparent;
    border: 1px solid #38bdf8;
    color: #38bdf8;
}

.btn.outline:hover {
    background: #38bdf8;
    color: black;
}

/* ================= ADVANCED CHATBOT ================= */

.chat-toggle {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: #38bdf8;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(56,189,248,0.5);
    z-index: 2000;
}

.chat-container {
    position: fixed;
    bottom: 100px;
    right: 25px;
    width: 340px;
    background: #1e293b;
    border-radius: 15px;
    overflow: hidden;
    display: none;
    flex-direction: column;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    z-index: 2000;
}

.chat-container.active {
    display: flex;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.chat-header {
    background: #38bdf8;
    color: black;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
}

.close-btn {
    cursor: pointer;
}

.chat-messages {
    padding: 15px;
    height: 320px;
    overflow-y: auto;
}

.bot-message {
    background: rgba(56,189,248,0.2);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 14px;
}

.user-message {
    background: #38bdf8;
    color: black;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: right;
    font-size: 14px;
}

.chat-input {
    display: flex;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.chat-input input {
    flex: 1;
    padding: 12px;
    border: none;
    outline: none;
    background: #0f172a;
    color: white;
}

.chat-input button {
    padding: 12px;
    border: none;
    background: #38bdf8;
    cursor: pointer;
    font-weight: bold;
}

.quick-buttons {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.quick-buttons button {
    padding: 5px 10px;
    border: none;
    background: #38bdf8;
    color: black;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
}

/* ================= CONTACT LINKS ================= */

.contact-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;
}

.contact-link:hover {
    color: white;
}

/* ================= FOOTER ================= */

.footer {
    background: rgba(0,0,0,0.6);
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    font-size: 14px;
    border-top: 1px solid rgba(255,255,255,0.1);
}
