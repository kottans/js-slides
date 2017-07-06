title: Async Js 101
author:
  name: Eugene
  twitter: sejoker
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

###[Callback Hell](http://callbackhell.com/)
```
fs.readdir(source, function(err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function(filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function(err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function(width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```
--
## Best practices
+ Name your functions
+ Keep your code shallow
+ Modularize
--
# [Promises](https://promisesaplus.com/)
## Main characteristics
+ Compliance to Promises/A+ spec
+ Speed
+ API

--
##Example 
### with callbacks
```
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});
```
### using Q.js
```
Q.fcall(promisedStep1)
.then(promisedStep2)
.then(promisedStep3)
.then(promisedStep4)
.then(function (value4) {
    // Do something with value4
})
.catch(function (error) {
    // Handle any error from all above steps
})
.done();
```
---

## Popular Implementations
+ Q.js
+ when.js
+ Bluebird.js

--
## [Jquery Promises are broken](http://stackoverflow.com/questions/23744612/problems-inherent-to-jquery-deferred)
+ Not compliant to Promises/A+ spec
+ Error handling
+ Execution order
+ Remain broken for backward compatibility

--
# [Async](https://github.com/caolan/async)

+ Simple
+ Rich feature set (collections, control flow)
--
## Examples
```
async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file
});

async.filter(['file1','file2','file3'], fs.exists, function(results){
    // results now equals an array of the existing files
});

async.parallel([
    function(){ ... },
    function(){ ... }
], callback);

async.series([
    function(){ ... },
    function(){ ... }
]);
```
--

# [Generators](http://davidwalsh.name/es6-generators)

+ ES 6 feature
+ Supported in Node.js 0.11, Firefox, Chrome Canary

--

# Demo

