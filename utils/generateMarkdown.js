// functions to place questions input into readme if user answers questions
function usage(usage)  {
  if (!usage) return ``
  
  return`
  ## Usage
  ${usage}`
};

function installation(install)  {
  if (!install) return ``
  
  return`
  ## Installation
  ${install}`
};

function contributor(contrib)  {
  if (!contrib) return ``
  
  return`
  ## Contributions
  ${contrib}`
};

function tests(tests) {
  if (!tests) return ``
  
  return`
  ## Tests
  ${tests}`
}

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](https://choosealicense.com/licenses/${license})`
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
  This project is covered under the ${license} ${renderLicenseLink(license)}`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}'s, READMe
  
  ${renderLicenseBadge(data.license)}
  
  ## Descriptions
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [GitHub](#github)
  ${data.usage ? `* [Usage](#usage)`:''}
  ${data.install ? `* [Installation](#installation)`:''}
  ${data.contributions ? `* [Contributions](#contribution)`:''}
  ${data.tests ? `* [Tests](#tests)`:''}
  ${data.license ? `* [License](#license)`:''}
  
  ## GitHub
  ${data.github}
  
  ${usage(data.usage)}

  ${installation(data.install)}
  
  ${contributor(data.contributor)}
  
  ${tests(data.tests)}
  
  ${renderLicenseSection(data.license)}
  
  Questions or comments find me on GitHub [${data.github}](https://github.com/${data.github})  or E-mail me: ${data.email}
  
  `;
}

module.exports = generateMarkdown;