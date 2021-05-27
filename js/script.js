"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu

	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');
	
	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', () => {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	});


	// Modal Sign in / Sign up

	const btn = document.querySelectorAll('[data-modal]'),
		  modal = document.querySelector('.modal'),
		  close = document.querySelector('[data-close]');

	function showModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	btn.forEach((item, index) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

			showModal();

			if (e.target.classList.contains('signin')) {
				hideTabContent();
				showTabContent(index);
			} else {
				hideTabContent();
				showTabContent(index);
			}
		});
	});

	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});


	// Modal Sign in / Sign up Tabs

	const headerTabsParent = document.querySelector('.modal__headers'),
		  headerTabs = headerTabsParent.querySelectorAll('.modal__title'),
		  tabsContent = document.querySelectorAll('.form-content');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		headerTabs.forEach(item => {
			item.classList.remove('modal__title--active');
		});
	}

	function showTabContent(i) {
		tabsContent[i].style.display = 'block';
		headerTabs[i].classList.add('modal__title--active');
	}

	headerTabsParent.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('modal__title')) {
			headerTabs.forEach((item, index) => {
				if (e.target === item) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});

});