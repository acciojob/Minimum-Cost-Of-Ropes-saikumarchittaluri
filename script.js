// Function to calculate the minimum cost of connecting ropes
function calculateMinCost() {
  const ropeLengthsInput = document.getElementById('rope-lengths');
  const resultDiv = document.getElementById('result');

  // Get the input value and split it into an array of rope lengths
  const inputString = ropeLengthsInput.value;
  const ropeLengths = inputString.split(',').map(Number);

  // Sort the rope lengths in ascending order
  ropeLengths.sort((a, b) => a - b);

  let totalCost = 0;
  while (ropeLengths.length > 1) {
    // Take the two shortest ropes
    const min1 = ropeLengths.shift();
    const min2 = ropeLengths.shift();

    // Calculate the cost of connecting them
    const cost = min1 + min2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the connected rope back into the sorted array
    // in its correct position
    let i = 0;
    while (i < ropeLengths.length && ropeLengths[i] < cost) {
      i++;
    }
    ropeLengths.splice(i, 0, cost);
  }

  // Display the minimum cost in the result div
  resultDiv.textContent = `Minimum Cost: ${totalCost}`;
}
