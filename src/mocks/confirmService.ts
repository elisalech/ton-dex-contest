export const confirmTransaction = (
  message: string = 'Confirm transaction',
): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const confirmed = window.confirm(message);
    return confirmed ? resolve(confirmed) : reject(confirmed);
  });
