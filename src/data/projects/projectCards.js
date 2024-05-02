import eviraPreview from '../../assets/images/evira-preview.jpg'
import newslinePreview from '../../assets/images/newsline-preview.png'
import barberPreview from '../../assets/images/barber-preview.jpg'
import healthePreview from '../../assets/images/health-e-preview.jpeg'
import hydramatePreview from '../../assets/images/hydramate-preview.png'
import cocaPreview from '../../assets/images/coca-preview.png'
import zuzuPreview from '../../assets/images/zuzu-preview.png'
import mazoPreview from '../../assets/images/mazo-preview.png'

import JavaScript from '../../assets/pngs/javascript-programming-language-icon.png'
import Tailwind from '../../assets/pngs/tailwind-css-icon.png'
import TypeScript from '../../assets/pngs/typescript-programming-language-icon.png'
import React from '../../assets/pngs/react-js-icon.png'
import Redux from '../../assets/pngs/redux-icon.png'
import NodeJS from '../../assets/pngs/node-js-icon.png'
import ExpressJS from '../../assets/pngs/express-icon.png'
import RESTAPI from '../../assets/pngs/rest-api-icon.jpeg'
import MongoDB from '../../assets/pngs/mongodb-icon.png'
import Postgres from '../../assets/pngs/postgresql-icon.png'
import SQlite from '../../assets/pngs/sqlite-icon.png'
import Git from '../../assets/pngs/git-icon.png'
import Postman from '../../assets/pngs/postman-icon.png'
import Firebase from '../../assets/pngs/firebase-icon.png'
import AndroidStudio from '../../assets/pngs/android-studio-icon.png'
import XCode from '../../assets/pngs/xcode-icon.png'
import VSCode from '../../assets/pngs/visual-studio-code-icon.png'

export const projectCards = [
  {
    id: 'newsline-mobile',
    path: '/projects/newsline-mobile',
    category: 'mobile',
    title: 'Newsline',
    titleDescription: 'News App',
    image: newslinePreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'Real-time News Updates',
        description: 'Stay informed with real-time updates on the latest news stories from around the world.',
      },
      {
        id: 2,
        title: 'Personalized Feed',
        description:
          'Customize your news feed to cater to your unique interests and preferences. Tailor your feed by selecting specific topics, keywords, or sources that matter most to you, ensuring that you receive relevant and timely content.',
      },
      {
        id: 3,
        title: 'Interactive Comments',
        description:
          'Engage with fellow users by participating in lively discussions and debates on news articles and current events. Share your perspectives, insights, and opinions, and interact with others through comments, replies, and likes.',
      },
      {
        id: 4,
        title: 'Social Sharing',
        description:
          'Easily post articles to popular social media platforms such as Facebook, Twitter, and LinkedIn, allowing you to spark conversations and drive engagement among your friends and followers.',
      },
      {
        id: 5,
        title: 'Bookmarking',
        description:
          'Organize your saved articles into personalized collections or categories, making it easy to revisit and access your favorite stories whenever you want.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: AndroidStudio },
      { id: 5, logo: XCode },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'coca',
    path: '/projects/coca',
    category: 'web',
    title: 'Coca',
    titleDescription: 'Landing Page Template',
    image: cocaPreview,
    align: 'right',
    descriptionPoints: [
      {
        id: 1,
        title: 'Modern Design',
        description:
          'Coca Page Landing Template boasts a sleek and contemporary design, reflecting the latest trends in web design aesthetics; visually appealing and up-to-date, ensuring that your website stands out from the competition.',
      },
      {
        id: 2,
        title: 'Responsive Layout',
        description:
          'The template is crafted with a responsive layout, ensuring that your website looks and functions flawlessly across all devices, including desktops, tablets, and smartphones.',
      },
      {
        id: 3,
        title: 'User-Friendly Features',
        description:
          'Coca offers an array of user-friendly features designed to enhance the browsing experience for your visitors. From intuitive navigation menus to interactive elements, every aspect of the template is designed with usability in mind.',
      },
      {
        id: 4,
        title: 'Customization Options',
        description:
          "With Coca, you have full control over the look and feel of your website. The template provides easy customization options, allowing you to tailor the design to match your brand's identity and style.",
      },
      {
        id: 5,
        title: 'Engaging Experience',
        description:
          'Coca is designed to engage and captivate your audience from the moment they land on your website. From stunning visuals to interactive elements, every aspect of the template is crafted to encourage visitor interaction and exploration.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: Tailwind },
      { id: 5, logo: Firebase },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'evira',
    path: '/projects/evira',
    category: 'backend',
    title: 'Evira',
    titleDescription: 'E-commerce App Backend',
    image: eviraPreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'Extensive API Coverage',
        description:
          'With a total of 77 APIs, it provides comprehensive functionality allows for seamless interaction between different components of the application, ensuring efficient management of data.',
      },
      {
        id: 2,
        title: 'Robust Admin Functionality',
        description:
          'Admin APIs empower administrators to efficiently manage the backend of the e-commerce platform. These APIs enable tasks such as product management, order processing and user management.',
      },
      {
        id: 3,
        title: 'Secure Authentication Mechanism',
        description:
          'Implemented token-based authentication enhances the security of the backend APIs. This approach helps prevent unauthorized access to sensitive data and resources,',
      },
      {
        id: 4,
        title: 'Email Service',
        description:
          'Integrated an email service enables the application to communicate effectively with users, providing essential notifications, updates, and promotional messages.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: NodeJS },
      { id: 3, logo: ExpressJS },
      { id: 4, logo: MongoDB },
      { id: 5, logo: RESTAPI },
      { id: 6, logo: Git },
      { id: 7, logo: Postman },
      { id: 8, logo: VSCode },
    ],
  },
  {
    id: 'health-e',
    path: '/projects/health-e',
    category: 'mobile',
    title: 'Health-e',
    titleDescription: 'PHR Health Locker',
    image: healthePreview,
    align: 'right',
    descriptionPoints: [
      {
        id: 1,
        title: 'Comprehensive Health Checkups',
        description:
          'Access comprehensive health checkup packages designed to assess your overall health and detect potential medical issues early on.',
      },
      {
        id: 2,
        title: 'Personalized Consultations',
        description:
          'Schedule one-on-one consultations with experienced healthcare professionals to discuss your health concerns and receive personalized advice and treatment plans.',
      },
      {
        id: 3,
        title: 'Remote Monitoring',
        description:
          'Monitor your health remotely with the help of wearable devices and digital health tracking tools. Stay informed about your vital signs and health metrics from the comfort of your home.',
      },
      {
        id: 4,
        title: 'Health Records Management',
        description:
          'Digitally store and manage your health records, including medical history, test results, and prescriptions. Access your records anytime, anywhere, and share them securely with healthcare providers as needed.',
      },
      {
        id: 5,
        title: 'Health Education Resources',
        description:
          'Access a wealth of health education resources, including articles, videos, and interactive tools, to empower yourself with knowledge about various health conditions, preventive measures, and treatment options.',
      },
      {
        id: 6,
        title: 'Emergency Assistance',
        description:
          'Get immediate assistance in case of medical emergencies through the app. Connect with emergency services or nearby healthcare facilities quickly and efficiently when every second counts.',
      },
    ],
    technologies: [
      { id: 1, logo: TypeScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: AndroidStudio },
      { id: 5, logo: XCode },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'newsline-backend',
    path: '/projects/newsline-backend',
    category: 'backend',
    title: 'Newsline',
    titleDescription: 'News App Backend',
    image: newslinePreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'News Article Management',
        description:
          'Manage news articles efficiently with CRUD operations, including creating, reading, updating, and deleting articles.',
      },
      {
        id: 2,
        title: 'Category-based Organization',
        description:
          'Organize news articles into categories or topics to facilitate easy navigation and content discovery for users.',
      },
      {
        id: 3,
        title: 'User Authentication and Authorization',
        description:
          'Implement user authentication and authorization mechanisms to ensure secure access to the backend API endpoints. Allow users to register, log in, and manage their profiles.',
      },
      {
        id: 4,
        title: 'Role-based Access Control',
        description:
          'Define roles and permissions for users, such as admin, editor, and reader, to control access to certain features and functionalities of the application.',
      },
      {
        id: 5,
        title: 'Full-text Search',
        description:
          'Implement full-text search functionality to allow users to search for articles based on keywords, titles, or content.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: NodeJS },
      { id: 3, logo: ExpressJS },
      { id: 4, logo: MongoDB },
      { id: 5, logo: RESTAPI },
      { id: 6, logo: Git },
      { id: 7, logo: Postman },
      { id: 8, logo: VSCode },
    ],
  },
  {
    id: 'mazo-mobile',
    path: '/projects/mazo-mobile',
    category: 'mobile',
    title: 'Mazo',
    titleDescription: 'Capital Solutions App',
    image: mazoPreview,
    align: 'right',
    descriptionPoints: [
      {
        id: 1,
        title: 'Financial Solutions Management',
        description:
          'Efficiently manage various financial solutions, including loans, investments, insurance, and financial planning services.',
      },
      {
        id: 2,
        title: 'Client Portfolio Tracking',
        description:
          'Track and monitor client portfolios to provide personalized financial advice and recommendations based on individual goals and risk profiles.',
      },
      {
        id: 3,
        title: 'Secure User Authentication',
        description:
          'Implement secure user authentication mechanisms, such as biometric authentication or two-factor authentication, to ensure the confidentiality and integrity of user data.',
      },
      {
        id: 4,
        title: 'Customizable Financial Products',
        description:
          'Offer customizable financial products tailored to meet the unique needs and preferences of individual clients, such as customizable loan terms or investment portfolios.',
      },
      {
        id: 5,
        title: 'Interactive Financial Calculators',
        description:
          'Offer interactive financial calculators and tools to help clients plan for their financial future, including retirement planning, mortgage calculations, and investment projections.',
      },
    ],
    technologies: [
      { id: 1, logo: TypeScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: AndroidStudio },
      { id: 5, logo: XCode },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'zuzu',
    path: '/projects/zuzu',
    category: 'mobile',
    title: 'Zuzu',
    titleDescription: 'Short Video Social App',
    image: zuzuPreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'Cross-platform Compatibility',
        description:
          'Experience Zuzu seamlessly on both Android and iOS devices, thanks to its advanced React Native technology.',
      },
      {
        id: 2,
        title: 'Engaging Video Content',
        description:
          'Discover a vast array of captivating short videos created by talented individuals from around the globe.',
      },
      {
        id: 3,
        title: 'User-Friendly Interface',
        description:
          'Navigate through Zuzu’s intuitive interface with ease, enabling effortless video exploration, liking, commenting, and following of creators.',
      },
      {
        id: 4,
        title: 'Interactive Engagement',
        description:
          'Engage with creators and fellow users through likes, comments, shares, and follows, fostering a vibrant and interactive community.',
      },
      {
        id: 5,
        title: 'Customized Recommendations',
        description:
          'Receive personalized video recommendations tailored to your interests, preferences, and viewing history, ensuring a curated content experience.',
      },
      {
        id: 6,
        title: 'Creator Collaboration',
        description:
          'Connect and collaborate with other creators to produce engaging content and expand your reach within the Zuzu community.',
      },
      {
        id: 7,
        title: 'Real-time Notifications',
        description:
          'Stay updated with real-time notifications for new likes, comments, follows, and mentions, keeping you connected and engaged with the latest activity.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: AndroidStudio },
      { id: 5, logo: XCode },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'hydramate',
    path: '/projects/hydramate',
    category: 'mobile',
    title: 'Hydramate',
    titleDescription: 'Water Tracker App',
    image: hydramatePreview,
    align: 'right',
    descriptionPoints: [
      {
        id: 1,
        title: 'Water Intake Tracking',
        description:
          'Track your daily water intake effortlessly with Hydramate, ensuring you stay hydrated and healthy.',
      },
      {
        id: 2,
        title: 'Personalized Hydration Goals',
        description:
          'Set personalized hydration goals based on factors such as age, weight, activity level, and climate to meet your individual needs.',
      },
      {
        id: 3,
        title: 'Hydration Reminders',
        description:
          'Receive timely reminders and notifications throughout the day to encourage regular water consumption and help you reach your hydration goals.',
      },
      {
        id: 4,
        title: 'Hydration Analysis and Insights',
        description:
          'Gain valuable insights into your hydration habits with in-depth analysis of your water intake patterns and trends over time.',
      },
      {
        id: 5,
        title: 'Water Consumption History',
        description:
          'View your daily, weekly, and monthly water consumption history to track your progress and identify areas for improvement.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: SQlite },
      { id: 5, logo: AndroidStudio },
      { id: 6, logo: XCode },
      { id: 7, logo: Git },
      { id: 8, logo: VSCode },
    ],
  },
  {
    id: 'barber',
    path: '/projects/barber',
    category: 'mobile',
    title: 'Barber',
    titleDescription: 'Hair Salon App',
    image: barberPreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'Appointment Scheduling',
        description:
          'Allow customers to easily schedule appointments for haircut, styling, or other services. Offer convenient booking options, including date and time selection, preferred barber/stylist, and service type.',
      },
      {
        id: 2,
        title: 'Service Menu',
        description:
          'Provide a comprehensive menu of services offered by the barber or hair salon. Include detailed descriptions of each service, along with pricing and duration.',
      },
      {
        id: 3,
        title: 'Barber/Stylist Profiles',
        description:
          'Showcase profiles of individual barbers or stylists, highlighting their expertise, experience, and specialties.',
      },
      {
        id: 4,
        title: 'Real-time Availability',
        description:
          'Display real-time availability of barbers or stylists, allowing customers to see when their preferred professional is free. Enable customers to choose an available time slot that best fits their schedule.',
      },
      {
        id: 5,
        title: 'Online Payments',
        description:
          'Offer secure online payment options for booking appointments and purchasing services. Accept major credit cards, debit cards, and digital wallets for seamless transactions.',
      },
    ],
    technologies: [
      { id: 1, logo: TypeScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: AndroidStudio },
      { id: 5, logo: XCode },
      { id: 6, logo: Git },
      { id: 7, logo: VSCode },
    ],
  },
  {
    id: 'mazo-backend',
    path: '/projects/mazo-backend',
    category: 'backend',
    title: 'Mazo',
    titleDescription: 'Capital Solutions App Backend',
    image: mazoPreview,
    align: 'right',
    descriptionPoints: [
      {
        id: 1,
        title: 'Financial Product Management',
        description:
          'Efficiently manage a variety of financial products including loans, investments, insurance, and financial planning services.',
      },
      {
        id: 2,
        title: 'Client Portfolio Tracking',
        description:
          'Track and monitor client portfolios to provide personalized financial advice and recommendations based on individual goals and risk profiles.',
      },
      {
        id: 3,
        title: 'Secure User Authentication',
        description:
          'Implement secure user authentication mechanisms to protect sensitive financial data and ensure compliance with security regulations.',
      },
      {
        id: 4,
        title: 'Real-time Market Data Integration',
        description:
          'Integrate real-time market data feeds to provide clients with up-to-date information on market trends, investment opportunities, and economic indicators.',
      },
      {
        id: 5,
        title: 'Reporting and Analytics',
        description:
          'Generate comprehensive reports and analytics to provide clients with insights into their financial performance and help them make informed decisions.',
      },
    ],
    technologies: [
      { id: 1, logo: TypeScript },
      { id: 2, logo: NodeJS },
      { id: 3, logo: ExpressJS },
      { id: 4, logo: Postgres },
      { id: 5, logo: RESTAPI },
      { id: 6, logo: Git },
      { id: 7, logo: Postman },
      { id: 8, logo: VSCode },
    ],
  },
  {
    id: 'evira-web',
    path: '/projects/evira-web',
    category: 'web',
    title: 'Evira',
    titleDescription: 'E-commerce Admin Panel',
    image: eviraPreview,
    align: 'left',
    descriptionPoints: [
      {
        id: 1,
        title: 'Product Management',
        description:
          'Efficiently manage a wide range of products including inventory, pricing, descriptions, and images to ensure a seamless shopping experience for customers.',
      },
      {
        id: 2,
        title: 'Order Tracking and Management',
        description:
          'Track and manage customer orders from placement to fulfillment, with features for order processing, status updates, and shipment tracking.',
      },
      {
        id: 3,
        title: 'Inventory Management',
        description:
          'Monitor inventory levels, track stock movements, and receive notifications for low stock items to ensure optimal product availability and prevent stockouts.',
      },
      {
        id: 5,
        title: 'Sales and Revenue Analytics',
        description:
          'Generate detailed reports and analytics on sales performance, revenue trends, and customer behavior to gain insights and inform strategic business decisions.',
      },
      {
        id: 6,
        title: 'Marketing and Promotions',
        description:
          'Create and manage marketing campaigns, discount codes, and promotional offers to attract customers, drive sales, and enhance brand visibility in the competitive e-commerce landscape.',
      },
    ],
    technologies: [
      { id: 1, logo: JavaScript },
      { id: 2, logo: React },
      { id: 3, logo: Redux },
      { id: 4, logo: Tailwind },
      { id: 5, logo: Git },
      { id: 6, logo: Postman },
      { id: 7, logo: VSCode },
    ],
  },
]
