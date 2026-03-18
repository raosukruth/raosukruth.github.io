const projects = [
  {
    title: "Human-Perception-of-Fairness",
    description:
      "Research and experiments on how non-experts evaluate fairness in kidney allocation and recommendation settings.",
    href: "https://github.com/raosukruth/Human-Perception-of-Fairness",
    tags: ["Fairness", "Research", "ML"]
  },
  {
    title: "llm-stream-classifier",
    description:
      "Microservices pipeline to classify social feed content using LLMs with API, analytics, and observability.",
    href: "https://github.com/raosukruth/llm-stream-classifier",
    tags: ["FastAPI", "Redis", "LLM"]
  },
  {
    title: "blind-75",
    description:
      "Practice repository for core coding interview patterns and algorithmic problem solving.",
    href: "https://github.com/raosukruth/blind-75",
    tags: ["Algorithms", "DSA", "Practice"]
  },
  {
    title: "REU23_MSTCS",
    description:
      "Summer research repository on fairness evaluation and decision-making in kidney placement systems.",
    href: "https://github.com/sid-nadendla/REU23_MSTCS",
    tags: ["Research", "Healthcare", "Data"]
  }
];

const grid = document.getElementById("project-grid");
const year = document.getElementById("year");

function renderProjects(items) {
  const cards = items
    .map((project) => {
      const tagMarkup = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      return `
        <article class="project-card">
          <div class="project-top">
            <h3>${project.title}</h3>
            <a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer">View</a>
          </div>
          <p>${project.description}</p>
          <div class="tag-row">${tagMarkup}</div>
        </article>
      `;
    })
    .join("");

  grid.innerHTML = cards;
}

renderProjects(projects);
year.textContent = new Date().getFullYear();
