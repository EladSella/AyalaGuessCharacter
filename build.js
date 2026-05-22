const fs = require('fs');
const path = require('path');

const filesToCopy = ['index.html', 'game.js', 'style.css', 'manifest.json', 'privacy.html'];
const srcDir = __dirname;
const destDir = path.join(__dirname, 'www');

// Create destDir if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to www/`);
  } else {
    console.error(`File not found: ${src}`);
  }
});

// Recursively copy assets
function copyFolderRecursiveSync(sources, target) {
  var files = [];

  var targetFolder = target;
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  if (fs.lstatSync(sources).isDirectory()) {
    files = fs.readdirSync(sources);
    files.forEach(function (file) {
      var curSource = path.join(sources, file);
      var curTarget = path.join(targetFolder, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

const assetsSrc = path.join(srcDir, 'assets');
const assetsDest = path.join(destDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyFolderRecursiveSync(assetsSrc, assetsDest);
  console.log('Copied assets/ to www/assets/');
} else {
  console.error('assets/ directory not found!');
}
