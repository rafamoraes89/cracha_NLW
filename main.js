const linksSocialMedia = {
  github: 'rafamoraes89',
  youtube: 'channel/UCXhk0mCpPxbi3kP9S8lYAFA',
  facebook: 'rafael.moraes.585559',
  instagram: 'rafamora2089',
  twitter: 'Mr89Rafa'
}

function changeSocialMediaLinks() {
  for (let i of socialLinks.children) {
    const social = i.getAttribute('class')
    i.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
