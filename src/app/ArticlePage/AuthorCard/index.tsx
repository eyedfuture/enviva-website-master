import { format } from 'date-fns';
import React from 'react';
import Paragraph from '../../../ui-components/Paragraph';

import { Container, Picture, Content } from './styles';

interface IProps {
  author: any;
  publishedAt: any;
}

const AuthorCard: React.FC<IProps> = ({ author, publishedAt }) => {
  return (
    <Container>
      <Picture
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${author?.picture?.formats?.thumbnail?.url}`}
      />
      <Content>
        <Paragraph>{author?.name}</Paragraph>
        <Paragraph>{format(new Date(publishedAt), 'dd/MM/yyyy')}</Paragraph>
      </Content>
    </Container>
  );
};

export default AuthorCard;
