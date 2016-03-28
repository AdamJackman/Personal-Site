//Let's tour my site
var tour = new Shepherd.Tour({
	defaults: {
	classes: 'shepherd-theme-arrows',
	scrollTo: true
	}
});
//Tour Steps
tour.addStep('example-step', {
  text: 'This step is attached to the bottom of the <code>about</code> element.',
  attachTo: {element:"#about", on:"top"},
  classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

$(document).ready(function(){
   $('.parallax').parallax();
   //tour.start();
 });