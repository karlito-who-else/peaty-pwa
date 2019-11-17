import { graphql, Link, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gap: `${theme.spacing(4)}px`,
      gridTemplateColumns: `repeat(4, 1fr)`,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2)
    }
  })
);

const BlogRoll = ({
  data
}: InferProps<typeof FeatureGrid.propTypes>): ReactElement => {
  const classes = useStyles();

  // const { data } = this.props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className={classes.root}>
      {posts &&
        posts.map(({ node: post }) => (
          <article
            className={`blog-list-item tile is-child box notification ${
              post.frontmatter.featuredpost ? "is-featured" : ""
            }`}
            key={post.id}
          >
            <header>
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.title}`
                    }}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
            </header>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const BlogRollStaticQuery = (): ReactElement => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count): ReactElement => (
      <BlogRoll data={data} count={count} />
    )}
  />
);

BlogRoll.propTypes = {};

export default BlogRollStaticQuery;
