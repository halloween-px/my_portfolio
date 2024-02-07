export const visibleSection = (target, position, offset = 0, section) => {
	let visible = false ;

	const targetPosition = {
			top: section.scrollY || window.scrollY + target.getBoundingClientRect().top,
			bottom: section.scrollY || window.scrollY + target.getBoundingClientRect().bottom,
			center: section.scrollY || window.scrollY + target.getBoundingClientRect().top,
		},
		windowPosition = {
			top: window.scrollY,
			bottom: window.scrollY + document.documentElement.clientHeight
		};

	if(position === 'top') {
		targetPosition.top -= offset;
		if (targetPosition.top < windowPosition.top &&
			windowPosition.top < targetPosition.bottom) {
			visible = true;
		}
	}

	if(position === 'bottom') {
		targetPosition.top += offset;
		if (targetPosition.bottom > windowPosition.top &&
			targetPosition.top < windowPosition.bottom) {
			visible = true;
		}
	}

	if(position === 'center') {
		if(targetPosition.center < windowPosition.top +
			(document.documentElement.clientHeight / 2) &&
		 	windowPosition.top < targetPosition.bottom) {
			visible = true;
		}
	}

	return visible;
};