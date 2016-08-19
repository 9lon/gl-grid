var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');

gulp.task('htmlReplace',function(){
     gulp.src('src/gl-grid-classes.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">'
        }
    }))
    .pipe(gulp.dest(''));
});

gulp.task('htmlReplace2',function(){
     gulp.src('src/gl-grid-row.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">\n'
                +'<link rel="import" href="../iron-resizable-behavior/iron-resizable-behavior.html">'
        }
    }))
    .pipe(gulp.dest(''));
});

gulp.task('htmlReplace3',function(){
     gulp.src('src/gl-grid-col.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">'
        }
    }))
    .pipe(gulp.dest(''));
});



gulp.task('default', ['htmlReplace','htmlReplace2','htmlReplace3']);