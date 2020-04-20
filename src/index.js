console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

document.addEventListener('DOMContentLoaded', function() {
	fetch(imgUrl).then((respond) => respond.json()).then((results) => {
		results.message.forEach((image) => addImage(image));
	});
});

function addImage(imgUrl) {
	let container = document.querySelector('#dog-image-container');
	let img = document.createElement('img');
	img.setAttribute('src', imgUrl);
	container.appendChild(img);
}
