var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisaniem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie', function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err,data) {
			console.log('Dane po zapisie'.blue)
            console.log(data);
		});
	});
});

fs.readdir('./node_modules/colors', function(err, files) {
	fs.writeFile('./dirText.txt', files, function(err) {
		if (err) throw err;
		fs.readFile('./dirText.txt', 'utf-8', function(err, data) {
			console.log('Zapisane dane katalogu: '.blue)
			console.log(data);
		})
		
	})
})




