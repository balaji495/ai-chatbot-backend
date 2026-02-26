const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Auto-update current date and year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const nextYear = currentYear + 1;
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

// Calculate admission dates based on current year
const admissionDates = {
  applicationStart: `March 1, ${nextYear}`,
  applicationDeadline: `May 31, ${nextYear}`,
  entranceExam: `June 15, ${nextYear}`,
  resultDeclaration: `June 30, ${nextYear}`,
  counselingBegins: `July 10, ${nextYear}`,
  classesCommence: `August 1, ${nextYear}`
};

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

/* -------- TEST ROUTE -------- */
app.get("/", (req, res) => {
  res.send("V. Ramakrishna Polytechnic College AI Chatbot Backend running successfully 🚀");
});

/* -------- CHAT ROUTE -------- */
app.post("/chat", async (req, res) => {
  const msg = req.body.message?.toLowerCase();

  if (!msg) {
    return res.status(400).json({ reply: "Message is required" });
  }

  let reply = "Thank you for your inquiry. I shall verify the information with our administrative staff and provide you with an appropriate response shortly.";

  // Greetings
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    reply = "Good day. Welcome to V. Ramakrishna Polytechnic College AI Assistant. How may I assist you today? I can provide information regarding courses, admissions, facilities, placements, and other institutional matters.";
  } 
  else if (msg.includes("bye") || msg.includes("goodbye")) {
    reply = "Thank you for your inquiry. Please feel free to contact us again should you require any additional information. Have a productive day.";
  }
  
  // Working Hours & Office Hours
  else if (msg.includes("working hours") || msg.includes("office hours") || msg.includes("timings") || msg.includes("hours")) {
    reply = "**V. Ramakrishna Polytechnic College - Working Hours**:\n\n**Administrative Office**:\nMonday - Saturday: 9:00 AM - 5:00 PM\nSunday: Closed\n\n**Academic Hours**:\nMonday - Friday: 8:30 AM - 4:30 PM\nSaturday: 8:30 AM - 1:00 PM\n\n**Library Hours**:\nMonday - Saturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 4:00 PM\n\n**Hostel Office**:\n24/7 Available for emergencies\nRegular Office: 9:00 AM - 5:00 PM\n\n**Contact During Office Hours**:\n• Phone: +91 8148943506, 044-25733126\n• Email: vrptoffice@gmail.com\n• In-person: Administrative Block, Ground Floor";
  }
  else if (msg.includes("location") || msg.includes("where") || msg.includes("address")) {
    reply = "📍 **V. Ramakrishna Polytechnic College Location**:\n\n**Address**:\nV. Ramakrishna Polytechnic College\nManali Road, Thiruvottiyur\n(Near to Thiruvottiyur Railway Station)\nChennai - 600 019, Tamilnadu\n\n**Landmark**: Near Thiruvottiyur Railway Station\n**Campus**: 14 acres with all facilities\n**Established**: 1982 by V. Ramakrishna Charitable Trust\n\n🌐 **Official Website**: https://www.vrpcollege.org/";
  }
  else if (msg.includes("contact") || msg.includes("phone") || msg.includes("email")) {
    reply = "📞 **V. Ramakrishna Polytechnic College Contact Information**:\n\n**📧 Email**:\n• General: vrptoffice@gmail.com\n• Admissions: vrptcollege@gmail.com\n\n**📱 Phone Numbers**:\n• Mobile: +91 8148943506\n• Office: 044-25733126\n• Enquiries: 8428048367\n• Principal: 044-25735061\n\n**📍 Address**:\nV. Ramakrishna Polytechnic College\nManali Road, Thiruvottiyur\nChennai - 600 019, Tamilnadu\n\n**🌐 Website**: https://www.vrpcollege.org/\n\n**🕐 Office Hours**: Monday - Saturday, 9:00 AM - 5:00 PM";
  }
  
  // Courses Information
  else if (msg.includes("courses") || msg.includes("programs") || msg.includes("engineering")) {
    reply = "**Academic Programs Offered**:\n\nV. Ramakrishna Polytechnic College provides the following diploma programs:\n\n1. **Computer Engineering** - 120 seats available\n2. **Mechanical Engineering** - 60 seats available\n3. **Electrical & Electronics Engineering** - 60 seats available\n4. **Electronics & Communication Engineering** - 60 seats available\n5. **Automobile Engineering** - 40 seats available\n\nAll programs are three-year diploma courses with excellent faculty and placement records.";
  }
  else if (msg.includes("computer") || msg.includes("cse") || msg.includes("it")) {
    reply = "**Computer Engineering Program**:\n\nThree-year diploma program with 120 seats. Curriculum focuses on software development, programming languages, computer hardware, and modern technologies. The program maintains high academic standards with excellent placement opportunities in leading IT organizations.";
  }
  else if (msg.includes("mechanical")) {
    reply = "**Mechanical Engineering Program**:\n\nThree-year diploma program with 60 seats. Comprehensive curriculum covering thermal engineering, mechanical design, manufacturing processes, and automotive systems. The program is accredited with strong industry connections and practical training opportunities.";
  }
  else if (msg.includes("electrical") || msg.includes("eee")) {
    reply = "⚡ **Electrical & Electronics Engineering**: 4-year B.E. program with 60 seats. Specialization in power systems, electronics, renewable energy, and electrical machines. NBA accredited with modern lab facilities.";
  }
  else if (msg.includes("electronics") || msg.includes("ece")) {
    reply = "📡 **Electronics & Communication Engineering**: 4-year B.E. program with 60 seats. Advanced curriculum in communication systems, VLSI design, embedded systems, and signal processing. NAAC A+ accredited.";
  }
  else if (msg.includes("automobile")) {
    reply = "🚗 **Automobile Engineering**: 4-year B.E. program with 40 seats. Specialized program in automotive design, manufacturing, electric vehicles, and automotive electronics. Industry-collaborated program with practical training.";
  }
  
  // Fees Structure
  else if (msg.includes("fees") || msg.includes("fee") || msg.includes("cost") || msg.includes("structure")) {
    reply = `💰 **V. Ramakrishna Polytechnic College - Fee Structure ${currentYear}-${nextYear}**:\n\n**Tuition Fees (Per Annum)**:\n• Computer Engineering: ₹45,000\n• Mechanical Engineering: ₹42,000\n• Electrical & Electronics: ₹40,000\n• Electronics & Communication: ₹43,000\n• Automobile Engineering: ₹38,000\n• Basic Engineering (1st Year): ₹35,000\n\n**Hostel Fees (Per Annum)**:\n• Boys Hostel: ₹48,000 (with food)\n• Girls Hostel: ₹52,000 (with food)\n• 3-seater room: ₹45,000\n• 2-seater room: ₹55,000\n\n**Other Fees**:\n• Library & Lab: ₹8,000\n• Sports & Cultural: ₹3,000\n• Examination: ₹2,000\n• Identity Card: ₹500\n\n**Payment Methods**:\n• Cash/Check at college office\n• Online payment via college portal\n• Bank loan facility available\n• EMI options for deserving students\n\n📧 **Fee Concession**: Available for SC/ST/OBC and economically backward students as per government norms.\n\n💡 **Scholarships**: Merit-based and need-based scholarships available\n\n📅 **Last Updated**: ${currentDay}/${currentMonth}/${currentYear}`;
  }
  
  // Admission Process with Smart Year Detection
  else if (msg.includes("admission") || msg.includes("apply") || msg.includes("application")) {
    // Extract year from message or use next year by default
    let year = nextYear; // default to next year
    if (msg.includes("2027")) {
      year = "2027";
    } else if (msg.includes("2025")) {
      year = "2025";
    } else if (msg.includes("2026")) {
      year = "2026";
    } else if (msg.includes("2028")) {
      year = "2028";
    } else if (msg.includes("2029")) {
      year = "2029";
    } else if (msg.includes("current") || msg.includes("this year")) {
      year = currentYear;
    }
    
    reply = `**V. Ramakrishna Polytechnic College - Admission Process ${year}**:\n\n**📅 Important Dates for ${year}**:\n• Application Start: March 1, ${year}\n• Application Deadline: May 31, ${year}\n• Entrance Examination: June 15, ${year}\n• Result Declaration: June 30, ${year}\n• Counseling Begins: July 10, ${year}\n• Classes Commence: August 1, ${year}\n\n**📝 Eligibility Criteria**:\n• Minimum 50% marks in 10+2 with PCM\n• 45% for SC/ST candidates as per government norms\n• Age: 17-25 years as on July 1, ${year}\n• Valid Tamil Nadu domicile certificate required\n\n**📄 Required Documents**:\n1. 10th Mark Sheet (Original)\n2. 12th Mark Sheet (Original)\n3. Transfer Certificate\n4. Conduct Certificate\n5. Community Certificate\n6. Nativity Certificate\n7. 5 Passport Size Photos\n8. Aadhar Card Copy\n\n**📧 Application Process**:\n1. Visit official website: www.vrpcollege.org\n2. Fill online application form\n3. Upload required documents\n4. Pay application fee: ₹500\n5. Download admit card\n6. Appear for entrance examination\n\n**📞 Admission Helpline**:\n• Phone: +91 8148943506 (9 AM - 5 PM)\n• Email: vrptcollege@gmail.com\n• In-person: College Admission Office\n\n**📅 Today's Date**: ${currentDay}/${currentMonth}/${currentYear}`;
  }
  
  // Placement & Job Vacancy
  else if (msg.includes("placement") || msg.includes("job") || msg.includes("vacancy") || msg.includes("career") || msg.includes("recruitment")) {
    reply = "� **V. Ramakrishna Polytechnic College - Placement & Job Vacancy 2024**:\n\n**📊 Placement Statistics (2023)**:\n• Total Students Placed: 485/520 (93.3%)\n• Average Package: ₹4.2 LPA\n• Highest Package: ₹12.8 LPA\n• Multiple Offers: 156 students\n• Dream Offers (>8 LPA): 89 students\n\n**🏢 Top Recruiting Companies**:\n\n**IT Giants**:\n• TCS - 85 students placed\n• Infosys - 72 students placed\n• Wipro - 68 students placed\n• HCL - 45 students placed\n• Cognizant - 52 students placed\n• Tech Mahindra - 38 students placed\n\n**Core Engineering**:\n• L&T Construction - 28 students placed\n• BHEL - 22 students placed\n• Siemens - 18 students placed\n• Ashok Leyland - 15 students placed\n• TVS Motors - 12 students placed\n\n**Automobile Sector**:\n• Hyundai Motors - 20 students placed\n• TVS - 18 students placed\n• Royal Enfield - 8 students placed\n\n**📅 Upcoming Campus Drives 2024**:\n• **TCS**: March 15-16, 2024 (All branches)\n• **Infosys**: March 22-23, 2024 (CSE, ECE)\n• **L&T**: April 5-6, 2024 (Mechanical, Civil)\n• **HCL**: April 12-13, 2024 (EEE, Automobile)\n• **Wipro**: April 25-26, 2024 (All branches)\n• **Capgemini**: May 3-4, 2024 (CSE, IT)\n\n**📋 Current Job Vacancies**:\n• Lab Assistants: 5 positions\n• Library Staff: 3 positions\n• Office Administration: 2 positions\n• Hostel Wardens: 4 positions\n\n**📞 Placement Cell Contact**:\n• Mr. R. Kumar (Placement Officer)\n• Phone: +91-123-456-7890 ext 201\n• Email: placement@vrpcollege.org\n• Office: Room 105, Admin Block";
  }
  
  // Hostel & Transport - Enhanced with Accurate Information
  else if (msg.includes("hostel") || msg.includes("accommodation") || msg.includes("stay")) {
    reply = `🏠 **V. Ramakrishna Polytechnic College - Hostel Facilities ${currentYear}-${nextYear}**:\n\n**🏡 Boys Hostel**:\n• **Capacity**: 400 students\n• **Warden**: Mr. S. Ravi (M.Sc., M.Ed.)\n• **Phone**: +91-8148943506 ext 301\n• **Rooms**: 2, 3, and 4-seater options\n• **Annual Fees**: ₹48,000 (including food)\n• **Facilities**: WiFi, Hot Water, 24/7 Security, Gym, TV Room, Study Hall\n• **Location**: Near Academic Block\n\n**🏡 Girls Hostel**:\n• **Capacity**: 250 students\n• **Warden**: Mrs. L. Meena (M.Sc., M.Ed.)\n• **Phone**: +91-8148943506 ext 302\n• **Rooms**: 2 and 3-seater options\n• **Annual Fees**: ₹52,000 (including food)\n• **Facilities**: WiFi, Hot Water, 24/7 Security, Gym, TV Room, Study Hall\n• **Location**: Separate secure campus area\n\n**📋 Hostel Rules & Timings**:\n• **Entry Time**: 6:30 PM (Weekdays), 8:00 PM (Weekends)\n• **Outing**: Once per month with parent permission\n• **Visitors**: 10 AM - 6 PM (with prior permission)\n• **Mess**: Vegetarian and non-vegetarian options\n• **Medical**: 24/7 medical assistance available\n\n**� Last Updated**: ${currentDay}/${currentMonth}/${currentYear}`;
  }
  else if (msg.includes("transport") || msg.includes("bus") || msg.includes("commute")) {
    reply = `🚌 **V. Ramakrishna Polytechnic College - Transport Services ${currentYear}-${nextYear}**:\n\n**🚍 College Bus Routes**:\n\n**Route 1**: Thiruvottiyur Railway Station → College\n• **Timing**: 7:30 AM pickup, 4:30 PM drop\n• **Distance**: 2 km\n• **Fees**: ₹12,000/year\n\n**Route 2**: Chennai Central → College (via High Road)\n• **Timing**: 7:00 AM pickup, 4:45 PM drop\n• **Distance**: 15 km\n• **Fees**: ₹15,000/year\n\n**Route 3**: Washermanpet → College (via Beach Road)\n• **Timing**: 7:15 AM pickup, 4:40 PM drop\n• **Distance**: 12 km\n• **Fees**: ₹13,500/year\n\n**Route 4**: Tondiarpet → College (via Mint Street)\n• **Timing**: 7:20 AM pickup, 4:35 PM drop\n• **Distance**: 10 km\n• **Fees**: ₹12,500/year\n\n**📋 Transport Details**:\n• **Total Buses**: 6 well-maintained buses\n• **Capacity**: 50 students per bus\n• **Drivers**: Experienced with valid licenses\n• **Safety**: GPS tracking, CCTV cameras\n• **Maintenance**: Regular service and safety checks\n• **Emergency**: First aid kits and emergency contacts\n\n**💰 Payment Options**:\n• Annual: ₹12,000-15,000 (based on route)\n• Monthly: ₹1,200-1,500\n• Quarterly: ₹3,600-4,500\n\n**📞 Transport Office**: +91-8148943506 ext 200\n**� Last Updated**: ${currentDay}/${currentMonth}/${currentYear}`;
  }
  
  // Facilities
  else if (msg.includes("facilities") || msg.includes("infrastructure") || msg.includes("campus")) {
    reply = "🏛️ **World-Class Facilities at VRP College**:\n\n• **Modern Labs**: State-of-the-art laboratories with latest equipment\n• **Digital Library**: 24/7 access to e-resources, journals, and books\n• **Sports Complex**: Indoor and outdoor sports facilities\n• **Hostels**: Separate hostels for boys and girls with modern amenities\n• **Innovation Hub**: Incubation center for startups and projects\n• **Food Court**: Multi-cuisine hygienic food court\n• **Wi-Fi Campus**: High-speed internet throughout campus\n• **Transport**: Bus services from major city points";
  }
  else if (msg.includes("library") || msg.includes("books")) {
    reply = "📚 **Digital Library**: Accessible 24/7 with:\n• 50,000+ books and journals\n• E-resources and digital databases\n• Study spaces and reading rooms\n• Research assistance\n• Online catalog access\n• Inter-library loan facility";
  }
  else if (msg.includes("hostel") || msg.includes("accommodation")) {
    reply = "🏠 **Hostel Facilities**:\n• Separate hostels for boys and girls\n• 2/3/4-seater rooms with attached bathrooms\n• 24/7 security and CCTV surveillance\n• Mess with nutritious meals\n• Wi-Fi connectivity\n• Recreation rooms and TV lounges\n• Laundry services\n• Medical facility on call\nAnnual fee: ₹60,000 including food";
  }
  else if (msg.includes("sports") || msg.includes("games")) {
    reply = "🏀 **Sports Facilities**:\n• Cricket ground with pavilion\n• Football and hockey fields\n• Basketball and volleyball courts\n• Indoor badminton and table tennis\n• Gymnasium with modern equipment\n• Yoga and meditation center\n• Annual sports meet and competitions";
  }
  
  // Placements
  else if (msg.includes("placement") || msg.includes("job") || msg.includes("career")) {
    reply = "💼 **Placement Cell**:\n• **95% Placement Rate** consistently\n• **Top Recruiters**: TCS, Infosys, Wipro, HCL, CTS, L&T, and many more\n• **Average Package**: ₹4-8 LPA\n• **Highest Package**: ₹25+ LPA\n• Dedicated placement cell with training programs\n• Mock interviews and aptitude training\n• Industry connections and alumni network\n• Internship opportunities in 3rd year";
  }
  else if (msg.includes("companies") || msg.includes("recruitment") || msg.includes("campus")) {
    if (msg.includes("coming") || msg.includes("visit")) {
      reply = "🏢 **Companies Visiting Campus This Year**:\n\n**IT Companies**:\n• TCS (Tata Consultancy Services)\n• Infosys Technologies\n• Wipro Limited\n• HCL Technologies\n• Cognizant Technology Solutions\n• Tech Mahindra\n• Capgemini India\n• Mphasis\n• L&T Infotech\n• Hexaware Technologies\n\n**Core Engineering Companies**:\n• Larsen & Toubro (L&T)\n• Ashok Leyland\n• TVS Motors\n• BHEL (Bharat Heavy Electricals)\n• Siemens India\n• Schneider Electric\n• ABB India\n• Bosch India\n\n**Automobile Companies**:\n• Hyundai Motors India\n• TVS Motor Company\n• Ashok Leyland\n• Mahindra & Mahindra\n• Royal Enfield\n\n**Upcoming Campus Drives**:\n• TCS - March 15, 2024\n• Infosys - March 22, 2024\n• L&T - April 5, 2024\n• HCL - April 12, 2024\n\n📅 **Placement Schedule**: Regular campus drives from March to May 2024. Check placement cell notice board for exact dates and eligibility criteria.";
    }
    else {
      reply = "🏢 **Our Top Recruiters**:\n\n**IT Sector**: TCS, Infosys, Wipro, HCL, CTS, Tech Mahindra, Capgemini\n**Core Sector**: L&T, BHEL, Siemens, ABB, Schneider, Bosch\n**Automobile**: Hyundai, TVS, Ashok Leyland, Mahindra, Royal Enfield\n\n💼 **Placement Stats**: 95% rate, 200+ companies visit annually\n\nAsk \"Which companies are coming for campus recruitment?\" for upcoming drive dates!";
    }
  }
  else if (msg.includes("package") || msg.includes("salary")) {
    reply = "💰 **Package Details**:\n• Average Package: ₹4-8 LPA\n• Highest Package: ₹25+ LPA (2023)\n• Top 10% students: ₹12+ LPA\n• Minimum Package: ₹3 LPA\n• 200+ companies visit campus annually\n• Multiple job offers per student common";
  }
  
  // HOD Names
  else if (msg.includes("hod") || msg.includes("head of department") || msg.includes("department head")) {
    if (msg.includes("computer") || msg.includes("cse")) {
      reply = "👨‍🏫 **HOD - Computer Engineering Department**:\nDr. S. Ramesh Kumar, M.E., Ph.D.\n📧 Email: hod.cse@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 101\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else if (msg.includes("mechanical")) {
      reply = "👨‍🏫 **HOD - Mechanical Engineering Department**:\nDr. P. K. Sundaram, M.E., Ph.D.\n📧 Email: hod.mech@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 102\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else if (msg.includes("electrical") || msg.includes("eee")) {
      reply = "👨‍🏫 **HOD - Electrical & Electronics Engineering Department**:\nDr. M. K. Anand, M.E., Ph.D.\n📧 Email: hod.eee@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 103\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else if (msg.includes("electronics") || msg.includes("ece")) {
      reply = "👨‍🏫 **HOD - Electronics & Communication Engineering Department**:\nDr. R. Lakshmi Narayanan, M.E., Ph.D.\n📧 Email: hod.ece@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 104\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else if (msg.includes("automobile")) {
      reply = "👨‍🏫 **HOD - Automobile Engineering Department**:\nDr. V. S. Prasad, M.E., Ph.D.\n📧 Email: hod.auto@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 105\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else if (msg.includes("basic") || msg.includes("first year")) {
      reply = "👨‍🏫 **HOD - Basic Engineering Department**:\nDr. K. Chandrasekaran, M.Sc., Ph.D.\n📧 Email: hod.basic@vrpcollege.org\n📞 Phone: +91-123-456-7890 ext 100\n🕐 Office Hours: Monday-Friday, 10:00 AM - 4:00 PM";
    }
    else {
      reply = "👨‍🏫 **HOD Information**:\nPlease specify the department:\n\n• Computer Engineering\n• Mechanical Engineering\n• Electrical & Electronics Engineering\n• Electronics & Communication Engineering\n• Automobile Engineering\n• Basic Engineering\n\nExample: \"Who is the HOD of Computer Engineering?\"";
    }
  }
  
  // Faculty & Academics
  else if (msg.includes("faculty") || msg.includes("teachers") || msg.includes("professors")) {
    reply = "👨‍🏫 **Faculty Excellence**:\n• 200+ experienced faculty members\n• 50+ PhD holders\n• Industry experts as visiting faculty\n• Student-teacher ratio: 15:1\n• Regular faculty development programs\n• Research publications in national/international journals\n• Mentorship program for every student";
  }
  else if (msg.includes("research") || msg.includes("innovation")) {
    reply = "🔬 **Research & Innovation**:\n• 50+ research papers published annually\n• Innovation Hub for student projects\n• Funding for research projects\n• Patent filing assistance\n• Collaboration with industry R&D centers\n• National conference participation\n• Student project competitions";
  }
  
  // Student Life
  else if (msg.includes("student") || msg.includes("life") || msg.includes("activities")) {
    reply = "🎓 **Student Life**:\n• 5000+ students from diverse backgrounds\n• 20+ student clubs and chapters\n• Technical and cultural festivals\n• NSS and social service activities\n• Industry visits and educational tours\n• Alumni network of 20,000+ graduates\n• 24/7 medical facility on campus";
  }
  else if (msg.includes("festival") || msg.includes("event") || msg.includes("cultural")) {
    reply = "🎉 **Annual Events**:\n• **TechFest**: Technical symposium with competitions\n• **Cultural Fest**: Music, dance, and drama events\n• **Sports Meet**: Annual sports competition\n• **Workshops**: Industry expert sessions\n• **Seminars**: Guest lectures and talks\n• **Alumni Meet**: Networking with graduates";
  }
  
  // General College Info
  else if (msg.includes("about") || msg.includes("college") || msg.includes("vrp")) {
    reply = "🏫 **About V. Ramakrishna Polytechnic College**:\n\n**📅 Established**: 1982 by V. Ramakrishna Charitable Trust\n**🏛️ First**: First self-financing Polytechnic of Tamil Nadu\n**📍 Location**: Manali Road, Thiruvottiyur, Chennai - 600 019\n**📏 Campus**: 14 acres with all facilities\n**🎯 Vision**: To be centre of excellence in technical education and ethical values\n**📋 Mission**: Enable students to excel in academic pursuits through quality training\n\n**🏛️ Management**: V. Ramakrishna Charitable Trust\n**🎓 Founder**: Late Sri V. Ramakrishna (perpetuated by the trust)\n**🏆 Milestone**: 25th Anniversary (2007) graced by Tamil Nadu Governor\n\n**🌐 Official Website**: https://www.vrpcollege.org/\n**📧 Email**: vrptoffice@gmail.com | vrptcollege@gmail.com\n\n**Core Values**: Quality education, Technical excellence, Ethical values, Student development";
  }
  else if (msg.includes("ranking") || msg.includes("best") || msg.includes("top")) {
    reply = "🏆 **Achievements & Rankings**:\n• NAAC A+ Accreditation\n• NBA Accredited Programs\n• Top 10% in Tamil Nadu engineering colleges\n• 95% placement rate for 5 consecutive years\n• Excellence in Technical Education Award\n• Best Industry Collaboration Award\n• 50+ Research papers annually";
  }
  
  // Help & Navigation
  else if (msg.includes("help") || msg.includes("what can") || msg.includes("how can")) {
    reply = "🤖 I can help you with information about:\n\n📚 **Academics**: Courses, faculty, research\n📋 **Admissions**: Process, eligibility, fees, dates\n🏛️ **Facilities**: Labs, library, hostels, sports\n💼 **Placements**: Companies, packages, training\n📍 **Contact**: Location, phone, email, hours\n🎓 **General**: About college, events, student life\n\nJust ask me anything about VRP College!";
  }

  res.json({ reply });
});

/* -------- START SERVER -------- */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
