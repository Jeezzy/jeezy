const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const svgMin = require("gulp-svgmin");
const path = require("path");

gulp.task("svg", function() {
  return gulp.src("../../src/assets/icons/*.svg")
    .pipe(svgMin(() => {
      return {
        plugins: [
          { removeTitle: true },
          {
            removeAttrs: { attrs: "(fill|stroke)" }
          },
          { removeStyleElement: true }
        ]
      };
    }))
    .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../../output/sprite.svg"
          }
        }
      }
    ))
    .pipe(gulp.dest("../../src/assets/icons/"));
});
