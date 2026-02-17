const responses = [
    {
        keywords: ["hello", "hi", "hey", "hii", "good morning", "good evening", "good afternoon"],
        reply: "Hello 👋 Welcome to Rushit's Portfolio! How can I help you today?",
        section: null
      },
      
    {
      keywords: ["skill", "technology", "tech stack"],
      reply: "Rushit knows HTML, CSS, JavaScript, Python, Git and Web Development fundamentals.",
      section: "skills"
    },
    {
      keywords: ["education", "study", "college", "degree"],
      reply: "Rushit is pursuing BCA at Silver Oak University (2023–2026). Currently in final year.",
      section: "education"
    },
    {
      keywords: ["contact", "phone", "email", "reach"],
      reply: "You can contact Rushit at rushit28gohil@gmail.com or +91 97264 89466.",
      section: "contact"
    },
    {
      keywords: ["resume", "cv"],
      reply: "You can download Rushit's resume from the Home section.",
      section: "home"
    },
    {
      keywords: ["location", "address", "where"],
      reply: "Rushit is located in Navrangpura, Ahmedabad, Gujarat.",
      section: "contact"
    }
  ];
  
  function toggleChat() {
    const chat = document.getElementById("chatContainer");
    chat.classList.toggle("active");
  }
  
  function handleKey(e) {
    if (e.key === "Enter") sendMessage();
  }
  
  function quickAsk(text) {
    document.getElementById("userInput").value = text;
    sendMessage();
  }
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim().toLowerCase();
    if (!message) return;
  
    addMessage(message, "user");
    input.value = "";
  
    setTimeout(() => {
      let found = false;
  
      for (let item of responses) {
        for (let word of item.keywords) {
          if (message.includes(word)) {
            botReply(item.reply, item.section);
            found = true;
            return;
          }
        }
      }
  
      if (!found) {
        botReply("Sorry, I didn't understand. Try asking about skills, education, contact, resume or location.");
      }
    }, 600);
  }
  
  function addMessage(text, type) {
    const chat = document.getElementById("chatMessages");
    const div = document.createElement("div");
    div.className = type === "user" ? "user-message" : "bot-message";
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }
  
  function botReply(text, sectionId = null) {
    const chat = document.getElementById("chatMessages");
  
    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.innerText = "Typing...";
    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;
  
    setTimeout(() => {
      typing.remove();
      addMessage(text, "bot");
  
      if (sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  }
  