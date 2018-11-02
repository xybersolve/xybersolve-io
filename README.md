# xybersolve.io

> Ported from AngularJS to Angular v6.   

## Deployment
This project has two deployment utilities, those being:
* circleci - CI/CD deployment to S3 (prod, qa, staging, dev)
* bash script - useful for syncing content (images, documents) without a build 

### CricleCI
Curently setup to build and deploy in 'production' on a 'release branch push.

#### Bash script deploy content to to S3 static website
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

