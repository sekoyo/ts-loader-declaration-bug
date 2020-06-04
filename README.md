### Expected Behaviour

Continues to emit declaration files

### Actual Behaviour

Stops emitting declaration files if ANY modification is made to a .SCSS (sass) file, declaration directory structure is still there without any declaration, e.g. in a more complex project with multiple directories:

![Screenshot 2020-06-05 at 06 13 50](https://user-images.githubusercontent.com/760314/83817192-b1994900-a6f6-11ea-8858-6afeff197866.png)

If I make a modification to a TS file - for example in `gridHeader` then that file and any imported file emit declarations. Still missing for ones not directly in the dependency path of `gridHeader` so I would for example have to modify `gridHeader` and `columns` to see those.

### Steps to Reproduce the Problem

```
yarn install
yarn start
```

Note how `dist/types` is generated

Now make a change to the `.scss` file and note all declaration files except for the directory structure are removed.

### Location of a Minimal Repository that Demonstrates the Issue.

https://github.com/DominicTobias/ts-loader-declaration-bug
