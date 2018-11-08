# xybersolve.io
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

> Xybersolve, Corp. website: ported from AngularJS to Angular v6, with some UI updates.

## Deployment
This project has two deployment utilities, those being:
* circleci - CI/CD deployment to S3 (prod, qa, staging, dev)
* deploy (bash script) - useed for syncing content (images, documents) with no build

### CircleCI deployment
Curently setup to build and deploy in 'production' on push to 'release' branch.

Three CircleCi deployment environments (by git branch)
* release: Production build & test, deploy to primary S3 Static Website 
* develop: Development build & test, deploy to secondary S3 site
* qa: Quality assurance build & test, deploy to secondary S3 site

> pushing to 'master' doesn't trigger a build

#### Bash script deploy content to S3 static website
###### Deploy Sytnax

```sh

 $ ./deploy --help

    Script: deploy
    Purpose: Manage content on S3
    Usage: deploy [options]

    Options:
      --help:  help and usage
      --version: show version info

      Actions:
        --sync=<directory>: Synchronize files between project and S3
        --upload-res*: Upload newest resume
        --upload-letter: Upload newest cover letter
        --list: List all the content
        --size: show sizes
        --delete-all: Delete all content
        --remove: Remove site bucket
```

> `deploy` dependends on:

* `AWS-CLI`
* AWS profile named `deploy` with S3 access
* `s3api` and `s3cmd` for extended functionality
* Static S3 website
