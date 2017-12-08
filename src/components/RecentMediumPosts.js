import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIUM_IMAGE_URL_SIZED } from '../assets/constants';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    virtuals: PropTypes.shape({
      previewImage: PropTypes.shape({
        imageId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })),
};

const getPostImageUrl = post => {
  return `${MEDIUM_IMAGE_URL_SIZED}/${post.virtuals.previewImage.imageId}`;
};

const getPostUrl = post => {
  return `https://medium.com/taitounited/${post.slug}-${post.id}`;
}

const RecentMediumPosts = ({ posts }) => (
  <Wrapper>
    {posts.map(post =>
      <Post
        bg={getPostImageUrl(post)}
        href={getPostUrl(post)}
        target='_blank'
        rel='noreferer noopener'
        key={post.id}
      >
        <Title>
          {post.title}
        </Title>
      </Post>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Post = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 4px;
  height: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.20);
  margin-right: 16px;
  padding: 24px;
  flex: 1;
  background-color: #eee;
  background: linear-gradient(to bottom, transparent, #222), url("${props => props.bg}");
  background-size: cover;
  background-position: center center;

  &:last-child {
    margin-right: 0px;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

RecentMediumPosts.propTypes = propTypes;

export default RecentMediumPosts;
