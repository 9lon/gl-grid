var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');

gulp.task('htmlReplace',function(){
     gulp.src('src/gl-grid-element.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">\n'
                +'<script src="../eqcss/EQCSS.min.js"></script>'
        }
    }))
    .pipe(gulp.dest(''));
});

gulp.task('htmlReplace2',function(){
     gulp.src('src/gl-grid.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">'
        }
    }))
    .pipe(gulp.dest(''));
});


gulp.task('default', ['htmlReplace','htmlReplace2']);