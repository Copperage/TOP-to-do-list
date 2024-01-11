// Layout

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

// Header

function createHeader() {
	const header = document.querySelector('header');

	let h1 = document.createElement('h1');
	h1.textContent = 'To-do List';
	header.appendChild(h1);
}

// Left side/Navbar

function createNav() {
	const inboxList = document.createElement('ul');
	inboxList.className = 'inbox';

	let inboxHeader = document.createElement('h2');
	inboxHeader.textContent = 'Home';

	let today = document.createElement('li');
	today.textContent = 'Today';

	let thisWeek = document.createElement('li');
	thisWeek.textContent = 'This Week';

	let important = document.createElement('li');
	important.textContent = 'Important';

	let separator = document.createElement('div');
	separator.className = 'seperator';

	const projectsList = document.createElement('ul');
	projectsList.className = 'inbox';

	let projectsHeader = document.createElement('h2');
	projectsHeader.textContent = 'Projects';

	const leftDiv = document.querySelector('.left');

	leftDiv.appendChild(inboxList);

	inboxList.appendChild(inboxHeader);
	inboxList.appendChild(today);
	inboxList.appendChild(thisWeek);
	inboxList.appendChild(important);

	leftDiv.appendChild(separator);

	leftDiv.appendChild(projectsList);
	projectsList.appendChild(projectsHeader);

	const navList = inboxList.querySelectorAll('li');

	navList.forEach((item) => {
		item.classList.add('nav-li');
	});
}

function setActive(selectedItem) {
	const navItems = document.querySelectorAll('.nav-li');

	navItems.forEach((item) => {
		item.classList.remove('active');
	});

	selectedItem.classList.add('active');
}

function initWebsite() {
	createLayout();
	createHeader();
	createNav();

	const navList = document.querySelectorAll('.nav-li');
	const defaultNavList = document.querySelector('.nav-li');
	setActive(defaultNavList);

	navList.forEach((item) => {
		item.addEventListener('click', function () {
			setActive(item);
		});
	});

	// loadContent();
}

export default initWebsite;
