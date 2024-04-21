export const finance = {
    "accountName": {
        "name": "accountName",
        "description": "<p>Generates a random account name.</p>\n",
        "parameters": [],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L154",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> accountName</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">accountName</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'Personal Loan Account'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "accountNumber": {
        "name": "accountNumber",
        "description": "<p>Generates a random account number.</p>\n",
        "parameters": [
            {
                "name": "optionsOrLength?",
                "type": "number | { ... }",
                "description": "<p>An options object or the length of the account number.</p>\n"
            },
            {
                "name": "optionsOrLength.length?",
                "type": "number",
                "default": "8",
                "description": "<p>The length of the account number.</p>\n"
            }
        ],
        "since": "8.0.0",
        "sourcePath": "src/modules/finance/index.ts#L125",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> accountNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    optionsOrLength</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          length</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">accountNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 92842238</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">accountNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 28736</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">accountNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ length: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 32564</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "amount": {
        "name": "amount",
        "description": "<p>Generates a random amount between the given bounds (inclusive).</p>\n",
        "parameters": [
            {
                "name": "options",
                "type": "{ ... }",
                "default": "{}",
                "description": "<p>An options object.</p>\n"
            },
            {
                "name": "options.autoFormat?",
                "type": "boolean",
                "default": "false",
                "description": "<p>If true this method will use <code>Number.toLocaleString()</code>. Otherwise it will use <code>Number.toFixed()</code>.</p>\n"
            },
            {
                "name": "options.dec?",
                "type": "number",
                "default": "2",
                "description": "<p>The number of decimal places for the amount.</p>\n"
            },
            {
                "name": "options.max?",
                "type": "number",
                "default": "1000",
                "description": "<p>The upper bound for the amount.</p>\n"
            },
            {
                "name": "options.min?",
                "type": "number",
                "default": "0",
                "description": "<p>The lower bound for the amount.</p>\n"
            },
            {
                "name": "options.symbol?",
                "type": "string",
                "default": "''",
                "description": "<p>The symbol used to prefix the amount.</p>\n"
            }
        ],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L357",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    options</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      min</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      max</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      dec</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      symbol</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      autoFormat</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> boolean</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">    } </span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {}</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '617.87'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ min: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, max: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">10</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '5.53'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ min: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, max: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">10</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, dec: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '8'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ min: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, max: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">10</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, dec: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">2</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, symbol: </span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">'$'</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '$5.85'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">amount</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ min: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, max: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">10</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, dec: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">5</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, symbol: </span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">''</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, autoFormat: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '9,75067'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "bic": {
        "name": "bic",
        "description": "<p>Generates a random SWIFT/BIC code based on the <a href=\"https://en.wikipedia.org/wiki/ISO_9362\" target=\"_blank\" rel=\"noreferrer\">ISO-9362</a> format.</p>\n",
        "parameters": [
            {
                "name": "options",
                "type": "{ ... }",
                "default": "{}",
                "description": "<p>Options object.</p>\n"
            },
            {
                "name": "options.includeBranchCode?",
                "type": "boolean",
                "default": "faker.datatype.boolean()",
                "description": "<p>Whether to include a three-digit branch code at the end of the generated code.</p>\n"
            }
        ],
        "since": "4.0.0",
        "sourcePath": "src/modules/finance/index.ts#L887",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> bic</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    options</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      includeBranchCode</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> boolean</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">    } </span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {}</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">bic</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'WYAUPGX1'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">bic</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ includeBranchCode: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'KCAUPGR1432'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">bic</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ includeBranchCode: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">false</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'XDAFQGT7'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "bitcoinAddress": {
        "name": "bitcoinAddress",
        "description": "<p>Generates a random Bitcoin address.</p>\n",
        "parameters": [],
        "since": "3.1.0",
        "sourcePath": "src/modules/finance/index.ts#L494",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> bitcoinAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">bitcoinAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '3ySdvCkTLVy7gKD4j6JfSaf5d'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "creditCardCVV": {
        "name": "creditCardCVV",
        "description": "<p>Generates a random credit card CVV.</p>\n",
        "parameters": [],
        "since": "5.0.0",
        "sourcePath": "src/modules/finance/index.ts#L648",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> creditCardCVV</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardCVV</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '506'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "creditCardIssuer": {
        "name": "creditCardIssuer",
        "description": "<p>Returns a random credit card issuer.</p>\n",
        "parameters": [],
        "since": "6.3.0",
        "sourcePath": "src/modules/finance/index.ts#L660",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> creditCardIssuer</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardIssuer</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'discover'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "creditCardNumber": {
        "name": "creditCardNumber",
        "description": "<p>Generates a random credit card number.</p>\n",
        "parameters": [
            {
                "name": "options?",
                "type": "string | { ... }",
                "default": "{}",
                "description": "<p>An options object, the issuer or a custom format.</p>\n"
            },
            {
                "name": "options.issuer?",
                "type": "string",
                "default": "''",
                "description": "<p>The name of the issuer (case-insensitive) or the format used to generate one.</p>\n"
            }
        ],
        "since": "5.0.0",
        "sourcePath": "src/modules/finance/index.ts#L603",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> creditCardNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    options</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          issuer</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '4427163488662'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ issuer: </span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">'visa'</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '4882664999007'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ issuer: </span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">'63[7-9]#-####-####-###L'</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '6375-3265-4676-6646'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">creditCardNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">'visa'</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '1226423499765'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "currency": {
        "name": "currency",
        "description": "<p>Returns a random currency object, containing <code>code</code>, <code>name </code>and <code>symbol</code> properties.</p>\n",
        "parameters": [],
        "since": "8.0.0",
        "sourcePath": "src/modules/finance/index.ts#L438",
        "returns": "Currency",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> currency</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> Currency</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">currency</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// { code: 'USD', name: 'US Dollar', symbol: '$' }</span></span></code></pre>\n</div>",
        "seeAlsos": [
            "faker.finance.currencyCode(): For generating specifically the currency code.",
            "faker.finance.currencyName(): For generating specifically the currency name.",
            "faker.finance.currencySymbol(): For generating specifically the currency symbol."
        ]
    },
    "currencyCode": {
        "name": "currencyCode",
        "description": "<p>Returns a random currency code.\n(The short text/abbreviation for the currency (e.g. <code>US Dollar</code> -&gt; <code>USD</code>))</p>\n",
        "parameters": [],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L453",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> currencyCode</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">currencyCode</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'USD'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "currencyName": {
        "name": "currencyName",
        "description": "<p>Returns a random currency name.</p>\n",
        "parameters": [],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L465",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> currencyName</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">currencyName</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'US Dollar'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "currencySymbol": {
        "name": "currencySymbol",
        "description": "<p>Returns a random currency symbol.</p>\n",
        "parameters": [],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L477",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> currencySymbol</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">currencySymbol</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '$'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "ethereumAddress": {
        "name": "ethereumAddress",
        "description": "<p>Creates a random, non-checksum Ethereum address.</p>\n<p>To generate a checksummed Ethereum address (with specific per character casing), wrap this method in a custom method and use third-party libraries to transform the result.</p>\n",
        "parameters": [],
        "since": "5.0.0",
        "sourcePath": "src/modules/finance/index.ts#L779",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> ethereumAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">ethereumAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "iban": {
        "name": "iban",
        "description": "<p>Generates a random iban.</p>\n",
        "parameters": [
            {
                "name": "options",
                "type": "{ ... }",
                "default": "{}",
                "description": "<p>An options object.</p>\n"
            },
            {
                "name": "options.countryCode?",
                "type": "string",
                "description": "<p>The country code from which you want to generate an IBAN,\nif none is provided a random country will be used.</p>\n"
            },
            {
                "name": "options.formatted?",
                "type": "boolean",
                "default": "false",
                "description": "<p>Return a formatted version of the generated IBAN.</p>\n"
            }
        ],
        "since": "4.0.0",
        "sourcePath": "src/modules/finance/index.ts#L803",
        "throws": "Will throw an error if the passed country code is not supported.",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> iban</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    options</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      formatted</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> boolean</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">      countryCode</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">    } </span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {}</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">iban</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'TR736918640040966092800056'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">iban</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ formatted: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'FR20 8008 2330 8984 74S3 Z620 224'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">iban</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ formatted: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, countryCode: </span><span style=\"--shiki-light:#032F62;--shiki-dark:#9ECBFF\">'DE'</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'DE84 1022 7075 0900 1170 01'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "litecoinAddress": {
        "name": "litecoinAddress",
        "description": "<p>Generates a random Litecoin address.</p>\n",
        "parameters": [],
        "since": "5.0.0",
        "sourcePath": "src/modules/finance/index.ts#L516",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> litecoinAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">litecoinAddress</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'MoQaSTGWBRXkWfyxKbNKuPrAWGELzcW'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "maskedNumber": {
        "name": "maskedNumber",
        "description": "<p>Generates a random masked number.</p>\n",
        "parameters": [
            {
                "name": "optionsOrLength?",
                "type": "number | { ... }",
                "description": "<p>An options object or the length of the unmask number.</p>\n"
            },
            {
                "name": "optionsOrLength.ellipsis?",
                "type": "boolean",
                "default": "true",
                "description": "<p>Whether to prefix the numbers with an ellipsis.</p>\n"
            },
            {
                "name": "optionsOrLength.length?",
                "type": "number",
                "default": "4",
                "description": "<p>The length of the unmasked number.</p>\n"
            },
            {
                "name": "optionsOrLength.parens?",
                "type": "boolean",
                "default": "true",
                "description": "<p>Whether to use surrounding parenthesis.</p>\n"
            }
        ],
        "since": "8.0.0",
        "sourcePath": "src/modules/finance/index.ts#L295",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    optionsOrLength</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          length</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          parens</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> boolean</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          ellipsis</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> boolean</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '(...9711)'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">3</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '(...342)'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ length: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">3</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '(...342)'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ length: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">3</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, parens: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">false</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '...236'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">maskedNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ length: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">3</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, parens: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">false</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">, ellipsis: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">false</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '298'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "pin": {
        "name": "pin",
        "description": "<p>Generates a random PIN number.</p>\n",
        "parameters": [
            {
                "name": "options?",
                "type": "number | { ... }",
                "default": "{}",
                "description": "<p>An options object or the length of the PIN.</p>\n"
            },
            {
                "name": "options.length?",
                "type": "number",
                "default": "4",
                "description": "<p>The length of the PIN to generate.</p>\n"
            }
        ],
        "since": "6.2.0",
        "sourcePath": "src/modules/finance/index.ts#L744",
        "throws": "Will throw an error if length is less than 1.",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> pin</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">    options</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">      |</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E36209;--shiki-dark:#FFAB70\">          length</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">?:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> number</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">  )</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">pin</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '5067'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">pin</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">({ length: </span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">6</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\"> }) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '213789'</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">pin</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\">6</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '213789'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "routingNumber": {
        "name": "routingNumber",
        "description": "<p>Generates a random routing number.</p>\n",
        "parameters": [],
        "since": "5.0.0",
        "sourcePath": "src/modules/finance/index.ts#L171",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> routingNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">routingNumber</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// '522814402'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "transactionDescription": {
        "name": "transactionDescription",
        "description": "<p>Generates a random transaction description.</p>\n",
        "parameters": [],
        "since": "5.1.0",
        "sourcePath": "src/modules/finance/index.ts#L926",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> transactionDescription</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">transactionDescription</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'invoice transaction at Kilback - Durgan using card ending with ***(...4316) for UAH 783.82 in account ***16168663'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    },
    "transactionType": {
        "name": "transactionType",
        "description": "<p>Returns a random transaction type.</p>\n",
        "parameters": [],
        "since": "2.0.1",
        "sourcePath": "src/modules/finance/index.ts#L420",
        "returns": "string",
        "examples": "<div class=\"language-ts vp-adaptive-theme\"><button title=\"Copy Code\" class=\"copy\"></button><span class=\"lang\">ts</span><pre class=\"shiki shiki-themes github-light github-dark vp-code\" v-pre><code><span class=\"line\"><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\"> transactionType</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"--shiki-light:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"--shiki-light:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">faker.finance.</span><span style=\"--shiki-light:#6F42C1;--shiki-dark:#B392F0\">transactionType</span><span style=\"--shiki-light:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"--shiki-light:#6A737D;--shiki-dark:#6A737D\">// 'payment'</span></span></code></pre>\n</div>",
        "seeAlsos": []
    }
}
