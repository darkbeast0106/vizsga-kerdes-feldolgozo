import katex from "katex";

export default function replaceKatex(text) {
    while (text.indexOf("KATEX") > 0) {
        const startIndex = text.indexOf("<KATEX>");
        const endIndex = text.indexOf("</KATEX>") + 8;
        const katexText = text.substring(startIndex, endIndex);

        const katexContent = text.substring(startIndex + 7, endIndex - 8);
        const html = katex.renderToString(katexContent, {
            throwOnError: false,
            output: "html",
        });
        text = text.replace(katexText, html);

        /*
        const displayStart = katexText.indexOf("texttt{") + 7;
        const displayEnd = katexText.indexOf("}}");
        const displayText =
          "<span class='katex'>" +
          katexText.substring(displayStart, displayEnd) +
          "</span>";

          text = text.replace(katexText, displayText);
          */
    }
    return text;
};