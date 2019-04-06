import React, { Fragment, lazy, Suspense } from "react";
import { node, string } from "prop-types";

export default function Spoiler({ children, path, selector }) {
  return (
    <Fragment>
      <div id={selector}>{children}</div>
      <Suspense fallback={null}>
        {lazy(() => import(() => `'/* webpackChunkName: "${selector}" */ '${path}''`).then(() => {
          const node = document.querySelector(selector);
          node.innerHTML = "";
        }))}
      </Suspense>
    </Fragment>
  );
}

Spoiler.propTypes = {
  children: node.isRequired,
  path: string.isRequired,
  selector: string.isRequired
};
