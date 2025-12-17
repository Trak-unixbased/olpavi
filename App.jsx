import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { 
  Server, Shield, Cpu, Terminal, Wrench, BookOpen, 
  Mail, Phone, MapPin, Linkedin, FileText, Menu, X, 
  Database, Network, ChevronRight, Download, Mic, 
  Bot, CircuitBoard, Layers
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // --- CONFIGURATION DES IMAGES ---
  // Pour utiliser vos photos, placez-les dans le dossier 'public' de votre projet React
  // et modifiez les chemins ci-dessous :
  const profileImage = "/FB_IMG_1744623410907.jpg"; // Votre photo de profil
  const heroBgImage = "/openart-image_SX-UUQbx_1744570036251_raw_xl.jpg"; // Votre image d'art IA pour le fond

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'homelab', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      role: "Ingénieur Systèmes (Cat. A)",
      company: "Ministère des Armées - École Polytechnique",
      location: "Palaiseau",
      period: "2025 - Aujourd'hui",
      desc: "Administration de systèmes critiques, architecture technique et intégration dans un environnement d'excellence.",
      tags: ["Haute Dispo", "Sécurité", "Windows/Linux"]
    },
    {
      role: "Exploitant SI (Cat. A)",
      company: "Ministère des Armées - SID-EPN",
      location: "Versailles",
      period: "2024 - 2025",
      desc: "Gestion de 20 Systèmes d'Information. Administration serveurs Windows/Linux, BDD PostgreSQL & MS SQL. Environnement VMware/vSphere. Ticketing.",
      tags: ["VMware", "PostgreSQL", "MS SQL", "Ticketing"]
    },
    {
      role: "Gestionnaire d'Infrastructures",
      company: "CNRS (CES UMR 8174)",
      location: "Paris",
      period: "2021 - 2024",
      desc: "Support pour 300 utilisateurs (FR/EN). Mise en place Wiki, GitLab, FOG Project. Scripting PowerShell avancé. Gestion de parc hétérogène (Win/Lin/Mac).",
      tags: ["GitLab", "PowerShell", "FOG Project", "GLPI"]
    },
    {
      role: "Gestionnaire d'Infrastructures",
      company: "CNRS (APC & LIMSI)",
      location: "Orsay / Paris",
      period: "2016 - 2021",
      desc: "Migration Active Directory, Windows 7 vers 10. Déploiement MDT/WDS. Gestion cluster de rendu d'images virtuelles. Serveur FOG sous Linux.",
      tags: ["Active Directory", "MDT/WDS", "WAPT", "Cluster"]
    },
    {
      role: "Technicien SIC",
      company: "Ministère de l'Intérieur",
      location: "France",
      period: "2011 - 2015",
      desc: "Admin Sys & Réseau. Migration XP vers 7. VPN, Profils itinérants. Développement Web (PHP/MySQL) sur Linux.",
      tags: ["VPN", "PHP/MySQL", "Support N2/N3"]
    },
    {
      role: "Technicien de Maintenance Industrielle",
      company: "PSA Citroën",
      location: "Aulnay-sous-Bois",
      period: "1990 - 2004",
      desc: "Première carrière : Mécanique générale, hydraulique, automatisme, électricité. Une école de la rigueur et de la méthode.",
      tags: ["Industrie", "Automatisme", "Hydraulique"]
    }
  ];

  const education = [
    {
      degree: "MBA Cybersécurité (RNCP 7)",
      school: "Digital Campus/Studi - HETIC",
      year: "2025 - En cours",
      desc: "Stratégie de sécurité, Audit, GRC, ISO 27001.",
      icon: Shield
    },
    {
      degree: "Bachelor Administrateur AIS (RNCP 6)",
      school: "Digital Campus/Studi",
      year: "2022 - 2023",
      desc: "Administration des Infrastructures Sécurisées.",
      icon: Server
    },
    {
      degree: "BTS Informatique de Gestion (ARLE)",
      school: "Lycée Turgot, Paris",
      year: "2003 - 2005",
      desc: "Option Administrateur de Réseaux Locaux.",
      icon: Network
    }
  ];

  const certs = [
    "SecNum Académie (ANSSI)",
    "Google IT Support",
    "Comptia A+",
    "Objectif IA",
    "Gestion AD-DS",
    "Proxmox",
    "AS de Kibana"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 scroll-smooth">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm text-white z-50 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 font-bold text-xl tracking-wider text-blue-400">
              <Terminal size={24} />
              <span>O.PAVILLA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {['About', 'Skills', 'Experience', 'Homelab', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase() 
                        ? 'text-blue-400 bg-slate-800' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {item === 'Homelab' ? 'Labo & IA' : item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
                Me Recruter
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Skills', 'Experience', 'Homelab', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 text-slate-300 hover:text-white"
                >
                  {item === 'Homelab' ? 'Labo & IA' : item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image Layer with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImage} 
            alt="AI Technology Background" 
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {e.target.style.display = 'none'}} // Cache l'image si elle n'existe pas
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-900/30 rounded-full border border-green-700/50">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              En recherche active
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Olivier <span className="text-blue-500">PAVILLA</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-slate-300 mb-6 font-light">
              Admin Sys & Réseau <span className="text-blue-400">///</span> MBA Cybersécurité
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              Un profil <strong>hybride et résilient</strong> : Technicien de maintenance expérimenté devenu Administrateur Système. 
              Passionné par l'architecture ARM, je construis actuellement mon propre <strong>assistant IA local</strong> tout en sécurisant des infrastructures critiques.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
                <Mail size={20} /> Me Contacter
              </a>
              <a href="#homelab" className="px-8 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-2">
                <Bot size={20} /> Mon projet IA
              </a>
            </div>
          </div>
          
          {/* Profile Picture Circle */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Cercle décoratif rotatif */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 rounded-full border border-slate-700"></div>
              
              {/* Conteneur image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative bg-slate-800 flex items-center justify-center">
                {/* Fallback si l'image n'est pas chargée */}
                <span className="absolute text-slate-600 text-center px-4">
                  <Terminal size={48} className="mx-auto mb-2 text-blue-500"/>
                  Olivier PAVILLA
                </span>
                
                <img 
                  src={profileImage} 
                  alt="Olivier Pavilla" 
                  className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-500"
                  onError={(e) => {e.target.style.display = 'none'}} 
                />
              </div>

              {/* Badges flottants */}
              <div className="absolute top-0 right-0 bg-slate-800 p-3 rounded-full border border-slate-700 shadow-lg">
                <Shield className="text-green-400" size={24} />
              </div>
              <div className="absolute bottom-4 left-0 bg-slate-800 p-3 rounded-full border border-slate-700 shadow-lg">
                <Cpu className="text-orange-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mon Parcours : La Résilience Technique</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            "De la mécanique de précision chez PSA à la cyberdéfense au Ministère des Armées, j'ai conservé une constante : la rigueur et la compréhension profonde du fonctionnement des systèmes."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Wrench className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Technicien de Maintenance</h3>
              <p className="text-slate-600 text-sm">14 ans d'expertise industrielle. Diagnostic, pneumatique, hydraulique. J'ai appris que la fiabilité est non-négociable.</p>
            </div>

            <div className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Server className="text-purple-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Admin Sys & Réseau</h3>
              <p className="text-slate-600 text-sm">Reconversion réussie. Gestion de parcs hétérogènes (Windows/Linux), virtualisation et support critique (CNRS, Ministères).</p>
            </div>

            <div className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Shield className="text-green-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Expertise Cyber & IA</h3>
              <p className="text-slate-600 text-sm">En MBA Cyber (RNCP 7). Je combine sécurité offensive/défensive avec une passion pour l'IA embarquée (Edge AI).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Compétences Techniques</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* System Windows */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Database size={20} className="text-blue-500" /> Windows / Infra
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><ChevronRight size={14} className="text-blue-300 mr-1"/> Windows Server 2016-2022</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-blue-300 mr-1"/> Active Directory / GPO / DNS</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-blue-300 mr-1"/> MDT / WDS / WAPT</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-blue-300 mr-1"/> PowerShell Scripting</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-blue-300 mr-1"/> VMware vSphere / Veeam</li>
              </ul>
            </div>

            {/* Linux & Open Source */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-orange-500" /> Linux & Open Source
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><ChevronRight size={14} className="text-orange-300 mr-1"/> Debian / RedHat / Ubuntu</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-orange-300 mr-1"/> Bash Scripting / Python</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-orange-300 mr-1"/> FOG Project / Proxmox</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-orange-300 mr-1"/> GitLab / Wiki</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-orange-300 mr-1"/> GLPI / FusionInventory</li>
              </ul>
            </div>

            {/* Network & BDD */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Network size={20} className="text-purple-500" /> Réseau & Données
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><ChevronRight size={14} className="text-purple-300 mr-1"/> TCP/IP, VLAN, Switch</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-purple-300 mr-1"/> VPN / Firewalling</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-purple-300 mr-1"/> PostgreSQL / MS SQL</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-purple-300 mr-1"/> MySQL / PHP</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-purple-300 mr-1"/> Sécurité (ANSSI/ISO)</li>
              </ul>
            </div>

            {/* Hardware & ARM */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Cpu size={20} className="text-green-500" /> Edge AI & Hardware
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><ChevronRight size={14} className="text-green-300 mr-1"/> Raspberry Pi / Orange Pi</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-green-300 mr-1"/> Architecture ARM</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-green-300 mr-1"/> Local LLM / Voice AI</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-green-300 mr-1"/> Diagnostic Hardware</li>
                <li className="flex items-center"><ChevronRight size={14} className="text-green-300 mr-1"/> Maintenance Industrielle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Parcours Professionnel</h2>
            <p className="text-slate-500 mt-2">Une évolution constante, du terrain à l'ingénierie système</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10"></div>
                
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-blue-600 text-sm">{exp.period}</span>
                        <span className="text-xs text-slate-400 font-medium bg-slate-200 px-2 py-1 rounded">{exp.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                      <h4 className="text-md font-medium text-slate-500 mb-3">{exp.company}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {exp.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Homelab & AI Project Section */}
      <section id="homelab" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Grid & Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-900/20 rounded-full border border-green-800">
              Innovation & Pédagogie
            </span>
            <h2 className="text-4xl font-bold mb-4">Mon Laboratoire ARM & IA</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Je dédie mon temps libre à l'exploration des architectures basses consommation et à la construction d'intelligences artificielles locales, sans dépendre du cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project: Voice AI */}
            <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mic size={120} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <Bot className="text-blue-400" /> Projet Actuel : Assistant Vocal IA
              </h3>
              <p className="text-blue-200 text-sm mb-6 font-mono">Status: En développement actif</p>
              
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  Conception d'un assistant vocal intelligent fonctionnant <strong>entièrement en local</strong> (Privacy-first). L'objectif est de maîtriser la chaîne complète : du hardware à l'inférence du modèle.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2"><Cpu size={16}/> Hardware</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Orange Pi 5 (NPU intégré)</li>
                      <li>• Raspberry Pi 4 (Contrôleur)</li>
                      <li>• Microphones matriciels</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-purple-400 mb-2 flex items-center gap-2"><Layers size={16}/> Stack Tech</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Python / C++</li>
                      <li>• Whisper (STT)</li>
                      <li>• LLM Local (Llama/Mistral)</li>
                      <li>• Piper (TTS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* General Homelab Stats */}
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:bg-slate-750 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <CircuitBoard className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Architecture ARM</h3>
                    <p className="text-slate-400 text-sm">
                      Utilisation exclusive de cartes de développement (SBC) pour contraindre les ressources et optimiser le code. Apprentissage de la gestion énergétique et thermique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:bg-slate-750 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Network className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Infrastructure Réseau</h3>
                    <p className="text-slate-400 text-sm">
                      Segmentation VLAN, Reverse Proxy, DNS local (Pi-Hole), Monitoring (Grafana/Prometheus). Simulation d'un environnement de production critique à l'échelle micro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terminal Simulation */}
              <div className="bg-black rounded-xl p-4 border border-slate-800 font-mono text-xs text-green-400 shadow-inner">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <p>olivier@orangepi:~ $ ./start_assistant.sh</p>
                <p className="text-slate-500">[INFO] Initializing NPU accelerator...</p>
                <p className="text-slate-500">[INFO] Loading Whisper model (small.en)...</p>
                <p className="text-slate-500">[INFO] Wake word detection active.</p>
                <p className="text-blue-400">Listening... <span className="animate-pulse">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Formation Continue</h2>
            <p className="text-slate-500 mt-2">Jamais cesser d'apprendre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-600" /> Diplômes
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <edu.icon size={24} className="text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium text-sm">{edu.school}</p>
                      <p className="text-slate-500 text-sm italic">{edu.year}</p>
                      <p className="text-slate-600 text-sm mt-1">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FileText className="text-blue-600" /> Certifications & MOOC
              </h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex flex-wrap gap-3">
                  {certs.map((cert, idx) => (
                    <span key={idx} className="px-3 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-200 shadow-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {cert}
                    </span>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
                  <p className="font-semibold mb-1">En cours d'acquisition :</p>
                  <p>Veille active sur les technologies Cloud, ISO 27001 et IA (Objectif IA).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Actuellement basé à <strong>Chartres</strong>, mobile sur Paris. <br/>
            Prêt à relever de nouveaux défis en Cybersécurité et Administration Système.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:olivier.pavilla@gmail.com" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-700">
              <Mail className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-sm text-slate-300">Email</span>
              <span className="font-bold mt-1 text-sm md:text-base">olivier.pavilla@gmail.com</span>
            </a>
            
            <div className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700">
              <Phone className="text-green-400 mb-4" size={32} />
              <span className="text-sm text-slate-300">Téléphone</span>
              <span className="font-bold mt-1">+33 7 82 25 68 81</span>
            </div>

            <a href="https://www.linkedin.com/in/olive-pavi/" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group border border-slate-700">
              <Linkedin className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-sm text-slate-300">Réseau</span>
              <span className="font-bold mt-1">Profil LinkedIn</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/CV Prof-Info-Photo-Mod-Sobre_20251509r1.pdf" download className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all shadow-lg shadow-blue-900/50">
              <Download size={20} /> Télécharger mon CV (PDF)
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Olivier Pavilla. Portfolio conçu avec React & Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;