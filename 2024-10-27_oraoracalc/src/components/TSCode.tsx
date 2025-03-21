import styles from "./TSCode.module.css";

import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import ShikiHighlighter from "react-shiki";

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
    <Fade triggerOnce>
      <button onClick={copyCodeToClipboard} className={styles.copyBtn}>
        Copy
      </button>
      <ShikiHighlighter
        language="ts"
        theme="catppuccin-mocha"
        showLanguage={false}
        className={styles.highlighter}
      >
        {code}
      </ShikiHighlighter>
    </Fade>
  );
}

export default TypescriptCode;
