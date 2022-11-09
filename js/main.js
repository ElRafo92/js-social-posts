const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
//Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
const postsList = document.querySelector('.posts-list');

for(let i = 0; i < posts.length; i++) {
    const arrayPosts = posts[i];

    const post = document.createElement("div");
    post.classList.add('post');

//PARTE HEADER DEL POST
        const postHeader = document.createElement("div");
        postHeader.classList.add('post__header');
        post.append(postHeader);

            const postMeta = document.createElement("div");
            postMeta.classList.add('post-meta');
            postHeader.append(postMeta);

                const postMetaIcon = document.createElement("div");
                postMetaIcon.classList.add('post-meta__icon');
                postMeta.append(postMetaIcon);

                    const profilePic = document.createElement("img");
                    profilePic.classList.add('profile-pic');
                    profilePic.setAttribute('src', arrayPosts.author.image);
                    postMetaIcon.append(profilePic);

                const postMetaData = document.createElement("div");
                postMetaData.classList.add('post-meta__data');
                postMeta.append(postMetaData);

                    const postMetaAuthor = document.createElement("div");
                    postMetaAuthor.classList.add('post-meta__author');
                    postMetaAuthor.innerHTML = arrayPosts.author.name;
                    postMetaData.append(postMetaAuthor);

                    const postMetaTime = document.createElement("div");
                    postMetaTime.classList.add('post-meta__time');
                    postMetaTime.innerHTML = arrayPosts.created;
                    postMetaData.append(postMetaTime);
//PARTE MAIN DEL POST

        const postText = document.createElement("div");
        postText.classList.add('post__text');
        postText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis, distinctio iure error magnam laudantium.'
        post.append(postText);

        const postImage = document.createElement("div");
        postImage.classList.add('post__image');
        post.append(postImage);

            const postPic = document.createElement("img");
            postPic.setAttribute('src', arrayPosts.media)
            postImage.append(postPic);
//PARTE FOOTER DEL POST

        const postFooter = document.createElement("div");
        postFooter.classList.add('post__footer');
        post.append(postFooter);

            const likes = document.createElement("div");
            likes.classList.add('likes', 'js-likes');
            postFooter.append(likes);

                const likesCta = document.createElement("div");
                likesCta.classList.add('likes__cta');
                likes.append(likesCta);

                    const likeBtn = document.createElement("a");
                    likeBtn.classList.add('like-button', 'js-like-button');
                    likesCta.append(likeBtn);

                        const likeBtnIcon = document.createElement("i");
                        likeBtnIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
                        likeBtn.append(likeBtnIcon);

                        const likeBtnLabel = document.createElement("span");
                        likeBtnLabel.classList.add('like-button__label');
                        likeBtnLabel.innerHTML = ' Mi Piace';
                        likeBtn.append(likeBtnLabel);
    
                const likesCounter = document.createElement("div");
                likesCounter.classList.add('likes__counter');
                likesCounter.innerHTML =`Piace a <b id="like-counter-1" class="js-likes-counter">${arrayPosts.likes}</b> persone`
                likes.append(likesCounter);

                    /*const jsLikesCounter = document.createElement("b");
                    jsLikesCounter.classList.add('js-likes-counter');
                    jsLikesCounter.innerHTML = arrayPosts.likes;
                    likesCounter.append(jsLikesCounter);*/

    postsList.append(post);
    
};

const addLike = document.querySelectorAll('.like-button');

for (let i = 0; i < addLike.length; i++) {
addLike[i].addEventListener('click', function() {
    addLike[i].classList.add('like-button--liked');
});
}
console.log(addLike)
