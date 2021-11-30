export const MOCK_BALANCES = [
  { result: 100 },
  { result: 50.10002 },
  { result: 0 },
  { result: 90.10202 },
  { result: 0 },
  { result: 1230.10002 },
  { result: 1230.10002 },
  { result: 100.12389 },
  { result: 80.402 },
  { result: 0 },
  { result: 80.402 },
];

export const generateAmount = () =>
  Math.random() >= 0.5
    ? (Math.random() * 100).toFixed(Math.floor(Math.random() * 8))
    : '';
