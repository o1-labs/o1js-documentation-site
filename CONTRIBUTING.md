## How to Contribute

This documentation is a living document, and we appreciate and welcome contributions to improve!
Please review this guide to ensure your contribution matches the expected structure.

### Versioning

This repo uses versioning to match the correct documentation to the correct version of o1js.
The documents in the `docs/` directory reflect the "current" version, whatever that is. That
is a good place to put new articles, or add missing information.  If you specifically want to
edit an older version of the doc, you can do that by changing the file in
`versioned_docs/{your_version}/`.

### Code Snippets

Instead of writing code snippets in-line, we use a remark plugin to inject code snippets from
out `docs/snippets/` directory into the docs.  We pair this with testing on CI to ensure that
the code in the docs is valid and correct.  Only the snippets in the current version will be
tested, so as a version of the docs gets cut, those code snippets are also "frozen in time"
to reflect an older version of o1js.

### Spell and Link Checking

We run a check on CI that spelling is correct and links work.  You can run these commands 
locally to check correctness.

#### Spelling

```sh
npx cspell --no-progress --no-summary "docs/**/*.{md,mdx}" '!docs/api-reference/**/*' '!docs/changelog.md' || exit 1
```

To add legitimate words related to the domain (like "ZkApp") to the dictionary, add them to `.o1jsDictionary.txt`.

#### Links

```sh
find . \( -name '*.md' -o -name '*.mdx' \) \
-not -path './node_modules/*' \
-not -path './docs/api-reference/*' \
-not -path './docs/changelog.md'  \
-not -path './versioned_docs/*' | \
xargs npx markdown-link-check --config .mlc-config.json
```
