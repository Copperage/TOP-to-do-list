function createLayout() {
	const header = document.createElement('header');

	const contentBox = document.createElement('div');
	contentBox.className = 'content-box';

	const leftDiv = document.createElement('div');
	leftDiv.className = 'left';

	const rightDiv = document.createElement('div');
	rightDiv.className = 'right';

	const content = document.getElementById('content');
	content.appendChild(header);
	content.appendChild(contentBox);
	contentBox.appendChild(leftDiv);
	contentBox.appendChild(rightDiv);
}

function createHeader() {
	const header = document.querySelector('header');

	let h1 = document.createElement('h1');
	h1.textContent = 'To-do List';
	header.appendChild(h1);
}

function initWebsite() {
	createLayout();
	createHeader();
}

export default initWebsite;
