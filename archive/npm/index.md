title: NPM
author:
    name: Johny
    twitter: sudodoki
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

# Dependency management

--

# Where goes what?
## Node dependencies -> npm

## Front-end dependencies -> bower

--

##![NPM](npm.png)
--

## [NPM](https://npmjs.org/)

+ Written by Isaac Z. Schlueter
+ Total Packages: 49 435
+ 2 667 474  downloads in the last day (circa 2.12.13)
+ 30 663 295   downloads in the last week (circa 2.12.13)
+ [Open Source](https://github.com/isaacs/npm)

--

![ScaleNPM](https://scalenpm.org/img/npm-stats.png)

--

## How to install

Ships with Node.js. If you have it, you have NPM.

## [Cheatsheet](http://blog.nodejitsu.com/npm-cheatsheet)

--

## How to use

NPM by default is using package.json file to list all your dependecies (both regular and development)

    npm install my_module --save //-> adds it to dependencies into package.json
    npm install my_module --save-dev // -> adds it to devDependencies

Some packages come with handy binaries you want to be used across your system from command line.
Then you should use handy ```-g``` flag

    npm install -g bower // -> sometimes needs sudo so be sure to
                         //    check which npm and use path for binary
--

## How to use on fresh project

After cloning/downloading project, be sure to run ```npm install``` and it will fetch all packages from dependencies & devDevelopment.

For dependencies only, use ```npm install --production```

--

## Hooks

Apart from being package manager, npm can run some scripts, both as hooks and custom scripts

## [NPM SCRIPTS](https://npmjs.org/doc/misc/npm-scripts.html)

Arbitrary scripts can be run by doing ```npm run-script```

```
    // package.json
    "scripts": {
      "debug": "node --debug server.js"
    }
```
```
    // run from command line
    npm run-script debug
```

--

# Mah npm can also build. [Proof](http://substack.net/task_automation_with_npm_run)
--

# npm link
Creates symbolic link to package, when ran in package folder.
Can be 'attached'/consumed via `npm link <pkg>` in project folder.
Similar to setting `path` in Gemfile.

--

# npm init
```javascript
npm set init.author.name "sudodoki"
npm set init.author.email "smd.deluzion@gmail.com"
npm set init.author.url "sudodoki.name"
```

--

# npm search
# npm ls

--

# npm view
`npm view <pkg> version` - view package version

--

# npm update
`npm update --save` - updates according to listed in package.json.
Use with version set to * in package.json to overwrite it with latest stable.

--

# Shortcuts

+ `npm i` ~ `npm install`
+ `npm r` ~ `npm uninstall`

--

# Links
+ [9 quick tips about npm](http://blog.ponyfoo.com/2013/12/14/9-quick-tips-about-npm)
+ [cheatsheet](http://blog.nodejitsu.com/npm-cheatsheet)
+ [another one, with bower/grunt](http://jessewarden.com/archives/node-bower-grunt-cheat-sheet-v1-jessewarden.com.pdf)
--


# Bump versions
`npm version X.Y.Z` - will commit tag for you (in case of git presence) and update package.json.
--

##![Bower](bower-logo.png)
--

## [Bower](http://bower.io/)

+ Node package
+ 616 pages in official registy, 10 packages a page ~ 6160 packages. [Registry](http://sindresorhus.com/bower-components/)
+ By Twitter & [Open Source](https://github.com/bower/bower)

--

## How to install

```
    npm install -g bower
```

--

## How to use

Bower by default uses bower.json && .bowerrc to manage dependencies & bower options. [Sample](https://gist.github.com/facultymatt/5482781)
```
    bower instal jquery@1.10.2 --save
```

## [Cheatsheet](http://jessewarden.com/archives/node-bower-grunt-cheat-sheet-v1-jessewarden.com.pdf)

--

## Challengers

+ Ender, 
+ volo, 
+ component, 
+ Jam
