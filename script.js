function login() {
    const status = document.getElementById("status");
    status.textContent = "Online";
    status.className = "online";
}

function logout() {
    const status = document.getElementById("status");
    status.textContent = "Offline";
    status.className = "offline";
}

function changeCourse() {
    const course = document.getElementById("course");
    course.textContent =
        course.textContent === "Journalism" ? "Marketing" : "Journalism";
}
