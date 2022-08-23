import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

function MainPage() {
  // const {} = props;
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate('/post-write');
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />

        <br />
        <br />
        <img src="https://dummyimage.com/600x400/000/fff" alt="사진" />
        <img src="https://dummyimage.com/600x400/000/fff" aria-labelledby="foo" />
        <Image src="https://dummyimage.com/600x400/000/fff" aria-label="foo" alt="이미지" />
        <a href="#foo">여기</a>
        <a href="#foo">here</a>
        <a href="#foo">HERE</a>
        <a href="#foo">click this</a>
        <a href="#foo">링크</a>
        <a href="#foo">a link</a>
        <a href="#foo">
          <span> click </span>
          here
        </a>
        <a href="#foo">
          a
          <i>link</i>
        </a>
        <a href="#foo">
          <i />
          a link
        </a>
      </Container>
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
const Image = styled.img`
  outline: 0;
`;
