# Degit

My minimal templates by using [Degit](https://github.com/Rich-Harris/degit)

### `#rac` - React Atomic Component

```sh
npx degit nju33/degit <out>
cd <out>
sh -c '
f() {
	set -xe

	for f in COMPONENT_NAME.*
	do
		local file_name=$1
		local file_name_in_lower_camel_case=`F="$file_name" node -p "process.env.F.replace(/-([a-z])/g, (_, p) => p.toUpperCase())"`

		sed -i "s/COMPONENT_NAME/$file_name_in_lower_camel_case/g" $f
		sed -i "s/COMPONENT_FILE_NAME/$file_name/g" $f
		mv $f `echo "$f" | sed "s/COMPONENT_FILE_NAME/$file_name/"`
	done
}; f foo-bar
'

```

