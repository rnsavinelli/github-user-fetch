const github = new GitHub;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keypress', (event) => {
    const userText = event.target.value;

    if (event.key == 'Enter') {
        if(userText !== '') {
            github.getUser(userText).then(data => {
                if(data.profileData.message === 'Not Found') {
                    profileClear();
                    console.log(data.profileData.message);
                } else {
                    console.log(data.profileData);
                    profileDisplay(data.profileData);
                }
            })
        }
    }
});

