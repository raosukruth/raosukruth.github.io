const projects = [
  {
    title: "Human Perception of Fairness in Intelligent Kidney Placement",
    description:
      "Research and experiments on how non-experts evaluate fairness in kidney allocation and recommendation settings.",
    href: "https://github.com/raosukruth/Human-Perception-of-Fairness",
    linkLabel: "Repo",
    tags: ["Fairness", "Research", "ML"]
  },
  {
    title: "How Do Inpainting Artifacts Propagate to Language?",
    description:
      "Publication on how diffusion-based inpainting artifacts affect language generation in vision-language models.",
    href: "https://arxiv.org/abs/2602.20520",
    linkLabel: "Publication",
    tags: ["Diffusion Models", "VLMs", "Robustness"]
  },
  {
    title: "IRES Comic Mischief",
    description:
      "Project work and experiments for the IRES Comic Mischief initiative.",
    href: "https://github.com/raosukruth/IRES-Comic-Mischief",
    linkLabel: "Repo",
    docHref: "docs/3-Cullen-Anderson-Sukruth-Rao-TS.pdf",
    docLabel: "Report",
    tags: ["PyTorch", "Neural Networks", "Research Engineering"]
  },
  {
    title: "Leveraging OpenAI for Businesss Analytics",
    description:
      "Project focused on applying OpenAI capabilities to practical business analytics workflows.",
    href: "https://capstone.cse.msu.edu/2023-08/projects/hap",
    linkLabel: "Web",
    docHref: "docs/team-hap-project-plan-document.pages",
    docLabel: "Report",
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
      const primaryLabel = project.linkLabel || "Repo";
      const docLinkMarkup = project.docHref
        ? `<a class="project-link project-link-secondary" href="${project.docHref}" target="_blank" rel="noopener noreferrer">${project.docLabel || "Report"}</a>`
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
