import Link from 'next/link';
import React from 'react';
import Paragraph from '../../ui-components/Paragraph';

import { Container, Image, ContentBox } from './styles';

interface IProps {
  article: any;
  link: string;
}

const RelatedArticle: React.FC<IProps> = ({ link, article }) => {
  return (
    <Link href={link}>
      <a>
        <Container>
          <Image
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL}${article?.image?.formats?.thumbnail?.url}')`,
            }}
          />
          <ContentBox>
            <Paragraph>{article?.title}</Paragraph>
            <Paragraph>{article?.category?.name}</Paragraph>
          </ContentBox>
        </Container>
      </a>
    </Link>
  );
};

export default RelatedArticle;
