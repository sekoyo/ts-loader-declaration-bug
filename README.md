### Expected Behaviour

Continues to emit declaration files

### Actual Behaviour

Stops emitting declaration files if ANY modification is made to a .SCSS (sass) file, declaration directory structure is still there without any declarations.

If an edit is then made to a particular module it generates declarations for those files and it's imports but still missing from the the rest of the project.

Edit: This frequently happens when modifying TS files too, although in that case only some go missing (ones which don't have a direct dependency on the edited file).

### Steps to Reproduce the Problem

```
yarn install
yarn start
```

Note how `dist/types` is generated

Now make a change to the `.scss` file and note all declaration files except for the directory structure are removed.

### Location of a Minimal Repository that Demonstrates the Issue.

https://github.com/DominicTobias/ts-loader-declaration-bug

**Edit:** This appears to be caused when using `clean-webpack-plugin` in conjunction with `ts-loader`. So a quick fix is to stop using it.
