    function generatePickupLine() {
        const adjectives = ["charming", "magnetic", "dazzling", "enchanting", "captivating"];
        const compliments = [
        "You must be a shooting star because you light up my night.",
        "Do you have a map? I keep getting lost in your eyes.",
        "If you were a vegetable, you'd be a cute-cumber.",
        "Is your name Google? Because you've got everything I've been searching for.",
        "Your smile must be a black hole because it's impossible to escape its gravity.",
        "Every moment with you feels like a dream I never want to wake up from.",
        "I believe in destiny, and I think it led me to you.",
        "You are the missing piece that completes the puzzle of my heart.",
        "The world may be chaotic, but when I'm with you, everything feels just right.",
        "Your presence is a melody that soothes my soul in the symphony of life."
        ];
    
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
        return `  ${randomCompliment}`;
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        const generateButton = document.getElementById("generateButton");
        const pickupLineElement = document.getElementById("pickupLine");
    
        generateButton.addEventListener("click", function() {
        const pickupLine = generatePickupLine();
        pickupLineElement.textContent = pickupLine;
        });
    });

  //second one

//   function generatePickupLine() {
//     // ... (existing code with compliments and adjectives)
  
//     const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//     const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  
//     return `${randomAdjective.charAt(0).toUpperCase() + randomAdjective.slice(1)}, ${randomCompliment}`;
//   }
  
//   function updateCounter() {
//     let count = localStorage.getItem("pickupLineCounter");
//     if (!count) {
//       count = 0;
//     }
  
//     count++;
//     localStorage.setItem("pickupLineCounter", count);
  
//     const counterElement = document.getElementById("counter");
//     counterElement.textContent = count;
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
//     const generateButton = document.getElementById("generateButton");
//     const pickupLineElement = document.getElementById("pickupLine");
  
//     generateButton.addEventListener("click", function() {
//       const pickupLine = generatePickupLine();
//       pickupLineElement.textContent = pickupLine;
//       updateCounter();
//     });
  
//     // Initialize the counter value on page load
//     updateCounter();
//   });
  
  // third one 

//   function generatePickupLine() {
//     // ... (same as before)
  
//     const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//     const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  
//     return `${randomAdjective.charAt(0).toUpperCase() + randomAdjective.slice(1)}, ${randomCompliment}`;
//   }
  
//   function updateCounter() {
//     let count = localStorage.getItem("pickupLineCounter");
//     count = count ? parseInt(count) + 1 : 1;
//     localStorage.setItem("pickupLineCounter", count);
//     return count;
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
//     const generateButton = document.getElementById("generateButton");
//     const pickupLineElement = document.getElementById("pickupLine");
//     const counterElement = document.getElementById("counter");
  
//     generateButton.addEventListener("click", function() {
//       const pickupLine = generatePickupLine();
//       pickupLineElement.textContent = pickupLine;
  
//       const count = updateCounter();
//       counterElement.textContent = `Total People Impressed: ${count}`;
//     });
  
//     // Initialize the counter on page load
//     const count = localStorage.getItem("pickupLineCounter");
//     counterElement.textContent = `Total People Impressed: ${count ? count : 0}`;
//   });
  
// script.js
// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const generateButton = document.getElementById("generateButton");
//     const pickupLineElement = document.getElementById("pickupLine");
  
//     generateButton.addEventListener("click", function () {
//       // Call the function to generate a pickup line using the AI
//       generatePickupLine().then((pickupLine) => {
//         pickupLineElement.textContent = pickupLine;
//       });
//     });
//   });
  
//   async function generatePickupLine() {
//     // Replace 'YOUR_GPT3_API_KEY' with your actual GPT-3 API key
//     const apiKey = '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';
//     const prompt = 'Generate a pickup line for me.';
//     const url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//       },
//       body: JSON.stringify({
//         'prompt': prompt,
//         'max_tokens': 50, // Adjust the number of tokens to control the response length
//         'temperature': 0.7 // Adjust the temperature for more or less randomness (0.2 to 1.0)
//       })
//     });
  
//     const data = await response.json();
//     return data.choices[0].text.trim();
//   }
  