// src/data/coursesData.js
export const departments = [
  {
    id: 'paramedical',
    name: 'Department of Paramedical Sciences',
    icon: '🏥',
    description: 'Comprehensive paramedical training for healthcare professionals',
    courses: [
      {
        id: 'ott',
        name: 'Operation Theatre Technician (OTT)',
        code: 'PMDNCT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Training in operation theatre procedures and equipment handling'
      },
      {
        id: 'emt',
        name: 'Emergency Medical Technician (EMT)',
        code: 'PMEMT',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹30,000',
        description: 'Emergency response and pre-hospital care training'
      },
      {
        id: 'cms-ed',
        name: 'Community Medical Services & Essential Drugs (CMS & ED)',
        code: 'PMDCE',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Community healthcare and essential drug management'
      },
      {
        id: 'cssd',
        name: 'Central Sterile Services Department Technician (CSSD Technician)',
        code: 'PMDCT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Sterilization and infection control procedures'
      },
      {
        id: 'first-aid',
        name: 'First Aid & Emergency Care',
        code: 'PMCFA',
        duration: '1 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹5,000',
        description: 'Basic first aid and emergency response training'
      },
      {
        id: 'ct-scan',
        name: 'CT Scan Technician',
        code: 'PMDCST',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'CT scan equipment operation and patient care'
      },
      {
        id: 'x-ray',
        name: 'X-Ray Technician (Radiography Technician)',
        code: 'PMDXRT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Radiography imaging and safety procedures'
      },
      {
        id: 'ultrasound',
        name: 'Ultrasound Technician',
        code: 'PMDUT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Ultrasound imaging techniques and patient care'
      },
      {
        id: 'mlt',
        name: 'Medical Laboratory Technician (MLT)',
        code: 'PMDMLT2',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹24,000',
        description: 'Clinical laboratory testing and diagnostics'
      },
      {
        id: 'dialysis',
        name: 'Dialysis Technician',
        code: 'PMDDT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹27,000',
        description: 'Dialysis equipment operation and patient monitoring'
      },
      {
        id: 'ecg',
        name: 'ECG Technician',
        code: 'PMECG',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'ECG machine operation and cardiac monitoring'
      },
      {
        id: 'cath-lab',
        name: 'Cath Lab Technician',
        code: 'PMDCLT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹40,000',
        description: 'Cardiac catheterization lab procedures'
      }
    ]
  },
  {
    id: 'it',
    name: 'Department of Information Technology',
    icon: '💻',
    description: 'Cutting-edge IT and computer science programs',
    courses: [
      {
        id: 'dcs',
        name: 'Diploma in Computer Science',
        code: 'ITDCA',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹10,000',
        description: 'Fundamental computer science concepts and programming'
      },
      {
        id: 'adcs',
        name: 'Advanced Diploma in Computer Science',
        code: 'ITADCA',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹12,000',
        description: 'Advanced programming and software development'
      },
      {
        id: 'dit',
        name: 'Diploma in Information Technology (DIT)',
        code: 'IT-DIT-203',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹20,000',
        description: 'Information technology and system administration'
      },
      {
        id: 'adit',
        name: 'Advanced Diploma in Information Technology (ADIT)',
        code: 'IT-ADIT-204',
        duration: '18 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹28,000',
        description: 'Advanced IT infrastructure and management'
      },
      {
        id: 'cca',
        name: 'Certificate in Computer Applications (CCA)',
        code: 'IT-CCA-205',
        duration: '3 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹5,000',
        description: 'Basic computer applications and office tools'
      },
      {
        id: 'dca',
        name: 'Diploma in Computer Applications (DCA)',
        code: 'IT-DCA-206',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹10,000',
        description: 'Computer applications and software usage'
      },
      {
        id: 'adca',
        name: 'Advanced Diploma in Computer Applications (ADCA)',
        code: 'IT-ADCA-207',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹18,000',
        description: 'Advanced computer applications and programming'
      },
      {
        id: 'pgdca',
        name: 'Post Graduate Diploma in Computer Applications (PGDCA)',
        code: 'IT-PGDCA-208',
        duration: '12 Months',
        eligibility: 'Graduation',
        fee: '₹25,000',
        description: 'Post graduate level computer applications'
      },
      {
        id: 'ctt',
        name: 'Computer Teacher Training (CTT)',
        code: 'IT-CTT-209',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹12,000',
        description: 'Training to become a computer teacher'
      },
      {
        id: 'tally',
        name: 'Tally with GST',
        code: 'IT-TALLY-210',
        duration: '3 Months',
        eligibility: '10+2 (Commerce)',
        fee: '₹8,000',
        description: 'Tally accounting software with GST training'
      },
      {
        id: 'excel',
        name: 'Advanced Excel',
        code: 'IT-EXCEL-211',
        duration: '2 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹5,000',
        description: 'Advanced Excel formulas and data analysis'
      },
      {
        id: 'office-auto',
        name: 'Office Automation',
        code: 'IT-OA-212',
        duration: '3 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹6,000',
        description: 'MS Office and office management tools'
      },
      {
        id: 'web-design',
        name: 'Web Designing',
        code: 'IT-WD-213',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹15,000',
        description: 'HTML, CSS, JavaScript and responsive design'
      },
      {
        id: 'graphic-design',
        name: 'Graphic Designing',
        code: 'IT-GD-214',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹15,000',
        description: 'Adobe Photoshop, Illustrator and design principles'
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        code: 'IT-DM-215',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹18,000',
        description: 'SEO, SEM, social media and digital marketing strategies'
      },
      {
        id: 'programming',
        name: 'Programming (C, C++, Java, Python)',
        code: 'IT-PROG-216',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹22,000',
        description: 'Comprehensive programming in C, C++, Java and Python'
      },
      {
        id: 'autocad',
        name: 'AutoCAD',
        code: 'IT-CAD-217',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹14,000',
        description: 'AutoCAD 2D and 3D design and drafting'
      },
      {
        id: 'deo',
        name: 'Data Entry Operator (DEO)',
        code: 'IT-DEO-218',
        duration: '3 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹4,000',
        description: 'Data entry, typing and office management'
      }
    ]
  },
  {
    id: 'yoga',
    name: 'Department of Yoga & Naturopathy',
    icon: '🧘',
    description: 'Holistic wellness through yoga and naturopathy',
    courses: [
      {
        id: 'dnys',
        name: 'Diploma in Naturopathy & Yogic Sciences (DNYS)',
        code: 'YN-DNYS-301',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹20,000',
        description: 'Naturopathy, yoga therapy and holistic healing'
      }
    ]
  },
  {
    id: 'education',
    name: 'Department of Education',
    icon: '📚',
    description: 'Teacher training and educational programs',
    courses: [
      {
        id: 'ntt',
        name: 'Nursery Teacher Training (NTT)',
        code: 'EDUCNTT',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹30,000',
        description: 'Nursery level teaching methodology and child psychology'
      },
      {
        id: 'nptt',
        name: 'Nursery Primary Teacher Training (NPTT)',
        code: 'EDUCPTT',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹30,000',
        description: 'Primary and nursery level teacher training'
      },
      {
        id: 'ctt-ed',
        name: 'Computer Teacher Training (CTT)',
        code: 'EDUDCT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹30,000',
        description: 'Computer teaching methodology and classroom management'
      },
      {
        id: 'ytt',
        name: 'Yoga Teacher Training (YTT)',
        code: 'EDUDYTT',
        duration: '24 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹30,000',
        description: 'Yoga teaching methodology and practice'
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'Department of Agriculture',
    icon: '🌾',
    description: 'Modern agriculture and sustainable farming',
    courses: [
      {
        id: 'diploma-agri',
        name: 'Diploma in Agriculture',
        code: 'AGRDA',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹25,000',
        description: 'Modern agriculture techniques and farm management'
      },
      {
        id: 'organic-farming',
        name: 'Organic Farming Certification',
        code: 'AGRCOF',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹25,000',
        description: 'Organic farming methods and certification'
      },
      {
        id: 'modern-farming',
        name: 'Modern Farming Techniques',
        code: 'AG-MF',
        duration: '6 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹14,000',
        description: 'Modern farming equipment and technology'
      },
      {
        id: 'agri-business',
        name: 'Agri-Business Management',
        code: 'AG-ABM-504',
        duration: '12 Months',
        eligibility: '10th /10+2th / Graduation',
        fee: '₹22,000',
        description: 'Agricultural business management and marketing'
      }
    ]
  }
];

export const getDepartmentById = (id) => {
  return departments.find(dept => dept.id === id);
};

export const getCourseById = (courseId) => {
  for (const dept of departments) {
    const course = dept.courses.find(c => c.id === courseId);
    if (course) return course;
  }
  return null;
};