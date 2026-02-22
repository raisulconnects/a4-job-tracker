// Query Selectors
const allJobsContainer = document.getElementById("all-jobs");
const interviewContainer = document.getElementById("interview");
const rejectedContainer = document.getElementById("rejected");
const statusBadge = document.getElementById("status");

const interviewPlaceHolderDiv = document.getElementById(
  "interviewPlaceHolderDiv",
);
const rejectedPlaceHolderDiv = document.getElementById("rejectPlaceHolderDiv");

// console.log(rejectedPlaceHolderDiv);

// console.log(interviewPlaceHolderDiv);

// Dashboard Counters
const jobsCounter = document.getElementById("alljobsCounter");
const interviewCounter = document.getElementById("interviewCounter");
const rejectedCounter = document.getElementById("rejectedCounter");

// console.log(interviewCounter);

// console.log(Number(interviewCounter + 1));
// console.log(Number(rejectedCounter + 1));

// Available Jobs Container er inside er tab gular jobs counter
const allJobsCounter = document.getElementById("all-jobs-counter");
const interviewTabsCounter = document.getElementById("interview-tabs-Counter");
const rejectedTabsCounter = document.getElementById("rejected-tabs-Counter");

// console.log(typeof allJobsCounter);

// The Job Object
const jobCards = [
  {
    companyName: "TechCorp Solutions",
    position: "Senior Frontend Engineer",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-Time",
    salary: "$130,000 - $160,000",
    description:
      "Looking for an experienced Frontend Engineer with deep knowledge of React and modern CSS. You will be leading the development of our core customer-facing applications.",
  },
  {
    companyName: "DataFlow Analytics",
    position: "Data Scientist",
    location: "New York, NY (On-site)",
    type: "Full-Time",
    salary: "$120,000 - $145,000",
    description:
      "Join our data team to analyze large datasets and build predictive models that drive business decisions. Experience with Python, Pandas, and machine learning required.",
  },
  {
    companyName: "CloudNet Systems",
    position: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$80 - $110 / hour",
    description:
      "We need a skilled DevOps engineer to help migrate our legacy infrastructure to AWS. Strong experience with Kubernetes, Docker, and CI/CD pipelines is a must.",
  },
  {
    companyName: "Creative Design Studio",
    position: "UI/UX Designer",
    location: "Austin, TX (Hybrid)",
    type: "Full-Time",
    salary: "$90,000 - $115,000",
    description:
      "Seeking a creative UI/UX designer to craft intuitive and engaging digital experiences. Proficiency in Figma and a strong portfolio demonstrating user-centric design preferred.",
  },
  {
    companyName: "FinTech Innovations",
    position: "Backend Developer",
    location: "London, UK (Remote)",
    type: "Full-Time",
    salary: "£75,000 - £95,000",
    description:
      "Build robust and scalable microservices for our financial platform using Node.js and PostgreSQL. Prior experience in the fintech industry is a big plus.",
  },
  {
    companyName: "Green Energy Solutions",
    position: "Project Manager",
    location: "Seattle, WA (On-site)",
    type: "Full-Time",
    salary: "$100,000 - $125,000",
    description:
      "Lead cross-functional teams to deliver renewable energy tech projects on time and within budget. Agile/Scrum certification strongly desired.",
  },
  {
    companyName: "NextGen E-Commerce",
    position: "Marketing Specialist",
    location: "Remote",
    type: "Part-Time",
    salary: "$35 - $50 / hour",
    description:
      "Help us grow our online presence through targeted social media campaigns, SEO optimization, and content creation. Flexible working hours.",
  },
  {
    companyName: "Global Logistics Co.",
    position: "Software Engineer (Java)",
    location: "Chicago, IL (Hybrid)",
    type: "Full-Time",
    salary: "$110,000 - $135,000",
    description:
      "Develop and maintain enterprise-level tracking software. The ideal candidate has 3+ years of Spring Boot experience and a solid understanding of relational databases.",
  },
];

// Jobs Counter Er Jonne Jobs Length
let jobCounter = jobCards.length;

const content = jobCards
  .map((jobCard) => {
    return `
    <div class="card bg-[#FFFFFF] shadow-md mb-5">
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h2 class="card-title">${jobCard.companyName}</h2>
          <i
            class="fa-solid fa-trash py-2 px-3 rounded-full hover:cursor-pointer hover:scale-105 hover:text-red-500 transition-all duration-300" onclick="handleDelete(event)"
          ></i>
        </div>
        <p class="text-[#5C5C5C]">${jobCard.position}</p>
        <p class="text-[#5C5C5C]">
          ${jobCard.location} • ${jobCard.type} • ${jobCard.salary}
        </p>
        <span
          class="bg-[#EEF4FF] max-w-fit px-2 py-1 my-2 rounded-md font-bold" id="status"
          >NOT APPLIED</span
        >
        <p>${jobCard.description}</p>
        <div class="flex gap-2 pt-2">
          <button class="btn btn-outline btn-success" onclick="handleInterview(event)">INTERVIEW</button>
          <button class="btn btn-outline btn-error" onclick="handleReject(event)">REJECTED</button>
        </div>
      </div>
    </div>
  `;
  })
  .join("");

// console.log(content);
// console.log(jobCards.length);
allJobsContainer.innerHTML = content;

function handleDelete(e) {
  const theCardItself = e.target.closest(".card");

  jobsCounter.innerHTML = `${Number(jobsCounter.innerText) - 1}`;

  if (theCardItself.parentNode.id === "interview") {
    interviewCounter.innerHTML = `${Number(interviewCounter.innerText) - 1}`;
    interviewTabsCounter.innerText = `${Number(interviewTabsCounter.innerText) - 1}`;
  } else if (theCardItself.parentNode.id === "rejected") {
    rejectedCounter.innerHTML = `${Number(rejectedCounter.innerText) - 1}`;
    rejectedTabsCounter.innerText = `${Number(rejectedTabsCounter.innerText) - 1}`;
  } else if (theCardItself.parentNode.id === "all-jobs") {
    allJobsCounter.innerHTML = `${Number(allJobsCounter.innerText) - 1}`;
    // allJobsTabsCounter.innerText = `${Number(allJobsTabsCounter.innerText) - 1}`;
  }

  // Removing the card from the DOM
  theCardItself.remove();

  // Ensuring that if there is nothing on a particular tab tokhon placeholder div show korbe
  if (Number(interviewTabsCounter.innerText) > 0) {
    interviewPlaceHolderDiv.classList.add("hidden");
  } else {
    interviewPlaceHolderDiv.classList.remove("hidden");
  }

  if (Number(rejectedTabsCounter.innerText) > 0) {
    rejectedPlaceHolderDiv.classList.add("hidden");
  } else {
    rejectedPlaceHolderDiv.classList.remove("hidden");
  }

  if (Number(allJobsTabsCounter.innerText) > 0) {
    allJobsPlaceHolderDiv.classList.add("hidden");
  } else {
    allJobsPlaceHolderDiv.classList.remove("hidden");
  }
}

function handleInterview(e) {
  // First e Jei Card Sheta Select Kora Hoitese
  const theCardItself = e.target.closest(".card");

  // Card er Parent
  const theAllJobsList = theCardItself.parentNode;

  // will check if theCardIteself parent div id is "allJobsContainer" or not
  if (theCardItself.parentNode.id === "all-jobs") {
    interviewCounter.innerHTML = `${Number(interviewCounter.innerText) + 1}`;
    allJobsCounter.innerHTML = `${Number(allJobsCounter.innerText) - 1}`;
    interviewTabsCounter.innerText = `${Number(interviewTabsCounter.innerText) + 1}`;
  } else if (theCardItself.parentNode.id === "rejected") {
    rejectedCounter.innerText = `${Number(rejectedCounter.innerText) - 1}`;
    interviewCounter.innerHTML = `${Number(interviewCounter.innerText) + 1}`;
    rejectedTabsCounter.innerText = `${Number(rejectedTabsCounter.innerText) - 1}`;
    interviewTabsCounter.innerText = `${Number(interviewTabsCounter.innerText) + 1}`;
  }

  // Todo
  // 1. NOT APPLIED Status ta age update korbo content er
  theCardItself.querySelector("#status").innerText = "INTERVIEW";
  // 2. Ekhane Amra Jeta Target Korsi, sheta remove kortesi Interview list theke and then Interview div e diye ditesi, we can use appendChild here as it moves the target already.
  interviewContainer.appendChild(theCardItself);

  // 3. Jobs Counter ta update kore dibo - All Jobs Tab Theke Counter er Value EK kore komtese
  // allJobsCounter.innerText = `${Number(allJobsCounter.innerText) - 1}`;
  // 4. Header Dashboard ta Update kore dibo for Counts - Interview Counter ta EK kore bartese

  // Checking if there is any jobs in the Interview Tab Currently or else we put on the placeholder again for Both Tabs
  if (Number(interviewTabsCounter.innerText) > 0) {
    interviewPlaceHolderDiv.classList.add("hidden");
  } else {
    interviewPlaceHolderDiv.classList.remove("hidden");
  }

  if (Number(rejectedTabsCounter.innerText) > 0) {
    rejectedPlaceHolderDiv.classList.add("hidden");
  } else {
    rejectedPlaceHolderDiv.classList.remove("hidden");
  }

  // theAllJobsList.removeChild(theCardItself);

  // console.log(theCardItself);
  // console.log(theAllJobsList);
}

function handleReject(e) {
  // First e Jei Card Sheta Select Kora Hoitese
  const theCardItself = e.target.closest(".card");

  // Card er Parent
  const theAllJobsList = theCardItself.parentNode;

  // will check if theCardIteself parent div id is "allJobsContainer" or not
  if (theCardItself.parentNode.id === "all-jobs") {
    rejectedCounter.innerHTML = `${Number(rejectedCounter.innerText) + 1}`;
    allJobsCounter.innerHTML = `${Number(allJobsCounter.innerText) - 1}`;
    rejectedTabsCounter.innerText = `${Number(rejectedTabsCounter.innerText) + 1}`;
  } else if (theCardItself.parentNode.id === "interview") {
    rejectedCounter.innerHTML = `${Number(rejectedCounter.innerText) + 1}`;
    interviewCounter.innerHTML = `${Number(interviewCounter.innerText) - 1}`;
    rejectedTabsCounter.innerText = `${Number(rejectedTabsCounter.innerText) + 1}`;
    interviewTabsCounter.innerText = `${Number(interviewTabsCounter.innerText) - 1}`;
  }

  // Todo
  // 1. NOT APPLIED Status ta age update korbo content er
  theCardItself.querySelector("#status").innerText = "REJECTED";

  // Reject Button e CLick korle we move the thing to Reject Div
  rejectedContainer.appendChild(theCardItself);

  // Checking if there is any jobs in the Interview Tab Currently or else we put on the placeholder again for Both Tabs
  if (Number(interviewTabsCounter.innerText) > 0) {
    interviewPlaceHolderDiv.classList.add("hidden");
  } else {
    interviewPlaceHolderDiv.classList.remove("hidden");
  }

  if (Number(rejectedTabsCounter.innerText) > 0) {
    rejectedPlaceHolderDiv.classList.add("hidden");
  } else {
    rejectedPlaceHolderDiv.classList.remove("hidden");
  }
}
