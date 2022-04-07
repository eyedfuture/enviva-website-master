import React from 'react';
import theme from '../../styles/theme';
import Col from '../../ui-components/Col';
import Row from '../../ui-components/Row';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';
import { Image, ImageBox } from './styles';

const style = {
  content: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    minHeight: '100%',
    textAlign: 'center' as const,
  },
  title: {
    marginBottom: '2rem',
    textAlign: 'center' as const,
    color: theme.colors.dark,
  },
};

interface IProps {
  t: any;
}

const SchedulePage: React.FC<IProps> = ({ t }) => {
  return (
    <Section>
      <Content style={style.content}>
        <Title style={style.title} level={1}>
          {t.onlineSchedule.title}
        </Title>
        <Row colGap={16} rowGap={16}>
          <Col xs={12} md={6}>
            <ImageBox>
              <a
                href="https://api.whatsapp.com/send?phone=5511947377337"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/static/assets/img/content/schedule/andrea.png"
                  alt="Andrea"
                />
              </a>
            </ImageBox>
          </Col>
          <Col xs={12} md={6}>
            <ImageBox>
              <a
                href="https://api.whatsapp.com/send?phone=5511947377337"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/static/assets/img/content/schedule/rosangela.png"
                  alt="Rosangela"
                />
              </a>
            </ImageBox>
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default SchedulePage;
