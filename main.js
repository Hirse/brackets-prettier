define((require, exports, module) => {
    "use strict";

    const PREFIX = "hirse.brackets-prettier";
    const COMMAND_ID = `${PREFIX}.format`;
    const PREF_DIALOG_ID = "hideDialog";
    const KEY_BINDINGS = [
        {
            key: "Ctrl-Alt-F",
        },
        {
            key: "Cmd-Alt-F",
            platform: "mac",
        },
    ];

    const CommandManager = brackets.getModule("command/CommandManager");
    const Menus = brackets.getModule("command/Menus");
    const DocumentManager = brackets.getModule("document/DocumentManager");
    const Editor = brackets.getModule("editor/Editor").Editor;
    const PreferencesManager = brackets.getModule("preferences/PreferencesManager");
    const AppInit = brackets.getModule("utils/AppInit");
    const ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    const NodeDomain = brackets.getModule("utils/NodeDomain");
    const DefaultDialogs = brackets.getModule("widgets/DefaultDialogs");
    const Dialogs = brackets.getModule("widgets/Dialogs");

    const nodeDomain = new NodeDomain(PREFIX, ExtensionUtils.getModulePath(module, "node/domain"));
    const Strings = require("strings");
    ExtensionUtils.loadStyleSheet(module, "style/style.css");
    const prefs = PreferencesManager.getExtensionPrefs(PREFIX);
    AppInit.appReady(onReady);

    function onReady() {
        prefs.definePreference(PREF_DIALOG_ID, "boolean", false, {
            name: Strings.PREF_DIALOG_NAME,
            description: Strings.PREF_DIALOG_DESC,
        });

        CommandManager.register(Strings.FORMAT, COMMAND_ID, format);

        addMenuEntry();
        addToolbarButton();
    }

    function addMenuEntry() {
        const editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
        editMenu.addMenuDivider();
        editMenu.addMenuItem(COMMAND_ID, KEY_BINDINGS);
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(COMMAND_ID);
    }

    function addToolbarButton() {
        $(document.createElement("a"))
            .attr("id", "prettier-icon")
            .attr("href", "#")
            .attr("title", Strings.FORMAT)
            .on("click", () => {
                format();
            })
            .appendTo($("#main-toolbar .buttons"));
    }

    /**
     * Format the code.
     * If the editor has a current selection, only that selection is formatted.
     * @param {Document} document The document to be formatted.
     */
    function format() {
        const document = DocumentManager.getCurrentDocument();
        nodeDomain
            .exec("resolveConfig", document.file.fullPath, {
                editorconfig: true,
            })
            .then(
                configOptions => {
                    const text = document.getText();
                    const options = Object.assign(
                        {
                            filepath: document.file.fullPath,
                            tabWidth: Editor.getSpaceUnits(),
                            useTabs: Editor.getUseTabChar(),
                        },
                        configOptions
                    );
                    return nodeDomain.exec("format", text, options);
                },
                message => {
                    Dialogs.showModalDialog(
                        DefaultDialogs.DIALOG_ID_ERROR,
                        Strings.PARSE_CONFIG_FAILED,
                        `<pre>${message}</pre>`
                    );
                }
            )
            .then(
                formatted => {
                    document.setText(formatted);
                },
                message => {
                    Dialogs.showModalDialog(
                        DefaultDialogs.DIALOG_ID_ERROR,
                        Strings.FORMAT_FAILED,
                        `<pre>${message}</pre>`
                    );
                }
            );
    }
});
