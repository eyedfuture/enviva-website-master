import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Container, Content, ButtonBox } from './styles';
import Row from '../../../ui-components/Row';
import Col from '../../../ui-components/Col';
import Title from '../../../ui-components/Title';
import Paragraph from '../../../ui-components/Paragraph';
import Button from '../../../ui-components/Button';
import theme from '../../../styles/theme';

interface IProps {
  title: string;
  description: string;
  img: string;
  link: string;
  buttonLabel: string;
}

const style = {
  title: {
    color: theme.colors.dark,
    fontSize: '1.5rem',
    marginBottom: '1rem',
    letterSpacing: '.1rem',
  },
  description: {
    marginBottom: '1rem',
    textAlign: 'justify' as const,
    letterSpacing: '.1rem',
    lineHeight: '2rem',
  },
  button: {
    letterSpacing: '.1rem',
  },
};

const SolutionCard: React.FC<IProps> = ({
  title,
  img,
  description,
  link,
  buttonLabel,
}) => {
  return (
    <Container>
      <Row colGap={16} rowGap={16}>
        <Col xs={12} md={3}>
          <Image
            src={img}
            alt={title}
            layout="responsive"
            width={100}
            height={100}
          />
        </Col>
        <Col xs={12} md={9}>
          <Content>
            <div>
              <Title level={2} style={style.title}>
                {title}
              </Title>
              <Paragraph style={style.description}>{description}</Paragraph>
              <ButtonBox>
                <Button style={style.button}>
                  <Link href={link}>
                    <a>{buttonLabel}</a>
                  </Link>
                </Button>
              </ButtonBox>
            </div>
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default SolutionCard;
