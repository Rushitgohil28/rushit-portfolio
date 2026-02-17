//HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rushit Gohil | Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

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

<section id="home" class="section hero">
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

<section id="about" class="section">
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

<section id="education" class="section">
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

<section id="skills" class="section">
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

<section id="contact" class="section">
    <div class="container">
        <h2>Contact Information</h2>

        <div class="grid">
            <div class="glass card">
                <h3>Phone</h3>
                <p>+91 97264 89466</p>
            </div>

            <div class="glass card">
                <h3>Email</h3>
                <p>rushit28gohil@gmail.com</p>
            </div>

            <div class="glass card">
                <h3>Location</h3>
                <p>Navrangpura, Ahmedabad – 380009</p>
            </div>
        </div>

        <h2 style="margin-top:70px;">Languages</h2>

        <div class="grid">
            <div class="glass card">English</div>
            <div class="glass card">Hindi</div>
            <div class="glass card">Gujarati</div>
        </div>
    </div>
</section>

</body>
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
