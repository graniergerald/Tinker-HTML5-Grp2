const article_tab = document.querySelectorAll('.blog-nav-list li');
const articles = document.querySelectorAll('.article');

article_tab.forEach(tab =>
  tab.addEventListener('click', function (e) {
    let index = e.target.dataset.tab;
    //  Animation boutons du blog
    article_tab.forEach(tab =>
      tab.querySelector('button').classList.remove('blog-nav-item--active')
    );
    e.target.classList.add('blog-nav-item--active');
    // Affiche l'article
    articles.forEach(article =>
      article.classList.remove('blog-article--active')
    );
    document
      .querySelector(`.article-${index}`)
      .classList.add("blog-nav-item--active'");
  })
);
