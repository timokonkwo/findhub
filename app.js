// Instantiate the github class

github = new GitHUb();

// Search Input
const SearchUser = document.getElementById('searchUser');

// Search Input Event Listener

SearchUser.addEventListener('keyup', (e) => {
    // Get Input text

    const username = e.target.value;

    if (username !== '') {
        // Make http call

        github.getUser(username)
            .then(data => {
                console.log(data.profile)
                if (data.profile.message == 'Not Found') {
                    // Show Alert
                } else {
                    // Show profile
                }
            })
    } else {

        // Clear profile
    }
})