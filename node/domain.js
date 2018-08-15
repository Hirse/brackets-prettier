const prettier = require("prettier");

const domainName = "hirse.brackets-prettier";

exports.init = domainManager => {
    if (!domainManager.hasDomain(domainName)) {
        domainManager.registerDomain(domainName, { major: 0, minor: 1 });
    }

    domainManager.registerCommand(
        domainName,
        "format", // command name
        prettier.format, // handler function
        false, // is async
        "Format file with Prettier", // description
        [{ name: "source", type: "string" }, { name: "options", type: "object" }],
        [{ name: "formatted", type: "string" }]
    );

    domainManager.registerCommand(
        domainName,
        "formatWithCursor", // command name
        prettier.formatWithCursor, // handler function
        false, // is async
        "Format file with Prettier while preserving cursor location", // description
        [{ name: "source", type: "string" }, { name: "options", type: "object" }],
        [{ name: "result", type: "object" }]
    );

    domainManager.registerCommand(
        domainName,
        "resolveConfig", // command name
        prettier.resolveConfig.sync, // handler function
        false, // is async
        "Resolve Prettier Config", // description
        [{ name: "filePath", type: "string" }, { name: "options", type: "object" }],
        [{ name: "configPromise", type: "object" }]
    );
};
