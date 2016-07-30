title: Insert Title here
author:
  name: sudodoki
  email: smd.deluzion@gmail.com
  github: sudodoki
  twitter: sudodoki
theme: sudodoki/reveal-cleaver-theme
output: index.html

--

![](images/infinite_battle.gif)

--
![](images/topic-name.png)

--

# CI
## I'm not afraid of no merge

--

### Checks
1. Tests / code coverage
2. Linting / styleguide checks
3. Conventions etc - commit message, changelog, etc
4. Code smells, etc (like #2, but featuring cool words, like [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity))

--

# Tools
1. ~~jscs/jshint/jslint~~ [Eslint](http://eslint.org/)
2. [Stylelint](https://github.com/stylelint/stylelint)
3. karma / jasmine / mocha / qunit
4. isparta/[istanbul](https://github.com/gotwarlost/istanbul)
5. …

--

### Checks can find you and your errors anywhere, anytime
1. ~~shower~~ editor
2. before commit
3. after branch/PR creation
4. after merge
5. before release
6. in production (💀)

--

# Tools
1. Atom's [Linter](https://github.com/steelbrain/linter) and [Linter-eslint](https://atom.io/packages/linter-eslint)
2. Bare [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) or using wrappers, like [pre-commit](https://www.npmjs.com/package/pre-commit)
3. [Code review tools](https://en.wikipedia.org/wiki/List_of_tools_for_code_review). [LGTM](http://lgtm.in/)
4. [SAAS platform](https://github.com/ligurio/Continuous-Integration-services/blob/master/continuous-integration-services-list.md)

--

# Other goodies
1. [Commitizen](https://github.com/commitizen/cz-cli)
2. [Git flow support](http://nvie.com/posts/a-successful-git-branching-model/): [Github flow](datasift.github.io/gitflow/GitFlowForGitHub.html), [Git flow](https://github.com/nvie/gitflow)

--

<img style="height:700px" src="http://nvie.com/img/git-model@2x.png" />

--

# One last thing: eslint configs
+ [Aribnb](https://www.npmjs.com/package/eslint-config-airbnb)
+ [Standard](https://github.com/feross/eslint-config-standard)
+ [Google](https://github.com/google/eslint-config-google)
+ Specific: Angular, React, etc
+ Brew your own

--

# [CD](https://en.wikipedia.org/wiki/Continuous_delivery)
## ~~Every once in a while we do a release~~ chik-chik ➡️ production

--

# Why wait?
## Whenever CI pass - 🚢it
## On every successful CI run, push to [staging/sandbox/production]

--

# Main loop
## …fix → push → build → deploy → fix → push…

--
# Ways to deploy
1. FTP, SCP, RSYNC + SSH
2. [Git](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps)
3. [Capistrano](http://capistranorb.com/), [shipit](https://github.com/shipitjs/shipit)
4. Containers
5. SaaS, PaaS
--
### IaaS vs PaaS vs SaaS
![](images/pizza.jpg)
--
# CDN
