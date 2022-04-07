import React from 'react';
import Link from 'next/link';
import Paragraph from '../../ui-components/Paragraph';

import { Container, Image, ContentBox } from './styles';
import theme from '../../styles/theme';
import IF from '../../ui-components/IF';

interface IProps {
  article: any;
  link: string;
}

const style = {
  category: {
    color: theme.colors.white,
    fontWeight: 'bold' as const,
    textTransform: 'capitalize' as const,
    marginBottom: '.5rem',
  },
  article: {
    color: theme.colors.white,
    fontWeight: 'bold' as const,
    textTransform: 'capitalize' as const,
    fontSize: '1.5rem',
  },
};

const ArticleCard: React.FC<IProps> = ({ article, link }) => {
  return (
    <IF condition={article?.status === 'published'}>
      <Link href={link}>
        <a>
          <Container>
            <Image
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${article?.image?.formats?.medium?.url})`,
              }}
            />
            <ContentBox>
              <Paragraph style={style.category}>
                {article?.category?.name}
              </Paragraph>
              <Paragraph style={style.article}>{article?.title}</Paragraph>
            </ContentBox>
          </Container>
        </a>
      </Link>
    </IF>
  );
};

export default ArticleCard;
