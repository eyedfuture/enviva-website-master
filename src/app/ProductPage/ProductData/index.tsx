import React from 'react';
import Image from 'next/image';
import Title from '../../../ui-components/Title';
import Paragraph from '../../../ui-components/Paragraph';
import Col from '../../../ui-components/Col';
import Row from '../../../ui-components/Row';
import { ContentBox, ImageBox } from './styles';
import theme from '../../../styles/theme';

const style = {
  section: {
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
  title: {
    color: theme.colors.dark,
    fontSize: '2rem',
    letterSpacing: '.1rem',
  },
  description: {
    lineHeight: '2rem',
    letterSpacing: '.1rem',
  },
  col: {
    textAlign: 'center' as const,
  },
};

interface IProps {
  t: any;
  product: any;
  solution: any;
}

const ProductData: React.FC<IProps> = ({ t, product, solution }) => {
  return (
    <Row colGap={16} rowGap={16}>
      <Col xs={12} md={8}>
        <ContentBox>
          <div>
            <Title style={style.title}>
              {t?.solutions[solution?.title]?.products[product?.title]?.title}
            </Title>
            <Paragraph style={style.description}>
              {
                t?.solutions[solution?.title]?.products[product?.title]
                  ?.fullDescription
              }
            </Paragraph>
          </div>
        </ContentBox>
      </Col>
      <Col xs={12} md={4}>
        <ImageBox>
          <Image
            src={product?.img}
            alt={t?.solutions[solution?.title]?.products[product?.title]?.title}
            layout="responsive"
            width={100}
            height={100}
          />
        </ImageBox>
      </Col>
    </Row>
  );
};

export default ProductData;
