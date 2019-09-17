# Degit

My several scaffoldiing by using [Degit](https://github.com/Rich-Harris/degit)

### Common dependency tools

- `sed` or `gsed` - If run on Darwin, this make use gsed as sed
- `node` - NodeJS language

### `#rac` - React Atomic Component

#### npm dependencies

- `react`
- `styled-components`
- `@storybook/addon-knobs`
- `@storybook/react`
- `@testing-library/react`

```sh
# bash, zsh
CN=foo-bar npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN

# fish
begin; set -lx CN foo-bar; npx degit nju33/degit#rac $CN && cd $CN && sh setup.sh $CN; end
```

### `#reduck` - Re-Duck

#### npm dependencies

- `redux`
- `immer`
- `reselect`

```sh
# bash, zsh
CN=foo-bar npx degit nju33/degit#reduck $CN && cd $CN && sh setup.sh $CN

# fish
begin; set -lx CN foo-bar; npx degit nju33/degit#reduck $CN && cd $CN && sh setup.sh $CN; end
```

### `#reduck-hook` - Re-Duck (β)

#### npm dependencies

- `redux`
- `immer`
- `reselect`

```sh
# bash, zsh
CN=foo-bar npx degit nju33/degit#reduck-hook $CN && cd $CN && sh setup.sh $CN

# fish
begin; set -lx CN foo-bar; npx degit nju33/degit#reduck-hook $CN && cd $CN && sh setup.sh $CN; end
```
