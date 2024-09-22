

const projectList = document.getElementById('project list')

fetch('./projects.json')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            const projectLi = document.createElement('li')
            projectLi.className = "project"

            // title
            const projectTitle = document.createElement('h3')
            projectTitle.innerText = project.name

            // description
            const projectDescription = document.createElement('div')
            const paragraphs = project.description.split('\n'); // Split by line breaks
            paragraphs.forEach(paragraph => {
                const p = document.createElement('p');
                p.innerText = paragraph;
                projectDescription.appendChild(p);
            });


            // technologies used
            const technologiesUsed = document.createElement('div')
            technologiesUsed.className = 'technologies-used'
            const technologiesText = document.createElement('h4') 
            technologiesText.innerText = 'technologies used'

            const technologiesList = document.createElement('ul')
            technologiesList.className = "tech-icons"
            project.technologies.forEach(technology => {
                const techLi = document.createElement('li')

                const techLink = document.createElement('a')
                techLink.href = technologyDetails[technology].websiteURL
                techLink.target = '_blank'

                const techIcon = document.createElement('img')
                techIcon.alt = `${technology} icon`
                techIcon.src = getIconUrl(technologyDetails[technology].iconPath)

                techLink.appendChild(techIcon)
                techLi.appendChild(techLink)
                technologiesList.appendChild(techLi)
            })

            technologiesUsed.appendChild(technologiesText)
            technologiesUsed.appendChild(technologiesList)

            // host link
            const hostLink = document.createElement('a')
            hostLink.href = project.link
            hostLink.target = '_blank'

            const hostLinkIcon = document.createElement('img')
            hostLinkIcon.src = 'https://www.svgrepo.com/show/69056/globe-grid.svg'
            hostLinkIcon.className = 'project-link-icon'

            hostLink.appendChild(hostLinkIcon)

            // github
            const gitHubLink = document.createElement('a')
            gitHubLink.href = project.gitHub
            gitHubLink.target = '_blank'

            const gitHubImg = document.createElement('img')
            gitHubImg.src = 'https://cdn.simpleicons.org/github'
            gitHubImg.className = 'project-link-icon'

            gitHubLink.appendChild(gitHubImg)

            // links 
            const links = document.createElement('div')
            const linksText = document.createElement('h4')
            linksText.innerText = 'links'
            links.appendChild(linksText)
            links.appendChild(hostLink)
            links.appendChild(gitHubLink)

            // image
            const imageLink = document.createElement('a')
            imageLink.href = project.link
            imageLink.target = '_blank'
            const previewImage = document.createElement('img')
            previewImage.className = 'project-preview'
            previewImage.src = project.image
            previewImage.alt = `${project.name} preview`
            imageLink.appendChild(previewImage)

            // append elements
            projectLi.appendChild(projectTitle)
            projectLi.appendChild(imageLink)
            projectLi.appendChild(projectDescription)
            projectLi.appendChild(links)
            projectLi.appendChild(technologiesUsed)

            projectList.appendChild(projectLi)
        });
    })

// https://simpleicons.org/

const technologyDetails = {
    "html": { iconPath: "html5", websiteURL: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    "javascript": { iconPath: "javascript", websiteURL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    "react": { iconPath: "react", websiteURL: "https://reactjs.org/" },
    "nodejs": { iconPath: "node.js", websiteURL: "https://nodejs.org/" },
    "flutter": { iconPath: "flutter", websiteURL: "https://flutter.dev/" },
    "dart": { iconPath: "dart", websiteURL: "https://dart.dev/" },
    "postgres": { iconPath: "postgresql", websiteURL: "https://www.postgresql.org/" },
    "css": { iconPath: "css3", websiteURL: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    "svelte": { iconPath: "svelte", websiteURL: "https://svelte.dev/" },
    "python": { iconPath: "python", websiteURL: "https://www.python.org/" },
    "typescript": { iconPath: "typescript", websiteURL: "https://www.typescriptlang.org/" },
    "elm": { iconPath: "elm", websiteURL: "https://elm-lang.org/" },
    "ocaml": { iconPath: "ocaml", websiteURL: "https://ocaml.org/" },
    "deno": { iconPath: "deno", websiteURL: "https://deno.com" },
    "lua": { iconPath: "lua", websiteURL: "https://lua.org/" },
    "solid": { iconPath: "solid", websiteURL: "https://www.solidjs.com/" },
    "express": { iconPath: "express", websiteURL: "https://expressjs.com/"},
}

const getIconUrl = path => `https://cdn.simpleicons.org/${path}`