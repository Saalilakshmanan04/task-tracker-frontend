// ✅ Load tasks when page loads
window.onload = fetchTasks;

// 📌 Get all tasks
async function fetchTasks() {
    try {
        const response = await fetch("http://localhost:8080/api/tasks");
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// 📌 Display tasks in UI
function displayTasks(tasks) {
    const list = document.getElementById("taskList");
    list.innerHTML = ""; // clear list

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <span>${task.title}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// 📌 Add new task
async function addTask() {
    const title = document.getElementById("taskInput").value.trim();

    if (!title) {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        title: title,
        description: "No description provided",
        completed: false
    };

    try {
        const response = await fetch("http://localhost:8080/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error("Server error: " + response.status);
        }

        document.getElementById("taskInput").value = "";
        fetchTasks(); // refresh list

    } catch (error) {
        console.error("Error adding task:", error);
        alert("Failed to add task: " + error.message);
    }
}

// 📌 Delete task
async function deleteTask(id) {
    try {
        await fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: "DELETE"
        });
        fetchTasks(); // refresh list
    } catch (error) {
        console.error("Error deleting:", error);
    }
}
