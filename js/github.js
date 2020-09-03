const apiURL = 'https://api.github.com/';

class GitHub {
    constructor(){
    }

    async getUser(user){
        const profileResponse = await fetch(`${apiURL}users/${user}`);
        const profileData = await profileResponse.json();

        return {
            profileData
        }
    }
}
