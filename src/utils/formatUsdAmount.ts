const formatUsdAmount = (amount: string, formatCompact?: boolean) => {
  const num = parseFloat(amount);

  if (!formatCompact) {
    return num.toFixed(2);
  }

  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'K';
  } else {
    return num.toFixed(2);
  }
};

export default formatUsdAmount;
