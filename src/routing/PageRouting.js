export let getElementPosition = (elementId) => {

    let element = document.getElementById(elementId)
    let wayfinderCurrentHeight

    if(document.documentElement.clientWidth >= 784){
      wayfinderCurrentHeight = (((Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 15.5))) / 100
    } else wayfinderCurrentHeight = 10 * 16

    let waydirectCoordinate = ((element.offsetTop - element.scrollTop) - wayfinderCurrentHeight);

    return waydirectCoordinate
};

export let updateScreenPosition = (targetedWaydirect) => {
    window.scrollTo({
      top: getElementPosition(targetedWaydirect),
      left: 0,
      behavior: 'smooth'
    });
};