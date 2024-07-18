let user = {};
let skills = [];
let education = {};
let projects = [];

exports.postUser = (req, res) => {
    user = {...req.body};
    res.status(200).json(user);
}

exports.postEducation = (req, res) => {
    education = {...req.body};
    res.status(200).json(education);
}

exports.postSkills = (req, res) => {
    const skill = {...req.body};
    skills.push(skill);
    res.status(200).json(skill);
}

exports.postProjects = (req, res) => {
    const project = {...req.body};
    projects.push(project);
    res.status(200).json(project);
}

const displayArray = (array, word,key) =>{
    if (array.length <=0){
        return `<li>No ${word}</li>`;
    }

    return array.map(word => `<li>${word[key]}</li>`).join('\n');
}

const template = (name, surname,education,htmlSkills,htmlProjects) => {
    return `
      <!DOCTYPE html>
          <html lang="en">
              <head>
                  <title>Node Static Server</title>
              </head>
              <body>
                  <h1>${name} ${surname}</h1>
                  <h2>Education</h2>
                  <p>Place of study : ${education.study || 'None'}</p>
                  <p>Highest Achievement : ${education.achievement || 'None'}</p>
                  <h2>Skills:</h2>
                  <ul>
                    ${htmlSkills}
                  </ul>
                  <h2>Projects:</h2>
                  <ul>
                    ${htmlProjects}
                  </ul>
              </body>
          </html>
      `
  }

exports.serveWebpage = (req, res) => {
    const name = user.name || 'Guest';
    const surname = user.surname || '';
    const htmlSkills = displayArray(skills, 'skills', 'skill');
    const htmlProjects = displayArray(projects, 'projects','project');
    const htmlContent = template(name,surname, education,htmlSkills,htmlProjects);
    res.send(htmlContent);

}