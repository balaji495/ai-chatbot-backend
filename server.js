const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5002; // same port as frontend fetch

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// CHATBOT API
app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "Sorry, I didn't understand your question. Please ask college related queries.";

  /* ---------------- GREETINGS ---------------- */
  if (msg.includes("hi") || msg.includes("hello")) {
    reply = "Hello 👋 Welcome to VRPT College AI Chatbot!";
  }
  else if (msg.includes("good morning")) {
    reply = "Good Morning 😊 How can I help you?";
  }

  /* ---------------- COLLEGE INFO ---------------- */
  else if (msg.includes("college name")) {
    reply = "The college name is VRPT College.";
  }
  else if (msg.includes("location") || msg.includes("located")) {
    reply = "VRPT College is located in Tamil Nadu. 📍 https://maps.google.com/?q=VRPT+College";
  }
  else if (msg.includes("established")) {
    reply = "VRPT College was established to provide quality technical education.";
  }
  else if (msg.includes("private") || msg.includes("government")) {
    reply = "VRPT College is a private educational institution.";
  }

  /* ---------------- ADMISSION ---------------- */
  else if (msg.includes("admission") || msg.includes("apply")) {
    reply = "Admissions are open from June to July. Applications can be done online or at the college office.";
  }
  else if (msg.includes("eligibility")) {
    reply = "Eligibility depends on the course. For UG courses, students must pass 12th standard.";
  }
  else if (msg.includes("entrance exam")) {
    reply = "No separate entrance exam is required. Admission is based on academic merit.";
  }
  else if (msg.includes("last date")) {
    reply = "The last date for admission will be announced by the college office.";
  }

  /* ---------------- COURSES ---------------- */
  else if (["course", "courses", "offer"].some(w => msg.includes(w))) {
    reply =
      "We offer Computer Engineering, Mechanical Engineering, EEE, ECE and Automobile Engineering.";
  }
  else if (msg.includes("computer")) {
    reply = "Computer Engineering focuses on programming, software, and networking.";
  }
  else if (msg.includes("mechanical")) {
    reply = "Mechanical Engineering deals with machines, design, and manufacturing.";
  }
  else if (msg.includes("eee")) {
    reply = "EEE focuses on electrical systems, power, and electronics.";
  }
  else if (msg.includes("ece")) {
    reply = "ECE focuses on communication systems and electronic devices.";
  }
  else if (msg.includes("automobile")) {
    reply = "Automobile Engineering focuses on vehicle design, engines, and automotive systems.";
  }

  /* ---------------- FEES ---------------- */
  else if (msg.includes("fees") || msg.includes("tuition")) {
    reply = "Fees vary by course. Please contact the office for detailed fee structure.";
  }
  else if (msg.includes("installment")) {
    reply = "Yes, fee installment options are available.";
  }

  /* ---------------- SCHOLARSHIP ---------------- */
  else if (["scholarship", "scholarships"].some(w => msg.includes(w))) {
    reply =
      "Yes, scholarships are available for merit and government eligible students.";
  }
  else if (msg.includes("financial aid")) {
    reply = "Financial aid support is available for deserving students.";
  }

  /* ---------------- FACILITIES ---------------- */
  else if (msg.includes("hostel")) {
    reply = "Yes, separate hostel facilities are available for boys and girls.";
  }
  else if (msg.includes("library")) {
    reply = "The college has a well-equipped library with digital resources.";
  }
  else if (msg.includes("lab")) {
    reply = "Modern laboratories and computer labs are available.";
  }
  else if (msg.includes("wifi")) {
    reply = "Yes, the campus provides WiFi and internet facilities.";
  }

  /* ---------------- STUDENT LIFE ---------------- */
  else if (msg.includes("sports")) {
    reply = "Sports facilities are available and students can participate in competitions.";
  }
  else if (msg.includes("clubs")) {
    reply = "Technical and cultural clubs are active in the college.";
  }
  else if (msg.includes("events")) {
    reply = "Cultural, technical, and academic events are conducted regularly.";
  }

  /* ---------------- PLACEMENT ---------------- */
  else if (msg.includes("placement")) {
    reply = "The college has a dedicated placement cell.";
  }
  else if (msg.includes("companies")) {
    reply = "Many reputed companies visit the campus for recruitment.";
  }
  else if (["internship", "intern", "training"].some(w => msg.includes(w))) {
    reply =
      "Yes, internship and industrial training guidance is provided during the course.";
  }
  else if (msg.includes("job")) {
    reply = "Job-oriented training and placement assistance are provided.";
  }
  // ---------- STUDENT UNION ----------
  else if (["student union", "student council"].some(w => msg.includes(w))) {
    reply =
      "Yes, the college has an active student union that organizes academic and cultural events.";
  }

  res.json({ reply });
});

// SERVER START
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
