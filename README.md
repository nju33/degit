# Degit

My minimal templates by using [Degit](https://github.com/Rich-Harris/degit)

### `#rac` - React Atomic Component

#### dependencies

- `sed` - If gnu-sed, should make it available as sed
- `react`
- `styled-components`
- `@storybook/react`
- `@testing-library/react`

```sh
# bash, zsh
CN=foo-bar npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN

# fish
begin; set -lx CN foo-bar; npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN; end
```

