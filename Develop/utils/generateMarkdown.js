// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    None: '' 
  };
  
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
    None: ''
  };
  
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `
## License

This project is licensed under the ${license} License. Click [here](${renderLicenseLink(license)}) for more details.
${renderLicenseBadge(license)}
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
`;

  if (data.license && data.license !== 'None') {
    tableOfContents += `- [License](#license)\n`;
  }

  tableOfContents += `- [Contributing](#contributing)\n`;
  tableOfContents += `- [Tests](#tests)\n`;
  tableOfContents += `- [Questions](#questions)\n`;

  return `# ${data.title}
${tableOfContents}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)} 

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
