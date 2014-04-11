if [ ! -d "dist" ]; then
  mkdir dist
fi

rm -rf ./dist/*
cp ./examples/*.html ./dist/

browserify ./src/main.js -o ./dist/checkbox-type.js
