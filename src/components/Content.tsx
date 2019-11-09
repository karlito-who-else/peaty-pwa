import React from "react";
import PropTypes, { InferProps } from "prop-types";

const Content = ({
  content,
  className
}: InferProps<typeof Content.propTypes>): ReactElement => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

export const HTMLContent = ({
  content,
  className
}: InferProps<typeof HTMLContent.propTypes>): ReactElement => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

HTMLContent.propTypes = Content.propTypes;

export default Content;
