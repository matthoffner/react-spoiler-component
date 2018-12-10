import React, { memo } from "react";
import { bool, number, string } from "prop-types";

function SpoilerComponent({ delayMs, html, live, selector }) {
  const dangerouslyRemoveInnerHTML = async () => {
    if (document) {
      const node = document.querySelector(selector);
      if (node && live) {
        setTimeout(() => {
          node.innerHTML = "";
        }, delayMs);
      }
    }
  };

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: dangerouslyRemoveInnerHTML() && html
      }}
    />
  );
}
SpoilerComponent.propTypes = {
  delayMs: number,
  html: string,
  live: bool,
  selector: bool
};
SpoilerComponent.defaultProps = {
  delayMs: 1000
};

export default memo(SpoilerComponent);
