
function factorielle(n){
	
	if (n==1){
		return n;
	} 

	return n*factorielle(n-1);
}

function calcul() {
	
	var numElem = document.querySelector("input[type='number']");
	var result = factorielle(numElem.value);
	showResult(result);

}

function showResult(result){

	var resultElem = document.getElementById("result");
	resultElem.textContent = result.toString();

}