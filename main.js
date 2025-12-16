// This function takes the PROJECTS array from constants.js
// and creates HTML cards inside the "projects-list" div.
function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container || !Array.isArray(PROJECTS)) return;

  // Create one card for each project
  let html = "";
  for (const project of PROJECTS) {
    const techList = project.tech.join(", ");

    html += `
      <article class="project-card">
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <p class="project-tech"><strong>Tech:</strong> ${techList}</p>
          <a href="${project.link}" class="project-link" target="_blank" rel="noopener">
            View Project
          </a>
        </div>
      </article>
    `;
  }

  // Put all cards inside the container
  container.innerHTML = html;
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container || !Array.isArray(SKILLS)) return;

  let html = "";
  for (const skill of SKILLS) {
    html += `
      <div class="skill-pill">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-tag">${skill.category}</span>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container || !Array.isArray(EXPERIENCE)) return;

  let html = "";
  for (const item of EXPERIENCE) {
    const badge = item.type === "education" ? "Education" : "Project";
    const detailsHtml = item.details
      .map(text => `<li>${text}</li>`)
      .join("");

    html += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-badge">${badge}</span>
            <span class="timeline-period">${item.period}</span>
          </div>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-org">${item.organization} · ${item.location}</p>
          <ul class="timeline-details">
            ${detailsHtml}
          </ul>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderContact() {
  const container = document.getElementById("contact-content");
  if (!container || !CONTACT) return;

  const emailHtml = `
    <div class="contact-item">
      <span class="contact-label">Email</span>
      <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
    </div>
  `;

  const phoneHtml = CONTACT.phone
    ? `
    <div class="contact-item">
      <span class="contact-label">Phone</span>
      <a href="tel:${CONTACT.phone}">${CONTACT.phone}</a>
    </div>
  `
    : "";

  const linkedinHtml = CONTACT.linkedin
    ? `
    <div class="contact-item">
      <span class="contact-label">LinkedIn</span>
      <a href="${CONTACT.linkedin}" target="_blank" rel="noopener">
        ${CONTACT.linkedin}
      </a>
    </div>
  `
    : "";

  const githubHtml = CONTACT.github
    ? `
    <div class="contact-item">
      <span class="contact-label">GitHub</span>
      <a href="${CONTACT.github}" target="_blank" rel="noopener">
        ${CONTACT.github}
      </a>
    </div>
  `
    : "";

  const othersHtml = (CONTACT.otherLinks || [])
    .map(
      (url, index) => `
      <div class="contact-item">
        <span class="contact-label">Link ${index + 1}</span>
        <a href="${url}" target="_blank" rel="noopener">${url}</a>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    ${emailHtml}
    ${phoneHtml}
    ${linkedinHtml}
    ${githubHtml}
    ${othersHtml}
  `;
}


document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderSkills();
  renderExperience();
  renderContact();
});



