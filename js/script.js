(function() {
    const quotes = [
        {
          quote:
            "Don't judge each day by the harvest that your reap but by the seeds that you plant.",
            author: "Anon."
        },
        {
          quote:
            "Don't stop when you are tired but when you are done.that you plant.",
            author: "Unknown"
        },
        {
          quote:
            "Your positive action combined with positive thinking result in action",
            author: "Shiv Kheira"
        },
        {
          quote:
            "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
          quote:
            "Stay away from negative people, they have a problem to every solution.",
            author: "Albert Einstein"
        },
        {
          quote:
            "I wan to be remembered as the one who tried.",
            author: "Dr. Dorothy Height"
        },
        {
          quote:
            "If you are going through hell, keep going.",
            author: "Winston Churchill"
        },
        {
          quote:
            "Take your dreams seriously.",
            author: "LifeHack"
        },
        {
          quote:
            "The greatest wisdom is kindess.",
            author: "James Clark"
        },
        {
          quote:
            "She was brave, and strong and broken, all at once.",
            author: "Anna Funder"
        },
        {
          quote:
            "Strive for progress not perfection.",
            author: "William James"
        },
        {
          quote:
            "Be the change that you want to see in the world.",
            author: "Ghandhi M"
        },
        {
          quote:
            "Learn from yesterday, live for today and hope for tommorrow.",
            author: "Albert Einstein"
        }
    ];
// Get Button Element
const btn = document.querySelector("#generate-btn");

const checkQuotes = () => {
  let random = Math.floor(Math.random() * quotes.length);
 
  document.querySelector("#quote").textContent = quotes[random].quote;
  document.querySelector(".author").textContent = quotes[random].author;
};

btn.addEventListener("click", checkQuotes);


})();


