// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return { hours, minutes, seconds };
};

const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
};

const displayClock = () => {
  const options = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: CONFIG.twelveHourFormat,
    timeZone: CONFIG.timeZone,
  };
  const { hours, minutes, seconds } = formatTime(new Date());
  const formattedDate = formatDate(new Date());
  
  document.getElementById(
    "time"
  ).innerHTML = `<div class="flex items-center justify-center gap-2 md:gap-4">
            <div class="flex flex-col items-center">
              <div class="font-mono text-6xl md:text-7xl lg:text-[10rem] font-bold text-primary leading-none tracking-tighter">
                ${hours}
              </div>
              <div class="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">Horas</div>
            </div>

            <div class="font-mono text-6xl md:text-7xl lg:text-[10rem] font-bold text-primary leading-none">:</div>

            <div class="flex flex-col items-center">
              <div class="font-mono text-6xl md:text-7xl lg:text-[10rem] font-bold text-primary leading-none tracking-tighter">
                ${minutes}
              </div>
              <div class="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">Minutos</div>
            </div>

            <div class="font-mono text-6xl md:text-7xl lg:text-[10rem] font-bold text-primary leading-none">:</div>

            <div class="flex flex-col items-center">
              <div class="font-mono text-6xl md:text-7xl lg:text-[10rem] font-bold text-secondary-foreground leading-none tracking-tighter">
                ${seconds}
              </div>
              <div class="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">Segundos</div>
            </div>
          </div>
          `;
  document.getElementById(
    "date"
  ).innerHTML = `<div class="text-center mt-4">
            <p class="text-lg md:text-xl text-muted-foreground uppercase tracking-wide">${formattedDate}</p>
          </div>`;

  setInterval(displayClock, 1000);
};

clearInterval();
window.addEventListener("DOMContentLoaded", displayClock);
