let username = "";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("setUsernameBtn").addEventListener("click", setUsername);
    document.getElementById("sendBtn").addEventListener("click", sendMessage);
    document.getElementById("clearChatBtn").addEventListener("click", clearChat);
});

function handleUsername(event) {
    if (event.key === "Enter") {
        setUsername();
    }
}

function setUsername() {
    let nameInput = document.getElementById("username");
    let sendButton = document.getElementById("sendBtn");
    let messageInput = document.getElementById("message");

    if (nameInput.value.trim() !== "") {
        username = nameInput.value.trim();
        nameInput.disabled = true;
        sendButton.disabled = false;
        messageInput.disabled = false;
        alert("Username set to: " + username);
    }
}

function sendMessage() {
    let messageInput = document.getElementById("message");
    let chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() !== "") {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.innerHTML = `<strong>${username}:</strong> ${messageInput.value} 
        <span class="timestamp">${getTime()}</span>`;

        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => botReply(chatBox), 1000); // Simulated bot response

        messageInput.value = "";
    }
}

function botReply(chatBox) {
    let botMessages = ["Hello!", "How are you?", "Nice to chat with you!", "Hope you're doing well!", "Let's talk!"];
    let botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];

    let botDiv = document.createElement("div");
    botDiv.classList.add("message", "received");
    botDiv.innerHTML = `<strong>Bot:</strong> ${botMessage} 
    <span class="timestamp">${getTime()}</span>`;

    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getTime() {
    let now = new Date();
    return now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
}

function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}