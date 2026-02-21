// Query Selectors
const allJobsContainer = document.getElementById("all-jobs");
const interviewContainer = document.getElementById("interview");
const rejectedContainer = document.getElementById("rejected");

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

const content = jobCards
  .map((jobCard) => {
    return `
    <div class="card bg-[#FFFFFF] shadow-md mb-5">
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h2 class="card-title">${jobCard.companyName}</h2>
          <i
            class="fa-solid fa-trash py-2 px-3 rounded-full hover:cursor-pointer hover:scale-105 hover:text-red-500 transition-all duration-300"
          ></i>
        </div>
        <p class="text-[#5C5C5C]">${jobCard.position}</p>
        <p class="text-[#5C5C5C]">
          ${jobCard.location} • ${jobCard.type} • ${jobCard.salary}
        </p>
        <span
          class="bg-[#EEF4FF] max-w-fit px-2 py-1 my-2 rounded-md font-bold"
          >NOT APPLIED</span
        >
        <p>${jobCard.description}</p>
        <div class="flex gap-2 pt-2">
          <button class="btn btn-outline btn-success">INTERVIEW</button>
          <button class="btn btn-outline btn-error">REJECTED</button>
        </div>
      </div>
    </div>
  `;
  })
  .join("");

allJobsContainer.innerHTML = content;
