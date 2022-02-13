
	const male 			 = document.querySelector('.maleName');
	const female 		 = document.querySelector('.femaleName');
	const textClassCount = document.getElementsByClassName("text");
	const inputArry  	 = [male, female];

	for(let i = 0 ; i < inputArry.length; i++){

	 	inputArry[i].addEventListener('keyup', () => {
			let maleName = male.value.toLowerCase();
			let femaleName = female.value.toLowerCase();

				for(let indexMale = 0 ; indexMale < maleName.length; indexMale++) {
					for(let indexFemale = 0 ; indexFemale < femaleName.length; indexFemale++){
						if(maleName.toLowerCase().charAt(indexMale) === femaleName.toLowerCase().charAt(indexFemale)){

							let boy = maleName.toLowerCase().charAt(indexMale);
							let girl = femaleName.toLowerCase().charAt(indexFemale);

							maleName = maleName.replace(boy, boy.toUpperCase());
							femaleName = femaleName.replace(girl, girl.toUpperCase());
						}
					}
				}
			document.querySelector('.maleNameToAppend').innerHTML = maleName;
			document.querySelector('.femaleNameToAppend').innerHTML = femaleName;

			let dataBoy = replaceSmallLetter(maleName);
			let dataGirl = replaceSmallLetter(femaleName);
			appendColorAndStatus(dataBoy, dataGirl);

		});	
	
}
	const replaceSmallLetter = (inputName) => {
		return inputName.replace(/([a-z0-9 ]+)/g, ""); 
}
	const flamesStatus = (num) => {
		let status = "";
			if(num != 0){
				switch(num%6){
				case 1: status = "Friends"; break;
				case 2: status = "Love";    break;	
				case 3: status = "Angry";   break;
				case 4: status = "Married"; break;
				case 5: status = "Engaged"; break;
				case 6: 
				case 0: status = "Sweet";   break;	
				}
			}else { status = ""; }
		return status;
}
	const flamesColorSelection = (colorNumber) =>{
				let color = "";
				 if( colorNumber != 0 ){
					switch(colorNumber%6){
							case 1: color = "yellow";   break;	
							case 2: color = "red"; 	 	break;
							case 3: color = "black";    break;	
							case 4: color = "blue";     break;
							case 5: color = "orange"; 	break;
							case 6: 
							case 0: color = "pink";	    break;
							default: color = "";      	break;
						}
					}else{ color = ""; }
				return color;
}
	const appendColorAndStatus = (boy, girl) =>{
			let mainAdd = boy + girl;
			document.querySelector('.maleStatusOutput').innerHTML = flamesStatus(boy.length);
			document.querySelector('.femaleStatusOutput').innerHTML = flamesStatus(girl.length);
			document.querySelector('.mainOutPut').innerHTML = flamesStatus(mainAdd.length);

			document.querySelector('.maleStatusOutput').style.color = flamesColorSelection(boy.length);
			document.querySelector('.femaleStatusOutput').style.color = flamesColorSelection(girl.length);
			document.querySelector('.mainOutPut').style.color = flamesColorSelection(mainAdd.length);

}

//HEAD TITLE coloring
for(let colorNum = 0 ; colorNum < textClassCount.length; colorNum++){
		textClassCount[colorNum].style.color = flamesColorSelection(colorNum+1);
}