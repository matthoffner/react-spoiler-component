import React, { Fragment } from "react";
import { bool, node, number, string } from "prop-types";

function Spoiler({ delayMs, children, live, selector, shell }) {
  const script = `
  if (document) {
    const isLive = ${live};
    const node = document.querySelector('${selector}');
    if (node && isLive) {
      setTimeout(() => {
        node.innerHTML = "";
      }, ${delayMs});
    }
  }`;
  return (
    <Fragment>
      {!live && <div dangerouslySetInnerHTML={{ __html: script }}>
        {shell}
      </div>}
      {children}
    </Fragment >
  );
}
Spoiler.propTypes = {
  delayMs: number,
  children: node.isRequired,
  live: bool.isRequired,
  selector: string.isRequired,
  shell: node.isRequired
};
Spoiler.defaultProps = {
  delayMs: 1000
};

export default Spoiler;
