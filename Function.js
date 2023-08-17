let h, c, j, p;
let hf, cf, jf, pf;
let aaa, aaa2;
let e, ex, e1, ex1;
	h = document.getElementById('htmlToday');
	c = document.getElementById('cssToday');
	j = document.getElementById('jsToday');
	p = document.getElementById('pyToday');
	hf = document.getElementById("htmlF");
	cf = document.getElementById("cssF");
	jf = document.getElementById("jsF");
	pf = document.getElementById("pyF");


	aaa = document.getElementById("btna1");
	aaa.value="";
	aaa2 = document.getElementById("btna2");
	aaa2.value="";

	document.getElementById("btna1").style.display="none";
	document.getElementById("btna2").style.display="none";


document.getElementById("htmlToday").addEventListener("click", myHTMLW);
document.getElementById("cssToday").addEventListener("click", myCSSW);
document.getElementById("jsToday").addEventListener("click", myJSW);
document.getElementById("pyToday").addEventListener("click", myPYW);
document.getElementById("clr").addEventListener("click", Clrr);
document.getElementById("addBtn").addEventListener("click", addBtnFun);
document.getElementById("btna1").addEventListener("click", addBtnData);
document.getElementById("btna2").addEventListener("click", addBtnData1);

document.getElementById("i1").addEventListener("click", myBox1);
document.getElementById("i2").addEventListener("click", myBox2);
document.getElementById("i3").addEventListener("click", myBox3);
document.getElementById("i4").addEventListener("click", myBox4);
document.getElementById("i5").addEventListener("click", myBox5);
document.getElementById("i6").addEventListener("click", myBox6);



function myHTMLW(){
	if(h.value == ""){
		hf.style.color="#fff";
		hf.style.backgroundColor="green";
		hf.style.borderRadius="5px";
		hf.style.padding="0px 5px";
		hf.style.fontSize="20px";
		h.value="html";
	}
	else{
		hf.style.color="#000";
		hf.style.backgroundColor="#fff";
		hf.style.borderRadius="0px";
		hf.style.padding="0px 0px";
		hf.style.fontSize="15px";
		h.value="";
	}
}

function myCSSW(){
	if(c.value == ""){
		cf.style.color="#fff";
		cf.style.backgroundColor="green";
		cf.style.borderRadius="5px";
		cf.style.padding="0px 5px";
		cf.style.fontSize="20px";
		c.value="css";
	}
	else{
		cf.style.color="#000";
		cf.style.backgroundColor="#fff";
		cf.style.borderRadius="0px";
		cf.style.padding="0px 0px";
		cf.style.fontSize="15px";
		c.value="";
	}
}

function myJSW(){
	if(j.value == ""){
		jf.style.color="#fff";
		jf.style.backgroundColor="green";
		jf.style.borderRadius="5px";
		jf.style.padding="0px 5px";
		jf.style.fontSize="20px";
		j.value="js";
	}
	else{
		jf.style.color="#000";
		jf.style.backgroundColor="#fff";
		jf.style.borderRadius="0px";
		jf.style.padding="0px 0px";
		jf.style.fontSize="15px";
		j.value="";
	}
}

function myPYW(){
	if(p.value == ""){
		pf.style.color="#fff";
		pf.style.backgroundColor="green";
		pf.style.borderRadius="5px";
		pf.style.padding="0px 5px";
		pf.style.fontSize="20px";
		p.value="py";
	}
	else{
		pf.style.color="#000";
		pf.style.backgroundColor="#fff";
		pf.style.borderRadius="0px";
		pf.style.padding="0px 0px";
		pf.style.fontSize="15px";
		p.value="";
	}
}

function addBtnFun(){

	if(aaa.value =="")
	{
		document.getElementById("btna1").style.display="block";
		document.getElementById("btna1").innerHTML = `<img src="can.jpg" id="i5"> 
		<input type="checkbox" id="ExToday" value="">
		<label for="ExToday" id="ExF"> ${nname()} </label> `;
		aaa.value="Ex";
		e = document.getElementById('ExToday');
		ex = document.getElementById("ExF");
		e.value="";
	}
	else{
		document.getElementById("btna2").style.display="block";
		document.getElementById("btna2").innerHTML = `<img src="can.jpg" id="i6"> 
		<input type="checkbox" id="ExToday1" value="">
		<label for="ExToday1" id="ExF1"> ${nname()} </label> `;
		aaa2.value="Ex1";
		e1 = document.getElementById('ExToday1');
		ex1 = document.getElementById("ExF1");
		e1.value="";
	}
	
}


function nname(){
	let a = prompt("Enter Your Task : ");
	return a;
}





function addBtnData(){
	if(e.value == ""){
		ex.style.color="#fff";
		ex.style.backgroundColor="green";
		ex.style.borderRadius="5px";
		ex.style.padding="0px 5px";
		ex.style.fontSize="20px";
		e.value="Ex";
	}
	else{
		ex.style.color="#000";
		ex.style.backgroundColor="#fff";
		ex.style.borderRadius="0px";
		ex.style.padding="0px 0px";
		ex.style.fontSize="15px";
		e.value="";
	}
}
function addBtnData1(){
	if(e1.value == ""){
		ex1.style.color="#fff";
		ex1.style.backgroundColor="green";
		ex1.style.borderRadius="5px";
		ex1.style.padding="0px 5px";
		ex1.style.fontSize="20px";
		e1.value="Ex";
	}
	else{
		ex1.style.color="#000";
		ex1.style.backgroundColor="#fff";
		ex1.style.borderRadius="0px";
		ex1.style.padding="0px 0px";
		ex1.style.fontSize="15px";
		e1.value="";
	}
}






function Clrr(){
	if(h.checked == true){
		myHTMLW();
		h.checked = false;
	}
	if(c.checked == true){
		myCSSW();
		c.checked = false;
	}
	if(j.checked == true){
		myJSW();
		j.checked = false;
	}
	if(p.checked == true){
		myPYW();
		p.checked = false;
	}
	if(e.checked == true){
		addBtnData();
		e.checked = false;
	}
	if(e1.checked == true){
		addBtnData1();
		e1.checked = false;
	}
}





function myBox1(){
	// h.style.display="none";
	// hf.style.display="none";
	// document.getElementById("i1").style.display="none";
	// document.getElementById("b1").style.border="none";
	document.getElementById("b1").style.display="none";

}
function myBox2(){
	document.getElementById("b2").style.display="none";
}
function myBox3(){
	document.getElementById("b3").style.display="none";
}
function myBox4(){
	document.getElementById("b4").style.display="none";
}
function myBox5(){
	// document.getElementById("btna1").style.display="none";
	alert("Box5");
}
function myBox6(){
	document.getElementById("btna2").style.display="none";
}
