#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
#echo 'shangxj.cn' >CNAME

git init
git add -A
git commit -m 'deploy'

git config user.name mika
git config user.email troyshangxj@gmail.com
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:troy-sxj.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:troy-sxj/shang-blog.git master:gh-pages

cd -
