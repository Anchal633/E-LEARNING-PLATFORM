
document.getElementById('toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function filterCourses(level) {
  const courses = document.querySelectorAll('.course-card');
  courses.forEach(card => {
    if (level === 'all' || card.classList.contains(level)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Logged in successfully (mock)!');
});

function logout() {
  alert("You have been logged out.");
  window.location.href = "index.html";
}

const quizData = {
  html: {
    title: "HTML Basics",
    video: "assets/html_intro.mp4",
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  css: {
    title: "CSS Fundamentals",
    video: "assets/css_intro.mp4",
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Creative Style System", "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  js: {
    title: "JavaScript Essentials",
    video: "assets/js_intro.mp4",
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google"],
    answer: "Netscape"
  }
};

if (window.location.pathname.includes("course-detail.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get("course");
  const data = quizData[course];

  if (data) {
    document.getElementById("course-title").textContent = data.title;
    document.getElementById("course-video").src = data.video;
    document.getElementById("quiz-question").textContent = data.question;

    const optionsDiv = document.getElementById("quiz-options");
    data.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === data.answer) {
          alert("Correct!");
        } else {
          alert("Incorrect. Try again!");
        }
      };
      btn.style.margin = "5px";
      optionsDiv.appendChild(btn);
    });
  }
}
