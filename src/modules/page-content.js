import starSvg from './svgs/star-f.svg';
import plusSvg from './svgs/plus.svg';
import tickboxSvg from './svgs/Tickbox.svg';
import crossboxSvg from './svgs/Crossbox.svg';

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
	function starSvgImport() {
		const element = document.createElement('div');

		element.innerHTML = starSvg;

		return element;
	}

	function plusSvgImport() {
		const element = document.createElement('div');

		element.innerHTML = plusSvg;

		return element;
	}

	function InboxSection() {
		const inboxList = document.createElement('ul');
		inboxList.className = 'inbox';

		let inboxHeader = document.createElement('h2');
		inboxHeader.textContent = 'Home';

		let today = document.createElement('li');
		today.textContent = 'Today';

		let thisWeek = document.createElement('li');
		thisWeek.textContent = 'This Week';

		let important = document.createElement('li');
		important.className = 'important';

		leftDiv.appendChild(inboxList);

		inboxList.appendChild(inboxHeader);
		inboxList.appendChild(today);
		inboxList.appendChild(thisWeek);
		inboxList.appendChild(important);
		important.appendChild(starSvgImport());
		important.appendChild(document.createTextNode('Important'));

		const navList = inboxList.querySelectorAll('li');

		navList.forEach((item) => {
			item.classList.add('nav-li');
		});
	}

	let separator = document.createElement('div');
	separator.className = 'seperator';

	function ProjectsSection() {
		const projectsList = document.createElement('ul');
		projectsList.className = 'projects';

		let projectsHeader = document.createElement('h2');
		projectsHeader.textContent = 'Projects';

		let addProject = document.createElement('li');

		leftDiv.appendChild(projectsList);
		projectsList.appendChild(projectsHeader);
		projectsList.appendChild(addProject);
		addProject.appendChild(plusSvgImport());
		addProject.appendChild(document.createTextNode('Add Project'));
	}

	function Footer() {
		let footerText = document.createElement('footer');
		let githubLink = document.createElement('a');
		githubLink.href = 'https://github.com/Copperage/TOP-to-do-list';
		githubLink.textContent = 'Github';
		footerText.appendChild(githubLink);
		footerText.innerHTML += ' | © 2023 Copperage';

		leftDiv.appendChild(footerText);
	}

	const leftDiv = document.querySelector('.left');

	InboxSection();
	leftDiv.appendChild(separator);
	ProjectsSection();
	Footer();
}

// Right Side
function createCards() {
	function tickboxSvgImport() {
		const element = document.createElement('div');

		element.innerHTML = tickboxSvg;

		return element;
	}

	function crossboxSvgImport() {
		const element = document.createElement('div');

		element.innerHTML = crossboxSvg;

		return element;
	}

	let cardDiv = document.createElement('div');
	cardDiv.className = 'card';

	let cardHeader = document.createElement('h2');
	cardHeader.textContent = `Important Reminder`;

	let cardText = document.createElement('p');
	cardText.textContent = `Temporary text - Do this thing that you've made a very important reminder of.`;

	let cardDivNav = document.createElement('div');
	cardDivNav.className = 'card-nav';

	const rightDiv = document.querySelector('.right');

	rightDiv.appendChild(cardDiv);
	cardDiv.appendChild(cardHeader);
	cardDiv.appendChild(cardText);
	cardDiv.appendChild(cardDivNav);
	cardDivNav.appendChild(tickboxSvgImport());
	cardDivNav.appendChild(crossboxSvgImport());
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
	createCards();

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
