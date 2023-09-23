const informations = {
    skills: [
        {title: 'Javascript', description: ['Developing websites']},
        {title: 'Node JS', description: ["API's, websocket"]},
        {title: "SQL Server", description: ['Query, jobs, procedure']},
        {title: 'Totvs Fluig', description: ['Process, widgets, pages']},
    ],
    experiences: [
        {title: 'Renapsi', description: ['Developer Junior']}
    ],
    education: [
        {title: 'UFG - Universidade Federal de Goiás', description: ['Engineer Software', 'Graduation','2023 - 2028']}
    ]
}

const aboutMe = document.querySelector('.aboutMe')
const options = aboutMe.querySelector('.options')
const optionResult = aboutMe.querySelector('.option-result')

const lisOptions = options.querySelectorAll('li')
lisOptions.forEach(li => {
    li.addEventListener('click', (event) => {
        const clickedLi = event.target
        clickedLi.classList.add('active')
        lisOptions.forEach(li2 => {
            if (clickedLi != li2) li2.classList.remove('active')
        })

        const optionClicked = clickedLi.getAttribute('data-option')

        const infos = informations[optionClicked]

        optionResult.innerHTML = ''
        infos.forEach(item => {
            const { title, description } = item
            const div = document.createElement('div')
            div.innerHTML = `<p class="main">${title}</p>`
            description.forEach(desc => {
                div.innerHTML += `<p>${desc}</p>`
            })
            optionResult.appendChild(div)
        })
    })
})