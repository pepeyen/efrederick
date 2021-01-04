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

export const fetchFromBackEnd = (fetchingEndPoint,fetchingParam,fetchingOptions,fetchingBranch) => {
    fetchingBranch = fetchingBranch ?? 'v1';

    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/${fetchingBranch}/${fetchingEndPoint}${fetchingParam === '' || fetchingParam ? `?${fetchingParam}` : ''}`, fetchingOptions)
        .then(response => {
            resolve(response.json());
        })
        .catch(error => {
            reject(error);
        })
    });
};

export const animateValue = (targetValueId, start, end, duration) => {
	if (start === end) return;
	
	const range = end - start;
	const increment = end > start? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
	const targetValue = document.getElementById(targetValueId);
	let current = start;

    var timer = setInterval(() => {
		current += increment;

		targetValue.textContent = current;		
		
        if(current === end){
            clearInterval(timer);
		}
		
	}, stepTime);
};