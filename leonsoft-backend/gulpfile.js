const gulp = require('gulp');
const gutil = require('gulp-util');

const DIR = {
    SRC: 'src'
};

const SRC = {
    js:DIR.SRC + '/**/*.js'
};


gulp.task('watch',() => { 
    
  gulp.watch([SRC.js ,'./gulpfile.js']).on('change',function(file){
      var exec = require('child_process').exec,child;      
      var child = exec("eslint_d "+file, function (error, stdout, stderr) {
         
          
      let logyellow = () => {       
        gutil.log(
          gutil.colors.red('#############################Start'),
          gutil.colors.yellow('('+file+')'),
          gutil.colors.red('########################################')
          );
      };
      
      let logred = () => {
        gutil.log(
          gutil.colors.red('#############################End'),
          gutil.colors.yellow('('+file+')'),
          gutil.colors.red('########################################')
        );    
      };
      
       let srdoutCheck = stdout;
       
       if (srdoutCheck){
           logyellow();
           gutil.log('stdout: ', gutil.colors.green(stdout));    
           logred();
       }else{
        gutil.log(gutil.colors.green('*************************************** '));     
        gutil.log(gutil.colors.green('*********** Code Eslint Good ********** '));     
        gutil.log(gutil.colors.green('*********** Have a Nice Day  ********** '));     
        gutil.log(gutil.colors.green('*********** .By LEON v1.0.1  ********** '));     
        gutil.log(gutil.colors.green('*************************************** '));     
       }
                 //console.log('stderr: ' + stderr);  // 행을줄이기위해 주석함
            if (error !== null) {
                //console.log('exec error: ' + error);  //행을 줄이기 위해 주석함
            }
      });
    });
  });


gulp.task('default',gulp.parallel('watch'), () => {
    gutil.log('Gulp is running');
});
 
    /*
    // 나중에 여러개의 파일이 들어올경우 처리 해줘야 할거 같아서 남겨놓은 .by Leon
    let notify = (event) => {
        gutil.log('File', gutil.colors.yellow(event.path), 'was', gutil.colors.magenta(event.type));
    
    };
    for(let key in watcher) {
        watcher[key].on('change', notify);
    }
    */

