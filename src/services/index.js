export const getElementPosition = (elementId) => {
	let element = document.getElementById(elementId);
	let wayfinderCurrentHeight;

	if(window.innerWidth >= 801){
		wayfinderCurrentHeight = (((Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 15.5))) / 100
	} else wayfinderCurrentHeight = 10 * 16

	const bodyRect = document.body.getBoundingClientRect(),
	elemRect = element.getBoundingClientRect(),
	offset   = elemRect.top - bodyRect.top;

	let waydirectCoordinate = (offset - wayfinderCurrentHeight);

	return waydirectCoordinate;
};

export const updateScreenPosition = (targetedWaydirect) => {
	window.scrollTo({
		top: getElementPosition(targetedWaydirect),
		left: 0,
		behavior: 'smooth'
	});
};

export const getRepoList = (userName, requestHeaders) => {
	return new Promise((resolve, reject) => {
		fetch(`https://api.github.com/users/${userName}/repos`, {
			headers: requestHeaders
		})
		.then(response => {
			resolve(response.json());
		})
		.catch(error => {
			reject(error);
		})
	})
}

export const getRepo = (userName, repoName, requestHeaders) => {
	return new Promise((resolve, reject) => {
		fetch(`https://api.github.com/repos/${userName}/${repoName}/stats/contributors`, {
			headers: requestHeaders
		})
		.then(response => {
			resolve(response.json());
		})
		.catch(error => {
			reject(error);
		})
	})
}