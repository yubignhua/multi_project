#!/bin/bash

APP_NAME="vue_medweb_pc"

TARGET_DOMAIN="rsync://data.chunyu.me"

# biz
_DEFAULT_TEST_BUSINESS_DIR=$TARGET_DOMAIN'/projects/biztest/medweb/data/'

# test
_DEFAULT_TEST_TEST_DIR=$TARGET_DOMAIN'/projects/test/medweb/data/'

TARGET_DIR=$_DEFAULT_TEST_BUSINESS_DIR

# 测试服数组列表
#TEST_SERVICE=('--qc' '--biz' '--test' '--dev')

# 测试服判断（最后一个参数）, 目前没用, 全部部署到biz上
if [ ${!#} == "--biz" ]; then
  TARGET_DIR=$_DEFAULT_TEST_BUSINESS_DIR
elif [ ${!#} == "--test" ]; then
  TARGET_DIR=$__DEFAULT_TEST_TEST_DIR
elif [ ${!#} == "--nbiz" ]; then
  TARGET_DIR=$_DEFAULT_TEST_BUSINESS_DIR
elif [ ${!#} == "--dev" ]; then
  TARGET_DIR=$_DEFAULT_TEST_BUSINESS_DIR
else
  TARGET_DIR=$_DEFAULT_TEST_BUSINESS_DIR
fi

# 当前分支
function git_branch {
   branch="`git branch 2>/dev/null | grep "^\*" | sed -e "s/^\*\ //"`"
   if [ "${branch}" != "" ];then
       if [ "${branch}" = "(no branch)" ];then
           branch="(`git rev-parse --short HEAD`...)"
       fi
       echo "$branch"
   fi
}
CURRENT_BRANCH=$(git_branch)
echo "******************当前分支:"
echo $CURRENT_BRANCH


echo "******************1.测试分支更新******************"
git reset --hard || { echo "command failed ==== "; exit 1; }
git checkout feature/test || { echo "command failed ===="; exit 1; }
git pull origin feature/test || { echo "command failed ===="; exit 1; }
git merge $CURRENT_BRANCH || { echo "command failed ===="; exit 1; }
git push origin || { echo "command failed ===="; exit 1; }


echo "******************2.代码本地 webpack vue 构建开始******************"
#npm install
npm run build-test || { echo "command failed"; exit 1; }


echo "******************3.同步编译资源到远程目标机器******************"
# rsync -avP 本地资源目录/ rsync://data.chunyu.me/projects/{测试环境名称}/{后端项目名字}/data/{目标子目录}
# 同步静态资源
rsync -avP ./dist/static/ $TARGET_DIR'static/'
# 同步模版
rsync -avP ./dist/templates/ $TARGET_DIR'templates/vue_medweb_pc/'

echo '******************4.删除文件******************'
rm -rf ./dist || { echo "command failed"; exit 1; }


echo '******************5.还原分支******************'
git checkout $CURRENT_BRANCH

echo '******************6.发布成功******************'
