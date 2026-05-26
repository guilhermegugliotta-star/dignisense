const fillBar = document.getElementById("fill-bar");
const humidityValue = document.getElementById("humidity-value");
const statusText = document.querySelector(".status-card h2");

let humidity = 22;
let increasing = true;

function updateHumidity(){

  if(increasing){
    humidity += 2;
  }else{
    humidity -= 2;
  }

  if(humidity >= 82){
    increasing = false;
  }

  if(humidity <= 22){
    increasing = true;
  }

  fillBar.style.width = humidity + "%";

  humidityValue.innerText = humidity + "%";

  if(humidity < 40){

    fillBar.style.background =
    "linear-gradient(to right,#22c55e,#4ade80)";

    statusText.innerText = "Fralda Seca";

    fillBar.classList.remove("alert");

  }

  else if(humidity < 70){

    fillBar.style.background =
    "linear-gradient(to right,#eab308,#facc15)";

    statusText.innerText = "Umidade Moderada";

    fillBar.classList.remove("alert");

  }

  else{

    fillBar.style.background =
    "linear-gradient(to right,#ef4444,#f87171)";

    statusText.innerText = "Troca Necessária";

    fillBar.classList.add("alert");

  }

}

setInterval(updateHumidity,1000);
const notification = document.getElementById("iphone-notification");
const notificationText =
document.getElementById("notification-text");

const notifications = [

  "✅ Sistema conectado com sucesso",

  "💧 Umidade detectada em tempo real",

  "⚠️ Troca recomendada para maior conforto",

  "📶 Sensor sincronizado com o aplicativo",

  "🩺 Monitoramento ativo e estável",

  "👶 Conforto ideal detectado",

  "📊 Dados enviados para análise",

  "🔋 Sensor funcionando normalmente"

];

function showNotification(){

  const randomText =
  notifications[
    Math.floor(Math.random() * notifications.length)
  ];

  notificationText.innerText = randomText;

  notification.classList.add("notification-show");

  setTimeout(() => {

    notification.classList.remove("notification-show");

  }, 3500);

}

setInterval(showNotification,5000);

showNotification();