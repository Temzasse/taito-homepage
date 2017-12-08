import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Button from '../components/Button';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    frontmatter: PropTypes.shape({
      templateKey: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  })),
};

const RecentPosts = ({ posts }) => (
  <Wrapper>
    {posts.map(post =>
      <Post key={post.frontmatter.title}>
        <Image url={post.frontmatter.image} />

        <Content>
          <Title>
            {post.frontmatter.title}
          </Title>
          <Description>
            {post.frontmatter.description}
          </Description>
        </Content>

        <Footer>
          <Link to={post.frontmatter.path}>
            <Button>
              Lue lisää
            </Button>
          </Link>
        </Footer>
      </Post>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  min-height: 450px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.20);
  margin: 0px 16px;
  flex: 1;
`;

const Image = styled.div`
  background-color: #eee;
  background-image: url("${props => props.url}");
  background-size: cover;
  background-position: center center;
  height: 200px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  padding: 0px 16px;
  flex: 3;
`;

const Footer = styled.div`
  flex: none;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Description = styled.p`
  margin: 16px 0px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 0px;
`;

const ReadMoreBtn = styled.button`
  border-radius: 100px;
  padding: 8px 16px;
  color: #fff;
  font-size: 16px;
  background-color: green;
`;

RecentPosts.propTypes = propTypes;

export default RecentPosts;
