const repoListEl = $('#repo-list');

$.ajax({
    method: 'GET',
    url: 'https://api.github.com/users/saanderson1987/repos',
}).then( (repoList) => {

  repoList.forEach((repo) => {
    console.log(repo);
    repoListEl.append(`<li>${repo.name}</li>`);
  });

});
