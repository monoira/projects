import "./App.css";
import { useAmazonUrls } from "./AmazonUrlContext";

function App() {
  const amazonUrls = useAmazonUrls();

  async function openTabWithCleanUrl() {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    const url = tabs[0]?.url;
    if (!url) return;

    const domains = amazonUrls
      .map((p) =>
        p.replace("*://*.", "").replace("/*", "").replace(/\./g, "\\."),
      )
      .join("|");

    const clean = url.replace(
      new RegExp(
        `^(https?://(?:[^/]+\\.)?(?:${domains})/(?:[^/]+/)?dp/[A-Z0-9]+).*$`,
      ),
      "$1",
    );

    browser.tabs.create({ url: clean });
  }

  return <button onClick={openTabWithCleanUrl}>Open Clean</button>;
}

export default App;
