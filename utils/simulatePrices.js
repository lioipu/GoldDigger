export function simulatePrice(basePrice, maxChangePercent = 2) {
  // Convert max percent to decimal (e.g., 2% -> 0.02)
  const changeFactor = maxChangePercent / 100

  // Random percent change between -maxChangePercent and +maxChangePercent
  const randomPercent = (Math.random() * 2 - 1) * changeFactor

  // Calculate new price
  const newPrice = basePrice * (1 + randomPercent)

  return parseFloat(newPrice.toFixed(2)) // Round to 2 decimal places
}
