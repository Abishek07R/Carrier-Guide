// Career Guide Dataset - Streams, Degrees, Durations, Salaries & Top 5 Colleges

const careerData = {
    streams: [
        {
            id: "cs-maths",
            name: "Computer Science & Mathematics",
            alias: "Group 2 (PCM + CS)",
            icon: "fa-laptop-code",
            tagline: "Technology, Software, AI & Engineering Domain",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            description: "Ideal for students aspiring to build a future in Software Engineering, AI/ML, Data Science, Cybersecurity, Aerospace, and High-Tech Innovations.",
            popularDegrees: ["btech-cse", "btech-ai-ds", "bca-data-sci", "btech-ece", "btech-cyber", "bsc-cs-ai"]
        },
        {
            id: "bio-maths",
            name: "Biology & Mathematics (PCMB)",
            alias: "Group 1 (PCMB)",
            icon: "fa-dna",
            tagline: "Healthcare, Biotechnology & Multi-Disciplinary Engineering",
            subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
            description: "A versatile stream offering dual eligibility for both Premier Medical Sciences and Top Engineering / Bio-Tech fields.",
            popularDegrees: ["mbbs", "btech-biotech", "bds", "btech-biomedical", "bpharm", "bvsc"]
        },
        {
            id: "pure-science",
            name: "Pure Science (Biology / PCB)",
            alias: "Group 3 (Physics, Chem, Botany, Zoology)",
            icon: "fa-microscope",
            tagline: "Medicine, Allied Health, Pharmacy & Life Sciences",
            subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
            description: "Targeted pathway for Doctors, Dentists, Pharmacists, Clinical Researchers, Allied Health Professionals, and Agricultural Scientists.",
            popularDegrees: ["mbbs", "bds", "bpharm", "bsc-nursing", "bsc-agriculture", "allied-health"]
        },
        {
            id: "commerce-maths",
            name: "Commerce with Business Mathematics",
            alias: "Group 4 (Commerce, Accounts, Eco, BM)",
            icon: "fa-chart-line",
            tagline: "Finance, Chartered Accountancy, Investment Banking & Economics",
            subjects: ["Commerce", "Accountancy", "Economics", "Business Mathematics"],
            description: "The gold standard for aspiring Chartered Accountants (CA), Investment Bankers, Actuarial Scientists, Corporate CFOs, and Data-driven Financial Analysts.",
            popularDegrees: ["bcom-hons", "ca-integrated", "bba-finance", "bsc-actuarial", "eco-hons", "bcom-pa"]
        },
        {
            id: "commerce-cs",
            name: "Commerce with Computer Applications",
            alias: "Group 5 (Commerce, Accounts, Eco, CA)",
            icon: "fa-wallet",
            tagline: "FinTech, E-Commerce, Digital Business & Management",
            subjects: ["Commerce", "Accountancy", "Economics", "Computer Applications"],
            description: "Blending business administration, taxation, and corporate finance with modern IT systems, ERP, Digital Marketing, and FinTech.",
            popularDegrees: ["bcom-ca", "bba-digital", "bcom-fintech", "bba-analytics", "bcom-gen", "bba-supply-chain"]
        },
        {
            id: "arts-humanities",
            name: "Arts & Humanities",
            alias: "Group 6 (History, Pol Sci, Geo, Lit)",
            icon: "fa-landmark",
            tagline: "Civil Services (UPSC), Law, Journalism, Design & Psychology",
            subjects: ["History", "Political Science", "Economics / Geography", "English Literature"],
            description: "Foundation for future Judges, Corporate Lawyers, Civil Servants (IAS/IPS), Journalists, UI/UX Designers, Psychologists, and Diplomatic Service officers.",
            popularDegrees: ["ba-llb", "ba-psychology", "ba-journalism", "b-des", "ba-polsci-upsc", "ba-english-media"]
        },
        {
            id: "vocational",
            name: "Vocational & Applied Technical Stream",
            alias: "Skill & Applied Tech Group",
            icon: "fa-gears",
            tagline: "Aviation, Commercial Pilot, Design, Animation & Skill Trades",
            subjects: ["General Foundation Course", "Vocational Theory", "Practical Labs"],
            description: "Accelerated career pathways focusing on practical industry-ready skills such as Aviation, Marine, Animation, Interior Design, and High-demand Trades.",
            popularDegrees: ["commercial-pilot", "b-des-interior", "bsc-animation-vfx", "btech-automobile-lateral", "bhm-hospitality", "b-voc-robotics"]
        }
    ],

    degrees: {
        // --- COMPUTER SCIENCE & TECH DEGREES ---
        "btech-cse": {
            id: "btech-cse",
            name: "B.Tech / B.E in Computer Science & Engineering",
            category: "Engineering & Technology",
            duration: "4 Years (8 Semesters)",
            streamIds: ["cs-maths", "bio-maths"],
            salary: {
                entry: "₹6.5 - ₹14 LPA",
                mid: "₹16 - ₹32 LPA",
                senior: "₹35 - ₹65+ LPA",
                highestRecorded: "₹1.2+ Crore PA (Offshore/Domestic FAANG)"
            },
            overview: "The most sought-after engineering discipline worldwide covering Algorithms, Fullstack Software Engineering, Cloud Architecture, Distributed Systems, and Modern DevOps.",
            keyRoles: ["Fullstack Software Developer", "Cloud Solutions Architect", "Backend Systems Engineer", "DevOps Engineer", "Tech Lead"],
            topColleges: [
                {
                    name: "Indian Institute of Technology (IIT) Madras",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF #1 (Engineering)",
                    highlights: "World-class research labs, 100% placement record, Highest CTC: ₹1.31 Cr",
                    avgPackage: "₹24.5 LPA",
                    website: "https://www.iitm.ac.in"
                },
                {
                    name: "Indian Institute of Technology (IIT) Bombay",
                    location: "Mumbai, Maharashtra",
                    rank: "NIRF #3 (Engineering)",
                    highlights: "Premier global alumni network, Silicon Valley recruitments, Top incubation hub",
                    avgPackage: "₹26.0 LPA",
                    website: "https://www.iitb.ac.in"
                },
                {
                    name: "College of Engineering, Guindy (CEG - Anna University)",
                    location: "Chennai, Tamil Nadu",
                    rank: "Top State Govt Institution",
                    highlights: "Legacy institution, highly affordable tuition, top recruiters like Google, Microsoft, Zoho",
                    avgPackage: "₹11.8 LPA",
                    website: "https://ceg.annauniv.edu"
                },
                {
                    name: "PSG College of Technology",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NAAC A++ Autonomous",
                    highlights: "Industry-collaborated curriculum, stellar campus placements across 200+ MNCs",
                    avgPackage: "₹12.2 LPA",
                    website: "https://www.psgtech.edu"
                },
                {
                    name: "National Institute of Technology (NIT) Tiruchirappalli",
                    location: "Trichy, Tamil Nadu",
                    rank: "NIRF #9 (Engineering)",
                    highlights: "Top NIT in India, 99.2% CSE placements, top tech firms & quant funds recruit",
                    avgPackage: "₹22.8 LPA",
                    website: "https://www.nitt.edu"
                }
            ]
        },

        "btech-ai-ds": {
            id: "btech-ai-ds",
            name: "B.Tech in Artificial Intelligence & Data Science",
            category: "Next-Gen Tech",
            duration: "4 Years (8 Semesters)",
            streamIds: ["cs-maths", "bio-maths"],
            salary: {
                entry: "₹7.5 - ₹16 LPA",
                mid: "₹18 - ₹38 LPA",
                senior: "₹40 - ₹80+ LPA",
                highestRecorded: "₹85 LPA"
            },
            overview: "Specialized futuristic degree focusing on Machine Learning, Deep Neural Networks, Generative AI, Big Data Analytics, and Computer Vision.",
            keyRoles: ["AI/ML Engineer", "Data Scientist", "GenAI Prompt & Model Specialist", "NLP Engineer", "BI Analytics Consultant"],
            topColleges: [
                {
                    name: "IIT Hyderabad",
                    location: "Hyderabad, Telangana",
                    rank: "NIRF Top 8 (Pioneer in AI)",
                    highlights: "India's first B.Tech in AI program, cutting-edge GPU supercomputing clusters",
                    avgPackage: "₹23.5 LPA",
                    website: "https://www.iith.ac.in"
                },
                {
                    name: "Vellore Institute of Technology (VIT)",
                    location: "Vellore, Tamil Nadu",
                    rank: "NIRF Top 11",
                    highlights: "Massive international tech placements, state-of-the-art AI labs with NVIDIA",
                    avgPackage: "₹10.5 LPA",
                    website: "https://vit.ac.in"
                },
                {
                    name: "SSN College of Engineering",
                    location: "Chennai, Tamil Nadu",
                    rank: "NAAC A++ / Anna Univ Affiliated",
                    highlights: "Exceptional research incentives, high conversion into top product companies & MS abroad",
                    avgPackage: "₹11.4 LPA",
                    website: "https://www.ssn.edu.in"
                },
                {
                    name: "BITS Pilani",
                    location: "Pilani / Hyderabad Campus",
                    rank: "Tier-1 Deemed University",
                    highlights: "Zero attendance policy, unmatched startup ecosystem, top Global tech firms",
                    avgPackage: "₹21.0 LPA",
                    website: "https://www.bits-pilani.ac.in"
                },
                {
                    name: "Amrita Vishwa Vidyapeetham",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NIRF Top 7 (University)",
                    highlights: "Global research tie-ups, specialized AI & Robotics center",
                    avgPackage: "₹9.8 LPA",
                    website: "https://www.amrita.edu"
                }
            ]
        },

        "bca-data-sci": {
            id: "bca-data-sci",
            name: "BCA / B.Sc in Computer Applications & Cloud Tech",
            category: "Computer Science & IT",
            duration: "3 Years (6 Semesters)",
            streamIds: ["cs-maths", "commerce-cs"],
            salary: {
                entry: "₹4.0 - ₹7.5 LPA",
                mid: "₹10 - ₹18 LPA",
                senior: "₹20 - ₹35+ LPA",
                highestRecorded: "₹38 LPA"
            },
            overview: "Fast-track 3-year professional course focused on Software Development, Web Technologies, Database Administration, and Cloud Computing.",
            keyRoles: ["Software Developer", "Front-end / UI Developer", "Cloud Administrator", "Database Analyst", "QA Automation Tester"],
            topColleges: [
                {
                    name: "Loyola College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 7 (Colleges)",
                    highlights: "Prestigious campus culture, top corporate recruitment by TCS, Infosys, Deloitte, Zoho",
                    avgPackage: "₹6.8 LPA",
                    website: "https://www.loyolacollege.edu"
                },
                {
                    name: "Christ University",
                    location: "Bengaluru, Karnataka",
                    rank: "Top Deemed University",
                    highlights: "Prime location in India's Silicon Valley, active industry internships",
                    avgPackage: "₹7.2 LPA",
                    website: "https://christuniversity.in"
                },
                {
                    name: "Madras Christian College (MCC)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 15",
                    highlights: "Over 180 years of excellence, active technical symposiums & placement cell",
                    avgPackage: "₹5.9 LPA",
                    website: "https://mcc.edu.in"
                },
                {
                    name: "St. Joseph's University",
                    location: "Bengaluru, Karnataka",
                    rank: "NAAC A++",
                    highlights: "Hands-on coding labs, strong placement network in Bangalore tech startups",
                    avgPackage: "₹6.4 LPA",
                    website: "https://www.sju.edu.in"
                },
                {
                    name: "PSG College of Arts & Science",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NIRF Top 20",
                    highlights: "Strong industrial connect in Western TN, high campus placement ratio",
                    avgPackage: "₹5.8 LPA",
                    website: "https://www.psgcas.ac.in"
                }
            ]
        },

        "btech-ece": {
            id: "btech-ece",
            name: "B.Tech / B.E in Electronics & Communication (VLSI & IoT)",
            category: "Core & Tech Engineering",
            duration: "4 Years (8 Semesters)",
            streamIds: ["cs-maths", "bio-maths"],
            salary: {
                entry: "₹6.0 - ₹13 LPA",
                mid: "₹15 - ₹30 LPA",
                senior: "₹32 - ₹55+ LPA",
                highestRecorded: "₹60+ LPA"
            },
            overview: "Covers Semiconductor Design (VLSI), Embedded Systems, 5G/6G Wireless Communications, Robotics, and IoT Hardware-Software Integration.",
            keyRoles: ["VLSI Design Engineer", "Embedded Firmware Engineer", "Telecom Systems Architect", "Hardware Design Specialist", "Robotics Engineer"],
            topColleges: [
                {
                    name: "IIT Madras",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF #1",
                    highlights: "Pioneered India's 'SHAKTI' RISC-V Microprocessor, top Semiconductor hiring",
                    avgPackage: "₹22.0 LPA",
                    website: "https://www.iitm.ac.in"
                },
                {
                    name: "NIT Tiruchirappalli (NITT)",
                    location: "Trichy, Tamil Nadu",
                    rank: "NIRF #9",
                    highlights: "Top VLSI companies like Qualcomm, Texas Instruments, Intel recruit on day 1",
                    avgPackage: "₹19.5 LPA",
                    website: "https://www.nitt.edu"
                },
                {
                    name: "CEG Anna University",
                    location: "Chennai, Tamil Nadu",
                    rank: "Premier State Govt College",
                    highlights: "Rich alumni network in global chip design giants (Broadcom, Nvidia, TI)",
                    avgPackage: "₹10.5 LPA",
                    website: "https://ceg.annauniv.edu"
                },
                {
                    name: "PSG College of Technology",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "Premier Autonomous",
                    highlights: "Specialized Embedded & Nano-electronics Centers with industry funding",
                    avgPackage: "₹11.0 LPA",
                    website: "https://www.psgtech.edu"
                },
                {
                    name: "Thiagarajar College of Engineering (TCE)",
                    location: "Madurai, Tamil Nadu",
                    rank: "Govt-Aided Autonomous",
                    highlights: "Excellent core hardware placements across South India",
                    avgPackage: "₹8.8 LPA",
                    website: "https://www.tce.edu"
                }
            ]
        },

        "btech-cyber": {
            id: "btech-cyber",
            name: "B.Tech in Cybersecurity & Digital Forensics",
            category: "Next-Gen Tech",
            duration: "4 Years (8 Semesters)",
            streamIds: ["cs-maths"],
            salary: {
                entry: "₹6.5 - ₹15 LPA",
                mid: "₹17 - ₹35 LPA",
                senior: "₹38 - ₹75+ LPA",
                highestRecorded: "₹72 LPA"
            },
            overview: "High-security domain dedicated to Ethical Hacking, Network Defense, Cryptography, Cloud Security, Threat Intelligence, and ISO 27001 Compliance.",
            keyRoles: ["Ethical Hacker / Penetration Tester", "SOC Analyst", "Security Architect", "Cyber Incident Response Lead", "Chief Information Security Officer (CISO)"],
            topColleges: [
                {
                    name: "National Forensic Sciences University (NFSU)",
                    location: "Gandhinagar / Delhi",
                    rank: "Institute of National Importance",
                    highlights: "Central govt premier cyber investigation and national security academy",
                    avgPackage: "₹14.5 LPA",
                    website: "https://www.nfsu.ac.in"
                },
                {
                    name: "IIT Kanpur (C3i Center)",
                    location: "Kanpur, UP",
                    rank: "NIRF Top 4",
                    highlights: "National center for cybersecurity of critical cyber-physical infrastructure",
                    avgPackage: "₹24.0 LPA",
                    website: "https://www.iitk.ac.in"
                },
                {
                    name: "VIT Chennai / Vellore",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 11",
                    highlights: "Dedicated Cyber Physical Systems center and global security certifications",
                    avgPackage: "₹10.2 LPA",
                    website: "https://vit.ac.in"
                },
                {
                    name: "Amrita School of Computing",
                    location: "Coimbatore / Amritapuri",
                    rank: "Top Cyber Research Lab",
                    highlights: "Ranked #1 in Capture-the-Flag (CTF) security hacking competitions globally",
                    avgPackage: "₹12.0 LPA",
                    website: "https://www.amrita.edu"
                },
                {
                    name: "SRM Institute of Science and Technology",
                    location: "Kattankulathur, Chennai",
                    rank: "NAAC A++",
                    highlights: "Modern Cyber Range simulated labs and international defense tie-ups",
                    avgPackage: "₹9.2 LPA",
                    website: "https://www.srmist.edu.in"
                }
            ]
        },

        "bsc-cs-ai": {
            id: "bsc-cs-ai",
            name: "B.Sc Computer Science with AI & Data Analytics",
            category: "Science & Computing",
            duration: "3 Years (6 Semesters)",
            streamIds: ["cs-maths"],
            salary: {
                entry: "₹4.0 - ₹7.0 LPA",
                mid: "₹9.0 - ₹16 LPA",
                senior: "₹18 - ₹30+ LPA",
                highestRecorded: "₹32 LPA"
            },
            overview: "A balanced theoretical and applied program focusing on Python, SQL, Statistics, Web Engineering, and Machine Learning models.",
            keyRoles: ["Data Analyst", "Junior AI Developer", "Web Application Developer", "Software Support Specialist", "System Analyst"],
            topColleges: [
                {
                    name: "Loyola College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 7",
                    highlights: "Prime placement pipeline with Fortune 500 tech and analytics companies",
                    avgPackage: "₹6.5 LPA",
                    website: "https://www.loyolacollege.edu"
                },
                {
                    name: "St. Xavier's College",
                    location: "Mumbai / Kolkata",
                    rank: "NIRF Top 10",
                    highlights: "High academic legacy, rich research culture and campus placements",
                    avgPackage: "₹7.0 LPA",
                    website: "https://xaviers.edu"
                },
                {
                    name: "Madras Christian College (MCC)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 15",
                    highlights: "Green sprawling campus, industry collaborative coding hackathons",
                    avgPackage: "₹5.6 LPA",
                    website: "https://mcc.edu.in"
                },
                {
                    name: "PSG College of Arts & Science",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NIRF Top 20",
                    highlights: "Integrated industrial training with leading software hubs in TN",
                    avgPackage: "₹5.9 LPA",
                    website: "https://www.psgcas.ac.in"
                },
                {
                    name: "Presidency College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 3 (Colleges)",
                    highlights: "Historic institution with nominal fees and high govt/scholarship support",
                    avgPackage: "₹5.0 LPA",
                    website: "https://presidencycollegechennai.ac.in"
                }
            ]
        },

        // --- MEDICAL & HEALTHCARE DEGREES ---
        "mbbs": {
            id: "mbbs",
            name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
            category: "Medical Sciences",
            duration: "5.5 Years (4.5 Yrs Study + 1 Yr Internship)",
            streamIds: ["bio-maths", "pure-science"],
            salary: {
                entry: "₹9.0 - ₹16 LPA (Junior Resident)",
                mid: "₹20 - ₹45 LPA (Specialist / MD / MS)",
                senior: "₹50 - ₹1.5+ Crore PA (Super Specialist / Surgeon)",
                highestRecorded: "₹2.5+ Crore PA"
            },
            overview: "The most respected healthcare profession granting the official medical license to diagnose, treat, perform surgeries, and save human lives.",
            keyRoles: ["Physician / Doctor", "Surgeon (Post MS)", "Clinical Specialist", "Medical Director", "Healthcare Consultant"],
            topColleges: [
                {
                    name: "All India Institute of Medical Sciences (AIIMS)",
                    location: "New Delhi",
                    rank: "NIRF #1 (Medical)",
                    highlights: "The pinnacle of medical education in Asia, subsidized healthcare & world-class research",
                    avgPackage: "₹18.5 LPA (Resident Stipend)",
                    website: "https://www.aiims.edu"
                },
                {
                    name: "Christian Medical College (CMC)",
                    location: "Vellore, Tamil Nadu",
                    rank: "NIRF #3 (Medical)",
                    highlights: "Global reputation for ethical medical training and clinical mastery",
                    avgPackage: "₹14.0 LPA",
                    website: "https://www.cmch-vellore.edu"
                },
                {
                    name: "Madras Medical College (MMC)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 10 / Legacy 1835",
                    highlights: "One of the oldest medical colleges in Asia, Rajiv Gandhi Govt General Hospital training",
                    avgPackage: "₹12.5 LPA",
                    website: "https://mmc.ac.in"
                },
                {
                    name: "JIPMER (Jawaharlal Institute of Postgrad Med Ed & Research)",
                    location: "Puducherry",
                    rank: "NIRF #5 (Medical)",
                    highlights: "Autonomous central govt institute of national importance with supreme facilities",
                    avgPackage: "₹16.0 LPA",
                    website: "https://jipmer.edu.in"
                },
                {
                    name: "Stanley Medical College",
                    location: "Chennai, Tamil Nadu",
                    rank: "Top Govt Medical College",
                    highlights: "World-renowned Plastic & Reconstructive Hand Surgery Institute",
                    avgPackage: "₹11.8 LPA",
                    website: "https://stanleymedicalcollege.edu.in"
                }
            ]
        },

        "bds": {
            id: "bds",
            name: "BDS (Bachelor of Dental Surgery)",
            category: "Dental Sciences",
            duration: "5 Years (4 Yrs Study + 1 Yr Internship)",
            streamIds: ["bio-maths", "pure-science"],
            salary: {
                entry: "₹4.5 - ₹8.5 LPA",
                mid: "₹12 - ₹25 LPA (Private Practice / MDS)",
                senior: "₹30 - ₹60+ LPA (Orthodontist / Implantologist)",
                highestRecorded: "₹80 LPA"
            },
            overview: "Specialized branch of medical science dealing with diagnosis, prevention, and treatment of oral diseases, dental surgeries, cosmetics, and orthodontics.",
            keyRoles: ["Dental Surgeon", "Orthodontist (Post MDS)", "Cosmetic Dentist", "Oral Pathologist", "Private Dental Clinic Owner"],
            topColleges: [
                {
                    name: "Saveetha Institute of Medical and Technical Sciences (SIMATS)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF #1 (Dental)",
                    highlights: "Global top 15 dental school (QS World Rankings), massive clinical case exposure",
                    avgPackage: "₹10.5 LPA",
                    website: "https://saveethadental.com"
                },
                {
                    name: "Manipal College of Dental Sciences (MCODS)",
                    location: "Manipal, Karnataka",
                    rank: "NIRF #2 (Dental)",
                    highlights: "World-class simulation labs and international dental exchange programs",
                    avgPackage: "₹9.8 LPA",
                    website: "https://manipal.edu/mcods-manipal.html"
                },
                {
                    name: "Tamil Nadu Government Dental College & Hospital",
                    location: "Chennai, Tamil Nadu",
                    rank: "Premier Govt Dental College",
                    highlights: "Located near Marina Beach, provides vast clinical patient inflow & low fee structure",
                    avgPackage: "₹7.5 LPA",
                    website: "https://tngdc.ac.in"
                },
                {
                    name: "Maulana Azad Institute of Dental Sciences (MAIDS)",
                    location: "New Delhi",
                    rank: "NIRF Top 4",
                    highlights: "Premier central government dental hospital with top MDS success rate",
                    avgPackage: "₹11.0 LPA",
                    website: "https://maids.ac.in"
                },
                {
                    name: "Sri Ramachandra Dental College",
                    location: "Porur, Chennai, Tamil Nadu",
                    rank: "NIRF Top 10",
                    highlights: "Accredited with JCI & NAAC A++, cutting-edge dental 3D printing & laser units",
                    avgPackage: "₹8.2 LPA",
                    website: "https://www.sriramachandra.edu.in"
                }
            ]
        },

        "bpharm": {
            id: "bpharm",
            name: "B.Pharm / Pharm.D (Pharmacy & Drug Formulations)",
            category: "Pharmaceutical Sciences",
            duration: "B.Pharm: 4 Years | Pharm.D: 6 Years",
            streamIds: ["bio-maths", "pure-science", "cs-maths"],
            salary: {
                entry: "₹4.0 - ₹7.5 LPA",
                mid: "₹10 - ₹20 LPA",
                senior: "₹24 - ₹50+ LPA (R&D Director / Global Regulatory)",
                highestRecorded: "₹65 LPA"
            },
            overview: "Core science behind discovering, manufacturing, testing, and marketing medicines, vaccines, clinical trials, and regulatory drug affairs.",
            keyRoles: ["Clinical Pharmacist", "Pharmaceutical Formulation Scientist", "Drug Inspector (Govt)", "Regulatory Affairs Executive", "QA/QC Head"],
            topColleges: [
                {
                    name: "National Institute of Pharmaceutical Ed & Research (NIPER)",
                    location: "Hyderabad / Mohali",
                    rank: "NIRF #1 (Pharmacy)",
                    highlights: "Autonomous central institute driving national vaccine & oncology breakthroughs",
                    avgPackage: "₹12.0 LPA",
                    website: "https://www.niperhyd.ac.in"
                },
                {
                    name: "Jamia Hamdard",
                    location: "New Delhi",
                    rank: "NIRF #2 (Pharmacy)",
                    highlights: "Pioneer in pharmacology research and international pharmaceutical tie-ups",
                    avgPackage: "₹9.5 LPA",
                    website: "https://jamiahamdard.edu"
                },
                {
                    name: "Madras Medical College (College of Pharmacy)",
                    location: "Chennai, Tamil Nadu",
                    rank: "Top Govt Pharmacy Institute",
                    highlights: "Zero tuition burden, prestigious state licensing & clinical hospital exposure",
                    avgPackage: "₹6.8 LPA",
                    website: "https://mmc.ac.in"
                },
                {
                    name: "PSG College of Pharmacy",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NIRF Top 50",
                    highlights: "Advanced R&D labs with industrial manufacturing pilots on campus",
                    avgPackage: "₹6.5 LPA",
                    website: "https://psgpharma.ac.in"
                },
                {
                    name: "JSS College of Pharmacy",
                    location: "Ooty, Tamil Nadu",
                    rank: "NIRF Top 7",
                    highlights: "Accredited by ACPE (USA), international campus placements across Pfizer, Novartis",
                    avgPackage: "₹8.0 LPA",
                    website: "https://www.jssuni.edu.in"
                }
            ]
        },

        "btech-biotech": {
            id: "btech-biotech",
            name: "B.Tech in Biotechnology & Genetic Engineering",
            category: "Bio-Engineering & Tech",
            duration: "4 Years (8 Semesters)",
            streamIds: ["bio-maths", "pure-science"],
            salary: {
                entry: "₹5.0 - ₹9.0 LPA",
                mid: "₹12 - ₹24 LPA",
                senior: "₹28 - ₹60+ LPA",
                highestRecorded: "₹65 LPA"
            },
            overview: "Combines Biology with Technology to engineer gene therapies, biofuels, lab-grown proteins, agricultural hybrids, and biopharmaceuticals.",
            keyRoles: ["Bioprocess Engineer", "Geneticist / CRISPR Researcher", "Bioinformatics Analyst", "Immunology Scientist", "Clinical Research Associate"],
            topColleges: [
                {
                    name: "IIT Madras (Biotechnology Dept)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF #1",
                    highlights: "High-impact CRISPR and computational biology research with global patents",
                    avgPackage: "₹18.0 LPA",
                    website: "https://biotech.iitm.ac.in"
                },
                {
                    name: "IIT Kharagpur",
                    location: "Kharagpur, West Bengal",
                    rank: "NIRF Top 5",
                    highlights: "Advanced cellular bioengineering and industrial bioprocess plants",
                    avgPackage: "₹17.5 LPA",
                    website: "https://www.iitkgp.ac.in"
                },
                {
                    name: "Anna University (ACTech Campus)",
                    location: "Chennai, Tamil Nadu",
                    rank: "Premier Tech Campus",
                    highlights: "Specialized Dept of Biotechnology with strong ties to Biocon, Serum Institute",
                    avgPackage: "₹8.5 LPA",
                    website: "https://annauniv.edu"
                },
                {
                    name: "VIT Vellore",
                    location: "Vellore, Tamil Nadu",
                    rank: "NIRF Top 11",
                    highlights: "Extensive cleanrooms, fermenters, and international dual degree options",
                    avgPackage: "₹9.0 LPA",
                    website: "https://vit.ac.in"
                },
                {
                    name: "PSG College of Technology",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "Premier Autonomous",
                    highlights: "Focused on enzyme technology, tissue culture, and biomedical manufacturing",
                    avgPackage: "₹8.8 LPA",
                    website: "https://www.psgtech.edu"
                }
            ]
        },

        "bsc-agriculture": {
            id: "bsc-agriculture",
            name: "B.Sc (Hons) Agriculture & Agri-Business",
            category: "Agricultural Sciences",
            duration: "4 Years (8 Semesters)",
            streamIds: ["bio-maths", "pure-science"],
            salary: {
                entry: "₹4.5 - ₹8.0 LPA",
                mid: "₹10 - ₹18 LPA",
                senior: "₹22 - ₹40+ LPA (Agri Bank Manager / ICAR Scientist)",
                highestRecorded: "₹42 LPA"
            },
            overview: "Focuses on Agronomy, Horticulture, Soil Science, Precision Farming with Drones, Agri-Fintech, and Food Security Supply Chains.",
            keyRoles: ["Agriculture Field Officer (Bank PO/AFO)", "Agronomist", "Farm Automation Specialist", "ICAR Research Scientist", "Agri-Business Manager"],
            topColleges: [
                {
                    name: "Tamil Nadu Agricultural University (TNAU)",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "ICAR #1 State Agri University",
                    highlights: "Global reputation in hybrid seeds, climate-resilient farming, massive campus",
                    avgPackage: "₹7.2 LPA",
                    website: "https://tnau.ac.in"
                },
                {
                    name: "Indian Agricultural Research Institute (IARI / Pusa)",
                    location: "New Delhi",
                    rank: "NIRF #1 (Agriculture)",
                    highlights: "Apex national institute for agricultural research and green revolution discoveries",
                    avgPackage: "₹11.0 LPA",
                    website: "https://www.iari.res.in"
                },
                {
                    name: "Annamalai University (Faculty of Agriculture)",
                    location: "Chidambaram, Tamil Nadu",
                    rank: "ICAR Accredited",
                    highlights: "Extensive 1000+ acre experimental farms and rural agricultural work experience",
                    avgPackage: "₹5.5 LPA",
                    website: "https://annamalaiuniversity.ac.in"
                },
                {
                    name: "University of Agricultural Sciences (UAS)",
                    location: "Bengaluru, Karnataka",
                    rank: "ICAR Top 5",
                    highlights: "Strong startup incubation for AgriTech drones and organic exports",
                    avgPackage: "₹6.8 LPA",
                    website: "https://www.uasbangalore.edu.in"
                },
                {
                    name: "Kerala Agricultural University (KAU)",
                    location: "Thrissur, Kerala",
                    rank: "ICAR Top 10",
                    highlights: "Specialization in tropical spices, plantation crops, and agro-forestry",
                    avgPackage: "₹6.0 LPA",
                    website: "https://kau.in"
                }
            ]
        },

        // --- COMMERCE, FINANCE & MANAGEMENT ---
        "bcom-hons": {
            id: "bcom-hons",
            name: "B.Com (Honours) / B.Com Professional Accounting",
            category: "Commerce & Finance",
            duration: "3 Years (6 Semesters)",
            streamIds: ["commerce-maths", "commerce-cs"],
            salary: {
                entry: "₹5.0 - ₹10.5 LPA",
                mid: "₹14 - ₹26 LPA",
                senior: "₹30 - ₹60+ LPA",
                highestRecorded: "₹45 LPA"
            },
            overview: "Premier finance degree covering Financial Accounting, Corporate Taxation, Auditing, Corporate Law, Valuation, and International Financial Reporting Standards (IFRS).",
            keyRoles: ["Financial Analyst", "Taxation Consultant", "Internal Auditor", "Investment Banker", "Risk Manager"],
            topColleges: [
                {
                    name: "Shri Ram College of Commerce (SRCC - Delhi University)",
                    location: "New Delhi",
                    rank: "NIRF Top 1 (Commerce in India)",
                    highlights: "Unmatched placement record with McKinsey, BCG, Bain, JP Morgan, Goldman Sachs",
                    avgPackage: "₹13.5 LPA",
                    website: "https://www.srcc.edu"
                },
                {
                    name: "Loyola College (Shift 1 & 2)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 7 (Colleges)",
                    highlights: "The South Indian epicenter for Big 4 accounting firms (EY, Deloitte, KPMG, PwC)",
                    avgPackage: "₹8.2 LPA",
                    website: "https://www.loyolacollege.edu"
                },
                {
                    name: "St. Xavier's College",
                    location: "Kolkata, West Bengal",
                    rank: "NIRF Top 5",
                    highlights: "Prestigious alumni of leading corporate captains, CAs, and banking CEOs",
                    avgPackage: "₹8.5 LPA",
                    website: "https://www.sxccal.edu"
                },
                {
                    name: "Madras Christian College (MCC)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 15",
                    highlights: "Distinguished commerce faculty, active student commerce associations and internships",
                    avgPackage: "₹6.5 LPA",
                    website: "https://mcc.edu.in"
                },
                {
                    name: "PSG College of Arts & Science",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NIRF Top 20",
                    highlights: "Integrated coaching for CA Foundation & Inter with high pass percentages",
                    avgPackage: "₹6.8 LPA",
                    website: "https://www.psgcas.ac.in"
                }
            ]
        },

        "ca-integrated": {
            id: "ca-integrated",
            name: "Chartered Accountancy (CA - ICAI Pathway)",
            category: "Professional Accounting",
            duration: "4.5 to 5 Years (Foundation + Inter + Articleship + Final)",
            streamIds: ["commerce-maths", "commerce-cs"],
            salary: {
                entry: "₹9.0 - ₹18 LPA (Newly Qualified CA)",
                mid: "₹22 - ₹45 LPA",
                senior: "₹50 - ₹1.5+ Crore PA (Partner / Chief Financial Officer)",
                highestRecorded: "₹2.0+ Crore PA"
            },
            overview: "India's highest statutory authority in accounting, auditing, direct & indirect taxation, financial restructuring, and corporate governance regulated by ICAI.",
            keyRoles: ["Statutory Auditor", "Chief Financial Officer (CFO)", "Tax Litigation Advocate", "M&A Deal Advisory Head", "Wealth Management Strategist"],
            topColleges: [
                {
                    name: "The Institute of Chartered Accountants of India (ICAI)",
                    location: "Headquarters: New Delhi (Offices Across All Cities)",
                    rank: "Statutory Body by Act of Parliament",
                    highlights: "Universal global recognition (MRA with UK, Australia, UAE, Canada)",
                    avgPackage: "₹12.8 LPA (Campus Placement)",
                    website: "https://www.icai.org"
                },
                {
                    name: "Loyola College (Evening CA Integrated Wing)",
                    location: "Chennai, Tamil Nadu",
                    rank: "Top CA Prep Partner",
                    highlights: "Specially timed batches allowing 3-year mandatory articleship in Big 4 firms",
                    avgPackage: "₹11.0 LPA",
                    website: "https://www.loyolacollege.edu"
                },
                {
                    name: "Ramakrishna Mission Vivekananda College",
                    location: "Mylapore, Chennai, Tamil Nadu",
                    rank: "Top CA Producer in South India",
                    highlights: "Produced hundreds of National Rankholders in CA Inter and CA Final",
                    avgPackage: "₹10.5 LPA",
                    website: "https://rkmvc.ac.in"
                },
                {
                    name: "PSG College of Arts & Science",
                    location: "Coimbatore, Tamil Nadu",
                    rank: "NAAC A++",
                    highlights: "Dedicated department for Professional Accounting with simulated audit labs",
                    avgPackage: "₹9.5 LPA",
                    website: "https://www.psgcas.ac.in"
                },
                {
                    name: "Narsee Monjee College of Commerce & Economics",
                    location: "Mumbai, Maharashtra",
                    rank: "Top Commerce College in Mumbai",
                    highlights: "Direct proximity to Dalal Street, Bombay Stock Exchange, and Big 4 corporate towers",
                    avgPackage: "₹12.0 LPA",
                    website: "https://www.nmcollege.in"
                }
            ]
        },

        "bba-finance": {
            id: "bba-finance",
            name: "BBA (Bachelor of Business Administration / IPM - Integrated MBA)",
            category: "Management & Strategy",
            duration: "BBA: 3 Years | IPM: 5 Years (Dual Degree)",
            streamIds: ["commerce-maths", "commerce-cs", "cs-maths", "arts-humanities"],
            salary: {
                entry: "₹6.0 - ₹15 LPA (IPM: ₹18 - ₹30 LPA)",
                mid: "₹20 - ₹40 LPA",
                senior: "₹45 - ₹1.0+ Crore PA (CEO / Managing Director)",
                highestRecorded: "₹1.1 Crore PA (IIM IPM)"
            },
            overview: "Comprehensive business management degree developing leadership, marketing, organizational behavior, business analytics, and venture capital management.",
            keyRoles: ["Management Consultant", "Product Manager", "Brand & Marketing Strategist", "Business Operations Lead", "Startup Founder"],
            topColleges: [
                {
                    name: "Indian Institute of Management (IIM) Indore (IPM Program)",
                    location: "Indore, Madhya Pradesh",
                    rank: "NIRF Top 8 (Management)",
                    highlights: "Direct 5-year integrated MBA right after 12th standard via IPMAT exam",
                    avgPackage: "₹25.6 LPA",
                    website: "https://www.iimidr.ac.in"
                },
                {
                    name: "Indian Institute of Management (IIM) Rohtak",
                    location: "Rohtak, NCR",
                    rank: "NIRF Top 12",
                    highlights: "Fast-rising IPM program with premier management placements in consulting",
                    avgPackage: "₹19.2 LPA",
                    website: "https://www.iimrohtak.ac.in"
                },
                {
                    name: "Shaheed Sukhdev College of Business Studies (SSCBS - DU)",
                    location: "New Delhi",
                    rank: "NIRF #1 (BBA / BMS in India)",
                    highlights: "Unbelievable ROI with low fees and placement packages rivaling top IIMs",
                    avgPackage: "₹11.2 LPA",
                    website: "https://sscbs.du.ac.in"
                },
                {
                    name: "NMIMS (Anil Surendra Modi School of Commerce)",
                    location: "Mumbai, Maharashtra",
                    rank: "Top B-School UG",
                    highlights: "Strong industry immersions, international case competitions",
                    avgPackage: "₹9.5 LPA",
                    website: "https://commerce.nmims.edu"
                },
                {
                    name: "Department of Management Studies, Stella Maris College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 30",
                    highlights: "Empowering women business leaders with strong placement ties in banking & retail",
                    avgPackage: "₹6.8 LPA",
                    website: "https://stellamariscollege.edu.in"
                }
            ]
        },

        // --- LAW, CIVIL SERVICES & DESIGN ---
        "ba-llb": {
            id: "ba-llb",
            name: "B.A. LL.B / B.B.A. LL.B (Integrated 5-Year Law)",
            category: "Law & Jurisprudence",
            duration: "5 Years (10 Semesters)",
            streamIds: ["arts-humanities", "commerce-maths", "commerce-cs", "cs-maths", "bio-maths"],
            salary: {
                entry: "₹7.0 - ₹18 LPA",
                mid: "₹20 - ₹45 LPA (Senior Associate / Legal Counsel)",
                senior: "₹50 - ₹1.5+ Crore PA (Law Firm Partner / Senior Advocate)",
                highestRecorded: "₹1.8 Crore PA (Magic Circle / Tier-1 Law Firms)"
            },
            overview: "Premier legal education integrating constitutional law, corporate mergers, intellectual property (IPR), cyber law, arbitration, and litigation practice.",
            keyRoles: ["Corporate Legal Counsel", "Litigation Advocate (High Court/Supreme Court)", "Judicial Magistrate / Judge", "IPR & Patent Attorney", "Legal Tech Consultant"],
            topColleges: [
                {
                    name: "National Law School of India University (NLSIU)",
                    location: "Bengaluru, Karnataka",
                    rank: "NIRF #1 (Law in India)",
                    highlights: "The Harvard of Indian Law, 100% placement across Tier-1 firms (Shardul Amarchand, Cyril Amarchand, Trilegal)",
                    avgPackage: "₹18.5 LPA",
                    website: "https://www.nls.ac.in"
                },
                {
                    name: "National Law University (NLU)",
                    location: "New Delhi",
                    rank: "NIRF #2 (Law)",
                    highlights: "Proximity to the Supreme Court of India, exceptional moot court pedigree",
                    avgPackage: "₹17.0 LPA",
                    website: "https://nludelhi.ac.in"
                },
                {
                    name: "Tamil Nadu National Law University (TNNLU)",
                    location: "Tiruchirappalli, Tamil Nadu",
                    rank: "NIRF Top 25 (Law)",
                    highlights: "Premier state National Law University with top judicial academy linkage",
                    avgPackage: "₹9.5 LPA",
                    website: "https://tnnlu.ac.in"
                },
                {
                    name: "School of Excellence in Law (SOEL - TNDALU)",
                    location: "Chennai, Tamil Nadu",
                    rank: "Premier State Law University",
                    highlights: "Highly active moot court society, produced numerous judges and public prosecutors",
                    avgPackage: "₹7.8 LPA",
                    website: "https://tndalu.ac.in"
                },
                {
                    name: "Symbiosis Law School (SLS)",
                    location: "Pune, Maharashtra",
                    rank: "NIRF Top 6",
                    highlights: "Top private law school with massive corporate law placements in Mumbai & Delhi",
                    avgPackage: "₹11.0 LPA",
                    website: "https://www.symlaw.ac.in"
                }
            ]
        },

        "b-des": {
            id: "b-des",
            name: "B.Des (Bachelor of Design - UI/UX, Product & Fashion)",
            category: "Design & Innovation",
            duration: "4 Years (8 Semesters)",
            streamIds: ["arts-humanities", "cs-maths", "commerce-cs", "vocational"],
            salary: {
                entry: "₹6.0 - ₹14 LPA",
                mid: "₹16 - ₹32 LPA",
                senior: "₹35 - ₹70+ LPA (Head of Design / VP Experience)",
                highestRecorded: "₹75 LPA"
            },
            overview: "Fuses art, human psychology, and technology to build modern digital products (UI/UX apps), industrial hardware products, fashion brands, and visual identities.",
            keyRoles: ["UI/UX Product Designer", "Industrial / Automotive Designer", "Design Systems Specialist", "Creative Art Director", "Fashion / Apparel Stylist"],
            topColleges: [
                {
                    name: "National Institute of Design (NID)",
                    location: "Ahmedabad, Gujarat",
                    rank: "Institute of National Importance #1 Design",
                    highlights: "World-renowned design philosophy, top recruitments by Apple, Google, Microsoft, Samsung",
                    avgPackage: "₹21.0 LPA",
                    website: "https://www.nid.edu"
                },
                {
                    name: "Industrial Design Centre (IDC - IIT Bombay)",
                    location: "Mumbai, Maharashtra",
                    rank: "Premier Tech Design",
                    highlights: "Leading human-computer interaction and design thinking research",
                    avgPackage: "₹23.5 LPA",
                    website: "https://www.idc.iitb.ac.in"
                },
                {
                    name: "National Institute of Fashion Technology (NIFT)",
                    location: "Chennai / New Delhi",
                    rank: "NIRF #1 (Fashion Design)",
                    highlights: "Premier fashion and lifestyle design academy with international fashion weeks exposure",
                    avgPackage: "₹8.8 LPA",
                    website: "https://www.nift.ac.in"
                },
                {
                    name: "Srishti Manipal Institute of Art, Design & Tech",
                    location: "Bengaluru, Karnataka",
                    rank: "Top Creative Arts Institute",
                    highlights: "Dynamic interdisciplinary studios in the heart of Bangalore's design ecosystem",
                    avgPackage: "₹9.5 LPA",
                    website: "https://srishtimanipalinstitute.in"
                },
                {
                    name: "Department of Design, IIT Madras",
                    location: "Chennai, Tamil Nadu",
                    rank: "Premier Engineering Design",
                    highlights: "Dual degree in engineering design and automotive simulation",
                    avgPackage: "₹18.0 LPA",
                    website: "https://ed.iitm.ac.in"
                }
            ]
        },

        "ba-polsci-upsc": {
            id: "ba-polsci-upsc",
            name: "B.A. in Political Science & Public Administration",
            category: "Civil Services & Governance",
            duration: "3 Years (6 Semesters)",
            streamIds: ["arts-humanities"],
            salary: {
                entry: "₹8.0 - ₹14 LPA (IAS / IPS / State Civil Services)",
                mid: "₹18 - ₹30 LPA",
                senior: "₹35 - ₹60+ LPA (Cabinet Secretary / Ambassador / Policy Director)",
                highestRecorded: "Govt Pay Commission Pay Matrix Level 10 to 18 + Perks"
            },
            overview: "The quintessential foundational degree for cracking the UPSC Civil Services Examination (IAS, IPS, IFS, IRS) and state PSC exams (TNPSC Group 1).",
            keyRoles: ["IAS / IPS / IFS Officer (Post UPSC)", "Policy Analyst in Think Tanks", "Political Strategist", "United Nations / NGO Director", "Public Relations Officer"],
            topColleges: [
                {
                    name: "St. Stephen's College (Delhi University)",
                    location: "New Delhi",
                    rank: "NIRF Top 2",
                    highlights: "Produced maximum number of Cabinet Secretaries, Diplomats, and UPSC toppers",
                    avgPackage: "₹10.5 LPA",
                    website: "https://www.ststephens.edu"
                },
                {
                    name: "Hindu College (Delhi University)",
                    location: "New Delhi",
                    rank: "NIRF #1 (Colleges in India)",
                    highlights: "Vibrant debate culture, premier hub for Civil Services aspirants",
                    avgPackage: "₹11.0 LPA",
                    website: "https://hinducollege.ac.in"
                },
                {
                    name: "Presidency College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF #3 (Colleges)",
                    highlights: "Rich historic legacy of producing Governors, Chief Ministers, and senior bureaucrats",
                    avgPackage: "₹5.5 LPA",
                    website: "https://presidencycollegechennai.ac.in"
                },
                {
                    name: "Madras Christian College (MCC)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 15",
                    highlights: "Premier political science department with active model UN and social labs",
                    avgPackage: "₹5.8 LPA",
                    website: "https://mcc.edu.in"
                },
                {
                    name: "Loyola College",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 7",
                    highlights: "Loyola Institute of Social Science Training and active UPSC mentorship club",
                    avgPackage: "₹6.2 LPA",
                    website: "https://www.loyolacollege.edu"
                }
            ]
        },

        // --- VOCATIONAL & AVIATION ---
        "commercial-pilot": {
            id: "commercial-pilot",
            name: "CPL (Commercial Pilot License) & B.Sc Aviation",
            category: "Aviation & Aerospace",
            duration: "2 to 3 Years (Ground School + 200 Flying Hours)",
            streamIds: ["vocational", "cs-maths", "bio-maths"],
            salary: {
                entry: "₹12 - ₹22 LPA (First Officer)",
                mid: "₹30 - ₹55 LPA (Captain)",
                senior: "₹65 - ₹1.2+ Crore PA (Senior Airline Commander / Check Pilot)",
                highestRecorded: "₹1.4 Crore PA"
            },
            overview: "Specialized professional aviator training leading to DGCA license for flying commercial passenger jetliners (Airbus A320, Boeing 777/787) globally.",
            keyRoles: ["Commercial Airline Pilot (First Officer / Captain)", "Charter Jet Pilot", "Flight Operations Manager", "Aviation Safety Inspector", "Flight Simulator Instructor"],
            topColleges: [
                {
                    name: "Indira Gandhi Rashtriya Uran Akademi (IGRUA)",
                    location: "Amethi, Uttar Pradesh",
                    rank: "Apex National Aviation Academy",
                    highlights: "Direct airline cadet hiring by IndiGo, Air India; world-class modern aircraft fleet",
                    avgPackage: "₹18.0 LPA",
                    website: "https://igrua.gov.in"
                },
                {
                    name: "National Flying Training Institute (NFTI - CAE)",
                    location: "Gondia, Maharashtra",
                    rank: "Top Global Flying School",
                    highlights: "Operated by CAE Canada, state-of-the-art Diamond DA40 & DA42 glass cockpit fleet",
                    avgPackage: "₹16.5 LPA",
                    website: "https://www.cae.com"
                },
                {
                    name: "Madras Flying Club (MFC)",
                    location: "Chennai Airport / Vellore",
                    rank: "Legacy Flying Club (Est. 1930)",
                    highlights: "One of India's oldest pilot training institutes with direct ATC base experience",
                    avgPackage: "₹14.0 LPA",
                    website: "https://madrasflyingclub.com"
                },
                {
                    name: "Orient Flights Aviation Academy (OFAA)",
                    location: "Mysuru, Karnataka",
                    rank: "DGCA Approved Premier School",
                    highlights: "Operates from dedicated Mysuru runway with all-weather night flying clearance",
                    avgPackage: "₹15.0 LPA",
                    website: "https://orientflights.com"
                },
                {
                    name: "Chimes Aviation Academy (CAA)",
                    location: "Dharna, Madhya Pradesh",
                    rank: "Top Private Aviation Institute",
                    highlights: "IndiGo Cadet Pilot Program official flight training partner",
                    avgPackage: "₹17.5 LPA",
                    website: "https://caaindia.com"
                }
            ]
        },

        "bsc-animation-vfx": {
            id: "bsc-animation-vfx",
            name: "B.Sc in Animation, VFX & Game Development",
            category: "Media & Entertainment Tech",
            duration: "3 Years (6 Semesters)",
            streamIds: ["vocational", "cs-maths", "commerce-cs", "arts-humanities"],
            salary: {
                entry: "₹4.5 - ₹8.5 LPA",
                mid: "₹12 - ₹24 LPA",
                senior: "₹28 - ₹60+ LPA (VFX Supervisor / Technical Director)",
                highestRecorded: "₹65 LPA"
            },
            overview: "Specialized creative technology degree covering 3D CGI Modeling (Maya/Blender), Unreal Engine 5 Game Development, Visual Effects for Hollywood/Indian Cinema, and AR/VR.",
            keyRoles: ["3D Environment Artist", "VFX Compositor", "Game Engine Programmer", "Rigging / Character Animator", "Concept Art Supervisor"],
            topColleges: [
                {
                    name: "National Institute of Design (NID - Film & Video Communication)",
                    location: "Ahmedabad, Gujarat",
                    rank: "Top National Institute",
                    highlights: "Oscar and National Award-winning faculty and alumni network",
                    avgPackage: "₹15.5 LPA",
                    website: "https://www.nid.edu"
                },
                {
                    name: "Loyola College (Kaushal Kendra / Visual Communication)",
                    location: "Chennai, Tamil Nadu",
                    rank: "NIRF Top 7",
                    highlights: "Pioneer in South Indian cinema, media production, and digital VFX labs",
                    avgPackage: "₹7.5 LPA",
                    website: "https://www.loyolacollege.edu"
                },
                {
                    name: "Asian Academy of Film and Television (AAFT)",
                    location: "Film City, Noida",
                    rank: "Top Media & Film Academy",
                    highlights: "Direct integration with active Bollywood & OTT production studios",
                    avgPackage: "₹8.0 LPA",
                    website: "https://aaft.com"
                },
                {
                    name: "Arena Animation & Maya Academy of Advanced Cinematics (MAAC)",
                    location: "Chennai / Bengaluru / Mumbai",
                    rank: "Top Industry Training Network",
                    highlights: "Direct recruitment pipelines to Redchillies VFX, MPC, Ubisoft, Technicolor",
                    avgPackage: "₹6.5 LPA",
                    website: "https://www.maacindia.com"
                },
                {
                    name: "Whistling Woods International",
                    location: "Mumbai, Maharashtra",
                    rank: "Hollywood Reporter Top 10 Film School",
                    highlights: "Founded by Subhash Ghai, high-end motion capture and VR studio floors",
                    avgPackage: "₹10.5 LPA",
                    website: "https://www.whistlingwoods.net"
                }
            ]
        }
    }
};
