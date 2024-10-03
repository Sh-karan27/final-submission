document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    // Remove active class from all buttons and contents
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and its corresponding content
    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

document.querySelectorAll(".show-more-button").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.previousElementSibling; // Get the paragraph element
    const moreText = description.querySelector(".more-text"); // Get the additional text
    const isVisible = moreText.style.display === "inline"; // Check if more text is visible

    if (isVisible) {
      moreText.style.display = "none"; // Hide additional text
      button.textContent = "Show More"; // Change button text
    } else {
      moreText.style.display = "inline"; // Show additional text
      button.textContent = "Show Less"; // Change button text
    }
  });
});

const testimonies = [
  {
    name: "Kanika Singh",
    text: "I can speak English just because of Engmates. I love all hardworking teachers. Great facilities are there. Working environment is very fine. It helps me in exploring myself.",
    image: "assets/kanika-testimonial.png",
  },
  {
    name: "Naushad Malik",
    text: "I got to know about this institute through Google. Great institute, good environment, Best faculty and much more. Here you can get each & everything that you want.",
    image: "assets/naushad-malik-testimonial.png",
  },
  {
    name: "Ruchi Sejwal",
    text: "It was a great experience in Engmates. After completing the Public Speaking Course I have seen many changes in my personality. Now I am more confident.",
    image: "assets/ruchi-sejwal-testimonial.png",
  },
  {
    name: "Davneet Kaur",
    text: "Superb course for learning and practicing communication skills in English language. In Engmates Institute I have learnt lots of things which helped me learn how to communicate with strangers.",
    image: "assets/davneet-kaur-testimonial.png",
  },
  {
    name: "Avneet Kaur",
    text: "I would suggest you join Engmates as it is the best English institute in Delhi. The staff and students are very positive and treat one another with respect.",
    image: "assets/avneet-kaur-testimonial.png",
  },
  {
    name: "Nitasha Arora",
    text: "Really want to thank the trainers of Engmates, especially Ms Aparajita ma’am who helped me improve. I used to hesitate a lot while speaking but now I am confident.",
    image: "assets/nitasha-arora-testimonial.png",
  },
  {
    name: "Dr. Umesh Naik",
    text: "I was always scared of public speaking. That's why I joined Engmates. I have been blown away by Engmates right from the first day. The whole atmosphere helped me improve my confidence.",
    image: "assets/umesh-naik-testimonial.png",
  },
  {
    name: "Shubham Roy",
    text: "I got to know about this institute through Google. This is really a good institute for learning English. I had a great time here. It was a great journey with Engmates. I got individual attention.",
    image: "assets/shubham-testimonial.png",
  },
  {
    name: "Nirmala Pathak",
    text: "I started my journey with Engmates few months back. I am very happy and confident about the skills I have acquired so far. I am very thankful to the faculty for all the support and encouragement.",
    image: "assets/nirmala-pathak-testimonial.png",
  },
  {
    name: "Visheta Sharma",
    text: "Engmates is the best platform for those people who want to learn English in a good manner. I joined this institute to remove my hesitation. If you want to speak English without any mistakes, you should join Engmates.",
    image: "assets/visheta-sharma-testimonial.png",
  },
  // Page 3 Testimonials
  {
    name: "Harish Samant",
    text: "It was a great experience in Engmates. I learnt many things here. Staff is very co-operative. I have learnt so many things here like how to be confident, how to speak fluently, how to present oneself effectively and efficiently.",
    image: "assets/harish-samant-testimonial.png",
  },
  {
    name: "Abhishek Khurana",
    text: "Before joining this institute I was not very confident I have learnt a lot here. Today I am more confident and more positive. Whatever I am today is only because of Engmates. They really provide a great platform to improve your communication skills.",
    image: "assets/abhishek-khurana-testimonial.png",
  },
  {
    name: "Jagjeevan Singh",
    text: "It was a great experience to be at Engmates. It was the best journey in terms of learning because the way of teaching is excellent here. I experienced a positive change in confidence and my mentality.",
    image: "assets/jagjeevan-singh-testimonial.png",
  },
  {
    name: "Aman Passi",
    text: "Engmates is the best English and public speaking institute in Delhi. My mentor helped me gain confidence & also guided me to improve my body language. Her guidance for Interview skills really made me ready for the future.",
    image: "assets/aman-passi-testimonial.png",
  },
  {
    name: "Anuradha",
    text: "I am Anuradha and I am from Qatar. I did the Public Speaking course in this institute and I really liked it because my trainer helped me to boost my confidence as when you start learning any language first you need confidence.",
    image: "assets/anuradha-testimonial.png",
  },
  // Page 4 Testimonials
  {
    name: "Shivam Pandey",
    text: "I found the best institute with the best teachers who taught me how to tackle the outer world with a good personality.. Engmates helped me to grab the opportunity for which I was planning.",
    image: "assets/shivam-pandey-testimonial.png",
  },
  {
    name: "Simran Tanwar",
    text: "The atmosphere is very good. The teachers have guided me very well. They helped me with every single problem of mine. My mentor’s guidance helped me learn a lot. I have successfully got a job at Wipro while doing the course.",
    image: "assets/simran-tanwar-testimonial.png",
  },
  {
    name: "Manisha Mishra",
    text: "I did my course from EngMates (Tilak Nagar). It was an amazing experience. I got information about this institute through Google. I must thank them for giving me such a nice platform to improve my communication skills along with a personality.",
    image: "assets/manisha-mishra-testimonial.png",
  },
  {
    name: "Asif Khan",
    text: "When I was planning to search for the best English spoken institute I found Engmates (Tilak Nagar). This institute provides effective training for students who want to master English for work, study and travel. They helped me improve my communication skills.",
    image: "assets/asif-khan-testimonial.png",
  },
  {
    name: "Nidhi Saxena",
    text: "This institute is a very good institute for learning English. I learned a lot from this institute. Engmates (Tilak Nagar) increased my confidence level as well. Teachers are also excellent. They trained us in a proper manner & in interesting ways.",
    image: "assets/nidhi-saxena-testimonial.png",
  },
];

// Function to render testimonies based on page number
function renderTestimonials(page) {
  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Clear existing testimonials
  const testimonyContainer = document.getElementById("testimonyContainer");
  testimonyContainer.innerHTML = "";

  // Slice the array to get the current page testimonies
  const currentTestimonials = testimonies.slice(start, end);

  currentTestimonials.forEach(({ name, text, image }) => {
    const testimonyCard = document.createElement("div");
    testimonyCard.className = "testimony-card";

    testimonyCard.innerHTML = `
      <div class="card-header">
        <img src="${image}" alt="${name}" class="student-image" />
        <h3 class="student-name">${name}</h3>
      </div>
      <div class="testimony-content">
        <p class="testimony-text">${text} <a href="#">Read More</a></p>
      </div>
    `;

    testimonyContainer.appendChild(testimonyCard);
  });
}

// Event listeners for pagination buttons
document.querySelectorAll(".page-button").forEach((button) => {
  button.addEventListener("click", () => {
    const page = parseInt(button.getAttribute("data-page"));
    renderTestimonials(page);
  });
});

// Initial render for the first page
renderTestimonials(1);

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const arrow = item.querySelector(".arrow");

    if (answer.style.maxHeight) {
      // Hide the answer
      answer.style.maxHeight = null;
      answer.style.padding = "0";
      arrow.classList.remove("arrow-up");
    } else {
      // Show the answer
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "10px";
      arrow.classList.add("arrow-up");
    }
  });
});

document
  .getElementById("consultForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const location = document.getElementById("location").value;
    const problem = document.getElementById("problem").value;

    // Create an alert with form data
    alert(`Name: ${name}
Email: ${email}
Phone Number: +91 ${number}
Location: ${location}
Problem: ${problem}`);
  });
