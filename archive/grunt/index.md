title: Grunt 101
author:
  name: Johny
  twitter: sudodoki
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

##![grunt](grunt-logo.png)
--

# What is it?
# Why use it?
--
# [Grunt](http://gruntjs.com/)
### The ultimate task runner
+ Node package
+ Created by Ben Alman ([@cowboy](http://github.com/cowboy))
+ ~2k [plugins](http://gruntjs.com/plugins)

--

## How to install
Ships with 2 parts: grunt itself & grunt-cli  
1. Installing cli:
``` 
    npm install -g grunt-cli
```
2. Installing package is as easy as specifying proper version in `package.json` and running `npm i` or just `npm i grunt`

--

### Gruntfile[.js|.coffee]

```
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    task: {
      options: {
        // general options go here
      },
      targetName1: {
        // targetName1 specific
      },
      targetName2: { ... }
    }
  })
  grunt.loadNpmTasks('grunt-task');
  grunt.registerTask('default', ['task'])
}
```

--
### Q: I'm bored of loadNpmTasks
### A: Use [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
--

## Multi tasks: 
### grunt task
####vs
### grunt task:targetName1
--

### [Configuring tasks](http://gruntjs.com/configuring-tasks)
+ Globbing patterns: `* ? ** {} !` i.e:  
```
!foo/???*{.js,.coffee}
```
If you set `expand` option to true, you can use:  
+ `cwd` - current working directory
+ `src`, `dest`, `ext`, 
+ `flatten` - remove all path parts from generated dest paths
+ `rename` - func to be called for each matched src file, `dest` & `src` as arguments.

--

### [Creating tasks](http://gruntjs.com/creating-tasks)
```
grunt.registerTask('build', 'Build awesome project', function(target) {
    // Do some stuff.
    grunt.task.run(['lol', 'rofl', 'seriouZ:' + Math.random() ])
  })
```
--

## Challengers

+ [Gulp](https://github.com/gulpjs/gulp)
+ [Vanilla node](https://gist.github.com/substack/8313379)
