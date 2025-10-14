// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-opportunities-at-aims",
          title: "Opportunities at AIMS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunities/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-officially-started-as-german-research-chair-of-mathematics-and-its-applications-at-aims",
          title: 'I have officially started as German Research Chair of Mathematics and its Applications...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-stellenbosch-university-entitled-should-we-use-parameterized-quantum-circuits-for-machine-learning-as-a-qsun-saquti-and-nithecs-seminar",
          title: 'I gave a talk at Stellenbosch University entitled “Should we use parameterized quantum...',
          description: "",
          section: "News",},{id: "news-our-paper-potential-and-limitations-of-random-fourier-features-for-dequantizing-quantum-machine-learning-appeared-in-print-in-quantum-i-previously-gave-a-talk-about-this-work-at-ipam-video",
          title: 'Our paper “Potential and limitations of random Fourier features for dequantizing quantum machine...',
          description: "",
          section: "News",},{id: "news-i-gave-a-nithecs-colloquium-entitled-quantum-computing-challenges-and-opportunities-video",
          title: 'I gave a NITheCS colloquium entitled “Quantum Computing: Challenges and Opportunities” (video).',
          description: "",
          section: "News",},{id: "news-a-nice-profile-of-me-appeared-today-as-featured-scientist-of-nithecs-for-march-2025",
          title: 'A nice profile of me appeared today, as featured scientist of NITheCS for...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-wits-university-entitled-the-potential-and-limitations-of-quantum-machine-learning-as-part-of-the-wits-ibm-seminar-series",
          title: 'I gave a talk at WITS University entitled “The Potential and Limitations of...',
          description: "",
          section: "News",},{id: "news-press-release-and-short-profile-from-stellenbosch-university",
          title: 'Press release and short profile from Stellenbosch University.',
          description: "",
          section: "News",},{id: "news-our-new-pre-print-new-perspectives-on-quantum-kernels-through-the-lens-of-entangled-tensor-kernels-appeared-today-on-the-arxiv",
          title: 'Our new pre-print “New perspectives on quantum kernels through the lens of entangled...',
          description: "",
          section: "News",},{id: "news-our-new-pre-print-kernel-based-dequantization-of-variational-qml-without-random-fourier-features-appeared-today-on-the-arxiv",
          title: 'Our new pre-print “Kernel-based dequantization of variational QML without Random Fourier Features” appeared...',
          description: "",
          section: "News",},{id: "news-i-will-be-program-committee-co-chair-together-with-maria-schuld-for-qtml-2025-in-singapore",
          title: 'I will be program committee co-chair (together with Maria Schuld) for QTML 2025,...',
          description: "",
          section: "News",},{id: "news-our-new-pre-print-efficient-quantum-gibbs-sampling-with-local-circuits-appeared-today-on-the-arxiv",
          title: 'Our new pre-print “Efficient Quantum Gibbs Sampling with Local Circuits” appeared today on...',
          description: "",
          section: "News",},{id: "news-i-now-have-two-phd-positions-and-one-postdoctoral-fellowship-available-in-my-group-see-the-linked-advertisements-for-more-information-and-please-apply-if-you-are-interested",
          title: 'I now have two PhD positions and one postdoctoral fellowship available in my...',
          description: "",
          section: "News",},{id: "news-press-release-from-the-fu-berlin-describing-the-5-year-daad-funded-co-operative-project-between-the-german-research-chair-at-aims-and-the-group-of-prof-jens-eisert-at-the-fu-berlin",
          title: 'Press release from the FU Berlin, describing the 5 year DAAD funded co-operative...',
          description: "",
          section: "News",},{id: "news-today-i-gave-a-keynote-talk-entitled-potential-and-limitations-of-quantum-machine-learning-at-the-qml-for-africa-workshop-at-the-deep-learning-indaba-held-in-kigali-rwanda",
          title: 'Today I gave a keynote talk entitled “Potential and limitations of quantum machine...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-that-two-of-our-submissions-were-accepted-for-short-talks-at-qtml2025-one-a-joint-submission-with-the-group-of-zoe-holmes-on-kernel-based-dequantization-of-supervised-qml-based-on-this-this-and-this-paper-and-the-other-a-submission-based-on-interactive-proofs-for-verifying-quantum-learning-and-testing",
          title: 'I’m happy to announce that two of our submissions were accepted for short...',
          description: "",
          section: "News",},{id: "news-i-m-very-happy-to-welcome-two-visitors-to-our-group-at-aims-florian-hirsch-from-heidelberg-university-will-visit-until-the-end-of-october-and-pablo-rodriguez-grasa-from-the-university-of-the-basque-country-will-visit-until-mid-october",
          title: 'I’m very happy to welcome two visitors to our group at AIMS. Florian...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-topological-states-from-randomized-measurements-using-variational-tensor-network-tomography-appeared-in-print-in-prx-quantum",
          title: 'Our paper “Learning Topological States from Randomized Measurements Using Variational Tensor-Network Tomography” appeared...',
          description: "",
          section: "News",},{id: "news-our-new-pre-print-wavefunction-flows-efficient-quantum-simulation-of-continuous-flow-models-appeared-today-on-the-arxiv",
          title: 'Our new pre-print “Wavefunction Flows: Efficient Quantum Simulation of Continuous Flow Models” appeared...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-average-case-complexity-of-learning-output-distributions-of-quantum-circuits-appeared-in-digital-print-in-quantum",
          title: 'Our paper “On the average-case complexity of learning output distributions of quantum circuits”...',
          description: "",
          section: "News",},{id: "news-today-a-nice-article-in-german-appeared-in-the-tagespiegel-newspaper-describing-the-joint-quantum-computing-efforts-between-aims-and-the-fu-berlin",
          title: 'Today a nice article (in German) appeared in the Tagespiegel newspaper describing the...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
