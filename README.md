🎨 Task Tracker – Frontend (HTML, CSS, JavaScript)

A clean, simple, and user-friendly Task Tracker Frontend built using pure HTML, CSS, and JavaScript (no frameworks).
This UI allows users to add, view, update, and delete tasks while seamlessly communicating with the Spring Boot backend via REST APIs.
Designed with a responsive layout and smooth interactions for a better user experience.
Perfect for beginners learning REST API integration with vanilla JS.

🚀 Features

➕ Add new tasks

📋 View existing tasks

✏️ Update task status

❌ Delete tasks

🔗 Fully connected with Spring Boot backend

📱 Responsive and lightweight UI

🛠 Tech Used

🌐 HTML5

🎨 CSS3

⚙️ JavaScript (Vanilla)

🔗 Fetch API for backend communication

📁 Project Structure
task-tracker-frontend/
 ├── index.html
 ├── styles.css
 ├── script.js

🔧 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/saalilakshmanan04/task-tracker-frontend.git
cd task-tracker-frontend

2️⃣ Open index.html

Just open this file in your browser:

index.html

3️⃣ Make Sure Backend is Running

Backend Spring Boot server must be running at:

http://localhost:8080

4️⃣ API URL (inside script.js)
const BASE_URL = "http://localhost:8080/api/tasks";

🧠 How It Works

script.js uses fetch() to call backend APIs.

Task list updates dynamically without reloading the page.

CRUD operations reflect instantly from the backend database.

