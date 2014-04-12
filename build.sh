if [ ! -d "dist" ]; then
  mkdir dist
fi

rm -rf ./dist/*
cp ./examples/*.html ./dist/

browserify ./src/main.js -o ./dist/checkbox-type.js
uglifyjs ./dist/checkbox-type.js -o ./dist/checkbox-type.min.js
