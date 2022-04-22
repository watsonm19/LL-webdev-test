/*
===============================================
; Title: App.js
; Author: LeaseLabsCo
; Date: 19 April 2022
; Modified By: Mark Watson
; Description: Script for inserting images using object data and generating mouse hover events.
===============================================
*/

// object of image data
var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

// HTML elements
const imageBoxes = document.querySelectorAll('.image-box');
const imgTitles = document.querySelectorAll('.title');
const imgDesc = document.querySelectorAll('.description');
const hoverOverlays = document.querySelectorAll('.hover-img');

// function call
insertImgData();

/**
 * MOUSEOVER EVENTS
 * creates hover effects over all images to display title and description
*/
imageBoxes[0].addEventListener("mouseover", function(event) {
  hoverOverlays[0].classList.add('img-overlay');
  imgTitles[0].classList.remove('hide');
  imgDesc[0].classList.remove('hide');
})

imageBoxes[1].addEventListener("mouseover", function(event) {
  hoverOverlays[1].classList.add('img-overlay');
  imgTitles[1].classList.remove('hide');
  imgDesc[1].classList.remove('hide');
})

imageBoxes[2].addEventListener("mouseover", function(event) {
  hoverOverlays[2].classList.add('img-overlay');
  imgTitles[2].classList.remove('hide');
  imgDesc[2].classList.remove('hide');
})

/**
 * MOUSEOUT EVENTS
 * removes hover effect when mouse exits image
*/
imageBoxes[0].addEventListener("mouseout", function(event) {
  hoverOverlays[0].classList.remove('img-overlay')
  imgTitles[0].classList.add('hide');
  imgDesc[0].classList.add('hide');
})

imageBoxes[1].addEventListener("mouseout", function(event) {
  hoverOverlays[1].classList.remove('img-overlay')
  imgTitles[1].classList.add('hide');
  imgDesc[1].classList.add('hide');
})

imageBoxes[2].addEventListener("mouseout", function(event) {
  hoverOverlays[2].classList.remove('img-overlay')
  imgTitles[2].classList.add('hide');
  imgDesc[2].classList.add('hide');
})


/**
 * Params: N/A
 * Response: Inserts image data into HTML file
 * Description: Places images in the image boxes on the page with their titles and descriptions
*/
function insertImgData() {
  imageBoxes[0].style.backgroundImage = `url(${images.man.path})`;
  imageBoxes[1].style.backgroundImage = `url(${images.wizard.path})`;
  imageBoxes[2].style.backgroundImage = `url(${images.beast.path})`;

  imgTitles[0].innerHTML = images.man.heading;
  imgTitles[1].innerHTML = images.wizard.heading;
  imgTitles[2].innerHTML = images.beast.heading;

  imgDesc[0].innerHTML = images.man.description;
  imgDesc[1].innerHTML = images.wizard.description;
  imgDesc[2].innerHTML = images.beast.description;
}
