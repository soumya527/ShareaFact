const btn = document.querySelector(".btn-open");
const form = document.querySelector(".factform");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

//let votesInteresting = 23;
//let votesMindblowing = 5;

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `impossible year year needs to be less or equal to ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
let votesInteresting = 20;
let votesMindblowing = 5;
if (votesInteresting === votesMindblowing)
  alert("this fact is equally nice and mindblowing");
else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact");
} else if (votesInteresting < votesMindblowing) {
  console.log("mind Blowing fact");
}

// falsy values: 0, null '', null, undefined
// truthy value is everything else

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be False might be incorrect";
alert(message);
const text = " Lisbon capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". it is ${calcFactAge(
  2024
)} years old. it is probabl
  totalUpvotes > voty ${esFalse ? "correct" : "not true"},`;
console.log(str);
