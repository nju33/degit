#!/bin/sh

replace () {
  for f in *.ts
  do
    file_name=$1
    file_name_in_pascal="$(F="$file_name" node -p "process.env.F.replace(/^(.)/, (_, p) => p.toUpperCase()).replace(/-([a-z])/g, (_, p) => p.toUpperCase())")"
    file_name_in_lower_camel_case="$(F="$file_name" node -p "process.env.F.replace(/-([a-z])/g, (_, p) => p.toUpperCase())")"

    if command -v gsed; then
      gsed -i "s/DUCK_NAME_IN_PASCAL/$file_name_in_pascal/g" "$f"
      gsed -i "s/DUCK_FILE_NAME/$file_name/g" "$f"
      gsed -i "s/DUCK_NAME/$file_name_in_lower_camel_case/g" "$f"
    else
      sed -i "s/DUCK_NAME_IN_PASCAL/$file_name_in_pascal/g" "$f"
      sed -i "s/DUCK_FILE_NAME/$file_name/g" "$f"
      sed -i "s/DUCK_NAME/$file_name_in_lower_camel_case/g" "$f"
    fi

    if [ "$f" != "index.ts" ]; then
      mv "$f" "$(echo "$f" | sed "s/DUCK_FILE_NAME/$file_name/")"
    fi
  done
}

post_process () {
  rm setup.sh
}

if test -z "$1"
then
  echo ダック名（ケバブケース）を指定してください
  echo './setup.sh duck-name'
  exit 1
fi

set -xe

replace "$1"
post_process
