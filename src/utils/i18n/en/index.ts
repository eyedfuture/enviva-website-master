const content = {
  locale: 'en',
  navbar: {
    menu: {
      home: 'Home',
      solutions: 'Solutions',
      team: 'Team',
      about: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      schedule: 'Online Schedule',
    },
  },
  home: {
    covidBanner:
      'We have our service adapted according to COVID-19 security measures',
    callToAction: 'Learn More',
    services: {
      aesthetics: 'Aesthetics',
      clinical: 'Clinical',
      surgical: 'Surgical',
    },
    healthSection: {
      title: 'Circular Health',
      subtitle: 'The dermatology in touch with life',
      description: `The concept of Circular Health was established to highlight and strengthen our mission and professional trajectory here at enviva.me.
      The human being is in constant transformation. We are urged to evolve daily, each of us on our own journey: but this evolution does not have to be exhausting or bothersome. At enviva.me we help our patients to age healthily and pleasantly, highlighting the unique beauty of the individual. Come with us in our search for balance.
      `,
      callToAction: 'Learn More',
    },
    videoSection: {
      title: 'Our Home',
      description: `
      Enviva.me was designed to be a welcoming environment where you can feel embraced and safe. We seek the amity and, above all, the patient’s well-being, by perpetuating the serenity and tranquility required for good service. Welcome to our home!
      `,
      callToAction: 'Learn More',
    },
    blogSection: {
      title: 'Last Posts',
      button: 'See More',
    },
  },
  solutions: {
    callToAction: 'Learn More',
    clinical: {
      title: 'Clinical',
      products: {
        clinico: {
          title: 'Clinical',
          fullDescription: `
          During the medical appointment, we listen to the patient’s complaints, afflictions, and expectations.
          Currently, it is also possible to carry out teleconsultations through online platforms, following the guidelines of the Federal Council of Medicine (CFM).
          Enviva.me also performs home consultations, ideal if the patient has difficulty getting to the clinic. Such kind of care allows us to make a solid diagnosis of family dynamics, and thus plan the best treatment strategies for each individual. If you feel any discomfort or skin irritation, please contact us for a suitable treatment via phone on the contact tab.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Acne`,
              `Rosacea`,
              `Mycoses`,
              `Nail diseases`,
              `Allergy`,
              `Vitiligo`,
              `Melasma`,
              `Herpes simplex and zoster`,
              `Psoriasis`,
              `Folliculitis`,
              `Hyperhidrosis (excessive sweating)`,
              `Scalp diseases`,
              `Hair loss`,
              `Baldness`,
              `Pre-cancerous lesions`,
              `Skin cancer`,
            ],
          },
        },
      },
    },
    aesthetics: {
      title: 'Aesthetics',
      products: {
        'acido-hialuronico': {
          title: 'Hyaluronic Acid',
          description: `Used for the correction and filling of wrinkles and furrows and to soften scars. It can also be used to correct small imperfections, according to the body section.`,
          fullDescription: `
          Hyaluronic acid is a naturally occurring substance that is already found in your skin.
          It helps keep skin plump and hydrated.
          The most common application of hyaluronic acid injections is in skin fillers, used to correct and harmonize wrinkles, furrows, and scars. It can also be employed to correct minor imperfections, according to the body section.
          Each nomination has an established number of sessions to be followed. The total number of sessions required is individualized.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Skin hydration - skinbooster`,
              `Elimination of shadows of the face`,
              `Plump and enhance the lips`,
              `Filling of dark circles under the eyes`,
              `Correction of acne scars`,
              `Improve symmetry of the face and body`,
              `Support points for a lifting effect`,
            ],
          },
        },
        'bio-estimuladores-de-colageno': {
          title: 'Collagen Bio-Stimulators',
          description:
            'A collagen stimulator consists of a substance that is injected into the deep dermis. Once injected, it stimulates collagen production through a controlled inflammatory response.',
          fullDescription: `Those are injectable, non-surgical treatments in which the substance (calcium hydroxyapatite or poly-L-lactic acid) is applied into the dermis to activate collagen synthesis through an inflammatory response.
          The technique is considered minimally invasive, performed under local anesthesia, and is generally well tolerated by patients.
          It takes an average of three sessions with intervals of 30 to 40 days.
          As it requires more than one session, the results will be observed over time, not immediately. It can be used either as prevention or as a treatment for the signs of aging.
          When it is correctly indicated and the medical recommendations are properly followed by patients, the results provide a rejuvenated appearance in a natural way.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Facial and body skin sagging`,
              `Facial skin support`,
              `Correction of facial wrinkles`,
              `Sagging neck`,
            ],
          },
        },
        'toxina-botulinica': {
          title: 'Botulinum Toxin',
          description: `The botulinum toxin treatment produces relaxation of the muscles of the face. It can prevent wrinkles, and reduce fine lines. Furthermore, its application temporarily minimizes the undesirable excess of perspiration in specific parts of the body, such as hands and armpits. It is a safe and well-established medical procedure with few side effects - and much patient satisfaction.
          `,
          fullDescription: `Botulinum toxin is produced by bacteria cultivated in a laboratory.
          It causes muscle relaxation, reduction of fine lines and expressions, acting in the prevention of wrinkles.
          It is a safe and established medical procedure and has few side effects.
          Its action starts an average of 48 hours after application and its maximum effect is reached within 15 to 20 days.
          The association of Botulinum Toxin with other procedures results in a harmonious and natural appearance.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Chicken feet (periocular wrinkles)`,
              `Wrinkles in the forehead and eyebrows`,
              `Lifting of the eyebrows`,
              `Lifting the corners of the mouth`,
              `Gummy smile`,
              `Nose lift`,
              `Neck and cleavage`,
              `Excessive sweating in hands and armpits`,
            ],
          },
        },
        microagulhamento: {
          title: 'Microneedling',
          description:
            'It is a dermaroller procedure in which micro-perforations prick the skin to stimulate collagen.',
          fullDescription: `It is a procedure in which micro-perforations occur in the skin to stimulate collagen.
          As the skin is pierced, it reacts and releases inflammatory elements and also triggers growth hormones that act in the skin healing process.
          There is variation in the number and length of needles depending on the depth and the result the patient wishes to achieve.
          This procedure is commonly used to make treatment substances get through the skin.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Facial rejuvenation`,
              `Melasma`,
              `Acne scars`,
              `Stretch marks`,
              `Local stimulation of the scalp and reduction of hair loss`,
            ],
          },
        },
        'peelings-quimicos': {
          title: 'Chemical Peels',
          description: `A chemical peel is a technique used to improve and smooth the texture of the skin. It consists of the application of one or more chemical substances on the facial or body skin, causing cell renewal.`,
          fullDescription: `Chemical peels are constituted of one or more chemical substances applied to the facial or body skin.
          The procedure causes cell renewal through skin peeling - to a greater or lesser degree, depending on the substance and the number of applications.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Skin photoaging`,
              `Fine lines`,
              `Mild acne scar`,
              `Melasma`,
              `Pre-malignant lesions caused by sun exposure (actinic keratosis)`,
              `Stretch Marks`,
            ],
          },
        },
        'radiofrequencia-fracionada': {
          title: 'Fractional Radiofrequency',
          description: `It is a recent technology used for skin rejuvenation. The equipment operates with the emission of electromagnetic waves in a controlled manner, stimulating the production of collagen, thus improving skin firmness.
          `,
          fullDescription: `An up-to-date technology used for skin rejuvenation. The equipment emits electromagnetic waves in a controlled way, stimulating the production of collagen and improving skin firmness.`,
          indications: {
            label: 'Indications',
            items: [
              `Sunspots`,
              `Sagging in the face, neck, "double chin", pectoral, arms and back of hands`,
              `Acne scars`,
              `Recent and former stretch marks`,
            ],
          },
        },
        'laser-fracionado-ablativo': {
          title: 'Fractional Ablative Laser',
          description: `This wounding laser is the most suitable technology for the treatment of aging. It is called fractional laser because the beam is divided into parts. The fractional Ablative laser removes the thin outer layer of skin (epidermis) and heats the underlying skin (dermis), which stimulates the growth of new collagen fibers.`,
          fullDescription: `This technology is most suitable for the treatment of aging.
          It is called fractional laser because the beam is divided into parts, to reach the deep layers of the skin, stimulating the production and restructuring of collagen.
          This treatment is performed under local anesthesia and sometimes with the administration of potent short-acting oral analgesics. It is considered a minimally invasive treatment and it is well tolerated by patients.
          After the procedure, there is an immediate contraction of the skin due to the thermal effect produced and a gradual improvement.
          As with any aesthetic treatment, the results depend on the previous condition and the number of sessions performed to complete the cycle of treatment.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Sagging of facial skin`,
              `Fine lines and wrinkles`,
              `Acne scars`,
              `Stretch marks`,
              `Melasma`,
              `Rosacea`,
              `Poikiloderma (reddish appearance caused by visible spider veins, and also hyperpigmented spots)`,
            ],
          },
        },
        'ultrassom-micro-e-macrofocado': {
          title: 'Micro and Macro Focused Ultrasound',
          description: `Equipment aimed to stimulate the production of collagen, preventing and improving saggy skin on the face and specific parts of the body.
          `,
          fullDescription: `Considered one of the best technologies to stimulate collagen, this ultrasound can prevent and improve flaccidity. It is intended for facial skin and sections of the body.
          The emission of ultrasonic energy generates heat, reaching from the most superficial layer of the dermis to the muscular region.
          There are practically no contraindications to skin types.
          It is performed under topical anesthesia in the form of cosmetics, and possible use of oral analgesics.
          It can be applied before or after other treatments, considering the required interval between procedures.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Sagging of the facial skin and neck`,
              `Sagging in the arms`,
              `Sagging in the abdomen near the navel scar region`,
              `Sagging knee`,
              `Sagging of inner and outer thighs`,
              `Flabbiness on the flanks (fat located in the transition of the abdomen and back)`,
            ],
          },
        },
      },
    },
    surgical: {
      title: 'Surgical Procedures',
      products: {
        biopsias: {
          title: 'Biopsies',
          description:
            'A biopsy is the surgical technique used if an area of concern is identified. The medical professional removes a piece of tissue or a sample of cells from your body so that it can be analyzed in a laboratory.',
          fullDescription: `A biopsy is the surgical technique used if an area of concern is identified. The medical professional removes a piece of tissue or a sample of cells from your body so that it can be analyzed in a laboratory.`,
        },
        'remoção-cirurgica-de-pequenas-lesoes': {
          title: 'Surgical removal of small lesions',
          description:
            'It is a procedure for removing moles, sebaceous cysts, lipomas, in addition to treating ingrown nails, and related.',
          fullDescription: `It is a procedure to remove moles, sebaceous cysts, lipomas, and to treat ingrown nails, and alike.
          After local anesthesia, the lesion is removed at its base, close to the skin, using scissors or a scalpel blade.
          Sometimes the lesion is removed only through the incision (cut) in the skin and closed with the suture.
          `,
        },
        'curetagem-de-lesoes': {
          title: 'Lesion curettage',
          description:
            'It is a superficial skin scraping procedure. Examples of its use are the removal of contagious mollusks or seborrheic keratoses (seborrheic warts) with an instrument called a curette.',
          fullDescription: `It is a superficial skin scraping procedure.
          Examples of its use are the removal of contagious mollusks or seborrheic keratoses (seborrheic warts) with an instrument called a curette.
          `,
        },
        'infiltracao-intra-lesional': {
          title: 'Intralesional infiltration',
          description:
            'It is the injection of medication in certain skin conditions, such as the application of hormonal anti-inflammatory drugs in highly inflamed lesions or keloids.',
          fullDescription: `It is the injection of medication in some skin conditions, such as the application of hormonal anti-inflammatory drugs in highly inflamed lesions, or keloids.`,
        },
        eletrocauterizacao: {
          title: 'Electrocauterization',
          description:
            'An electrical cauterization occurs through the emission of heat and electricity, usually under local anesthesia. It is used to fight some types of skin cancer, lesions, and benign tumors.',
          fullDescription: `An electrical cauterization occurs through the emission of heat and electricity, usually under local anesthesia.
          It is used to fight some types of skin cancer, lesions, and benign tumors.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Removal of some types of benign tumors and some types of skin cancers`,
              `emoval of benign skin lesions, seborrheic keratoses, fibroepithelial polyps, nigra papular dermatosis (dark spots), and viral warts`,
            ],
          },
        },
        'cauterizacao-quimica': {
          title: 'Chemical cauterization',
          description: `It consists of the application of different chemical substances that stimulate a reaction on the skin that will later cause the peeling and the recovery of parts of the affected skin.
          `,
          fullDescription: `It consists of the application of different chemical substances that stimulate a reaction on the skin that will later cause the peeling and the recovery of parts of the affected skin.
          Usually, the procedure is repeated fortnightly or weekly, leading to satisfactory results and is well accepted by patients.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Spots caused by sun exposure (Solar Melanoses)`,
              `Actinic keratoses`,
              `Seborrheic keratoses`,
              `Viral warts`,
            ],
          },
        },
        'crioterapia-com-nitrogenio-liquido': {
          title: 'Cryotherapy with liquid nitrogen',
          description:
            'The application of jets of liquid nitrogen at low temperatures allows the renewal of skin texture and color.',
          fullDescription: `The application of jets of liquid nitrogen at low temperatures allows the renewal of skin texture and color.
          Depending on the duration of the application of the jets, the treatment can fight pre-malignant lesions and some cancerous skin diseases.
          This procedure can be beneficial for those patients who cannot make use of conventional surgical treatments due to contraindications.
          `,
          indications: {
            label: 'Indications',
            items: [
              `Solar melanoses`,
              `Actinic keratoses`,
              `Seborrheic keratoses`,
              `Viral warts`,
              `As support treatment of some forms of hair loss (naked hair shafts)`,
            ],
          },
        },
        'peelings-quimicos': {
          title: 'Chemical Peels',
          description:
            'It is a procedure that consists of the application of one or more chemical substances simultaneously, improving texture and skin coloration.',
          fullDescription: `Are composed of one or more chemical substances simultaneously, and when applied, enable the improvement of the texture and color of the skin.`,
          indications: {
            label: 'Indications',
            items: [
              `Pre-malignant skin conditions caused by the sun (actinic keratoses)`,
              `Unaesthetic conditions such as melasma and stretch marks`,
            ],
          },
        },
      },
    },
  },
  productPage: {
    label: 'Skin speaks and enviva.me translates',
    quote: 'enviva.me clinic',
    contact: {
      title: 'Scheduling my Appointment',
      whatsapp: 'Scheduling by Whatsapp',
      online: 'Online Scheduling',
    },
  },
  teamPage: {
    title: 'Team',
    andrea: {
      description: [
        `I am an only child of a Japanese descendant mother and Japanese father. My parents, Tomi and Osamu Masada, gave me access to all kinds of sources that they believed to be crucial for the formation of a well-prepared person, happy with life and cheerful, knowing that the learning process would never end.`,
        `There were six years of intense growth and learning at the College of Medicine of Sorocaba (PUC-SP). I chose Dermatology because it is a challenging field with continual observation, summoning the professional to elaborate not only a single-entry diagnosis, but multiple ones.`,
        `In addition to clinical practice, the field of Dermatology allows the professional to perform a myriad of small procedures, tests, dermatological surgeries, and ongoing participation in the search for diagnoses and treatment possibilities.`,
        `All the knowledge and love for the area began and unfolded in the medical residency at Santa Casa de São Paulo, in the Dermatology service, considered the cradle of Dermatology in São Paulo. Still at Santa Casa, I perfected myself in Infectious and Tropical Dermatology, with emphasis on Medical Mycology (study of fungi).`,
        `At the same time that I began my services as part of the clinical staff of some medical clinics, I was hired as a dermatologist in a multidisciplinary care facility dedicated exclusively to elderly care.`,
        `I earned my MBA at Fundação Getúlio Vargas (FGV), and today I have the honor and responsibility to answer for the technical board of the same place where I started in the field of the 60+, sixteen years ago.`,
        `My bond with Rosângela to conceive enviva.me Personalized Dermatology came at the right time. We continually bring our best knowledge and experiences to the clinic to bring health, knowledge, and well-being to people in a personalized, reliable, and transparent way.`,
        `I keep the teachings of my parents in a special corner of my soul, as well as those of my dear maternal "Batian" (grandmother), one of the strongest, most curious, and creative people I have ever met.`,
        `I hope that Batian, wherever she is, can be proud of the granddaughter who will never forget her.`,
      ],
    },
    rosangela: {
      description: [
        `I was born in the countryside of São Paulo, in the small town of Garça. I am married and the mother of two children.`,
        `I graduated from the 1st Medicine class at Oeste Paulista University (UNOESTE), in Presidente Prudente (SP), and I chose the city of São Paulo to settle down. At Santo Amaro University (UNISA), I began a residency in Internal Medicine and, subsequently, in Dermatology.`,
        `Already working in Dermatology, I realized the importance of offering clients a more holistic and humanized Medicine, which lead me to attend a postgraduate course in Anthroposophical for two years.`,
        `At the same time, I started two other activities: at the Medical Clinic of Hospital Regional Sul, where I worked as an expert in Dermatology, and at the Institute of Medicine and Criminology of the State of São Paulo (IMESC) where I practiced Legal Medicine. I still work at both places to this day, along with private practice.`,
        `In addition to those activities, I have had the grateful opportunity to work as a tutor for the senior Medicine students at UNISA, at Regional Sul Hospital.`,
        `Through the medical care experience, I was able to validate what I have always believed: the human being needs to be treated as a whole. The ideal care should not be compartmentalized. The necessary response must contemplate not only the technical and scientific element but also the emotional and spiritual. Practicing Dermatology is one of the most beautiful commitments: to be of service to people and provide health, beauty, and motivating them to live better every day.`,
        `After years of working with private practice by myself, the time came to join Andrea and finally put into practice the old dream of creating our clinic, enviva.me Personalized Dermatology. Taking care of body and mind is one of the secrets to sustaining beauty and quality of life.`,
      ],
    },
    video: {
      cta: 'Schedule an Appointment',
    },
  },
  aboutPage: {
    main: {
      title: 'About Us',
      description: [
        `enviva.me was the beginning of a dream and a long journey. It was built with solid foundations and was nurtured with a lot of love and affection, resulting from a friendship of almost 20 years.`,
        `Andrea and Rosângela worked together in a dermatology clinic, acquiring knowledge and experience. They were able to feel that the whole handling of the patient's treatment depended on the careful link between accurate diagnoses – better therapeutic options – and satisfactory results. In addition, they recognized the empathic understanding of the particular time in the life of the individual and the impact of complaints and pain on the routine of each patient seeking help.`,
        `Over the years, their lives took different paths, but the bonds of friendship had already been consolidated as they shared similar values ​​and purposes in life. Thus, they never lost touch and continued to partake in professional and life experiences, rooting for the projects and celebrating each other's victories. But, deep down, they had always maintained the ideal of having a common workspace, a clinic they could call their own.`,
        `And behold, in December 2019, the dream began to come out of the paper. They quickly found the perfect location they needed and they started building the physical and regulatory facilities of the clinic, which at that time still had no name.`,
        `Unfortunately, the COVID-19 pandemic drastically affected all of humanity, and clearly, plans and schedules had to be rethought. The dream had to wait.`,
        `While the apprehension and adjustment to the "new normal" were being established, Andrea and Rosângela reflected on the responsibility of caring for people, and on how valuable and sacred it was to exercise that role, with great care so that the results in the field they had embraced could bear fruit effectively and safely.`,
        `At that moment of great reflection, the phrases “Put life into me...”, “Enlighten me...”, “Strengthen me for a full life...” came to mind.`,
        `The phrases had come from the heart. The name of the clinic was then born: enviva.me Personalized Dermatology. Yes, enviva.me in all the lowercase letters: no human being is better or greater than the other.`,
        `The two doctors' distinct personalities brought the desired balance to enviva.me. They completed each other.`,
        `The journey of setting up the clinic began in July 2020, at the right time and with immense gratitude to God, family members, and supporters, who were essential to allow them to bring technical knowledge combined with warmth to clinical practice, in a manner consistent with all life stages of those who need help.`,
        `Welcome to our home, welcome to enviva.me!`,
      ],
    },
    healthSection: {
      title: 'Circular Health',
      description: `
      Life is in constant motion. We all have different appeals, and we need to know how to highlight them healthily.
      Aging is part of the natural cycle. We always value harmony and quality of life. The human being needs to be in good physical, spiritual, and emotional health. You want to be happy with your body and mind.
      At enviva.me, we connect health with beauty and the natural evolution of human beings. We want to provide well-being above all else, stimulating the search for happier moments in life.
      `,
      callToAction: 'Learn More',
    },
  },
  contactPage: {
    title: 'Get in touch',
    address: 'Address',
    phone: 'Phones',
    form: {
      name: {
        label: 'Name',
        placeholder: 'What is your name?',
      },
      email: {
        label: 'Email',
        placeholder: 'What is your email?',
      },
      phone: {
        label: 'Phone',
        placeholder: 'What is your phone?',
      },
      message: {
        label: 'Message',
      },
      button: {
        label: 'Submit',
      },
    },
  },
  footer: {
    siteMap: 'Site Map',
    contact: 'Contact',
    responsible: 'Technical Responsible',
    pronoun: 'Dr.',
  },
  onlineSchedule: {
    title: 'Online Scheduling',
  },
  blog: {
    categories: 'Categories',
    empty: 'No categories foun :(',
  },
};

export default content;
