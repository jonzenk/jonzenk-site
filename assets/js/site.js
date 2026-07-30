function playVideo(el, id){
	el.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" title="JONZENK video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

(function(){
	var els = document.querySelectorAll('[data-reveal]');
	var ticking = false;

	function update(){
		var vh = window.innerHeight;
		var start = vh * 0.92;
		var end = vh * 0.45;
		els.forEach(function(el){
			var top = el.getBoundingClientRect().top;
			var p = (start - top) / (start - end);
			p = Math.min(1, Math.max(0, p));
			el.style.opacity = p;
			el.style.transform = 'translateY(' + ((1 - p) * 32) + 'px)';
		});
		ticking = false;
	}

	function onScroll(){
		if(!ticking){
			requestAnimationFrame(update);
			ticking = true;
		}
	}

	if(els.length){
		window.addEventListener('scroll', onScroll, {passive:true});
		window.addEventListener('resize', onScroll);
		update();
	}
})();
