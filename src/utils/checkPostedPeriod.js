// const getPeriod = (seconds, period, text, timeStamp) => {
//   const period = Math.round(seconds / timeStamp);
//   return period === 1 ? `há ${period} ${text}` : `há ${period} ${text}s`;
// };

const checkPostedPeriod = (time) => {
  const postedPeriod = Math.round(+new Date(time) / 1000);
  const now = Math.round(+new Date(Date.now()) / 1000);
  const seconds = now - postedPeriod;

  if (seconds < 60) {
    const secs = seconds < 60;
    return secs === 1 ? `há ${seconds} segundo` : `há ${seconds} segundo`;
  }

  if (seconds >= 60 && seconds < 3600) {
    const minutes = Math.round(seconds / 60);
    return minutes === 1 ? `há ${minutes} minuto` : `há ${minutes} minutos`;
  }

  if (seconds >= 3600 && seconds < 86400) {
    const hours = Math.round(seconds / 3600);
    return hours === 1 ? `há ${hours} hora` : `há ${hours} horas`;
  }

  if (seconds >= 86400 && seconds < 2592000) {
    const days = Math.round(seconds / 86400);
    return days === 1 ? `há ${days} dia` : `há ${days} dias`;
  }

  if (seconds >= 2592000 && seconds < 262974383) {
    const months = Math.round(seconds / 2592000);
    return months === 1 ? `há ${months} mês` : `há ${months} meses`;
  }

  if (seconds >= 262974383 && seconds < 31556926) {
    const years = Math.round(seconds / 262974383);
    return years ? `há ${years} ano` : `há ${years} anos`;
  }
};

export { checkPostedPeriod };
