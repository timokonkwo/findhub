class GitHUb {
    constructor() {
        this.client_id = '51d07af851cb027fafa4';
        this.client_secret = '822029f104b727a33097fb97c44525b6b52e4092';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile }
    }
}