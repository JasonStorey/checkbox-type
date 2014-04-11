if [ ! -d "dist" ]; then
  mkdir dist
fi

rm -rf ./dist/*

browserify ./src/main.js -o ./dist/checkbox-type.js
