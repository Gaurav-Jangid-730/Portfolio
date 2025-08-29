// App.jsx
import './App.css';
import Navbar from './Components/2D_webdesign/Navbar';
import HeroSection from './Components/2D_webdesign/HeroSection';
import Projects from './Components/2D_webdesign/Projects';
import Skills from './Components/2D_webdesign/Skills';
import ContectMe from './Components/2D_webdesign/ContectMe';
import FooterSection from './Components/2D_webdesign/FooterSection';
import GithubSVG from './Components/2D_webdesign/GithubSVG';

// helper makes correct base: /Portfolio in production, / in dev
const pub = (p) => `${process.env.PUBLIC_URL}${p}`;

const Href = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#projects', text: 'Projects' },
  { href: '#skills', text: 'Skills' },
  { href: '#contactme', text: 'Contact Me' },
];

const projects = [
  {
    id: 'project1',
    number: '01',
    title: 'The Lost Treasure - CTF',
    description:
      'A Hard-Level CTF Challenge Designed for Penetration Testers. Pushing the Limits of Enumeration, Exploitation & Privilege Escalation',
    skills: [
      pub('/images/stack/code.png'),
      pub('/images/stack/Bash.svg'),
      pub('/images/stack/linux.png'),
      pub('/images/stack/Tryhackme--Streamline-Simple-Icons.svg'),
    ],
    links: {
      github: 'https://github.com/Gaurav-Jangid-730/The-Lost-Treasure-CTF.git',
      live: 'https://tryhackme.com/r/room/thelosttreasureEG',
    },
  },
  {
    id: 'project2',
    number: '02',
    title: 'Network Prot Scanner',
    description:
      'Built a Command Line Application that scans open ports and services on an IP address or a domain name.',
    skills: [
      pub('/images/stack/Python.png'),
      pub('/images/stack/Bash.svg'),
      pub('/images/stack/linux.png'),
      pub('/images/stack/windows.png'),
    ],
    links: {
      github: 'https://github.com/Gaurav-Jangid-730/Network-Port-Scanner.git',
      live: 'https://github.com/Gaurav-Jangid-730/Network-Port-Scanner.git',
    },
  },
  {
    id: 'project3',
    number: '03',
    title: 'Malware Analysis Home Lab',
    description:
      'Creating a virtual lab with Kali as the attacking machine and Windows as the defender to test different malware.',
    skills: [
      pub('/images/stack/wiresark.png'),
      pub('/images/stack/Bash.svg'),
      pub('/images/stack/linux.png'),
      pub('/images/stack/windows.png'),
    ],
    links: {
      github: 'https://github.com/Gaurav-Jangid-730/Malware_Analysis_Lab.git',
      live: 'https://github.com/Gaurav-Jangid-730/Malware_Analysis_Lab.git',
    },
  },
  {
    id: 'project4',
    number: '04',
    title: 'Password Strength Checker',
    description:
      'An intelligent password analysis tool offering real-time strength evaluation and actionable feedback for enhanced security.',
    skills: [
      pub('/images/stack/Python.png'),
      pub('/images/stack/Bash.svg'),
      pub('/images/stack/linux.png'),
      pub('/images/stack/windows.png'),
    ],
    links: {
      github:
        'https://github.com/Gaurav-Jangid-730/Password_Strength_Cheacker.git',
      live: 'https://github.com/Gaurav-Jangid-730/Password_Strength_Cheacker.git',
    },
  },
];

const Description = [
  'I’m a Cybersecurity Expert and here is my portfolio website. Here you’ll learn about my journey.',
  'I am an enthusiastic Cybersecurity Specialist with a strong foundation in Networking and a deep passion for Ethical Hacking. Having completed my B.Tech in Computer Science, I have gained hands-on experience with industry-standard tools such as Kali Linux, Burp Suite, and Wireshark, and am certified in CCNA and CompTIA A+. My ongoing journey in Cybersecurity is guided by a desire to build secure, resilient systems and safeguard data in our increasingly digital environment.',
  'With proficient coding skills in Python and Java, paired with a solid understanding of Networking Protocols and System Vulnerabilities, I continue to develop my expertise in Penetration Testing, Threat Analysis, and System Hardening. I also work with security platforms like Splunk, SentinelOne, and AWS, honing my abilities to solve real-world security challenges and collaborate on innovative, impactful projects that drive digital safety and resilience.',
];

const StackImages = [
  { img: pub('/images/stack/burp-suite.png') },
  { img: pub('/images/stack/Cisco.png') },
  { img: pub('/images/stack/kali.png') },
  { img: pub('/images/stack/Nmap.png') },
  { img: pub('/images/stack/Python.png') },
  { img: pub('/images/stack/linux.png') },
  { img: pub('/images/stack/windows.png') },
  { img: pub('/images/stack/wiresark.png') },
  { img: pub('/images/stack/code.png') },
  { img: pub('/images/stack/john-logo.png') },
  { img: pub('/images/stack/vmware.png') },
  { img: pub('/images/stack/Git.svg') },
  { img: pub('/images/stack/Github.svg') },
  { img: pub('/images/stack/Bash.svg') },
  { img: pub('/images/stack/Docker.svg') },
];

const Links = [
  'www.linkedin.com/in/gaurav-sharma-cybersecurity',
  'https://github.com/Gaurav-Jangid-730',
  'https://x.com/GauravShar79637',
  'https://www.instagram.com/gaurav_jangid_730/',
  'mailto: gauravjangid7300@gmail.com',
];

function App() {
  return (
    <div>
      <Navbar Src={pub('/images/userAsset/NavLogo.jpg')} Href={Href} NavText="ortfoLio." />
      <HeroSection
        FadeText="Gaurav"
        FName="Gaurav Sharma"
        Description={Description}
        Href={pub('/Resume/Cybersecurity -Resume.pdf')}
        DownloadFileName="Resume.pdf"
        BtnText="Hire Me"
        ImageSrc={pub('/images/userAsset/Profile_DARK.png')}
      />
      <Projects
        heading="Projects"
        projects={projects}
        moreProjectsUrl="https://github.com/Gaurav-Jangid-730?tab=repositories"
      />
      <Skills
        FadeText="Skills"
        CapLetter="M"
        SLetter1="e and"
        SLetter2="MyTech Stack"
        PDescription1={Description[14]}
        PDescription2={Description[15]}
        Href="https://gaurav-jangid-730.github.io/Certificates/"
        RedirectText="View Certificates"
        StackImages={StackImages}
      />
      <ContectMe
        Heading="Contact Me"
        SubHeading="Questions, thoughts, or just want to say hello?"
        Action="https://formspree.io/f/mlekrnnl"
        BtnText="Send Message"
      />
      <FooterSection FadeText="Gaurav Sharma" Href={Href} Links={Links} />
      <GithubSVG Href="https://github.com/gaurav-jangid-730" />
    </div>
  );
}

export default App;
