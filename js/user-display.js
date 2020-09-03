const profile = document.querySelector('#profile');

function profileClear() {
    profile.innerHTML = '';
}

function profileDisplay(profileData) {
    profileClear();

    const div = document.createElement('div');
    div.className = 'card card-body row';
    if(!/Mobi/i.test(navigator.userAgent) || !/Android/i.test(navigator.userAgent)) {
        div.style.flexDirection='unset';
    }
    div.id = 'wrapper';
    profile.append(div);

    const wrapper = document.querySelector('#wrapper');

    const leftColumn = document.createElement('div');
    leftColumn.className = 'col-sm-3 d-flex justify-content-center';
    const profileIMG = document.createElement('img');
    profileIMG.src = profileData.avatar_url;
    leftColumn.append(profileIMG);
    wrapper.append(leftColumn);

    const rightColumn = document.createElement('div');
    rightColumn.className = 'col-sm-9';
    const profileUser = profileData.login;
    rightColumn.append(document.createTextNode(`Username: ${profileUser}`));
    wrapper.append(rightColumn);
}
