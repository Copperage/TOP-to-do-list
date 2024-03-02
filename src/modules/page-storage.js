export function saveProjectsToLocalStorage(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjectsFromLocalStorage() {
	return JSON.parse(localStorage.getItem('projects')) || [];
}
