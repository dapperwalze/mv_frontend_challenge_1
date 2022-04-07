const handleGreeting = (hourValue) => {
  if (hourValue >= 0 && hourValue <= 11) {
    return "Good morning,";
  }
  if (hourValue >= 12 && hourValue <= 16) {
    return "Good afternoon,";
  }
  if (hourValue >= 17 && hourValue <= 23) {
    return "Good evening,";
  }
};

const handleCurrencyFormatting = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export { handleGreeting, handleCurrencyFormatting };
