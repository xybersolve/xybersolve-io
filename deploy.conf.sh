#!/usr/bin/env bash
#
#  S3 static webSite configuration file
#   * content copy definitions
#
declare AWS_REGION='us-west-2'
declare AWS_PROFILE='deploy'

declare SITE_DIR=/Users/Greg/angular2/xybersolve-io
declare RESUME_FILE=Greg.Milligan-DevOps-Resume.docx
declare RESUME_DEST_FILE=greg.milligan.devops.resume.docx
declare LETTER_FILE=Greg.Milligan-DevOps-Cover-Letter.docx
declare LETTER_DEST_FILE=greg.milligan.devops.cover.letter.docx
declare RESUME_DIR=~/Documents/Resume/Word
declare RESUME_PATH=${RESUME_DIR}/${RESUME_FILE}
declare LETTER_PATH=${RESUME_DIR}/${LETTER_FILE}

# for sync
declare SOURCE_DIR="${SITE_DIR}/dist"

# site buckets
declare SITE_BUCKET='xybersolve.io.2'
declare LOG_BUCKET='logs.xybersolve.io.2'

# for testing
declare SITE_ENDPOINT='http://xybersolve.io.2.s3-website-us-west-2.amazonaws.com'

declare -ar FILES=(
  'index.html'
  '404.html'
  'favicon.ico'
)

declare -ar DIRS=(
  'dist/xybersolve.io'
  'build'
  'documents'
  'image'
)
