# Degit

My minimal templates by using [Degit](https://github.com/Rich-Harris/degit)

### `#rac` - React Atomic Component

#### dependencies

- `sed` - If gnu-sed, make it available for sed

```sh
# bash, zsh
CN=foo-bar npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN

# fish
begin; set -lx CN foo-bar; npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN; end
```

