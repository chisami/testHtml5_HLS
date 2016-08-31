

function calc(numA, numB)
{
	return numA + numB;
}


function warning(){
	document.write("What the hell~");
}

function testVariable(){
	
	var name = "Terry", age = "12", job = "Heehee";
	
	document.getElementById("demo").innerHTML = name + age + job;
}

function testArgument(name, address){
	
	alert("Welcome to " + name + " and " + address + " day!~");
}