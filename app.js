// Instantiate the github class
github = new GitHUb();

// Instantiate the UI class
ui = new UI();

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
                if (data.profile.message == 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    ui.clearAlert();
                }
            })

    } else {

        ui.clearProfile();
    }
})