import Image from 'next/image';
import React from 'react';
import theme from '../../../styles/theme';
import Col from '../../../ui-components/Col';
import Paragraph from '../../../ui-components/Paragraph';
import Row from '../../../ui-components/Row';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';

import { ImageBox, ContentBox, Divisor, Container } from './styles';

const style = {
  section: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  title: {
    textAlign: 'center' as const,
    letterSpacing: '.1rem',
    color: theme.colors.dark,
    marginTop: '1rem',
  },
  description: {
    textAlign: 'justify' as const,
    letterSpacing: '.1rem',
    color: theme.colors.dark,
    lineHeight: '2rem',
  },
};

interface IProps {
  t: any;
}

const TeamSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section style={style.section}>
      <Container>
        <Content>
          <Row colGap={16}>
            <Col xs={12} lg={6}>
              <ImageBox>
                <div>
                  <Image
                    layout="responsive"
                    src="/static/assets/img/content/dras/team-andrea.png"
                    width={1}
                    height={1}
                    alt="Andrea Masada"
                  />
                  <Title level={2} style={style.title}>
                    {`${t?.footer?.pronoun} Andrea Masada`}
                  </Title>
                  <Paragraph style={{ textAlign: 'center' }}>
                    CRM-SP 92464
                  </Paragraph>
                </div>
              </ImageBox>
            </Col>
            <Col xs={12} lg={6}>
              <ContentBox>
                <div>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.andrea?.description[0]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.andrea?.description[1]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.andrea?.description[2]}
                  </Paragraph>
                </div>
              </ContentBox>
            </Col>
            <Col xs={12}>
              {t?.teamPage?.andrea?.description.map((item, i) =>
                i > 2 ? (
                  <Paragraph style={style.description}>
                    {t?.teamPage?.andrea?.description[i]}
                  </Paragraph>
                ) : (
                  <></>
                ),
              )}
            </Col>
          </Row>

          <Divisor />

          <Row colGap={16}>
            <Col xs={12} lg={6} className="hide-desktop">
              <ContentBox>
                <div>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[0]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[1]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[2]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[3]}
                  </Paragraph>
                </div>
              </ContentBox>
            </Col>
            <Col xs={12} lg={6}>
              <ImageBox>
                <div>
                  <Image
                    layout="responsive"
                    src="/static/assets/img/content/dras/team-rosangela.png"
                    width={1}
                    height={1}
                    alt="Rosângela Manchini"
                  />
                  <Title level={2} style={style.title}>
                    {`${t?.footer?.pronoun} Rosângela Manchini`}
                  </Title>
                  <Paragraph style={{ textAlign: 'center' }}>
                    CRM-SP 79330
                  </Paragraph>
                </div>
              </ImageBox>
            </Col>

            <Col xs={12} lg={6} className="hide-mobile">
              <ContentBox>
                <div>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[0]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[1]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[2]}
                  </Paragraph>
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[3]}
                  </Paragraph>
                </div>
              </ContentBox>
            </Col>

            <Col xs={12}>
              {t?.teamPage?.rosangela?.description.map((item, i) =>
                i > 3 ? (
                  <Paragraph style={style.description}>
                    {t?.teamPage?.rosangela?.description[i]}
                  </Paragraph>
                ) : (
                  <></>
                ),
              )}
            </Col>
          </Row>
        </Content>
      </Container>
    </Section>
  );
};

export default TeamSection;
