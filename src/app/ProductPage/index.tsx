import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import IF from '../../ui-components/IF';
import Section, { Content } from '../../ui-components/Section';

import { BreadCrumbContainer, BreadCrumb } from './styles';
import ProductData from './ProductData';
import ProductIndication from './ProductIndication/index';
import ContactSection from './ContactSection/index';

const style = {
  section: {
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
};

interface IProps {
  t: any;
  product: any;
  solution: any;
}

const ProductPage: React.FC<IProps> = ({ t, product, solution }) => {
  const [indications, setIndications] = useState();

  useEffect(() => {
    if (t && product && solution) {
      setIndications(
        t?.solutions[solution?.title]?.products[product?.title]?.indications,
      );
    }
  }, [t, product, solution]);

  return (
    <IF condition={!!product}>
      <Section style={style.section}>
        <Content>
          <BreadCrumbContainer>
            <BreadCrumb>
              <Link href="/">
                <a>Home</a>
              </Link>
            </BreadCrumb>
            <IF condition={solution?.breadcrumb}>
              <BreadCrumb>
                <Link href={`/solucoes/${solution?.breadcrumb}`}>
                  <a>{t?.solutions[solution?.title]?.title}</a>
                </Link>
              </BreadCrumb>
            </IF>

            <BreadCrumb>
              {t?.solutions[solution?.title]?.products[product?.title]?.title}
            </BreadCrumb>
          </BreadCrumbContainer>
          <ProductData t={t} product={product} solution={solution} />
        </Content>
      </Section>

      <ProductIndication solution={solution} indications={indications} t={t} />

      <ContactSection t={t} />
    </IF>
  );
};

export default ProductPage;
