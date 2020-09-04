const profile = document.querySelector('#profile');

function profileClear() {
    profile.innerHTML = '';
}

function profileNotFound() {
    profileClear();

    const div = document.createElement('div');
    div.className = 'card card-body';
    div.id = 'wrapper';
    profile.append(div);

    const wrapper = document.querySelector('#wrapper');
    wrapper.append(document.createTextNode('User not found.'));
}

function profileDisplay(profileData) {
    profileClear();

    const div = document.createElement('div');
    div.className = 'card card-body row';
    div.id = 'wrapper';
    profile.append(div);

    const wrapper = document.querySelector('#wrapper');

    const leftColumn = document.createElement('div');
    leftColumn.className = 'col-sm d-flex justify-content-center';
    const profileIMG = document.createElement('img');
    profileIMG.src = profileData.avatar_url;
    leftColumn.append(profileIMG);
    wrapper.append(leftColumn);

    const rightColumn = document.createElement('div');
    rightColumn.className = 'col-sm d-flex justify-content-center';

    var ul = document.createElement('ul');
    ul.className = 'list-group';

    var name = document.createElement('li');
    name.className = 'list-group-item';
    const profileName = profileData.login;
    name.appendChild(document.createTextNode(`Name: ${profileName}`));
    ul.append(name);

    var user = document.createElement('li');
    user.className = 'list-group-item';
    const profileUser = profileData.login;
    user.appendChild(document.createTextNode(`Username: ${profileUser}`));
    ul.append(user);

    var bio = document.createElement('li');
    bio.className = 'list-group-item';
    const profileBio = profileData.bio;
    bio.appendChild(document.createTextNode(`Bio: ${profileBio}`));
    ul.append(bio);

    var location = document.createElement('li');
    location.className = 'list-group-item';
    const profileLocation = profileData.location;
    location.appendChild(document.createTextNode(`Location: ${profileLocation}`));
    ul.append(location);

    var blog = document.createElement('li');
    blog.className = 'list-group-item';
    const profileBlog = profileData.blog;
    blog.appendChild(document.createTextNode(`Website: ${profileBlog}`));
    ul.append(blog);

    var company = document.createElement('li');
    company.className = 'list-group-item';
    const profileCompany = profileData.company;
    company.appendChild(document.createTextNode(`Company: ${profileCompany}`));
    ul.append(company);

    var date = document.createElement('li');
    date.className = 'list-group-item';
    const profileDate = profileData.created_at;
    date.appendChild(document.createTextNode(`Creation Date: ${profileDate}`));
    ul.append(date);

    var followers = document.createElement('li');
    followers.className = 'list-group-item';
    const profileFollowers = profileData.followers;
    followers.appendChild(document.createTextNode(`Followers: ${profileFollowers}`));
    ul.append(followers);

    var following = document.createElement('li');
    following.className = 'list-group-item';
    const profileFollowing = profileData.following;
    following.appendChild(document.createTextNode(`Following: ${profileFollowing}`));
    ul.append(following);

    var publicRepos = document.createElement('li');
    publicRepos.className = 'list-group-item';
    const profilePublicRepos = profileData.public_repos;
    publicRepos.appendChild(document.createTextNode(`Public Repositories: ${profilePublicRepos}`));
    ul.append(publicRepos);

    var publicGists = document.createElement('li');
    publicGists.className = 'list-group-item';
    const profilePublicGists = profileData.public_gists;
    publicGists.appendChild(document.createTextNode(`Public Gists: ${profilePublicGists}`));
    ul.append(publicGists);

    rightColumn.append(ul);
    wrapper.append(rightColumn);
}
