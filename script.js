const projects = [
  {
    title: "Human-Perception-of-Fairness",
    description:
      "Research and experiments on how non-experts evaluate fairness in kidney allocation and recommendation settings.",
    href: "https://github.com/raosukruth/Human-Perception-of-Fairness",
    tags: ["Fairness", "Research", "ML"]
  },
  {
    title: "CSE 291 (Fall 2025)",
    description:
      "Coursework and project work completed for CSE 291 during Fall 2025.",
    href: "https://github.com/raosukruth/cse-291-f25",
    tags: ["Coursework", "Systems", "Research"]
  },
  {
    title: "IRES Comic Mischief",
    description:
      "Project work and experiments for the IRES Comic Mischief initiative.",
    href: "https://github.com/raosukruth/IRES-Comic-Mischief",
    tags: ["PyTorch", "Neural Networks", "Research Engineering"]
  },
  {
    title: "Leveraging OpenAI for Businesss Analytics",
    description:
      "Project focused on applying OpenAI capabilities to practical business analytics workflows.",
    href: "https://capstone.cse.msu.edu/2023-08/projects/hap",
    linkLabel: "Web",
    docHref: "docs/team-hap-project-plan-document.pages",
    docLabel: "Document",
    tags: ["OpenAI API", "LangChain", "Flask Backend"]
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
      const primaryLabel = project.linkLabel || "View";
      const docLinkMarkup = project.docHref
        ? `<a class="project-link project-link-secondary" href="${project.docHref}" target="_blank" rel="noopener noreferrer">${project.docLabel || "Document"}</a>`
        : "";

      return `
        <article class="project-card">
          <div class="project-top">
            <h3>${project.title}</h3>
            <div class="project-links">
              <a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer">${primaryLabel}</a>
              ${docLinkMarkup}
            </div>
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
