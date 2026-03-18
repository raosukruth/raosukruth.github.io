const projects = [
  {
    title: "Human Perception of Fairness in Intelligent Kidney Placement",
    description:
      "Research and experiments on how non-experts evaluate fairness in kidney allocation and recommendation settings.",
    href: "https://github.com/raosukruth/Human-Perception-of-Fairness",
    linkLabel: "Repo",
    docHref: "https://arxiv.org/pdf/2404.03800",
    docLabel: "Publication",
    tags: ["Algorithmic Fairness", "Kidney Allocation", "Decision Modeling"]
  },
  {
    title: "How Do Inpainting Artifacts Propagate to Language?",
    description:
      "Study of how image inpainting artifacts influence downstream language behavior in vision-language systems.",
    href: "https://github.com/raosukruth/inpainting-artifacts-language",
    linkLabel: "Repo",
    docHref: "https://arxiv.org/abs/2602.20520",
    docLabel: "Preprint",
    tags: ["Diffusion Models", "VLMs", "Multimodal Evaluation"]
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
    href: "docs/team-hap-project-plan-document.pdf",
    linkLabel: "Report",
    tags: ["OpenAI API", "LangChain", "Flask Backend"]
  }
];

const grid = document.getElementById("project-grid");

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

function flashSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
  section.classList.remove("section-flash");
  void section.offsetWidth;
  section.classList.add("section-flash");

  window.setTimeout(() => {
    section.classList.remove("section-flash");
  }, 1200);
}

function setupInternalNavHighlight() {
  const internalAnchors = document.querySelectorAll('a[href^="#"]');
  internalAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href").slice(1);
      if (!targetId) {
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      history.replaceState(null, "", `#${targetId}`);
      flashSection(targetId);
    });
  });
}

renderProjects(projects);
setupInternalNavHighlight();
