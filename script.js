const video = document.querySelector('.flex');
const speedBar = document.querySelector('.speed-bar');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const inputs = document.querySelector('input');

    function handleUpdate() {
		if(this.name === 'volume') video.volume = this.value;
		else{
			video.playbackRate = this.value;
			speedBar.lastChild.nodeValue = `${+this.value}×`;
		}
	}
      function togglePlay(){
		  video.paused ? video.play(): video.pause();
		  
	  }

		function scrub(e){
			if(e.type === 'click' || e.buttons === 1){
				const{ left,width} = speedBar.getBoundingClientRect();
				video.currentTime = ((e.clientX -left )/width) *video.duration;
			} 
		}

		inputs.forEach(input =>{
			input.addEventListener('change', handleUpdate);
				input.addEventListener('mousemove', handleUpdate);
			handleUpdate.call(input);
			
		});

		document.querySelectorAll('[data-skip]').forEach (btn => btn.addEventListener('click',() =>(video.currentTime += +btn.dataset.skip))
		);

toggle.addEventListener('click', toggleplay);
video.addEventListener('click', toggleplay);
video.addEventListener('play',() => (toggle.textContent ='❚ ❚'));
video.addEventListener('pause',() => (toggle.textContent ='►'));
video.addEventListener('timeupdate',() =>{
	progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
});
speedBar.addEventListener('click',scrub);
speedBar.addEventListener('mousemove',scrub);
