var landscape = null;
var weapon = null;
var finish = null;
var pageTitle = document.getElementById("page-title");
var pageTitleText = document.getElementById("page-title").innerHTML;
var tryAgain = document.getElementById("try-again");
var quizWrapper = document.getElementById("quiz-wrapper");
var result = document.getElementById("result");
var formSubmit = document.getElementById("form-submit")

tryAgain.addEventListener("click",resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults() {

}

function getPersonality() {
	var score = 0;
	//location
	if(location.id === "tokyo") {
		score += 1;
	}
	else if(location.id === "ancient-greece") {
		score += 4;
	}
	else if(location.id === "outer-space") {
		score += 8;
	}
	else if(location.id === "peninsula") {
		score += 14;
	}
	//weapon
	if(weapon.id === "evil-sword") {
		score += 1;
	}
	else if(weapon.id === "ancient-sword") {
		score += 4;
	}
	else if(weapon.id === "blades") {
		score += 2;
	}
	else if(weapon.id === "mecha") {
		score += 3;
	}
	//finish
	if(finish.id === "tate") {
		score += 1;
	}
	else if(finish.id === "raise") {
		score += 3;
	}
	else if(finish.id === "dismember") {
		score += 1;
	}
	else if(finish.id === "missles") {
		score += 2;
	}

	if(score >= 1 && score <= 3) {
		return 1;
	}

	else if(score >= 4 && score <= 7) {
		return 2;
	}

	else if(score >= 8 && score <= 13) {
		return 3;
	} 

	else if(score >= 14 && score <= 21) {
		return 4;
	}
}

function resetQuiz() {

}