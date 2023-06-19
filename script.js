 function calculateMinimumCost(n, arr) {
  // Sort the array of rope lengths in ascending order
  arr.sort((a, b) => a - b);

  var totalCost = 0;

  // Combine the two smallest ropes until only one rope is left
  while (n > 1) {
    // Combine the two smallest ropes
    var smallestRope1 = arr[0];
    var smallestRope2 = arr[1];
    var combinedLength = smallestRope1 + smallestRope2;

    // Update the total cost
    totalCost += combinedLength;

    // Remove the two smallest ropes from the array
    arr.splice(0, 2);

    // Insert the combined rope back into the array
    arr.push(combinedLength);

    // Decrease the count of remaining ropes
    n--;
  }

  return totalCost;
}

// Example usage
 
console.log(minimumCost);  // Output: 62
