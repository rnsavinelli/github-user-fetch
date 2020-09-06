const github = new GitHub;

const searchUser = document.getElementById('searchUser');
const buttonSearch = document.getElementById('buttonSearch');
const buttonClear = document.getElementById('buttonClear');

buttonClear.addEventListener('click', (event) => {
    searchUser.value = '';
    profileClear();
});

buttonSearch.addEventListener('click', (event) => {
    const userText = searchUser.value;

    if(userText !== '') {
        github.getUser(userText).then(data => {
            if(data.profileData.message === 'Not Found') {
                profileNotFound();
            } else {
                //console.log(data.profileData);
                profileDisplay(data.profileData);
            }
        })
    }
});

searchUser.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        buttonSearch.click();
    }
});
