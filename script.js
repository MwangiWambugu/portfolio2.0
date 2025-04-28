document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I am Mwangi Wambugu";
    const speed = 100; // typing speed in ms
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    document.getElementById("typewriter").innerHTML = ""; // clear it first
    typeWriter();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const text2 = "Data Scientist and Software Engineer";
    const speed = 100; // typing speed in ms
    let i = 0;

    function typeWriter() {
      if (i < text2.length) {
        document.getElementById("typewriter2").innerHTML += text2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    document.getElementById("typewriter2").innerHTML = ""; // clear it first
    typeWriter();
  });


// Select the stats section
const statsSection = document.querySelector('#stats');
const counters = document.querySelectorAll('.counter');
let hasAnimated = false; // To ensure it runs only once

// Function to animate the counters
function runCounters() {
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200; // Smaller = faster

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      runCounters();
      hasAnimated = true; // So the animation doesn't repeat
    }
  });
}, {
  threshold: 0.5 // 50% of the section is visible
});

// Observe the stats section
observer.observe(statsSection);
