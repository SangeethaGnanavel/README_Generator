// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "apache":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "eclipse":
      return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
    case "mit":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "unlicense":
      return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "apache":
      return "https://opensource.org/license/apache-2-0/";
    case "boost":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "eclipse":
      return "https://opensource.org/licenses/EPL-1.0";
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "unlicense":
      return "http://unlicense.org/";
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  formattedUsage = data.usage.split(".").join("<br />");
  const licensebadge = renderLicenseBadge(data.license);
  const licenselink = renderLicenseLink(data.license);

  return `${licensebadge}
  # ${data.title}

  ## Description
   ${data.description}.

  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
  ${data.install}

  ## Usage
  ${formattedUsage}.

  ## License
  This application uses : ${
    data.license.charAt(0).toUpperCase() + data.license.slice(1)
  } \n
  Click the link to read license information ${licenselink}

  ## Contributing
  ${data.contribute}.

  ## Tests
  ${data.test}.

  ## Questions
  GitHub repository URL : ${data.Gitrepo}

  Email for Question : ${data.contact}
`;
}

module.exports = { generateMarkdown };
