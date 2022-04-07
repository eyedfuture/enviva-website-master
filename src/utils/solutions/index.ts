const solutions = {
  clinico: {
    title: 'clinical',
    products: [
      {
        img: '/static/assets/img/content/services/clinico/clinico.png',
        title: 'clinico',
        link: '/solucoes/clinico/produto/clinico',
      },
    ],
  },
  estetica: {
    title: 'aesthetics',
    breadcrumb: 'estetica',
    related: [
      {
        title: 'clinical',
        link: '/solucoes/clinico/produto/clinico',
        img: '/static/assets/img/content/services/clinico-longo.png',
      },
      {
        title: 'surgical',
        link: '/solucoes/cirurgico',
        img: '/static/assets/img/content/services/cirurgico-longo.png',
      },
    ],
    products: [
      {
        img: '/static/assets/img/content/services/estetica/acido-h.png',
        title: 'acido-hialuronico',
        link: '/solucoes/estetica/produto/acido-hialuronico',
      },
      {
        img: '/static/assets/img/content/services/estetica/bio-e.png',
        title: 'bio-estimuladores-de-colageno',
        link: '/solucoes/estetica/produto/bio-estimuladores-de-colageno',
      },
      {
        img: '/static/assets/img/content/services/estetica/toxina.png',
        title: 'toxina-botulinica',
        link: '/solucoes/estetica/produto/toxina-botulinica',
      },
      {
        img: '/static/assets/img/content/services/estetica/micro.png',
        title: 'microagulhamento',
        link: '/solucoes/estetica/produto/microagulhamento',
      },
      {
        img: '/static/assets/img/content/services/estetica/peeling.png',
        title: 'peelings-quimicos',
        link: '/solucoes/estetica/produto/peelings-quimicos',
      },
      {
        img: '/static/assets/img/content/services/estetica/radio.png',
        title: 'radiofrequencia-fracionada',
        link: '/solucoes/estetica/produto/radiofrequencia-fracionada',
      },
      {
        img: '/static/assets/img/content/services/estetica/laser-f.png',
        title: 'laser-fracionado-ablativo',
        link: '/solucoes/estetica/produto/laser-fracionado-ablativo',
      },
      {
        img: '/static/assets/img/content/services/estetica/ultrassom.png',
        title: 'ultrassom-micro-e-macrofocado',
        link: '/solucoes/estetica/produto/ultrassom-micro-e-macrofocado',
      },
    ],
  },
  cirurgico: {
    title: 'surgical',
    breadcrumb: 'cirurgico',
    related: [
      {
        title: 'clinical',
        link: '/solucoes/clinico/produto/clinico',
        img: '/static/assets/img/content/services/clinico-longo.png',
      },
      {
        title: 'aesthetics',
        link: '/solucoes/estetica',
        img: '/static/assets/img/content/services/estetico-longo.png',
      },
    ],
    products: [
      {
        img: '/static/assets/img/content/services/cirurgico/biopsia.png',
        title: 'biopsias',
        link: '/solucoes/cirurgico/produto/biopsias',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/remocao.png',
        title: 'remoção-cirurgica-de-pequenas-lesoes',
        link:
          '/solucoes/cirurgico/produto/remoção-cirurgica-de-pequenas-lesoes',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/curetagem.png',
        title: 'curetagem-de-lesoes',
        link: '/solucoes/cirurgico/produto/curetagem-de-lesoes',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/infiltracao.png',
        title: 'infiltracao-intra-lesional',
        link: '/solucoes/cirurgico/produto/infiltracao-intra-lesional',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/eletro.png',
        title: 'eletrocauterizacao',
        link: '/solucoes/cirurgico/produto/eletrocauterizacao',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/cauterizacao.png',
        title: 'cauterizacao-quimica',
        link: '/solucoes/cirurgico/produto/cauterizacao-quimica',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/crioterapia.png',
        title: 'crioterapia-com-nitrogenio-liquido',
        link: '/solucoes/cirurgico/produto/crioterapia-com-nitrogenio-liquido',
      },
      {
        img: '/static/assets/img/content/services/cirurgico/peeling.png',
        title: 'peelings-quimicos',
        link: '/solucoes/cirurgico/produto/peelings-quimicos',
      },
    ],
  },
};

export default solutions;
