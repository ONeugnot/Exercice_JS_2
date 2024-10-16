function peutVoter(age, nationalite) {
	if ((age >= 18) && (nationalite === "française")) {
		return "eligible";
	} else {
		return "non éligible";
	}
}

let age = prompt("Quel est ton âge");
let nationalite = prompt("Quel est ta nationalite");
console.log(peutVoter(age, nationalite));
