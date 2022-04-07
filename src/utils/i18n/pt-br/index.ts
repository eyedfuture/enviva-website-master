const content = {
  locale: 'pt-br',
  navbar: {
    menu: {
      home: 'Home',
      solutions: 'Soluções',
      team: 'Equipe',
      about: 'Sobre Nós',
      blog: 'Blog',
      contact: 'Contato',
      schedule: 'Agende uma Consulta',
    },
  },
  home: {
    covidBanner:
      'Estamos com nosso atendimento adaptado conforme as medidas de segurança à COVID-19',
    callToAction: 'Saiba Mais',
    services: {
      aesthetics: 'Estética',
      clinical: 'Clínica',
      surgical: 'Cirúrgica',
    },
    healthSection: {
      title: 'Saúde Circular',
      subtitle: 'A dermatologia em contato com a vida',
      description: ` Um conceito instalado para transparecer e fortalecer a nossa missão e trajetória aqui dentro da enviva.me. O ser humano está em constantes transformações e mudanças. A cada dia que passa somos instigados a nos mexer e evoluir. Cada um em sua própria caminhada. Essa evolução não precisa ser desgastante ou incômoda. Na enviva.me ajudamos a quem nos procura a envelhecer de uma maneira saudável e prazerosa, ressaltando a beleza singular de cada um. Venha em busca do equilíbrio conosco.
      `,

      callToAction: 'Conheça Mais',
    },
    videoSection: {
      title: 'Nossa Casa',
      description: `
      A enviva.me foi idealizado para ser um lugar aconchegante e agradável para você se sentir acolhido e seguro. Buscamos a harmonia e, principalmente, o seu conforto e bem-estar, em um ambiente confortável e intimista, mantendo sempre a tranquilidade e o equilíbrio necessários para um bom atendimento. Bem-vindos à nossa casa!
      `,
      callToAction: 'Conheça Mais',
    },
    blogSection: {
      title: 'Últimas Notícias',
      button: 'Veja Mais',
    },
  },
  solutions: {
    callToAction: 'Saiba Mais',
    clinical: {
      title: 'Clínica',
      products: {
        clinico: {
          title: 'Clínica',
          fullDescription: `É o momento em que fazemos a escuta dos pacientes, em outras palavras, a
          consulta médica. Ouvimos suas queixas, dores, aflições e expectativas.
          Hoje em dia, já é possível realizar as teleconsultas, utilizando as plataformas
          online, seguindo as diretrizes do Conselho Federal de Medicina (CFE).
          Além dessas opções, existe a possibilidade das consultas ocorrerem
          diretamente no seu domicílio, caso você tenha dificuldades de se locomover
          até nossa clínica. Elas também permitem traçar um bom diagnóstico da
          dinâmica familiar, e assim planejar as melhores estratégias de tratamento
          para cada pessoa.
          Caso tenha qualquer incômodo em sua pele, entre em contato para um
          tratamento adequado.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Acne`,
              `Rosácea`,
              `Micoses`,
              `Doenças das unhas`,
              `Alergias`,
              `Vitiligo`,
              `Melasma`,
              `Herpes simples e zoster`,
              `Psoríase`,
              `Foliculite`,
              `Hiperidrose (excesso de transpiração)`,
              `Doenças do couro cabeludo`,
              `Queda dos cabelos`,
              `Calvície`,
              `Lesões pré-cancerígenas`,
              `Câncer da pele`,
            ],
          },
        },
      },
    },
    aesthetics: {
      title: 'Estética',
      products: {
        'acido-hialuronico': {
          title: 'Ácido Hialurônico',
          description:
            'Utilizado para correção das rugas, sulcos e cicatrizes, tanto faciais, como corporais, trazendo harmonia às depressões e sombras cutâneas.',
          fullDescription: `
          O ácido hialurônico é uma substância naturalmente presente em nosso organismo. Tem o papel de lubrificar e hidratar estruturas do nosso corpo.
A utilização mais comum são os preenchimentos cutâneos. É uma técnica injetável, pouco dolorosa e que apresenta bons resultados.
Ela é utilizada para correção e harmonia das rugas, sulcos e cicatrizes. Pode também ser usada para a correção de pequenas imperfeições, de acordo com a localização corporal.
Cada indicação tem um número certo de sessões a serem seguidas. O número total de sessões requerido é individualizado.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Hidratação da pele – skinbooster`,
              `Aumento de estruturas do rosto e do corpo`,
              `Preenchimento labial e sustentação`,
              `Preenchimento das olheiras`,
              `Correção das cicatrizes de acne`,
              `Pontos de sustentação para um efeito lift`,
            ],
          },
        },
        'bio-estimuladores-de-colageno': {
          title: 'Bioestimuladores de colágeno',
          description:
            'São tratamentos injetáveis para ativar a síntese de colágeno por meio de uma resposta inflamatória controlada.',
          fullDescription: `São tratamentos injetáveis, em que a substância (hidroxiapatita de cálcio ou ácido poli-L-láctico) é introduzida na derme para ativar a síntese de colágeno por meio de uma resposta inflamatória.
          A técnica é considerada minimamente invasiva, com anestesia local, e geralmente bem tolerada pelos pacientes. São necessárias em média três sessões com intervalos de 30 a 40 dias.
          Por ser um tratamento, seu resultado é observado ao longo do tempo e não de imediato. Pode ser usado como prevenção, ou mesmo se as condições do paciente já estiverem instaladas.
          Quando é corretamente indicado e as recomendações são seguidas, os resultados trazem satisfação por proporcionar um aspecto mais rejuvenescido, de uma forma natural.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Flacidez da pele facial e corporal`,
              `Sustentação da pele facial`,
              `Correção de rugas faciais`,
              `Flacidez do pescoço`,
            ],
          },
        },
        'toxina-botulinica': {
          title: 'Toxina Botulínica',
          description: `O tratamento proporciona o relaxamento dos músculos do rosto,
          prevenção das rugas e diminuição das marcas e expressões. Além
          disso, sua aplicação reduz, temporariamente, o excesso de transpiração
          tão indesejável, como nas axilas. É um procedimento médico seguro e
          muito consagrado, que apresenta poucos efeitos colaterais e bastante
          satisfação por parte dos pacientes.
          `,
          fullDescription: `A toxina botulínica é produzida por uma bactéria cultivada em laboratório, que provoca um relaxamento muscular, diminuição das marcas de expressão e também prevenindo as rugas. É um procedimento médico seguro e muito consagrado, que apresenta poucos efeitos colaterais.
          Sua ação inicia-se em média 48h após aplicação e seu efeito máximo é alcançado entre 15 a 20 dias.
          A associação de outros procedimentos leva a um resultado harmonioso e natural.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Pés de galinha (Rugas perioculares)`,
              `Rugas da região frontal e sobrancelhas`,
              `Levantamento das sobrancelhas`,
              `Levantamento do canto da boca`,
              `Sorriso gengival`,
              `Levantamento do nariz`,
              `Pescoço e colo`,
              `Excesso de transpiração nas mãos e axilas`,
            ],
          },
        },
        microagulhamento: {
          title: 'Microagulhamento',
          description: `É um procedimento em que ocorrem microperfurações na pele para a estimulação do colágeno. `,
          fullDescription: `É um procedimento em que ocorrem microperfurações na pele para a estimulação do colágeno.
          Este possui variação na quantidade e comprimento das agulhas dependendo da profundidade e resultado que se deseja alcançar.
          À medida em que a pele é perfurada, ela reage e libera elementos inflamatórios, além de hormônios do crescimento acionados no processo de cicatrização da pele.
          Este momento é usualmente utilizado para que sejam carregadas substâncias de tratamento para dentro da pele.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Rejuvenescimento facial`,
              `Melasma`,
              `Cicatrizes de acne`,
              `Estrias`,
              `No couro cabeludo para estímulo local e diminuir a queda dos cabelos`,
            ],
          },
        },
        'peelings-quimicos': {
          title: 'Peelings químicos',
          description: `Consistem na aplicação de uma ou mais substâncias químicas sobre a pele
          facial ou corporal, provocando renovação celular.
          `,
          fullDescription: `Peelings químicos consistem na aplicação de uma ou mais substâncias químicas sobre a pele facial ou corporal.
          Este procedimento provoca uma renovação celular, percebida pelo paciente com a descamação da pele em maior ou menor grau, dependendo da substância e do número de camadas aplicadas.
          O resultado desejado com o procedimento é uma pele mais uniforme, iluminada e hidratada. O número de sessões é individualizado.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Fotoenvelhecimento cutâneo`,
              `Rugas finas`,
              `Cicatriz de acne em grau leve`,
              `Auxílio no tratamento do melasma`,
              `Tratamento das lesões pré-malignas causadas pela exposição solar acumulada (ceratoses actínicas)`,
              `Estrias`,
            ],
          },
        },
        'radiofrequencia-fracionada': {
          title: 'Radiofrequência fracionada',
          description: `É uma tecnologia recente utilizada para o rejuvenescimento da pele. O
          equipamento atua com emissão de ondas eletromagnéticas de forma
          controlada, estimulando a produção de colágeno e, assim, melhorando
          principalmente a firmeza da pele.
          `,
          fullDescription: `É uma tecnologia recente utilizada para o rejuvenescimento da pele. O equipamento atua com emissão de ondas eletromagnéticas de forma controlada, estimulando a produção de colágeno, e assim melhorando principalmente a firmeza da pele.`,
          indications: {
            label: 'Indicações',
            items: [
              `Manchas solares`,
              `Flacidez no rosto, no pescoço, “papada”, peitoral, braços e no dorso das mãos`,
              `Cicatrizes de acne`,
              `Estrias recentes e antigas`,
            ],
          },
        },
        'laser-fracionado-ablativo': {
          title: 'Laser fracionado ablativo',
          description: `Tecnologia mais indicada para o tratamento do envelhecimento. É chamada de fracionado porque o laser é dividido em partes, com o objetivo de atingir a pele profundamente, estimulando a produção e reestruturação do colágeno.`,
          fullDescription: `Tecnologia mais indicada para o tratamento do envelhecimento. É chamada de fracionado porque o laser é dividido em partes, com o objetivo de atingir a pele profundamente, estimulando a produção e reestruturação do colágeno.
          E ablativo, por remover parte da epiderme. Após o procedimento, é possível observar uma contração imediata da pele pelo efeito térmico gerado, e uma melhora gradual.
          É realizado com anestesia local e, às vezes, com administração de analgésicos orais potentes, mas de curta duração. É considerado um tratamento minimamente invasivo, porém bem tolerado pelos pacientes.
          Como todo tratamento estético, os resultados dependem da condição anterior e, também, do número de sessões realizadas para se completar um ciclo de tratamento.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Flacidez da pele facial`,
              `Rugas finas e médias`,
              `Cicatrizes de acne`,
              `Estrias`,
              `Melasma`,
              `Rosácea`,
              `Poiquilodermia (aspecto avermelhado devido aos vasinhos visíveis, além de manchas hiperpigmentadas)`,
            ],
          },
        },
        'ultrassom-micro-e-macrofocado': {
          title: 'Ultrassom micro e macrofocado',
          description: `Também para estímulo da produção de mais colágeno, prevenindo e
          melhorando a flacidez, é outra tecnologia com emprego de equipamento. É
          destinado à pele do rosto e partes do corpo, prevenindo e melhorando a
          flacidez.
          `,
          fullDescription: `Uma das melhores tecnologias para estímulo do colágeno, prevenindo e melhorando a flacidez. É destinado para a pele do rosto e partes do corpo.
          A emissão de energia ultrassônica gera calor, podendo atingir desde a camada mais superficial da derme, até a região muscular,
          Praticamente não há contra-indicações aos tipos de pele. É realizado sob anestesia tópica na forma de cremes, e eventual uso de analgésicos orais.
         Pode ser indicado antes ou após outros procedimentos, mantendo um intervalo entre eles.
         `,
          indications: {
            label: 'Indicações',
            items: [
              `Flacidez da pele facial e do pescoço`,
              `Braços`,
              `Abdome próximo à região da cicatriz do umbigo`,
              `Joelho`,
              `Face interna das coxas e culote`,
              `Flancos (gorduras localizadas na transição do abdome e costas)`,
            ],
          },
        },
      },
    },
    surgical: {
      title: 'Cirúrgica',
      products: {
        biopsias: {
          title: 'Biópsia',
          description: `Técnica cirúrgica em que o profissional médico remove um pequeno fragmento de pele ou mucosa, caso tenha suspeitas diagnósticas que precisem ser analisadas.`,
          fullDescription: `É uma técnica cirúrgica em que o profissional médico remove um pequeno fragmento de pele ou mucosa, caso tenha suspeitas diagnósticas que precisem ser analisadas.
          Este fragmento é encaminhado ao laboratório, para ser processado e analisado pelo médico patologista.
          `,
        },
        'remoção-cirurgica-de-pequenas-lesoes': {
          title: 'Remoção cirúrgica de pequenas lesões',
          description: `É um procedimento de remoção de pintas, cistos sebáceos, lipomas, além da solução de unhas encravadas, entre outros `,
          fullDescription: `É o procedimento de remoção de pintas, cistos sebáceos, lipomas, além da solução de unhas encravadas, entre outros. Após a anestesia local, a lesão é removida na sua base, rente à pele, usando tesoura ou lâmina de bisturi.
          Em outras vezes, a lesão somente é removida pela incisão (corte) na pele, finalizando com a sutura.
          `,
        },
        'curetagem-de-lesoes': {
          title: 'Curetagem de lesões',
          description: `É um procedimento de “raspagem” superficial da pele. Exemplos de sua utilização estão na remoção de moluscos contagiosos ou de ceratoses seborreicas (verrugas seborreicas).`,
          fullDescription: `É o procedimento de “raspagem” superficial da pele. Exemplos de sua utilização estão na remoção de moluscos contagiosos ou de ceratoses seborreicas (verrugas seborreicas). `,
        },
        'infiltracao-intra-lesional': {
          title: 'Infiltração intra-lesional',
          description: `É a injeção de medicamentos em determinadas condições da pele, como a aplicação de antiinflamatórios hormonais em lesões muito inflamadas, ou em queloides.`,
          fullDescription: `É a injeção de medicamentos em determinadas condições da pele, como a aplicação de antiinflamatórios hormonais em lesões muito inflamadas, ou em queloides.`,
        },
        eletrocauterizacao: {
          title: 'Eletrocauterização',
          description: `É a cauterização elétrica. Um procedimento cirúrgico de emissão de calor e eletricidade, que geralmente ocorre sob uma anestesia local.`,
          fullDescription: `É a cauterização elétrica. Um procedimento cirúrgico de emissão de calor e eletricidade, que geralmente ocorre sob uma anestesia local. Utilizado para o combate contra alguns tipos de cânceres de pele, lesões e tumores benignos. Em outras palavras, é a cauterização elétrica. Um procedimento cirúrgico de emissão de calor e eletricidade, que geralmente ocorre sob uma anestesia local.`,
          indications: {
            label: 'Indicações',
            items: [
              `Retirada de alguns tipos de tumores benignos e alguns tipos de cânceres da pele`,
              `Remoção de lesões benignas da pele, ceratoses seborreicas, pólipos fibroepiteliais, dermatose papulosa nigra (pintas escuras) e verrugas de origem viral.`,
            ],
          },
        },
        'cauterizacao-quimica': {
          title: 'Cauterização química',
          description: `Consiste na aplicação de substâncias químicas diferentes, que promovem
          uma reação cutânea, causando posteriormente a descamação e
          recuperação de partes da pele afetada.
          `,
          fullDescription: `Consiste na aplicação de substâncias químicas diferentes, que promovem uma reação cutânea, causando posteriormente a descamação de partes da pele afetada.
          Normalmente, a repetição quinzenal ou semanal do procedimento leva a resultados satisfatórios, além de ser bem aceito pelos pacientes.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Manchas provocadas pela exposição solar (Melanoses solares)`,
              `Ceratoses actínicas`,
              `Ceratoses seborreicas`,
              `Verrugas virais`,
            ],
          },
        },
        'crioterapia-com-nitrogenio-liquido': {
          title: 'Crioterapia com nitrogênio líquido',
          description: `É um tratamento que consiste na aplicação de jatos de nitrogênio líquido em baixa temperatura, possibilitando a renovação da textura e coloração da pele.`,
          fullDescription: `É um tratamento que consiste na aplicação de jatos de nitrogênio líquido em baixa temperatura, possibilitando a renovação da textura e coloração da pele.
          Dependendo do tempo da aplicação dos jatos, existe a possibilidade de combater lesões pré-malignas, e algumas doenças cancerígenas da pele.
          É um procedimento que pode ser bem útil para aqueles com contraindicação a tratamentos cirúrgicos convencionais.
          `,
          indications: {
            label: 'Indicações',
            items: [
              `Melanoses solares`,
              `Ceratoses actínicas`,
              `Ceratoses seborreicas`,
              `Verrugas virais`,
              `Como coadjuvante no tratamento de algumas formas de alopecias capilares (“peladas”)`,
            ],
          },
        },
        'peelings-quimicos': {
          title: 'Peelings químicos',
          description: `Um procedimento que consiste na aplicação simultânea de uma ou mais substâncias químicas, possibilitando a melhoria da textura e coloração da pele.`,
          fullDescription: `Um procedimento que consiste na aplicação simultânea de uma ou mais substâncias químicas, possibilitando a melhoria da textura e coloração da pele.`,
          indications: {
            label: 'Indicações',
            items: [
              `Condições pré-malignas da pele causadas pelo Sol (ceratoses actínicas)`,
              `Condições inestéticas, como o melasma e estrias`,
            ],
          },
        },
      },
    },
  },
  productPage: {
    label: 'A pele fala e a enviva.me traduz',
    quote: 'clínica enviva.me',
    contact: {
      title: 'Quero agendar minha consulta',
      whatsapp: 'Agendar por Whatsapp',
      online: 'Agende uma Consulta',
    },
  },
  teamPage: {
    title: 'Equipe',
    andrea: {
      description: [
        'Sou filha única de mãe descendente e pai japonês. Meus pais, Tomi e Osamu Masada, proporcionaram-me acesso a todo tipo de referência que julgavam ser fundamentais para a formação de uma pessoa preparada, de bem com a vida e feliz, sabendo que o aprendizado nunca acaba.',
        `Foram seis anos de intenso amadurecimento e aprendizado na Faculdade de Medicina de Sorocaba (PUC-SP). Optei pela Dermatologia por ser uma especialidade desafiadora e de
        observações constantes, que exige do profissional o treino para elaborar não apenas um
        único diagnóstico de entrada, e sim, alguns.`,
        `Além da atuação clínica com consultas, a especialidade possibilita a execução de pequenos procedimentos, exames e cirurgias dermatológicas, fazendo com que participemos ativamente da busca pelos diagnósticos e possibilidades de tratamentos.`,
        `Todo o conhecimento e o amor pela Dermatologia começaram e se concretizaram na residência médica da Santa Casa de São Paulo, no serviço de Dermatologia, considerado o berço da Dermatologia paulista.`,
        `Ainda na Santa Casa, aperfeiçoei-me em Dermatologia Infecciosa e Tropical, com foco em Micologia Médica (estudo dos fungos).`,
        `Ao mesmo tempo em que comecei meus atendimentos fazendo parte do corpo clínico de algumas clínicas médicas, iniciei como dermatologista num serviço multiprofissional voltado exclusivamente aos cuidados dos idosos.`,
        `Concluí o MBA pela Fundação Getulio Vargas (FGV) e hoje tenho a honra e a responsabilidade de responder pela diretoria técnica do mesmo local em que iniciei neste mundo dos 60+, há 16 anos.`,
        `Unir-me à Rosangela para criarmos a enviva.me Dermatologia Personalizada, veio no momento certo. Trazemos para a clínica nossos melhores conhecimentos e experiências, a fim de levarmos saúde, conhecimento e bem-estar às pessoas, de forma personalizada, honesta e transparente.`,
        `Carrego num cantinho especial da alma os ensinamentos de meus pais, como também da minha querida Batian (avó) materna, uma das pessoas mais fortes, curiosas e criativas que conheci.`,
        `Espero que Batian, aonde quer que esteja, possa se orgulhar da neta que jamais a esquece.`,
      ],
    },
    rosangela: {
      description: [
        `Nascida no interior de São Paulo, na pequena cidade de Garça, sou casada e mãe de dois filhos.`,
        `Fui formada na 1ª turma de Medicina da Universidade do Oeste Paulista (UNOESTE), em Presidente Prudente (SP), mas escolhi a cidade de São Paulo para me fixar.
        Na Universidade Santo Amaro (UNISA), cursei residência em Clínica Médica e, na sequência, Dermatologia.`,
        `Já exercendo a Dermatologia, percebi a importância de oferecer aos clientes uma Medicina mais holística e humanizada, levando-me a cursar durante dois anos uma pós-graduação em Medicina Antroposófica.`,
        `Paralelamente, iniciei mais 2 atividades distintas, que vieram a se somar ao consultório privado: faço parte do Departamento de Clínica Médica do Hospital Regional Sul e atuo como perita em Dermatologia e Medicina Legal no Instituto de Medicina e Criminologia do Estado de São Paulo (IMESC).`,
        `Além dessas atividades, tenho tido a grata oportunidade de atuar na preceptoria dos alunos de Medicina do último ano da UNISA, no Hospital Regional Sul.`,
        `Com a experiência assistencial, confirmei o que sempre achei: o ser humano necessita ser tratado como um todo. Seu cuidado ideal não deve ser compartimentado. O acolhimento necessário deve contemplar não somente a parte técnica e científica, mas também a emocional e a espiritual.`,
        `Exercer a Dermatologia é uma das mais belas tarefas, estando a serviço das pessoas para proporcionar saúde, beleza e ensinamentos para se viver melhor todos os dias.`,
        `Após anos de consultório privado solo, foi o momento de me juntar à Andrea e enfim, colocarmos em prática o antigo sonho da nossa clínica, a enviva.me Dermatologia Personalizada. Cuidar do corpo e da mente é um dos segredos para manter a beleza e a qualidade de vida.`,
      ],
    },
    video: {
      cta: 'Agende uma Consulta',
    },
  },
  aboutPage: {
    main: {
      title: 'Sobre Nós',
      description: [
        'Enviva.me foi um início de um sonho e de uma longa caminhada. Nasceu com bases sólidas e regada com muito amor e carinho, diante de uma amizade de quase 20 anos.',
        'Andrea e Rosângela trabalharam juntas em uma clínica de dermatologia, adquirindo bagagem e experiências. Puderam vivenciar que toda condução do tratamento do paciente depende do encadeamento cuidadoso entre: diagnósticos corretos – melhores opções terapêuticas – e entregas satisfatórias. Além disso, a tão necessária compreensão empática sobre o momento da vida e impacto das queixas e dores na rotina de cada um que busca por ajuda.',
        'Com o passar dos anos, a vida das duas tomou rumos diferentes, porém os laços de amizade já tinham se consolidado, partilhando de valores e propósitos de vida semelhantes. Assim, jamais perderam o contato e continuaram a compartilhar experiências profissionais e de vida, torcendo pelos empreendimentos e comemorando as vitórias de cada uma. Mas, no fundo, sempre mantiveram o ideal de terem um espaço conjunto de atendimento, uma clínica para ser chamada de “NOSSA”.',
        'Eis que em dezembro de 2019 o sonho começa a sair do papel. Com facilidade encontraram o local perfeito que precisavam. Foi dada a largada para darem corpo às instalações físicas e regulatórias da clínica, que àquela altura, ainda não tinha nome.',
        'Infelizmente a pandemia pela COVID19 afetou drasticamente a humanidade, e claramente, os planejamentos e cronogramas tiveram de ser repensados. O sonho da clínica teve de esperar.',
        `Enquanto a apreensão e adaptação do novo normal se instaurava, Andrea e
        Rosângela começaram a refletir sobre a responsabilidade e sobre o quão valioso e
        sagrado é poder cuidar de alguém. Um cuidar pleno para que os resultados na
        especialidade que abraçaram pudessem frutificar de maneira efetiva e segura.`,
        `Neste momento de grandes reflexões, vieram as frases:
        “Coloque vida em mim...”, “Ilumina-me...”, “Fortaleça-me para uma vida plena...”.`,
        `Frases vindas do coração. O nome da clínica acabava de nascer: enviva.me Dermatologia Personalizada. Sim, enviva.me com todas as letras minúsculas: nenhum ser humano é melhor, ou maior do que o outro.`,
        `As personalidades distintas das duas médicas trouxeram o equilíbrio desejado ao
        enviva.me. Ambas se completavam.`,
        `A jornada da clínica começou em julho de 2020, no momento certo, e com uma imensa gratidão a Deus, aos familiares e apoiadores, que foram essenciais para que pudessem levar conhecimento técnico, aliado ao calor humano, e de uma forma coerente com todas as etapas da vida de quem precisa de uma ajuda.`,
        `Bem-vindos à nossa casa, bem-vindos à enviva.me!`,
      ],
    },
    healthSection: {
      title: 'Saúde Circular',
      description: `
      A vida está em constante movimento. Todos possuem belezas distintas, e precisamos saber ressaltá-las de uma maneira saudável.
O envelhecimento faz parte do ciclo natural. Prezamos sempre pela harmonia e qualidade de vida. O ser humano precisa estar bem tanto com a saúde física, quanto também com a espiritual e emocional. É necessário estar feliz com seu corpo e sua mente.
Na enviva.me, aliamos a saúde com a beleza e o movimento natural do ser humano. Queremos proporcionar o bem estar acima de tudo, estimulando a busca por momentos de vida mais felizes.
`,
      callToAction: 'Saiba Mais',
    },
  },
  contactPage: {
    title: 'Entre em contato',
    address: 'Endereço',
    phone: 'Telefones',
    form: {
      name: {
        label: 'Nome',
        placeholder: 'Informe seu nome',
      },
      email: {
        label: 'Email',
        placeholder: 'Informe seu email',
      },
      phone: {
        label: 'Telefone',
        placeholder: 'Informe seu telefone',
      },
      message: {
        label: 'Mensagem',
      },
      button: {
        label: 'Enviar',
      },
    },
  },
  footer: {
    siteMap: 'Mapa do Site',
    contact: 'Contato',
    responsible: 'Responsável Técnica',
    pronoun: 'Dra.',
  },
  onlineSchedule: {
    title: 'Agende uma Consulta',
  },
  blog: {
    categories: 'Categorias',
    empty: 'Não existem categorias ainda :(',
  },
};

export default content;
