function calculateTip(event) {
  event.preventDefault();
  // console.log(event)

  let bill = document.getElementById('bill').value;
  let serviceQuality = document.getElementById('serviceQuality').value;
  let numOfPeople = document.getElementById('people').value;

  console.log(serviceQuality)

  if (bill == '' || serviceQuality == 0) {
    alert("por favor, preencha os valores")
    return;
  }
}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);