const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileBtn = document.querySelector(".mobile-btn");
const desktopBtn = document.querySelector(".desktop-btn");
const clickablePost = document.querySelector(".clickable-post");
const clickableProject = document.querySelector("#clickable-project");
const btn = document.querySelector(".scroll-top-button");
const closeBtn = document.querySelector(".close-btn");
const downBtn = document.querySelectorAll(".down-icon");
const faqParagraph1 = document.querySelector(".faq .faqs .faq-p1");
const faqParagraph2 = document.querySelector(".faq .faqs  .faq-p2");
const faqParagraph3 = document.querySelector(".faq .faqs .faq-p3");
const faqParagraph4 = document.querySelector(".faq .faqs .faq-p4");
const faqs = document.querySelector(".faqs");
if (faqs != null) {
	faqs.style = "border-bottom:1px solid rgb(238 238 238);";
	console.log(window.location);
}
if (faqs != null && window.location.pathname == "/about.html") {
	faqs.style = "border-bottom:1px solid rgb(58 60 86) !important";
}
if (
	faqParagraph1 != null &&
	faqParagraph2 != null &&
	faqParagraph3 != null &&
	faqParagraph4 != null &&
	window.location.pathname == "/about.html"
) {
	faqParagraph1.style = `border-left:1px solid rgb(58 60 86) !important;
	border-right:1px solid rgb(58 60 86) !important;`;
	faqParagraph2.style = `border-left:1px solid rgb(58 60 86) !important;
	border-right:1px solid rgb(58 60 86) !important;`;
	faqParagraph3.style = `border-left:1px solid rgb(58 60 86) !important;
	border-right:1px solid rgb(58 60 86) !important;`;
	faqParagraph4.style = `border-left:1px solid rgb(58 60 86) !important;
	border-right:1px solid rgb(58 60 86) !important;`;
}
if (
	faqParagraph1 != null &&
	faqParagraph2 != null &&
	faqParagraph3 != null &&
	faqParagraph4 != null
) {
	faqParagraph1.style.display = "none";

	downBtn[0].onclick = function (_) {
		if (faqParagraph1.style.display == "none") {
			faqParagraph1.style.display = "inline-block";
		} else {
			faqParagraph1.style.display = "none";
		}
	};
	faqParagraph2.style.display = "none";
	downBtn[1].onclick = function (_) {
		if (faqParagraph2.style.display == "none") {
			faqParagraph2.style.display = "inline-block";
		} else {
			faqParagraph2.style.display = "none";
		}
	};
	faqParagraph3.style.display = "none";

	downBtn[2].onclick = function (_) {
		if (faqParagraph3.style.display == "none") {
			faqParagraph3.style.display = "inline-block";
		} else {
			faqParagraph3.style.display = "none";
		}
	};
	faqParagraph4.style.display = "none";

	downBtn[3].onclick = function (_) {
		if (faqParagraph4.style.display == "none") {
			faqParagraph4.style.display = "inline-block";
		} else {
			faqParagraph4.style.display = "none";
		}
	};
}

closeBtn.onclick = function () {
	mobileNav.style.display = "none";
};

btn.onclick = function (_) {
	
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};
window.onscroll = function () {
	if (window.scrollY >= 100) {
		btn.style.opacity = "1";
		btn.style.pointerEvents = "all";
	} else {
		btn.style.opacity = "0";
		btn.style.pointerEvents = "none";
	}
};

desktopBtn.onclick = function () {
	window.location.assign("./contact.html");
};

if (clickablePost != null) {
	clickablePost.style.cursor = "pointer";
	clickablePost.onclick = function () {
		window.location.assign("./single-post.html");
	};
}

if (clickableProject != null) {
	clickableProject.style.cursor = "pointer";
	clickableProject.onclick = function () {
		window.location.assign("./single-project.html");
	};
}
mobileBtn.onclick = function () {
	window.location.assign("./contact.html");
};
mobileNav.style.display = "none";
menu.onclick = function (event) {
	if (mobileNav.style.display == "none") {
		mobileNav.style.display = "block";
	} else {
		mobileNav.style.display = "none";
	}
};
function myFunction(x) {
	if (x.matches) {
		mobileNav.style.display = "none";
	}
}

var x = window.matchMedia("(min-width: 38em)");
myFunction(x); // Call listener function at run time
x.addEventListener("change", myFunction); // Attach listener function on state changes
