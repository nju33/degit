#!/bin/sh

set -xe

if test -z $1
then
  echo コンポート名（ケバブケース）を指定してください
  echo './setup.sh component-name'
  exit 1
fi

for f in *.ts
do
  local file_name=$1
  local file_name_in_lower_camel_case=`F="$file_name" node -p "process.env.F.replace(/-([a-z])/g, (_, p) => p.toUpperCase())"`

  sed -i "s/COMPONENT_NAME/$file_name_in_lower_camel_case/g" $f
  sed -i "s/COMPONENT_FILE_NAME/$file_name/g" $f
  mv $f `echo "$f" | sed "s/COMPONENT_FILE_NAME/$file_name/"`
done

rm setup.sh