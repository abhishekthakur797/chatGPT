function calculateLifeLeft() {
  const age = parseInt(document.getElementById("age").value);
  const lifeExpectancy = parseInt(
    document.getElementById("life-expectancy").value
  );

  if (isNaN(age) || isNaN(lifeExpectancy)) {
    alert("Please enter valid numbers for age and life expectancy.");
    return;
  }

  if (age >= lifeExpectancy) {
    document.getElementById("result").innerText =
      "You have lived your expected life!";
  } else {
    const yearsLeft = lifeExpectancy - age;
    const percentLeft = ((yearsLeft / lifeExpectancy) * 100).toFixed(2);
    document.getElementById(
      "result"
    ).innerText = `You have ${percentLeft}% of your life left.`;
  }
}
