
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.textContent = "Please fill in every field.";
    return;
  }

  status.textContent =
    `Thanks, ${name}! Your message is ready to be submitted.`;

  event.target.reset();
}

// Connect this function to a form using:
// <form onsubmit="sendMessage(event)">
//
// This is a front-end demonstration only.
// Connect a server or form service to deliver messages.
