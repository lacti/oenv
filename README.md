# oenv

It writes a temporary file to override some environment variables in building time. It creates a `oenv.js` file as default which contains some values specified by a command line.

## Install

```bash
$ yarn add -D oenv
```

## Usage

```json
"script": {
  "env:dev": "oenv -d src STAGE=dev FOO=BAR",
  "env:prod": "oenv -d src STAGE=prod FOO=BAR",
}
```

If you run a `env:dev` command, it will create a `oenv.js` file like this.

```javascript
// This file is auto-generated: #timestamp#
process.env.STAGE = "dev";
process.env.FOO = "BAR";
```

### Options

- `-o | --output` Specifies an output file name. Uses `oenv.js` as default.
- `-d | --outputDir` Specifies an output directory. Uses `.` as default.
- `-v | --verbose` Prints all contents in `oenv.js` into `console.log`.

