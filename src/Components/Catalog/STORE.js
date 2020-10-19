const STORE = {
    categories: [
        {
            key: 'categoryOne',
            id: 1,
            title: 'Faculty Engagement',
        },
        {
            key: 'categoryTwo',
            id: 2,
            title: 'Pedagogical Content Knowledge',
            link: '#cat2',
        },
        {
            key: 'categoryThree',
            id: 3,
            title: 'Feedback and Assessment',
            link: '#cat3',
        },
        {
            key: 'categoryFour',
            id: 4,
            title: 'Inclusive Pedagogy',
            link: '#cat4',
        },
        {
            key: 'categoryFive',
            id: 5,
            title: 'Curriculum Alignment',
            link: '#cat5',
        },
        {
            key: 'categorySix',
            id: 6,
            title: 'Classroom Climate',
            link: '#cat6',
        },
        {
            key: 'categorySeven',
            id: 7,
            title: 'Instructional Strategies',
            link: '#cat7',
        },
        {
            key: 'categoryEight',
            id: 8,
            title: 'Faculty Administrative Processes',
            link: '#cat8',
        },
    ],
    learningTracks: [
        {
            key: 'track1',
            id: 'track1',
            title: 'Online Accessibility',
        },
        {
            key: 'track2',
            id: 'track2',
            title: 'OTC Prime',
        },
        {
            key: 'track3',
            id: 'track3',
            title: 'OTC Enrich',
        },
        {
            key: 'track4',
            id: 'track4',
            title: 'OTC Multimedia',
        },
        {
            key: 'track5',
            id: 'track5',
            title: 'OTC Communication',
        },
        {
            key: 'track6',
            id: 'track6',
            title: 'OTC Engagement',
        },
        {
            key: 'track7',
            id: 'track7',
            title: 'Foundations for Teaching Online',
        },
        {
            key: 'track8',
            id: 'track8',
            title: 'Teaching Essentials',
        },
        {
            key: 'track9',
            id: 'track9',
            title: 'Assessment as Learning',
        },
    ],
    courses: [
        {
            id: 1,
            category: 6,
            title: 'Classroom Setup to Increase Student Engagement in Online Classes',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Teaching online is necessary for College faculty today, and the need for it will only grow over time. At CPCC, statistics indicate that if “online” was a campus, it would be one of the largest campuses at the College. Still, many teachers and students feel that an online class cannot offer the same level of interaction and engagement that a seated class can offer. Lindy Hues has been teaching online since 2012, and has learned some successful strategies to offer an online learning experience that is closer to a seated classroom environment. In this presentation, she will share some examples from the field and offer advice on successful online teaching techniques. Topics will include course setup, teacher engagement techniques, and strategies to increase student engagement.'
        },
        {
            id: 2,
            category: 7,
            title: 'Pandemic-Proof Course Design',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Learn how to design your courses to provide the same level of quality and consistency regardless of format or a change in the assigned instructor. This course provides tips for making your assignments clear and easy to engage for both students and facutly should you need to hand off a course to someone else on a short timeline.   '
        },
        {
            id: 3,
            category: 7,
            title: 'Brightspace Basics and Beyond',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending.'
        },
        {
            id: 4,
            category: 7,
            title: `Don't "flip" out:  Transforming your traditional classroom to a flipped classroom`,
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'This course will discuss how effective "flipping" your classroom can be, how you can transform your classroom into a "flipped" classroom, and how your students can excel in a "flipped" classroom.'
        },
        {
            id: 5,
            category: 7,
            title: 'VoiceThread for Online Courses',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'VoiceThread is a Cloud operation that does not require software to install.  It is purchased by the institution and is free to your students.  Students can operate this application on their computers, iPads, or cell phones.  This course will show you how to integrate this operation into your online courses, help you develop useful content that will create interaction between the students as well as faculty, and how to build rubrics into your teaching shell to grade assignments.'
        },
        {
            id: 6,
            category: 8,
            title: 'Blackboard ILP Final Grade Process',
            courseCode: 'EOL-ELN-007',
            learningTrack: 'none',
            certification: 'none',
            description: 'Submitting your final grades has never been easier!  In this online faculty development opportunity, you will learn the process of submitting your final grades using the Blackboard Intelligent Learning Platform (ILP).  Upon completion, faculty will:  determine and design their grading schema for submitting final grades and describe the process for submitting final grades using the ILP.' 
        },
        {
            id: 7,
            category: 4,
            title: 'Virtual Poverty Simulation',
            courseCode: 'SL-INF-200',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 8,
            category: 5,
            title: 'The Perfect Match: Aligning your course',
            courseCode: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'The foundation of effective course design includes aligning outcomes, activities and assessment. This course is part of the Teaching Essential and Assessment as Learning Track.'
        },
        {
            id: 9,
            category: 4,
            title: 'Online Accessibility at Central Piedmont: Aligning Student Success and the Law',
            courseCode: 'CTLE-TEA-001',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'This online, self-paced course introduces faculty and teaching staff to online accessibility, an overview of the law, and resources to learn more. Upon completion of this course, learners will be able to: Affirm the importance of designing and delivering accessible online content for student success. Summarize Title II of the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act. Apply foundation online accessibility best practices through the use of resources provided in this course. This course is part of the Online Accessibility Learning Track.'
        },
        {
            id: 10,
            category: 4,
            title: 'Introduction to WCAG and Applying Accessible Color Contrast',
            courseCode: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Session 1 of the Application Module provides the learner with a foundation of the Web Content Accessibility Guidelines, or WCAG. The importance of following the guidelines in online learning will be addressed. Also, color contrast will be discussed in terms of why it is important in online accessibility as well as how to check for proper color contrast in online materials. This session includes both lecture and hands-on demonstrations.'
        },
        {
            id: 11,
            category: 4,
            title: 'Accessible Images and Videos',
            courseCode: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'This session will focus on creating accessible images and videos and why this is important in an online environment. The learner will be introduced to alternative text as it relates to images. Also, examples of how to write alternative text will be presented. There will be hands-on demonstrations of how to add alternative text to images in Word, PowerPoint, and the LMS. For accessible videos, the learner will be introduced to best practices for captions and transcripts with videos. Demonstrations will include using captions in Panopto and YouTube as well as creating transcripts with Google Voice Typing. WCAG, as it pertains to each topic, will be addressed as well.'
        },
        {
            id: 12,
            category: 4,
            title: 'Elements of Accessible Documents and Text',
            courseCode: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 13,
            category: 4,
            title: 'Using Accessibility Checkers',
            courseCode: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 14,
            category: 8,
            title: 'Accessibility and Digital Learning at CPCC: An Employee Resource Guide',
            courseCode: 'EOL-ELN-001',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 15,
            category: 8,
            title: 'Blackboard ILP Final Grade Process',
            courseCode: 'EOL-ELN_007',
            learningTrack: 'none',
            certification: 'none',
            description: 'Submitting your final grades has never been easier!  In this online faculty development opportunity, you will learn the process of submitting your final grades using the Blackboard Intelligent Learning Platform (ILP).  Upon completion, faculty will:  determine and design their grading schema for submitting final grades and describe the process for submitting final grades using the ILP.'
        },
        {
            id: 16,
            category: 8,
            title: 'Faculty Analytics Dashboards within Blackboard',
            courseCode: 'EOL-ELN-008',
            learningTrack: 'none',
            certification: 'none',
            description: 'Want to know who’s in your classroom?  The Blackboard Analytics tool provides faculty a one stop snap shot of important information regarding their students and course statistics.  This online faculty development opportunity will guide you in understanding how to use the faculty analytics reports and dashboards to make informed decisions about your classroom strategies.'
        },
        {
            id: 17,
            category: 5,
            title: 'Introduction to Cafeteria Learning - Providing Learner Choice in the Classroom',
            courseCode: 'FD-INF-601',
            learningTrack: 'none',
            certification: 'none',
            description: 'Offering flexibility and learner choice in the classroom provides students with different abilities, interests, and learning styles all an opportunity for success.'
        },
        {
            id: 18,
            category: 7,
            title: 'PowerPoint as a Teaching Tool',
            courseCode: 'FD-INF-607',
            learningTrack: 'none',
            certification: 'none',
            description: 'In addition to engaging in the do’s and don’ts of creating and the ability to equip your lessons with different types of media, such as images, sounds, and animations, makes PowerPoint a valuable learning aid for students.  However, it is important to understand that there is a correct and effective way to integrate PowerPoint into a lesson.  Join us in this introductory session built to demonstrate the many beneficial ways that PowerPoint can be used as a dynamic teaching tool in the classroom!'
        },
        {
            id: 19,
            category: 4,
            title: 'ADA Tips and Tricks for Best Practices',
            courseCode: 'FD-INF-623',
            learningTrack: 'none',
            certification: 'none',
            description: 'Accessibility is not a foreign concept, and has been a part of national legislature for decades. CPCC is on the cusp of being accessible to all through our ADA compliance practices. In this session, you will learn more about how you can make your courses ADA compliant without reinventing the wheel. In fact, there are many tips and tools that can be used to make it easier on you as the instructor of the course. Take time to hear from those who have learned what not to do and what you can and should do! '
        },
        {
            id: 20,
            category: 6,
            title: 'Proven Strategies for Faculty Presence and Interaction',
            courseCode: 'FD-INF-633',
            learningTrack: 'none',
            certification: 'none',
            description: 'Are you interested in creating meaningful learning experiences as part of your courses, but not sure where to start?  A few proven strategies and tools can help enhance your teaching giving CPCC students a wonderful learning experience.  Come explore a variety of approaches with us including, using the Grade Center for maximum engagement, incorporating various methods to organizing your instruction and assignments, and establishing teacher presence with sound student success strategies.'
        },
        {
            id: 21,
            category: 7,
            title: 'Best Practices in Teaching and Learning for ALL disciplines',
            courseCode: 'FD-LNPZ-116',
            learningTrack: 'none',
            certification: 'none',
            description: 'Throughout the course of the semester, there are numerous teaching tools and resources that can keep students actively participating in class discussions, assignments, and exercises. In this session, participants will learn ways to engage students before the class even starts. After the session, participants will have a plethora of ideas to take into the classroom and engage students throughout the semester no matter what discipline you are teaching.'
        },
        {
            id: 22,
            category: 7,
            title: 'Take Out Your Cell Phones: Engaging Students with Polling Technologies',
            courseCode: 'FD-LNPZ-119',
            learningTrack: 'none',
            certification: 'none',
            description: 'Come learn about a variety of polling technologies (such as PollDaddy, Poll Everywhere, Google Forms, Kahoot, and Mentimeter) that will allow instructors to increase student engagement and student interaction in the classroom.'
        },
        {
            id: 23,
            category: 3,
            title: 'Affirm your Excellent Teaching Through the Cycle of Assessment, Reflection, and Improvement',
            courseCode: 'FD-LNPZ-124',
            learningTrack: 'none',
            certification: 'none',
            description: 'This session will provide hands on experience of how the cycle of assessment, reflection and improvement works to enhance instruction. Attendees will review various assessment samples and data to reflect for improvement plans.  '
        },
        {
            id: 24,
            category: 8,
            title: 'Attendance Recording: Traditional Courses',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 25,
            category: 8,
            title: 'Attendance Recording: Online Courses',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 26,
            category: 8,
            title: 'Attendance Recording: Hybrid Courses',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        {
            id: 27,
            category: 7,
            title: 'Active Learning Strategies',
            courseCode: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'Go beyond the lecture! This important course explores student-centered learning activities during seated or synchrononous live classes. This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
        {
            id: 28,
            category: 6,
            title: 'Ten2Win - Building Community through Classroom Management',
            courseCode: 'FD-TEA-505',
            learningTrack: 'none',
            certification: 'none',
            description: 'Building community in the classroom is an intentional effort to make every student feel respected and valued with a sense of belonging and acceptance.  Faculty who create such a sense of community do so through proactive measures and thoughtful acknowledgement of student success.  Ten2Win, a faculty development program specifically designed with adjuncts in mind, intends to support faculty with best practices aimed at building community in the CPCC classroom.  Join us to discover how you can “win” with ten proven tips in establishing a strong teacher-student relationship.'
        },
        {
            id: 29,
            category: 7,
            title: 'QTIPS - Quick, Time-saving Ideas, Practices, and Strategies',
            courseCode: 'FD-TEA-506',
            learningTrack: 'none',
            certification: 'none',
            description: 'Is this your first semester or first year teaching?  Have you had difficulty creating sound instructional and assessment strategies?  Are you looking to learn Quick, Time-saving Ideas, Practices, and Strategies (QTIPS)?  If you answered “Yes” to any of these questions, you would find tremendous value in QTIPS – a faculty development sharing session of activities and assignments transferable to any discipline.'
        },
        {
            id: 30,
            category: 4,
            title: 'Teaching for Inclusion: Identifying Your Own Attitudes',
            courseCode: 'FD-TEA-511',
            learningTrack: 'none',
            certification: 'none',
            description: 'Instructors bring a wealth of knowledge, experiences, and range of diversity issues to the classroom. The extent to which these differ from socioeconomic, physical, social, intellectual and cultural backgrounds of the students can impact engagement and interaction in the classroom.  This workshop is based on the assumption that an awareness of our own perspectives, social and cultural identities will better our understanding of others and lay a foundation for mutual respect and engagement.  '
        },
        {
            id: 31,
            category: 7,
            title: 'Skills Required to Teach Online Classes',
            courseCode: 'FD-ELN-013',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'If you are interested in teaching online, it is important to realize that, although there are many similarities between online & face-to-face teaching, there are also many differences. Explore some of the resources and skills that are important to have for successfully teaching online including digital access, an understanding of online instructional design, time management skills, strong communication skills, and technical skills. Part of the OTC Prime and Enrich learning tracks.'
        },
        {
            id: 32,
            category: 4,
            title: 'Universal Design and Accessibility for Online Learning',
            courseCode: 'FD-ELN-016',
            learningTrack: 'OTC Prime/Enrich/Multimedia',
            certification: 'Online Teaching Certification',
            description: 'Universal Design for Learning (UDL) is a framework that guides the design of learning environments to address the diversity of learners. Learn the principles of UDL and how to implement these principles in your online courses. Part of the OTC Prime, Enrich and Multimedia learning tracks.'
        },
        {
            id: 33,
            category: 7,
            title: 'Student Collaboration in Online Classes',
            courseCode: 'FD-ELN-015',
            learningTrack: 'OTC Prime/Enrich/Communications',
            certification: 'Online Teaching Certification',
            description: 'Online learning environments foster additional learning experiences where learners can interact, collaborate, and take ownership of their own learning. This course will help you identify the benefits of collaborative learning activities, and provide you with a variety of ideas regarding types of activities and ways to set up and manage collaboration in your online course. Part of the OTC Prime, Enrich, and Communication learning tracks.'
        },
        {
            id: 34,
            category: 7,
            title: 'Student Engagement in Online Classes',
            courseCode: 'FD-ELN-017',
            learningTrack: 'OTC Prime/Enrich/Engagement',
            certification: 'Online Teaching Certification',
            description: 'It is important to promote student engagement in all learning environments, including online. A student’s sense of learning community and instructor presence are connected. Learn strategies regarding how to promote engagement through three types of presence in your online courses. Part of the OTC Prime, Enrich and Engagement learning tracks.'
        },
        {
            id: 35,
            category: 7,
            title: 'Best Practices for Communication in Online Classes',
            courseCode: 'FD-ELN-018',
            learningTrack: 'OTC Prime/Enrich/Communications',
            certification: 'Online Teaching Certification',
            description: 'Strong communication is the cornerstone of creating an engaging and successful online classroom. Learn the different categories of communication and best practices for fostering effective communication in your online courses. Part of the OTC Prime, Enrich and Communication learning tracks.'
        },
        {
            id: 36,
            category: 7,
            title: 'Copyright and Fair Use for Online Courses',
            courseCode: 'FD-ELN-019',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'Learn the important aspects of Copyright and Fair Use with this search and find experience through our Central Piedmont Library Services’ Copyright Guidelines Website. You will learn about various copyright rules and regulations, identify the four factors of Fair Use, and identify how copyright and Fair Use rules affect your use of materials in various media. Part of the OTC Prime and Enrich learning tracks.'
        },
        {
            id: 37,
            category: 7,
            title: 'Student Centered Discussion Ideas',
            courseCode: 'FD-ELN-020',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'In online courses, discussion boards provide a place for interaction between students and instructors. Students are able to share thoughts and review the ideas of others modeled through collegial, dialogic exchanges. Learn how to increase student engagement through best practices for utilizing discussion boards in your online courses. Part of the OTC Enrich and Communication learning tracks.'
        },
        {
            id: 38,
            category: 3,
            title: 'Providing Quality Feedback in Online Courses',
            courseCode: 'FD-ELN-021',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'Effective and timely feedback is an important component of online courses. Learn about the challenges and solutions for providing feedback as well as a variety of types and methods of effective feedback. Part of the OTC Enrich and Communication learning tracks.'
        },
        {
            id: 39,
            category: 3,
            title: 'Authentic Assessment in Online Courses',
            courseCode: 'FD-ELN-022',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'Authentic assessment focuses on applying concepts to real world situations. This course will help you learn about the benefits of utilizing authentic assessment and how to implement it into your online course. Part of the OTC Enrich learning track.'
        },
        {
            id: 40,
            category: 7,
            title: 'Blended Learning',
            courseCode: 'FD-ELN-023',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Blended learning, such as that found in hybrid courses, is all about the students: combining instruction with digital resources to help increase student achievement and engagement. This course presents ways you can incorporate digital content into your hybrid course in order to enhance student engagement. Part of the OTC Enrich learning track.'
        },
        {
            id: 41,
            category: 7,
            title: 'Gamification for Interactive Learning',
            courseCode: 'FD-ELN-024',
            learningTrack: 'OTC Enrich and Engagement',
            certification: 'Online Teaching Certification',
            description: 'Gamification allows you to present educational content to learners in a way that is engaging, visually compelling, and personalized. This course presents ways to make a gamified learning experience successful. Part of the OTC Enrich and Engagement learning tracks.'
        },
        {
            id: 42,
            category: 7,
            title: 'Practical Applications for Gamification in the Online Environment',
            courseCode: 'currently unavailable',
            learningTrack: 'OTC Enrich and Engagement',
            certification: 'Online Teaching Certification',
            description: 'This course provides a variety of methods for encouraging active learning by implementing gamification concepts in the online environment.'
        },
        {
            id: 43,
            category: 7,
            title: 'Brain-Based eLearning Design',
            courseCode: 'FD-ELN-025',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certifications',
            description: 'In this course, Dr. Joe Pulichino explains how to use techniques for eLearning design based on brain science, that—when applied—make for a more engaging and effective learning experience. Topics include increasing learner attention and connecting with learners, and tips for making the learning stick. Using research on the neuroscience of learning, Joe explores how to create eLearning that is highly effective at helping people learn. Part of the OTC Enrich and Engagement learning tracks.'
        },
        {
            id: 44,
            category: 7,
            title: 'Instructional Design for Adult Learners',
            courseCode: 'FD-ELN-026',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Adult learners have specific needs that have to be considered during the instructional design process. This course explores the best practices and techniques that will help instructors teach adult learners. Explore the theory behind adult learning, discover techniques to increase active (vs. passive) learning, and see how to identify and surmount barriers to learning. Part of the OTC Enrich learning track. '
        },
        {
            id: 45,
            category: 7,
            title: 'Core Strategies for Teaching in Higher Ed',
            courseCode: 'FD-ELN-027',
            learningTrack: 'OTC Enrich',
            certification: 'Online Learning Certification',
            description: "Join professor Karl Kapp as he walks higher ed instructors through strategies for successfully engaging and teaching college students. Karl covers increasing students' critical thinking skills, teaching with technology, introducing outside resources, and maintaining academic rigor. Outside the classroom, he'll show professors how to stay current, adapt to the evolving academic landscape, and collaborate with peers for career success. Part of the OTC Enrich learning track."
        },
        {
            id: 46,
            category: 7,
            title: 'Creating Multimedia Learning',
            courseCode: 'FD-ELN-028',
            learningTrack: 'OTC Enrich and Multimedia',
            certification: 'Online Teaching Certification',
            description: 'Including multimedia in your course content is one of the best ways to enhance student engagement in your online course. Learn how to plan and prepare for a multimedia project, identify tools you can utilize to create quality multimedia, and learn best practices for incorporating multimedia into your online courses. Part of the OTC Enrich, Engagement and Multimedia learning tracks.'
        },
        {
            id: 47,
            category: 6,
            title: 'Interpersonal Skills for Effective Online Teaching',
            courseCode: 'FD-ELN-029',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'This scenario-based course will help you identify and develop the interpersonal skills that enable an instructor to create and maintain an online classroom community. Part of the OTC Enrich and Communication learning tracks.'
        },
        {
            id: 48,
            category: 7,
            title: 'eLev8 Your Course Design',
            courseCode: 'FD-ELN-030',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Central Piedmont is a subscriber to Quality Matters, a standards-based, national leader in quality assurance for online education. The program aims to recognize and implement course design that research has shown leads to improved student outcomes in online and hybrid courses. In this course, you will learn about the eight Specific Review Standards included in the Quality Matters Higher Education Rubric. Part of the OTC Enrich learning track.'
        },
        {
            id: 49,
            category: 2,
            title: 'Strategies for Collaborating Across the Discipline',
            courseCode: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Faculty collaboration is important for solid course design and professional growth. While there are many ways to approach a collaborative session, a few key elements are critical to making it productive. This session will equip faculty teams with proven strategies to effectively collaborate, share, and make decisions in support of student success.'
        },
        {
            id: 50,
            category: 7,
            title: 'Your Role in Blackboard Management',
            courseCode: 'YRBBM-CAL',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'This course will help you identify and manage components of Blackboard necessary to effectively implement an online course in the Central Piedmont Community College environment.  Part of the Foundations for Teaching Online Learning Track.'
        },
        {
            id: 51,
            category: 7,
            title: 'Setting Up Your Online Course',
            courseCode: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'Having a well-designed online course is the first step to helping your students succeed in your class. Part of the Foundations for Teaching Online Learning Track.'
        },
        {
            id: 52,
            category: 7,
            title: 'Collaborate and Connect',
            courseCode: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'Central Piedmont offers several tools to assist you in staying connected with your students. Part of the Foundations for Teaching Online Learning Track.'
        },
        {
            id: 53,
            category: 4,
            title: 'Online Accessibility Resources',
            courseCode: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'It is important that all digital content within your online course can be navigated and read by everyone, regardless of location, experience, technology, or disability.  Part of the Foundations for Teaching Online Learning Track.'
        },
        {
            id: 54,
            category: 4,
            title: 'Support Your Students',
            courseCode: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'You may not be the only one who is new to teaching and learning online.  Some students may need a little extra support to help them succeed in an online environment. Part of the Foundations for Teaching Online Learning Track'
        },
        {
            id: 55,
            category: 5,
            title: 'ABCD Method for Writing Learning Outcomes',
            courseCode: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'Being able to write good learning outcomes is the foundation of effective course design and assessment.  This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
        {
            id: 56,
            category: 3,
            title: 'Level Up: Introduction to Rubrics',
            courseCode: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'This introductory course explores how to create a rubric from scratch and provides resources to adapt an existing rubric. This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
    ],
}

export default STORE;