var gulp = require('gulp')
var handlebars = require('gulp-compile-handlebars')
var rename = require('gulp-rename')
var reps = require('./app/generate-reps/reps.json')

gulp.task('handlebars', function() {
	var options = {
		helpers: {
			ifNull : function(str){
				if(str) { return str }
				else { return null }
			},
			socialLink : function(baseUrl, url, icon){
				if(url){
					return '<a class="card-link" href="' + baseUrl + url + '" target="_blank"><i class="fa fa-icon ' + icon + '" aria-hidden="true"></i></a>';
				}else{
					return null;
				}
			}
		}
	}

    for (var i = 0; i < reps.length; i++) {
        var rep = reps[i];
        var folderName = rep.first.toLowerCase() + '_' + rep.last.toLowerCase()

		console.log(folderName);


        gulp.src('app/generate-reps/templates/rep.handlebars')
            .pipe(handlebars(rep, options))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('app/generate-reps/reps/' + folderName + '/'));
    }
});


gulp.task('default', ['handlebars']);
