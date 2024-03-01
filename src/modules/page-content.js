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
	let projects = [];

	function plusSvgImport() {
		const element = document.createElement('div');

		element.innerHTML = plusSvg;

		return element;
	}

	function crossboxSvgImport(projectsList, projectValue, projectName) {
		const element = document.createElement('div');
		element.className = 'close';

		element.innerHTML = crossboxSvg;

		element.addEventListener('click', function () {
			const index = projects.findIndex(
				(project) => project.name === projectName
			);
			if (index !== -1) {
				projects.splice(index, 1);
			}

			projectsList.removeChild(projectValue);
		});

		return element;
	}

	function inboxSection() {
		const inboxList = document.createElement('ul');
		inboxList.className = 'inbox';

		let inboxHeader = document.createElement('li');
		inboxHeader.textContent = 'Home';

		let today = document.createElement('li');
		today.textContent = 'Today';

		let thisWeek = document.createElement('li');
		thisWeek.textContent = 'This Week';

		leftDiv.appendChild(inboxList);

		inboxList.appendChild(inboxHeader);
		inboxList.appendChild(today);
		inboxList.appendChild(thisWeek);

		const navList = inboxList.querySelectorAll('li');

		navList.forEach((item) => {
			item.classList.add('nav-li');
		});
	}

	let separator = document.createElement('div');
	separator.className = 'seperator';

	function projectsSection() {
		const projectsList = document.createElement('ul');
		projectsList.classList.add('projects');

		let projectsHeader = document.createElement('h2');
		projectsHeader.textContent = 'Projects';

		let projectForm = document.createElement('form');

		let projectInput = document.createElement('input');
		projectInput.type = 'text';
		projectInput.placeholder = 'Enter project name';

		let plusSvg = plusSvgImport();

		projectsList.appendChild(projectsHeader);
		projectsList.appendChild(projectForm);
		projectForm.appendChild(plusSvg);
		projectForm.appendChild(projectInput);

		leftDiv.appendChild(projectsList);

		function projectRender() {
			clearProjects(projectsList);

			projectsList.appendChild(projectsHeader);
			projectsList.appendChild(projectForm);

			projects.forEach((project) => {
				const projectValue = document.createElement('li');
				projectValue.classList.add('nav-li');
				projectValue.textContent = project.name;

				projectsList.appendChild(projectValue);

				projectValue.appendChild(
					crossboxSvgImport(projectsList, projectValue, project.name)
				);
			});
		}

		function projectFunction(e) {
			e.preventDefault();

			let projectName = projectInput.value;
			if (projectName == null || projectName === '') return;

			const project = createProjectList(projectName);
			projectInput.value = null;
			projects.push(project);
			projectRender();
			// console.log(projects);
		}

		function createProjectList(name) {
			return { id: Date.now().toString(), name: name, tasks: [] };
		}

		function clearProjects(element) {
			while (element.firstChild) {
				element.removeChild(element.firstChild);
			}
		}

		plusSvg.addEventListener('click', projectFunction);

		projectForm.addEventListener('submit', projectFunction);
	}

	function Footer() {
		let footerText = document.createElement('footer');
		let githubLink = document.createElement('a');
		githubLink.href = 'https://github.com/Copperage/TOP-to-do-list';
		githubLink.textContent = 'Github';
		githubLink.target = '_blank';
		footerText.appendChild(githubLink);
		footerText.innerHTML += ' | © 2023 Copperage';

		leftDiv.appendChild(footerText);
	}

	const leftDiv = document.querySelector('.left');

	inboxSection();
	leftDiv.appendChild(separator);
	projectsSection();
	Footer();
}

function clearRightContent() {
	const rightDiv = document.querySelector('.right');
	const cards = rightDiv.querySelectorAll('.card');

	cards.forEach((card) => {
		card.remove();
	});
}

function setActive(selectedItem) {
	const navItems = document.querySelectorAll('.nav-li');

	navItems.forEach((item) => {
		item.classList.remove('active');
	});

	selectedItem.classList.add('active');

	document.addEventListener('click', (event) => {
		const clickedNavItem = event.target.closest('.nav-li');

		if (clickedNavItem) {
			setActive(clickedNavItem);
		}
	});
}
// Right Side

// Card reminder creation functionality
function createCards(header, text, projectName) {
	function crossboxSvgImport() {
		const element = document.createElement('div');
		element.className = 'delete';

		element.innerHTML = crossboxSvg;

		element.addEventListener('click', () => {
			cardDiv.remove();
		});

		return element;
	}

	function tickboxSvgImport() {
		const element = document.createElement('div');
		element.className = 'confirm';

		element.innerHTML = tickboxSvg;

		element.addEventListener('click', () => {
			const completedText = document.createElement('span');

			cardHeader.textContent += ' - ';

			completedText.textContent = 'Completed!';
			completedText.classList.add('completed-text');

			cardHeader.appendChild(completedText);
		});

		return element;
	}

	function crossboxSvgImport() {
		const element = document.createElement('div');
		element.className = 'delete';

		element.innerHTML = crossboxSvg;

		element.addEventListener('click', () => {
			cardDiv.remove();
		});

		return element;
	}

	let cardDiv = document.createElement('div');
	cardDiv.className = 'card';

	let cardHeader = document.createElement('h2');
	let cardHeaderPrompt = header || prompt('Enter title');
	cardHeader.textContent = cardHeaderPrompt;

	let cardText = document.createElement('p');
	let cardTextPrompt = text || prompt('Enter your description');
	cardText.textContent = cardTextPrompt;

	let cardDivNav = document.createElement('div');
	cardDivNav.className = 'card-nav';

	const rightDiv = document.querySelector('.right');

	rightDiv.appendChild(cardDiv);
	cardDiv.appendChild(cardHeader);
	cardDiv.appendChild(cardText);
	cardDiv.appendChild(cardDivNav);
	cardDivNav.appendChild(tickboxSvgImport());
	cardDivNav.appendChild(crossboxSvgImport());

	addTaskToLocalStorage(header, projectName);
}

function createCardButton() {
	function plusSvgImport() {
		const element = document.createElement('div');
		element.className = 'create-card';

		element.innerHTML = plusSvg;

		return element;
	}

	function crossboxSvgImport() {
		const element = document.createElement('div');
		element.className = 'close';

		element.innerHTML = crossboxSvg;

		return element;
	}

	const rightDiv = document.querySelector('.right');

	let plusButtonDiv = document.createElement('div');
	plusButtonDiv.className = 'plusButton';

	rightDiv.appendChild(plusButtonDiv);
	plusButtonDiv.appendChild(plusSvgImport());

	const plusSvgElement = plusButtonDiv.querySelector('.create-card');

	plusSvgElement.addEventListener('click', () => {
		const modal = document.createElement('div');
		modal.className = 'modal';

		const modalContent = document.createElement('div');
		modalContent.className = 'modal-content';

		const title = document.createElement('h3');
		title.textContent = 'Title';

		const titleInput = document.createElement('input');
		titleInput.placeholder = 'Enter title';

		const description = document.createElement('h3');
		description.textContent = 'Description';

		const descriptionInput = document.createElement('input');
		descriptionInput.placeholder = 'Enter description';

		const addButton = document.createElement('button');
		addButton.textContent = 'Add Card';

		addButton.addEventListener('click', () => {
			const cardTitle = titleInput.value;
			const cardDescription = descriptionInput.value;

			if (cardTitle && cardDescription) {
				createCards(cardTitle, cardDescription);
				modal.remove();
			} else {
				alert('Please add a title and descripton for your card.');
			}
		});

		modalContent.appendChild(title);
		modalContent.appendChild(titleInput);
		modalContent.appendChild(description);
		modalContent.appendChild(descriptionInput);
		modalContent.appendChild(addButton);
		modalContent.appendChild(crossboxSvgImport());

		modal.appendChild(modalContent);
		document.body.appendChild(modal);

		const closeButton = document.querySelector('.close');
		closeButton.addEventListener('click', () => {
			modal.remove();
		});
	});
}

export default function initWebsite() {
	createLayout();
	createHeader();
	createNav();
	createCardButton();

	const navList = document.querySelectorAll('.nav-li');
	const defaultNavList = document.querySelector('.nav-li');
	setActive(defaultNavList);
}
