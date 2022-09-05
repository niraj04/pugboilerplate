const keep_folder = require('imagemin-keep-folder');
const moz_jpeg = require('imagemin-mozjpeg');
const png_quant = require('imagemin-pngquant');
const gif_sicle = require('imagemin-gifsicle');
const svgo = require('imagemin-svgo');

keep_folder(['src/assets/img/*.{jpg,png,gif,svg}'], {
  plugins: [moz_jpeg({ quality: 85 }), png_quant({ quality: [0.7, 0.8] }), gif_sicle(), svgo()],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, '../../dist/assets/img/');
  },
});
