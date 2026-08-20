import styles from "./TSCode.module.css";

import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import ShikiHighlighter from "react-shiki";
import { useTranslation } from "react-i18next";

export interface TypescriptFormulaProps {
  name: string;
  code: string;
}

/**
 * @param code typescript code as a string
 * @param name name of the typescript code snippet
 */
function TypescriptCode({ code, name }: TypescriptFormulaProps) {
  const { t } = useTranslation();

  const copyCodeToClipboard = () => {
    copy(code);

    toast.success(t("copyButton.copiedToClipboard", { name }), {
      style: {
        maxWidth: "100vw",
      },
    });
  };

  return (
    <Fade triggerOnce>
      <button onClick={copyCodeToClipboard} className={styles.copyBtn}>
        {t("copyButton.copy")}
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
