var gulp = require('gulp')
var handlebars = require('gulp-compile-handlebars')
var rename = require('gulp-rename')
var reps = require('./app/reps/reps.json')

gulp.task('handlebars', function() {
	

    for (var i = 0; i < reps.length; i++) {
        var rep = reps[i];
        var folderName = rep.first.toLowerCase() + '_' + rep.last.toLowerCase()




        return gulp.src('app/templates/rep.handlebars')
            .pipe(handlebars(rep))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('docs/reps/' + folderName + '/'));
    }
});


gulp.task('default', ['handlebars']);
