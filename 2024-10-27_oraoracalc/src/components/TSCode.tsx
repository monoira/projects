import copy from "copy-to-clipboard";
import styles from "./TSCode.module.css";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import obsidian from "react-syntax-highlighter/dist/esm/styles/hljs/obsidian";

import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

SyntaxHighlighter.registerLanguage("typescript", ts);

export interface TypescriptFormulaProps {
  name: string;
  code: string;
}

/**
 * @param code typescript code as a string
 * @param name name of the typescript code snippet
 */
function TypescriptCode({ code, name }: TypescriptFormulaProps) {
  const copyCodeToClipboard = () => {
    copy(code);

    toast.success(`${name} Has been copied to clipboard.`, {
      style: {
        maxWidth: "100vw",
      },
    });
  };

  return (
    <Fade triggerOnce className={styles.container}>
      <button onMouseDown={copyCodeToClipboard} className={styles.copyBtn}>
        Copy
      </button>
      <SyntaxHighlighter
        className={styles.codeStyles}
        language="typescript"
        style={obsidian}
      >
        {code}
      </SyntaxHighlighter>
    </Fade>
  );
}

export default TypescriptCode;
