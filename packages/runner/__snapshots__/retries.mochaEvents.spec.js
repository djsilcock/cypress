exports['src/cypress/runner retries mochaEvents simple retry #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents test retry with hooks #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents test retry with [only] #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents can retry from [beforeEach] #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "before each",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h3",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "before each",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h3",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h6",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h6",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents can retry from [afterEach] #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h5",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    },
    {
      "name": "AssertionError",
      "message": "[error message]",
      "showDiff": false,
      "actual": null,
      "onFail": "[Function]",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "stack": "match.string"
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h5",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h6",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h6",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r6",
      "title": "suite 2",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r7",
      "order": 4,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r7",
      "order": 4,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r7",
      "order": 4,
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h7",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    },
    {
      "name": "AssertionError",
      "message": "[error message]",
      "showDiff": false,
      "actual": null,
      "onFail": "[Function]",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "stack": "match.string"
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r7",
      "order": 4,
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h7",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r7",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r7",
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h7",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 1,
      "retries": 2
    },
    {
      "name": "AssertionError",
      "message": "[error message]",
      "showDiff": false,
      "actual": null,
      "onFail": "[Function]",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "stack": "match.string"
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r7",
      "title": "test 1",
      "hookName": "after each",
      "err": "{AssertionError}",
      "state": "failed",
      "failedFromHookId": "h7",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r7",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h7",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r7",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r7",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r7",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r7",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h7",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r6",
      "title": "suite 2",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r8",
      "title": "suite 3",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r9",
      "order": 5,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r9",
      "order": 5,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r9",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r9",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "err": "{Object 9}",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": "relative/path/to/spec.js",
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r9",
      "order": 5,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r9",
      "order": 5,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r8",
      "title": "suite 3",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r9",
      "order": 5,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents cant retry from [before] #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "fail",
    {
      "id": "r3",
      "title": "\"before all\" hook for \"test 1\"",
      "hookName": "before all",
      "hookId": "h1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "originalTitle": "\"before all\" hook",
      "currentRetry": 0,
      "retries": -1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "before all",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h1",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "before all",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h1",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents cant retry from [after] #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h5",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h6",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "fail",
    {
      "id": "r3",
      "title": "\"after all\" hook for \"test 1\"",
      "hookName": "after all",
      "hookId": "h6",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "originalTitle": "\"after all\" hook",
      "currentRetry": 0,
      "retries": -1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "after all",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h6",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "hookName": "after all",
      "err": "{Object 9}",
      "state": "failed",
      "failedFromHookId": "h6",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          },
          {
            "hookId": "h5",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h6",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents three tests with retry #1'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r3",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r4",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r4",
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r4",
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 1,
      "retries": 2
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r4",
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 1,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r4",
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r4",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r4",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r4",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r4",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 2,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "order": 3,
      "title": "test 3",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 2
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents screenshots retry screenshot in test body #1'] = [
  "take:screenshot",
  {
    "titles": [
      "suite 1",
      "test 1"
    ],
    "testId": "r3",
    "testAttemptIndex": "match.match(0)",
    "capture": "fullPage",
    "clip": {
      "x": 0,
      "y": 0,
      "width": 1000,
      "height": 660
    },
    "viewport": {
      "width": 1000,
      "height": 660
    },
    "scaled": false,
    "blackout": [],
    "startTime": "match.string",
    "current": 1,
    "total": 1
  }
]

exports['src/cypress/runner retries mochaEvents screenshots retry screenshot in test body #2'] = {
  "id": "r3",
  "testAttemptIndex": "match.match(0)",
  "isOpen": false,
  "appOnly": true,
  "scale": false,
  "waitForCommandSynchronization": false,
  "disableTimersAndAnimations": true,
  "blackout": []
}

exports['serialize state - retries'] = {
  "currentId": "r6",
  "tests": {
    "r3": {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "state": "passed",
      "body": "stub",
      "type": "test",
      "duration": 1,
      "wallClockStartedAt": "1970-01-01T00:00:00.000Z",
      "wallClockDuration": 1,
      "timings": {
        "lifecycle": 1,
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": 1,
            "afterFnDuration": 1
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": 1,
            "afterFnDuration": 1
          }
        ],
        "test": {
          "fnDuration": 1,
          "afterFnDuration": 1
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": 1,
            "afterFnDuration": 1
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": 1,
            "afterFnDuration": 1
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 0,
      "retries": 1,
      "prevAttempts": []
    },
    "r5": {
      "id": "r5",
      "title": "test 1",
      "state": "passed",
      "body": "stub",
      "type": "test",
      "duration": 1,
      "wallClockStartedAt": "1970-01-01T00:00:00.000Z",
      "wallClockDuration": 1,
      "timings": {
        "lifecycle": 1,
        "test": {
          "fnDuration": 1,
          "afterFnDuration": 1
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1,
      "prevAttempts": [
        {
          "id": "r5",
          "order": 2,
          "title": "test 1",
          "err": {
            "message": "stub 2 fail",
            "name": "AssertionError",
            "stack": "[err stack]",
            "sourceMappedStack": "AssertionError: stub 2 fail\n    at fn (cypress:///../driver/src/cy/chai.js:452:20)\n    at Object.invoke (cypress:///../driver/node_modules/sinon/lib/sinon/behavior.js:163:33)\n    at Context.functionStub (cypress:///../driver/node_modules/sinon/lib/sinon/stub.js:39:44)\n    at Function.invoke (cypress:///../driver/node_modules/sinon/lib/sinon/proxy-invoke.js:47:48)\n    at Context.stub (cypress:///../driver/node_modules/sinon/lib/sinon/proxy.js:214:27)",
            "parsedStack": [
              {
                "message": "AssertionError: stub 2 fail",
                "whitespace": ""
              },
              {
                "function": "fn",
                "fileUrl": "cypress:///../driver/src/cy/chai.js",
                "originalFile": "cypress:///../driver/src/cy/chai.js",
                "relativeFile": "../driver/src/cy/chai.js",
                "absoluteFile": "/home/owner/dev/cypress3/packages/driver/src/cy/chai.js",
                "line": 452,
                "column": 20,
                "whitespace": "    "
              },
              {
                "function": "Object.invoke",
                "fileUrl": "cypress:///../driver/node_modules/sinon/lib/sinon/behavior.js",
                "originalFile": "cypress:///../driver/node_modules/sinon/lib/sinon/behavior.js",
                "relativeFile": "../driver/node_modules/sinon/lib/sinon/behavior.js",
                "absoluteFile": "/home/owner/dev/cypress3/packages/driver/node_modules/sinon/lib/sinon/behavior.js",
                "line": 163,
                "column": 33,
                "whitespace": "    "
              },
              {
                "function": "Context.functionStub",
                "fileUrl": "cypress:///../driver/node_modules/sinon/lib/sinon/stub.js",
                "originalFile": "cypress:///../driver/node_modules/sinon/lib/sinon/stub.js",
                "relativeFile": "../driver/node_modules/sinon/lib/sinon/stub.js",
                "absoluteFile": "/home/owner/dev/cypress3/packages/driver/node_modules/sinon/lib/sinon/stub.js",
                "line": 39,
                "column": 44,
                "whitespace": "    "
              },
              {
                "function": "Function.invoke",
                "fileUrl": "cypress:///../driver/node_modules/sinon/lib/sinon/proxy-invoke.js",
                "originalFile": "cypress:///../driver/node_modules/sinon/lib/sinon/proxy-invoke.js",
                "relativeFile": "../driver/node_modules/sinon/lib/sinon/proxy-invoke.js",
                "absoluteFile": "/home/owner/dev/cypress3/packages/driver/node_modules/sinon/lib/sinon/proxy-invoke.js",
                "line": 47,
                "column": 48,
                "whitespace": "    "
              },
              {
                "function": "Context.stub",
                "fileUrl": "cypress:///../driver/node_modules/sinon/lib/sinon/proxy.js",
                "originalFile": "cypress:///../driver/node_modules/sinon/lib/sinon/proxy.js",
                "relativeFile": "../driver/node_modules/sinon/lib/sinon/proxy.js",
                "absoluteFile": "/home/owner/dev/cypress3/packages/driver/node_modules/sinon/lib/sinon/proxy.js",
                "line": 214,
                "column": 27,
                "whitespace": "    "
              }
            ],
            "actual": null,
            "showDiff": false
          },
          "state": "failed",
          "body": "stub",
          "type": "test",
          "duration": 1,
          "wallClockStartedAt": "1970-01-01T00:00:00.000Z",
          "wallClockDuration": 1,
          "timings": {
            "lifecycle": 1,
            "test": {
              "fnDuration": 1,
              "afterFnDuration": 1
            }
          },
          "file": null,
          "final": false,
          "currentRetry": 0,
          "retries": 1
        }
      ]
    }
  },
  "startTime": "1970-01-01T00:00:00.000Z",
  "emissions": {
    "started": {
      "r1": true,
      "r2": true,
      "r3": true,
      "r4": true,
      "r5": true,
      "r6": true
    },
    "ended": {
      "r3": true,
      "r2": true,
      "r5": true
    }
  },
  "passed": 2,
  "failed": 0,
  "pending": 0,
  "numLogs": 0
}

exports['src/cypress/runner retries mochaEvents simple retry #3'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "order": 1,
      "title": "test 1",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r3",
      "title": "test 1",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r2",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r3",
      "title": "test 1",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        }
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents test retry with [only] #3'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]

exports['src/cypress/runner retries mochaEvents test retry with [only] #2'] = [
  [
    "mocha",
    "start",
    {
      "start": "match.date"
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "suite",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before all\" hook",
      "hookName": "before all",
      "hookId": "h1",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "retry",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    },
    {
      "message": "[error message]",
      "name": "AssertionError",
      "stack": "match.string",
      "sourceMappedStack": "match.string",
      "parsedStack": "match.array",
      "actual": null,
      "showDiff": false
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "order": 2,
      "title": "test 2",
      "err": "{Object 9}",
      "state": "failed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before all": [
          {
            "hookId": "h1",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": false,
      "currentRetry": 0,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:before:run",
    {
      "id": "r5",
      "title": "test 2",
      "body": "[body]",
      "type": "test",
      "wallClockStartedAt": "match.date",
      "file": null,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"before each\" hook",
      "hookName": "before each",
      "hookId": "h2",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after each\" hook",
      "hookName": "after each",
      "hookId": "h3",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "hook end",
    {
      "id": "r5",
      "title": "\"after all\" hook",
      "hookName": "after all",
      "hookId": "h4",
      "body": "[body]",
      "type": "hook",
      "duration": "match.number",
      "file": null,
      "currentRetry": 0,
      "retries": -1
    }
  ],
  [
    "mocha",
    "pass",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "test end",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r4",
      "title": "suite 1",
      "root": false,
      "type": "suite",
      "file": null,
      "retries": -1
    }
  ],
  [
    "mocha",
    "test:after:run",
    {
      "id": "r5",
      "title": "test 2",
      "state": "passed",
      "body": "[body]",
      "type": "test",
      "duration": "match.number",
      "wallClockStartedAt": "match.date",
      "wallClockDuration": "match.number",
      "timings": {
        "lifecycle": "match.number",
        "before each": [
          {
            "hookId": "h2",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "test": {
          "fnDuration": "match.number",
          "afterFnDuration": "match.number"
        },
        "after each": [
          {
            "hookId": "h3",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ],
        "after all": [
          {
            "hookId": "h4",
            "fnDuration": "match.number",
            "afterFnDuration": "match.number"
          }
        ]
      },
      "file": null,
      "final": true,
      "currentRetry": 1,
      "retries": 1
    }
  ],
  [
    "mocha",
    "suite end",
    {
      "id": "r1",
      "title": "",
      "root": true,
      "type": "suite",
      "file": "relative/path/to/spec.js",
      "retries": -1
    }
  ],
  [
    "mocha",
    "end",
    {
      "end": "match.date"
    }
  ]
]
