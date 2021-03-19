function newcolor(){
    var randr = (Math.floor(Math.random()*255)).toString(16);
    var randg = (Math.floor(Math.random()*255)).toString(16);
    var randb = (Math.floor(Math.random()*255)).toString(16);
    var randomcolor = "#"+randr+randg+randb;
    document.body.style.background = randomcolor;
}

function getColor(rand){ // william is included here num13
	var colors = ["#176619", "#cf9417", "#0b2073", "#8f1ec7", "#eb6426", "#ba1c46", "#eb2121", "#30c2aa", "#f01acc", "#6eb1ff", "#faec52", "#fa5266", "#6370ba", "#ab371d", "#c29eff", "#d6638b", "#ffb3f4", "#9effca", "#451a0b", "#20b0ab", "#9bde0b", "#9e1c98", "#e016da", "#3d639c", "#f7f788", "#118a8c", "#f0bd5d", "#929fa1", "#d1ffef", "#fced3f", "#69420d", "#1366a1", "#f01648", "#a3078c", "#5dc232", "#8fbdb1", "#ffd86b", "#ff936b", "#7480cf", "#31c4cc", "#210542", "#b0b593", "#635ec4", "#ffa305", "#2abf40", "#e62e2e", "#6637a3"];
	document.body.style.background = colors[rand];
}

// mee #78342e
// right now I'm using hbd to me as a filler for william's
function getAudio(){
	var libr = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3", "11.mp3", "12.mp3", "happy birthday to me.mp3", "14.mp3", "15.mp3", "16.mp3", "17.mp3", "18.mp3", "19.mp3", "20.mp3", "21.mp3", "22.mp3", "23.mp3", "24.mp3", "25.mp3", "26.mp3", "27.mp3", "28.mp3", "29.mp3", "30.mp3", "31.mp3", "32.mp3", "33.mp3", "34.mp3", "35.mp3", "36.mp3", "37.mp3", "38.mp3", "39.mp3", "40.mp3", "41.mp3", "42.mp3", "43.mp3", "44.mp3", "45.mp3", "46.mp3", "47.mp3"];
	//var rand = Math.floor(Math.random()*libr.length)+1;
	var rand = Math.floor(Math.random() * (libr.length));

	// document.write ('<EMBED src= "' + libr[rand] + '" autostart=true loop=true>')
	document.write('<source src="library/' + libr[rand] + '" type="audio/mp3">');
	getColor(rand);
}


function getStuff(){
	var myarray = [{audio: "1.mp3",	color: "#176619"}, 
	{audio: "2.mp3",	color: "#cf9417"}, 
	{audio: "3.mp3",	color: "#0b2073"}, 
  {audio: "4.mp3",	color: "#8f1ec7"}, 
  {audio: "5.mp3",	color: "#eb6426"}, 
  {audio: "6.mp3",	color: "#ba1c46"}, 
  {audio: "7.mp3",	color: "#eb2121"}, 
  {audio: "8.mp3",	color: "#30c2aa"}, 
  {audio: "9.mp3",	color: "#f01acc"}, 
  {audio: "10.mp3",	color: "#6eb1ff"}, 
  {audio: "11.mp3",	color: "#faec52"}, 
  {audio: "12.mp3",	color: "#fa5266"}, 
  {audio: "happy birthday to me.mp3",	color: "#6370ba"}, // meant to be william, filling with my own for now
  {audio: "14.mp3",	color: "#ab371d"}, 
  {audio: "15.mp3",	color: "#c29eff"}, 
  {audio: "16.mp3",	color: "#d6638b"}, 
  {audio: "17.mp3",	color: "#ffb3f4"}, 
  {audio: "18.mp3",	color: "#9effca"}, 
  {audio: "19.mp3",	color: "#451a0b"}, 
  {audio: "20.mp3",	color: "#20b0ab"}, 
  {audio: "21.mp3",	color: "#9bde0b"}, 
  {audio: "22.mp3",	color: "#9e1c98"}, 
  {audio: "23.mp3",	color: "#e016da"}, 
  {audio: "24.mp3",	color: "#3d639c"}, 
  {audio: "25.mp3",	color: "#f7f788"}, 
  {audio: "26.mp3",	color: "#118a8c"}, 
  {audio: "27.mp3",	color: "#f0bd5d"}, 
  {audio: "28.mp3",	color: "#929fa1"}, 
  {audio: "29.mp3",	color: "#d1ffef"}, 
  {audio: "30.mp3",	color: "#fced3f"}, 
  {audio: "31.mp3",	color: "#69420d"}, 
  {audio: "32.mp3",	color: "#1366a1"}, 
  {audio: "33.mp3",	color: "#f01648"}, 
  {audio: "34.mp3",	color: "#a3078c"}, 
  {audio: "35.mp3",	color: "#5dc232"}, 
  {audio: "36.mp3",	color: "#8fbdb1"}, 
  {audio: "37.mp3",	color: "#ffd86b"}, 
  {audio: "38.mp3",	color: "#ff936b"}, 
  {audio: "39.mp3",	color: "#7480cf"}, 
  {audio: "40.mp3",	color: "#31c4cc"}, 
  {audio: "41.mp3",	color: "#210542"}, 
  {audio: "42.mp3",	color: "#b0b593"}, 
  {audio: "43.mp3",	color: "#635ec4"}, 
  {audio: "44.mp3",	color: "#ffa305"}, 
  {audio: "45.mp3",	color: "#2abf40"}, 
  {audio: "46.mp3",	color: "#e62e2e"}, 
  {audio: "47.mp3",	color: "#6637a3"},
  {audio: "48.mp3",	color: "#763b92"}, 
  {audio: "49.mp3",	color: "#ed582b"}];

	var rand = Math.floor(Math.random() * (myarray.length));
	document.write('<source src="library/' + myarray[rand].audio + '" type="audio/mp3">');
	document.body.style.background = myarray[rand].color;
}
