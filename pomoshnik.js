<!DOCTYPE html>
<html lang="ru">
<head>
<title>Виртуальный помощник</title>
<style>
#assistant {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 300px;
}

.chat-container {
  border: 1px solid #888;
  padding: 10px;
  margin-bottom: 10px;
  height: 300px;
  overflow: auto;
}

.message {
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>
</head>
<body>

<div id="assistant">
  <div class="chat-container" id="chat"></div>
  <input type="text" id="userInput" placeholder="Задайте вопрос...">//тут должен быть вопросительный знак !!!Замечание!!!
  <button id="sendBtn">Отправить</button>
</div>

<script>
// Вспомогательная функция для добавления сообщений в чат
function addToChat(author, text) {
  const chat = document.getElementById('chat');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = author + ": " + text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

document.getElementById('sendBtn').addEventListener('click', function() {
  const userInputField = document.getElementById('userInput');
  const userText = userInputField.value.trim();
  const assistantAnswer = getAssistantAnswer(userText);
  
  // Do not proceed if the input is empty
  if (userText === '') return;
  
  // Add user's input to chat
  addToChat('Вы', userText);
  
  // Add assistant's response to chat
  addToChat('Ассистент', assistantAnswer);
  
  // Clear input field after sending message
  userInputField.value = '';
});

// Получение ответа ассистента
function getAssistantAnswer(input) {
  if (input.toLowerCase().includes("привет")) {
    return "Привет! Как я могу помочь вам?";
  } else if (input.toLowerCase().includes("как дела")) {
    return "У меня всё отлично, спасибо. Чем еще могу быть полезен?";
  } else {
    return "Я не уверен, что понимаю вопрос. Можете уточнить?";
  }
}

// Отправка сообщения по enter
document.getElementById('userInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('sendBtn').click();
  }
});
</script>

</body>
</html>
