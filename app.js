const toggle = document.querySelector('.btn__language input')
const imgs =
    [
        star = 'img/star.svg',
        gamepad = 'img/Gamepad_lights.svg',
        monitor = 'img/monitor.svg',
        camera = 'img/camera.svg',
        record = 'img/record.svg'
    ]

const body = document.querySelector('.container__body')

body.innerHTML =
    `
            <div class="left__container">

                <div class="skills">
                    <h3>HABILIDADES</h3>
                    <div class="skills_info">
                        <h4>HTML</h4>
                        <span>
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                        </span>
                    </div>
                    <div class="skills_info">
                        <h4>CSS</h4>
                        <span>
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                        </span>
                    </div>
                    <div class="skills_info">
                        <h4>JAVASCRIPT</h4>
                        <span>
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                            <img src="img/star.svg" alt="">
                        </span>
                    </div>
                </div>
                <div class="languages">
                    <h3>LÍNGUAS</h3>
                    <div class="languages_info">
                        <h4>PORTUGUÊS</h4>
                        <span><progress max="100" value="100"></progress></span>
                    </div>
                    <div class="languages_info">
                        <h4>INGLÊS</h4>
                        <span><progress max="100" value="80"></progress></span>
                    </div>
                    <div class="languages_info">
                        <h4>ESPANHOL</h4>
                        <span><progress max="100" value="40"></progress></span>
                    </div>
                </div>
                <div class="education">
                    <h3>EDUCAÇÃO</h3>
                    <div class="education_details">
                        <h5>ESTG-IPVC</h5>
                        <p>Desenvolvimento Web e Multimédia (Set 2019 - Ago 2021)</p>
                    </div>
                </div>
                <div class="hobbies">
                    <h3>HOBBIES</h3>
                    <div class="hobbies_icons">
                        <a href=""><img src="img/Gamepad_light.svg" alt="Gaming"></a>
                        <a href=""><img src="img/monitor.svg" alt="Computer"></a>
                        <a href=""><img src="img/camera.svg" alt="Photos"></a>
                        <a href=""><img src="img/ball.svg" alt="Football"></a>
                    </div>
                </div>
            </div>
            <div class="right__container">
                <div class="right__container_content">
                    <div class="about_me">
                        <h3>SOBRE MIM</h3>
                        <p>Sou um jovem, que recentemente encontrou uma paixão em desenvolvimento web e que a cada dia
                            que
                            passa tem a ambição de aprender mais.
                            Considero-me uma pessoa autodidata apesar de ter terminado um Curso Superior Técnico em
                            Desenvolvimento Web e Multimédia.
                        </p>
                    </div>
                    <div class="experience">
                        <h3>EXPERIÊNCIA</h3>
                        <div class="experience_jobs">
                            <img src="img/record.svg" alt="">
                            <h5>MUSA SOFTWARE</h5>
                        </div>
                        <p>Estágio Curricular
                            (Abril - Agosto 2021)
                        </p>
                    </div>
                </div>
            </div>
        `

toggle.addEventListener('click', () => {
    const pten = toggle.parentNode.querySelector('.PTEN')

    pten.textContent = toggle.checked ? 'PT' : 'EN'



    if (toggle.checked) {
        const body = document.querySelector('.container__body')

        // language PT 
        body.innerHTML =
            `
            <div class="left__container">

            <div class="skills">
                <h3>HABILIDADES</h3>
                <div class="skills_info">
                    <h4>HTML</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
                <div class="skills_info">
                    <h4>CSS</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
                <div class="skills_info">
                    <h4>JAVASCRIPT</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
            </div>
            <div class="languages">
                <h3>LÍNGUAS</h3>
                <div class="languages_info">
                    <h4>PORTUGUÊS</h4>
                    <span><progress max="100" value="100"></progress></span>
                </div>
                <div class="languages_info">
                    <h4>INGLÊS</h4>
                    <span><progress max="100" value="80"></progress></span>
                </div>
                <div class="languages_info">
                    <h4>ESPANHOL</h4>
                    <span><progress max="100" value="40"></progress></span>
                </div>
            </div>
            <div class="education">
                <h3>EDUCAÇÃO</h3>
                <div class="education_details">
                    <h5>ESTG-IPVC</h5>
                    <p>Desenvolvimento Web e Multimédia (Set 2019 - Ago 2021)</p>
                </div>
            </div>
            <div class="hobbies">
                <h3>HOBBIES</h3>
                <div class="hobbies_icons">
                    <a href=""><img src="img/Gamepad_light.svg" alt="Gaming"></a>
                    <a href=""><img src="img/monitor.svg" alt="Computer"></a>
                    <a href=""><img src="img/camera.svg" alt="Photos"></a>
                    <a href=""><img src="img/ball.svg" alt="Football"></a>
                </div>
            </div>
        </div>
        <div class="right__container">
            <div class="right__container_content">
                <div class="about_me">
                    <h3>SOBRE MIM</h3>
                    <p>Sou um jovem, que recentemente encontrou uma paixão em desenvolvimento web e que a cada dia
                        que
                        passa tem a ambição de aprender mais.
                        Considero-me uma pessoa autodidata apesar de ter terminado um Curso Superior Técnico em
                        Desenvolvimento Web e Multimédia.
                    </p>
                </div>
                <div class="experience">
                    <h3>EXPERIÊNCIA</h3>
                    <div class="experience_jobs">
                        <img src="img/record.svg" alt="">
                        <h5>MUSA SOFTWARE</h5>
                    </div>
                    <p>Estágio Curricular
                        (Abril - Agosto 2021)
                    </p>
                </div>
            </div>
        </div>
        `
    } else {
        const body = document.querySelector('.container__body')

        // language EN 
        body.innerHTML =
            `
            <div class="left__container">

            <div class="skills">
                <h3>SKILLS</h3>
                <div class="skills_info">
                    <h4>HTML</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
                <div class="skills_info">
                    <h4>CSS</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
                <div class="skills_info">
                    <h4>JAVASCRIPT</h4>
                    <span>
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                        <img src="img/star.svg" alt="">
                    </span>
                </div>
            </div>
            <div class="languages">
                <h3>LANGUAGES</h3>
                <div class="languages_info">
                    <h4>PORTUGUESE</h4>
                    <span><progress max="100" value="100"></progress></span>
                </div>
                <div class="languages_info">
                    <h4>ENGLISH</h4>
                    <span><progress max="100" value="80"></progress></span>
                </div>
                <div class="languages_info">
                    <h4>SPANISH</h4>
                    <span><progress max="100" value="40"></progress></span>
                </div>
            </div>
            <div class="education">
                <h3>EDUCATION</h3>
                <div class="education_details">
                    <h5>ESTG-IPVC</h5>
                    <p>Web Development and Multimedia (Sep 2019 - Aug 2021)</p>
                </div>
            </div>
            <div class="hobbies">
                <h3>HOBBIES</h3>
                <div class="hobbies_icons">
                    <a href=""><img src="img/Gamepad_light.svg" alt="Gaming"></a>
                    <a href=""><img src="img/monitor.svg" alt="Computer"></a>
                    <a href=""><img src="img/camera.svg" alt="Photos"></a>
                    <a href=""><img src="img/ball.svg" alt="Football"></a>
                </div>
            </div>
        </div>
        <div class="right__container">
            <div class="right__container_content">
                <div class="about_me">
                    <h3>ABOUT ME</h3>
                    <p>I’m a 24 old man who recently  found a new passion in web development and wants to learn more every single day.
                    I consider myself an self-taught person even though i completed an higher education in Web Development and Multimedia.                    
                    </p>
                </div>
                <div class="experience">
                    <h3>EXPERIENCE</h3>
                    <div class="experience_jobs">
                        <img src="img/record.svg" alt="">
                        <h5>MUSA SOFTWARE</h5>
                    </div>
                    <p>Estágio Curricular
                        (April - August 2021)
                    </p>
                </div>
            </div>
        </div>
        `
    }

})

