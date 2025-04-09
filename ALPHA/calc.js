 



(function () {
  // Get elements
  const calcBtn = document.getElementById('calcBtn');
  const formError = document.getElementById('form-error');
  const resultsDiv = document.getElementById('results_div');
  const allCalRes = document.getElementById('allCalRes');
  const lossWeight = document.getElementById('LossWeight');
  const mildWeight = document.getElementById('MildWeight');
  const extremeWeight = document.getElementById('ExtremeWeight');

  // Error message function
  function showError(msg) {
    formError.style.display = 'block';
    formError.textContent = msg;
    resultsDiv.style.display = 'none';
  }

  // Reset error message and results
  function resetErrorAndResults() {
    formError.style.display = 'none';
    resultsDiv.style.display = 'none';
  }

  // Event listener for "Calc" button
  calcBtn.addEventListener('click', function () {
    // Get input values
    const gender = document.querySelector('input[name="genderRadio"]:checked')?.value;
    const exTimes = document.querySelector('input[name="exTimes"]:checked')?.value;
    const age = document.getElementById('AGEINPUT').value;
    const weight = document.getElementById('WEIGHTInput').value;
    const height = document.getElementById('HEIGHTInput').value;

    // Check for missing inputs
    if (!gender || !exTimes || !age || !weight || !height) {
      showError('Please fill in all fields.');
      return;
    }

    // Calculate BMR
    let result = 0;
    if (gender === 'MALE') {
      result = (weight * 10) + (height * 6.26) - (age * 5) + 5;
    } else {
      result = (weight * 10) + (height * 6.26) - (age * 5) - 161;
    }

    // Activity multiplier based on exercise times
    let activeAverage = 1.2; // Default for no exercise
    switch (exTimes) {
      case '0T': activeAverage = 1.2; break;
      case '13T': activeAverage = 1.375; break;
      case '35T': activeAverage = 1.55; break;
      case '57T': activeAverage = 1.725; break;
      case '67T': activeAverage = 1.9; break;
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const allCals = result * activeAverage;

    // Calculate different calorie targets for weight loss
    const extremeWeightLoss = allCals - 1000;
    const lossWeightLoss = allCals - 500;
    const extremeWeightGain = allCals + 900;

    // Display results
    allCalRes.textContent = `≈ ${Math.ceil(allCals)} cal/day`;
    lossWeight.innerHTML = `Extreme weight loss ≈ <span class="text-warning">${Math.ceil(extremeWeightLoss)}</span> <small>cal/day</small>`;
    mildWeight.innerHTML = `Mild weight loss ≈ <span class="text-warning">${Math.ceil(lossWeightLoss)}</span> <small>cal/day</small>`;
    extremeWeight.innerHTML = `Extreme weight gain ≈ <span class="text-warning">${Math.ceil(extremeWeightGain)}</span> <small>cal/day</small>`;

    // Show the results
    resultsDiv.style.display = 'block';
  });
})();
