import React from 'react';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import styled from 'styled-components';

import RecentPosts from '../components/RecentPosts';
import RecentMediumPosts from '../components/RecentMediumPosts';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: mediumPosts } = data.allMediumPost;

    const recent = posts
      .filter(post => post.node.frontmatter.templateKey === 'blog-post')
      .map(({ node: post }) => post)
      .slice(0, 3);

    const recentMediumPosts = mediumPosts
      .map(({ node: post }) => post)
      .slice(0, 3);
    
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Container>
          <Header>
            <Diagonal />
            <Intro>
              moi  
            </Intro>
          </Header>

          <div className="content">
            <h1>
              Viimeisimmät tarinat
            </h1>
            <RecentPosts posts={recent} />
            <h1>
              Lue myös tech-blogiamme!
            </h1>
            <RecentMediumPosts posts={recentMediumPosts} />
          </div>
        </Container>
      </section>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

const Header = styled.header`
  position: relative;
`;

const Intro = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 700px;
`;

const Diagonal = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: skewY(-12deg);
  transform-origin: 0;
  position: absolute;
  background-color: ${props => props.theme.primaryColorLighter};
`;

export const pageQuery = graphql`
  query IndexQuery {
    allMediumPost(sort: { order: DESC, fields: [createdAt] }) {
      edges {
        node {
          id
          title
          slug
          virtuals {
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }

    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
