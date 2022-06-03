class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-3" src="${user.avatar_url}"/>

                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge bg-primary mb-3">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary mb-3">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success mb-3">Followers: ${user.followers}</span>
                        <span class="badge bg-info mb-3">Following: ${user.following}</span>

                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id='repos'></div>
        `
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div class="col-md-6">
                            <span class="badge bg-primary mb-3">Stars: ${repo.stargazers_count}</span>
                            <span class="badge bg-secondary mb-3">Watchers: ${repo.watchers_count}</span>
                            <span class="badge bg-success mb-3">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;

    }



    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Show Alert message
    showAlert(message, classname) {
        // Clear any previous alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = classname;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get searchbox
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3s
        setTimeout(() => {
            this.clearAlert()
        }, 2000);
    }

    // Clear Alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}