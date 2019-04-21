## Steps to reproduce:

```
npm install
```

```
npm start
```

## Notes:

Using a relative path import works fine:

```diff
- import a from '@App/a'
+ import a from './a'
  console.log(a)
```

Issue is not present in v1.0.4
