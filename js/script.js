// navigate to calculate.html
function checkprice() {
    window.location.href = "calculate.html";
}

// Array countries
countries = [
	'Austria',
    'Germany',
    'Italy'
];

// calculation
function calculateInsurance() {
	// get form data - form calculator
    var name = document.forms["calculator"]["name"].value;
    var age = document.forms["calculator"]["age"].value;
    var horsepower = document.forms["calculator"]["horsepower"].value;
    var country = document.forms["calculator"]["country"].selectedIndex;
    
    // get result for specific country
    var myinsurance = calculateInsurancePerCountry(horsepower, age, country);

    // if fields are empty
	if(name == "" || age == "" || horsepower == "")
		document.getElementById("result").innerHTML = "Please fill in your data";
	// or if it's not nummeric
	else if(isNaN(age) || isNaN(horsepower))
		document.getElementById("result").innerHTML = "Please fill in nummeric value";
	// everything works, then
	else
	  	document.getElementById("result").innerHTML = name + ", your insurance costs € " + myinsurance.toFixed(2) + "!";
}

function calculateInsurancePerCountry(horsepower, age, country) {
	// calculate insurance for different countries with switch
    switch (country) {
        // Germany
        case 1:
            var insurance = horsepower * 120 / age + 100;
            break;

            // Italy
        case 2:
            var insurance = horsepower * 150 / (age + 2) + 150;
            break;

            // Austria
        default:
            var insurance = horsepower * 100 / age + 50;
            break;
    }
    return insurance;
    // returns result
}


