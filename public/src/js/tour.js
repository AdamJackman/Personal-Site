//Let's tour my site
var tour = new Shepherd.Tour({
		defaults: {
		classes: 'shepherd-theme-arrows',
		scrollTo: true
		}
});
//Tour Steps
tour.addStep('example-step', {
  text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
  attachTo: '#main bottom',
  classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});
//Start the tour
$(document).ready(function(){
	//tour.start();
});

$(document).ready(function(){
  $('.parallax').parallax();
});