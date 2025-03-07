import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { basicSetup } from "@codemirror/basic-setup";
import { go } from "@codemirror/lang-go";

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState("// Write some Go code");

    return (
        <CodeMirror
        value={code}
        height="500px"
        extensions={[
            basicSetup,
            go(),
            keymap.of([...defaultKeymap, indentWithTab]),
        ]}
        onChange={(value) => setCode(value)}
        theme="dark"
        />
    );
}

export default CodeEditor;