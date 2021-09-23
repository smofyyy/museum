const pictureInnerContainer = document.querySelector('.picture-inner-container');
const picture_array = ['galery1', 'galery2', 'galery3', 'galery4', 'galery5', 'galery6', 'galery7', 'galery8', 'galery9', 'galery10', 'galery11', 'galery12', 'galery13', 'galery14', 'galery15'];

(function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
})(picture_array);

picture_array.map(function (item) {
    let img = document.createElement('img');
    img.classList.add('picture')
    img.src = `assets/img/galery/${item}.jpg`;
    img.alt = `${item}`;
    pictureInnerContainer.append(img);
});

