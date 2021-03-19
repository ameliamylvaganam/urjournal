function newcolor(){
    var randr = (Math.floor(Math.random()*255)).toString(16);
    var randg = (Math.floor(Math.random()*255)).toString(16);
    var randb = (Math.floor(Math.random()*255)).toString(16);
    var randomcolor = "#"+randr+randg+randb;
    document.body.style.background = randomcolor;
}

function getColor(rand){ // william is included here num13
	var colors = ["#176619", "#cf9417", "#0b2073", "#8f1ec7", "#eb6426", "#ba1c46", "#eb2121", "#30c2aa", "#f01acc", "#6eb1ff", "#faec52", "#fa5266", "#6370ba", "#ab371d", "#c29eff", "#d6638b", "#ffb3f4", "#9effca", "#451a0b", "#20b0ab", "#9bde0b", "#9e1c98", "#e016da", "#3d639c", "#f7f788", "#118a8c", "#f0bd5d", "#929fa1", "#d1ffef", "#fced3f", "#69420d", "#1366a1", "#f01648", "#a3078c", "#5dc232", "#8fbdb1", "#ffd86b", "#ff936b", "#7480cf", "#31c4cc", "#210542", "#b0b593", /*filler*/, "#ffa305"];
	document.body.style.background = colors[rand];
}
// ariel #e62e2e
// tanisha #ffa305
// julia #2abf40
// mee #78342e

function getAudio(){
	var libr = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3", "11.mp3", "12.mp3", "happy birthday to me.mp3", "14.mp3", "15.mp3", "16.mp3", "17.mp3", "18.mp3", "19.mp3", "20.mp3", "21.mp3", "22.mp3", "23.mp3", "24.mp3", "25.mp3", "26.mp3", "27.mp3", "28.mp3", "29.mp3", "30.mp3", "31.mp3", "32.mp3", "33.mp3", "34.mp3", "35.mp3", "36.mp3", "37.mp3", "38.mp3", "39.mp3", "40.mp3", "41.mp3", "42.mp3", "43.mp3", "44.mp3"];
	//var rand = Math.floor(Math.random()*libr.length)+1;
	var rand = Math.floor(Math.random() * (libr.length));

	// document.write ('<EMBED src= "' + libr[rand] + '" autostart=true loop=true>')
	document.write('<source src="library/' + libr[rand] + '" type="audio/mp3">');
	getColor(rand);
}