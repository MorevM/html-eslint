const html = require('@html-eslint/eslint-plugin');
const htmlParser = require('@html-eslint/parser');

module.exports = [
    {
        files: ["js/*.js"],
        plugins: {
            html,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 6
            },
        },
        rules: {
            "html/indent": ["error", 2]
        }
    },
    {
        files: ["html/*.html"],
        plugins: {
            html
        },
        languageOptions: {
            parser: htmlParser,
            parserOptions: {
                templateEngineSyntax: htmlParser.TEMPLATE_ENGINE_SYNTAX.HANDLEBAR
            }
        },
        rules: {
            "html/indent": ["error", 2],
            "html/sort-attrs": ["error"],
            "html/quotes": ["error"]
        }
    },
    {
        files: ["frontmatter/*.html"],
        plugins: {
            html
        },
        languageOptions: {
            parser: htmlParser,
            parserOptions: {
                frontmatter: true,
            }
        },
        rules: {
            "html/indent": ["error", 2],
        }
    }
];