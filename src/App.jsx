// Trigger Vercel Deployment
import { useState } from 'react';

const stats = [
  { value: '30+', label: 'years of site leadership' },
  { value: '60+', label: 'projects completed' },
  { value: '100+', label: 'skilled people on call' },
];

const capabilities = [
  {
    title: 'Institutional campuses',
    text: 'Schools, hostels, circulation zones, service yards, and student-safe handover planning.',
  },
  {
    title: 'Residential builds',
    text: 'Individual homes, apartments, villas, and custom developments shaped around daily use.',
  },
  {
    title: 'Industrial shells',
    text: 'Factories, warehouses, commercial floors, and deadline-led work packages.',
  },
];

const operatingNotes = [
  'Cost, schedule, and scope are tracked before work begins.',
  'Engineers stay close to site decisions, not only drawings.',
  'Every handover is judged by finish, safety, and durability.',
];

const projects = [
  {
    title: 'Sri Chaitanya Techno School - Kalapatti Campus',
    location: 'Kalapatti, Coimbatore',
    division: 'commercial',
    description: 'A 5 acre school and hostel campus delivered ahead of schedule, built for safe learning, student housing, and everyday campus movement.',
    image: '/gallery/front.jpg.png',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'School and hostel campus' },
      { label: 'Client', value: 'Sri Chaitanya Techno School' },
      { label: 'Timeline', value: 'Dec 2024 - Jun 2025' },
      { label: 'Campus area', value: '5 acres' },
    ],
    details: [
      'School building: ground + 3 floors',
      'Hostel building: ground + 4 floors',
      '80 hostel rooms with capacity for up to 600 students',
      'Smart classrooms, science labs, computer labs, and library',
      'Dining, play areas, parking, landscaped open spaces, and access control',
      'Complete civil, structural, electrical, plumbing, finishing, and external works',
      'Delivered ahead of the committed deadline with safety and quality controls',
    ],
    scope: [
      'Turnkey construction and project management',
      'Architectural coordination and site development',
      'Interior, exterior, landscape, and final handover works',
    ],
    gallery: [
      '/gallery/front.jpg.png',
      '/gallery/hostel.jpg.png',
      '/gallery/outside.png',
      '/gallery/park.jpg.png',
      '/gallery/side.jpg.png',
    ],
  },
  {
    title: 'Velammal Vidyalaya - Hosur Campus',
    location: 'Hosur, Tamil Nadu',
    division: 'commercial',
    description: 'A completed educational campus with clean academic blocks, internal circulation courts, and finished learning spaces.',
    image: '/gallery/hosur-velammal-front.jpg.png',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'Educational campus' },
      { label: 'Client', value: 'Velammal Vidyalaya' },
      { label: 'Location', value: 'Hosur, Tamil Nadu' },
      { label: 'Status', value: 'Completed' },
    ],
    details: [
      'Academic block with contemporary exterior massing',
      'Bright internal courtyard and student circulation areas',
      'Finished rooms with built-in lighting, ceiling work, and wall treatments',
      'Durable external paving, entrance steps, and landscaped edges',
      'Window, grill, railing, and access details completed for daily campus use',
      'Delivered as a polished educational environment ready for operations',
    ],
    scope: [
      'Civil construction and finishing execution',
      'Interior room finishing and external development',
      'Campus-ready handover with quality checks',
    ],
    gallery: [
      '/gallery/hosur-velammal-front.jpg.png',
      '/gallery/hosur-velammal-inside.jpg.png',
      '/gallery/hosur-velammal-room.jpg.png',
    ],
  },
  {
    title: 'Sandhiya College of Nursing Campus',
    location: 'Sandhiya Nursing College',
    division: 'commercial',
    description: 'A completed nursing college block with a glazed entry, brick academic facade, shaded metal screens, and campus-ready external development.',
    image: '/gallery/sandhiya-nursing-diagonal.jpg.png',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'Nursing college campus' },
      { label: 'Client', value: 'Sandhiya College of Nursing' },
      { label: 'Building use', value: 'Academic and institutional block' },
      { label: 'Status', value: 'Completed' },
    ],
    details: [
      'Institutional academic block with a contemporary brick and concrete exterior',
      'Glazed entrance lobby with canopy, front steps, and clear arrival zone',
      'Metal screening and window grill work completed across the facade',
      'External paving, campus frontage, and circulation areas prepared for daily use',
      'Durable finish palette suited for a nursing college environment',
      'Delivered as a polished educational facility ready for occupation',
    ],
    scope: [
      'Civil construction and external development',
      'Facade, glazing, screening, and entry-zone execution',
      'Final finishing and campus-ready handover',
    ],
    gallery: [
      '/gallery/sandhiya-nursing-diagonal.jpg.png',
      '/gallery/sandhiya-nursing-front.jpg.jpeg',
    ],
  },
  {
    title: 'Shop in a Park',
    location: 'Public Boulevard, Chennai',
    division: 'commercial',
    description: 'A linear retail strip designed as a shaded public park, with timber fins, glazed shop fronts, and landscaped forecourt seating.',
    image: '/gallery/entrance.jpg.png',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'Retail / public frontage' },
      { label: 'Client', value: 'Private developer' },
      { label: 'Location', value: 'Chennai' },
      { label: 'Status', value: 'Completed' },
    ],
    details: [
      'Linear retail units with glazed fronts and roll-down shutters',
      'Timber sun-shading fins and suspended canopy over the promenade',
      'Landscaped forecourt with seating, specimen trees, and paved walking zone',
      'Durable external finishes, drainage, and night-time lighting for safety',
    ],
    scope: [
      'Civil and finishing works for retail units',
      'Landscape, paving, and external lighting',
      'Architectural timber canopy and glass shopfront installation',
    ],
    gallery: [
      '/gallery/entrance.jpg.png',
      '/gallery/green.jpg.png',
      '/gallery/left.jpg.png',
      '/gallery/night.jpg.png',
      '/gallery/window.jpg.png',
    ],
  },
  {
    title: 'Sri Chaitanya Techno School - Kovilambakkam Campus',
    location: 'Kovilambakkam, Chennai',
    division: 'commercial',
    description: 'An institutional school campus construction featuring modern glass facades, spacious classrooms, safety railings, and dedicated outdoor play zones.',
    image: '/gallery/kovilambakkam-chaitanya-front.jpg',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'Institutional Campus' },
      { label: 'Client', value: 'Sri Chaitanya Techno School' },
      { label: 'Location', value: 'Kovilambakkam, Chennai' },
      { label: 'Status', value: 'Completed' },
    ],
    details: [
      'Modern glass-front entrance lobby with durable canopy structures',
      'Structural frame featuring contemporary orange trim accents and wood-textured styling',
      'Secure multi-level academic blocks designed with circulation corridors',
      'Spacious open courtyard and playground equipped with children’s play systems',
      'Durable exterior finishes, paved parking zones, and integrated safety screens',
      'Delivered fully operational with all essential educational layouts',
    ],
    scope: [
      'Turnkey civil and structural execution',
      'Facade glazing, exterior cladding, and color works',
      'Playground preparation and campus site development',
    ],
    gallery: [
      '/gallery/kovilambakkam-chaitanya-front.jpg',
      '/gallery/kovilambakkam-chaitanya-perspective.jpg',
      '/gallery/kovilambakkam-chaitanya-courtyard.jpg',
      '/gallery/kovilambakkam-chaitanya-courtyard2.jpg',
    ],
  },
  {
    title: 'Nolabur Villa',
    location: 'Nolabur, Chennai',
    division: 'residential',
    description: 'A premium luxury residential villa featuring bespoke interiors, custom timber details, grand entry circulation, modular kitchen, and landscaped private outdoor zones.',
    image: '/gallery/nolabur-kitchen.png',
    status: 'Completed',
    meta: [
      { label: 'Project type', value: 'Premium Private Villa' },
      { label: 'Timeline', value: 'Completed 2025' },
      { label: 'Built-up Area', value: '5,500 sq.ft' },
      { label: 'Detail Level', value: 'High-End Bespoke Interior' },
    ],
    details: [
      'Bespoke master suite with warm wood cabinetry and false ceiling cove lighting',
      'Grand stairwell detailing with custom glass balustrade and hand-picked cascading crystal chandelier',
      'Warm solid wood floor finishes and custom wood doors throughout',
      'Spacious terrace balcony with artificial turf landscaping and steel privacy louvers',
      'Premium modular kitchen equipped with built-in appliances, clean cabinetry, and integrated breakfast counter',
      'Luxury bathroom featuring deep teal slab-tiled walls, modern fixtures, and corner bathtub setup',
      'Bespoke home office study with solid wood floors and direct access to garden court',
      'Premium marble flooring in high-traffic living areas',
      'Integrated HVAC and custom cove lighting solutions',
    ],
    scope: [
      'Complete structural finishing and custom interior execution',
      'Bespoke carpentry, modular kitchen fabrication, wood paneling, and false ceiling works',
      'Terrace landscaping, privacy screening, and premium sanitary installation',
    ],
    gallery: [
      '/gallery/nolabur-kitchen.png',
      '/gallery/nolabur-balcony.jpg',
      '/gallery/nolabur-bedroom1.jpg',
      '/gallery/nolabur-chandelier.jpg',
      '/gallery/nolabur-bedroom2.jpg',
      '/gallery/nolabur-stairs.jpg',
      '/gallery/nolabur-bathroom.jpg',
      '/gallery/nolabur-office.jpg',
      '/gallery/nolabur-stairs2.jpg',
    ],
  }
];

const WEB3FORMS_ACCESS_KEY = "f217b296-c01c-4488-a482-40b9a904c40c"; // Get yours free from web3forms.com

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const [footerFormStatus, setFooterFormStatus] = useState({ state: 'idle', message: '' });
  const [residentialFormStatus, setResidentialFormStatus] = useState({ state: 'idle', message: '' });

  const handleSubmitForm = async (e, formType) => {
    e.preventDefault();
    const setStatus = formType === 'footer' ? setFooterFormStatus : setResidentialFormStatus;
    setStatus({ state: 'submitting', message: 'Sending...' });

    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    data.access_key = WEB3FORMS_ACCESS_KEY;
    if (!data.subject) {
      data.subject = formType === 'footer'
        ? "New Call Request - Kaytech website"
        : "Early Layout Inquiry - Kaytech website";
    }
    if (!data.message) {
      data.message = formType === 'footer'
        ? `Request a call from ${data.name || 'Anonymous'}. Phone: ${data.phone || 'Not provided'}.`
        : `Request early layouts for Residential pipeline.`;
    }

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setStatus({
          state: 'success',
          message: 'Demo mode: Form submitted successfully! (To receive actual emails, replace YOUR_ACCESS_KEY_HERE in App.jsx with your key from web3forms.com)'
        });
        form.reset();
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ state: 'success', message: 'Thank you! Your request has been sent.' });
        form.reset();
      } else {
        setStatus({ state: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ state: 'error', message: 'Network error. Please try again later.' });
    }
  };

  // Subpage: Project Details View
  if (selectedProject) {
    return (
      <div className="page-shell gallery-page">
        <nav className="nav gallery-nav" aria-label="Project gallery">
          <button className="back-link" onClick={() => setSelectedProject(null)}>
            Back to {selectedProject.division === 'commercial' ? 'Commercial' : 'Residential'} Projects
          </button>
          <span className="nav-contact">kaytech422@gmail.com</span>
        </nav>

        <header className="gallery-header">
          <p className="eyebrow">Project record</p>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.description}</p>
        </header>

        <main className="gallery-details">
          <div className="gallery-grid">
            {selectedProject.gallery.map((image, index) => (
              <figure key={image} className="gallery-card">
                <img src={image} alt={`${selectedProject.title} view ${index + 1}`} />
              </figure>
            ))}
          </div>
          <aside className="project-details">
            <p className="eyebrow">Measured facts</p>
            <h2>What was delivered</h2>
            <div className="project-meta">
              {selectedProject.meta.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <ul>
              {selectedProject.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="scope-note">
              <h3>Scope</h3>
              {selectedProject.scope.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </aside>
        </main>
      </div>
    );
  }

  // Subpage: About Us Page
  if (currentPage === 'about') {
    return (
      <div className="page-shell subpage-container">
        <header className="subpage-header-wrap">
          <div className="subpage-nav">
            <button className="subpage-back" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
              ← Back to Home
            </button>
            <div className="nav-links">
              <a href="#commercial" onClick={(e) => { e.preventDefault(); setCurrentPage('commercial'); window.scrollTo(0, 0); }}>Commercial</a>
              <a href="#residential" onClick={(e) => { e.preventDefault(); setCurrentPage('residential'); window.scrollTo(0, 0); }}>Residential</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }}>Contact</a>
            </div>
          </div>
          <div className="subpage-title-grid">
            <div>
              <p className="eyebrow">About Us</p>
              <h1>Seasoned hands, clean handovers.</h1>
            </div>
            <p>
              Founded on over 30 years of site leadership, Kaytech combines structured project engineering with field discipline to deliver premium campuses, commercial facilities, and residential builds across Tamil Nadu.
            </p>
          </div>
        </header>

        <div className="about-hero-image">
          <img src="/gallery/about-concrete.jpg" alt="Active structural concrete slab casting site" />
        </div>

        <main className="subpage-content about-page-content">
          <section className="about-stats-ribbon">
            <div><span>Established</span><strong>2023</strong></div>
            <div><span>Head office</span><strong>Chennai</strong></div>
            <div><span>Leadership Exp</span><strong>30+ Years</strong></div>
            <div><span>Engineers</span><strong>30+</strong></div>
            <div><span>Field crew</span><strong>100+</strong></div>
            <div><span>Completed Sites</span><strong>60+</strong></div>
          </section>

          <section className="about-details-grid">
            <div className="about-column">
              <span className="section-divider-label">01 / Our Story</span>
              <h2>New company, deep roots.</h2>
              <p>
                Kaytech Constructions was established in 2023 in Chennai to unify decades of contractor-side expertise under a single, highly agile delivery model. Unlike corporate builders who coordinate from remote offices, our engineers live on-site, guiding key civil, structural, and finishing decisions directly.
              </p>
              <p>
                From school campuses completed ahead of schedule to premium private residences, our portfolio is a record of builds that stand up to daily operational wear.
              </p>
            </div>

            <div className="about-column about-story-photo-wrap">
              <img src="/gallery/about-masonry.jpg" alt="Active site masonry and bricklaying work by Kaytech crew" className="about-story-photo" />
            </div>
          </section>

          <section className="vision-mission-grid">
            <div className="vm-card">
              <span className="vm-num">03</span>
              <h3>Vision</h3>
              <p>
                To anchor communities across Tamil Nadu with enduring structures, setting new benchmarks in structural safety, speed of execution, and turnkey finish quality.
              </p>
            </div>
            <div className="vm-card">
              <span className="vm-num">04</span>
              <h3>Mission</h3>
              <p>
                To put project engineers at the center of every site decision, ensuring transparent cost tracking, zero-incident safety zones, and strict architectural fidelity.
              </p>
            </div>
          </section>

          <section className="policy-section-wrap">
            <div className="policy-card">
              <span className="policy-badge">EHS Policy</span>
              <h3>Environment, Health & Safety</h3>
              <p>
                We believe a clean site is a safe site. Our zero-incident policy is maintained through strict structural scaffolding checks, clear site circulation, and dedicated safety yards. For educational and public facilities, we conduct student-safe handover audits before academic operations begin.
              </p>
            </div>
            <div className="policy-card">
              <span className="policy-badge">Quality Policy</span>
              <h3>Finishes & Durability</h3>
              <p>
                Quality is not an inspect-at-the-end checklist—it is integrated into every blockwork joint, waterproofing layer, and electrical conduit. We source only graded aggregates, select premium architectural fixtures, and verify durability tolerances at every construction milestone.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Subpage: Contact Us Page
  if (currentPage === 'contact') {
    return (
      <div className="page-shell subpage-container">
        <header className="subpage-header-wrap">
          <div className="subpage-nav">
            <button className="subpage-back" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
              ← Back to Home
            </button>
            <div className="nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>About Us</a>
              <a href="#commercial" onClick={(e) => { e.preventDefault(); setCurrentPage('commercial'); window.scrollTo(0, 0); }}>Commercial</a>
              <a href="#residential" onClick={(e) => { e.preventDefault(); setCurrentPage('residential'); window.scrollTo(0, 0); }}>Residential</a>
            </div>
          </div>
          <div className="subpage-title-grid">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h1>Start the conversation.</h1>
            </div>
            <p>
              Whether you have a fully drafted architectural plan, a raw site, or just a first concept sketch, our engineers are ready to walk through the details.
            </p>
          </div>
        </header>

        <main className="subpage-content contact-page-content">
          <div className="contact-page-grid">
            {/* Left Column: Form */}
            <div className="contact-form-card">
              <h2>Submit Enquiry</h2>
              <p>Fill out the fields below and our engineering team will reach out to request your drawings or schedule a call.</p>
              <form className="contact-form" onSubmit={(e) => handleSubmitForm(e, 'footer')}>
                <input type="text" name="name" placeholder="Your name" aria-label="Your name" required />
                <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
                <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required />
                <textarea name="message" placeholder="Describe your project (site location, estimated build-up area, scope, or deadlines)..." aria-label="Project details" rows="4" style={{ width: '100%', minHeight: '120px', padding: '12px 14px', border: '1px solid rgba(243, 242, 236, 0.34)', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--paper)', font: 'inherit', resize: 'vertical' }} required></textarea>
                <button type="submit" className="btn btn-primary" disabled={footerFormStatus.state === 'submitting'}>
                  {footerFormStatus.state === 'submitting' ? 'Sending...' : 'Request a call'}
                </button>
                {footerFormStatus.message && (
                  <p className={`form-feedback ${footerFormStatus.state}`}>
                    {footerFormStatus.message}
                  </p>
                )}
              </form>
            </div>

            {/* Right Column: Info Cards & BOQ Promise */}
            <div className="contact-info-wrap">
              <div className="proposal-promise-box">
                <span className="promise-badge consultation-badge">Consultation</span>
                <h3>One-on-One Alignment</h3>
                <p>If you schedule a one-on-one meeting with our engineering team, we will map out a step-up plan, draft layout drawings, and clear all of your project doubts on the spot.</p>
              </div>

              <div className="contact-cards-grid">
                <div className="info-card">
                  <span className="info-label">Office Address</span>
                  <a
                    className="info-link"
                    href="https://maps.google.com/?q=Ground+Floor,+Sri+balaji+flats,+No.3,+Ganga+Garden,+Street,+Keelkattalai,+Chennai,+Tamil+Nadu+600117"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0, verticalAlign: 'middle' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Ground Floor, Sri balaji flats, No.3, Ganga Garden, Street, Keelkattalai, Chennai, Tamil Nadu 600117
                  </a>
                </div>

                <div className="info-card">
                  <span className="info-label">Direct Lines</span>
                  <div className="info-link-group">
                    <a href="tel:+919444418100">+91 94444 18100</a>
                    <a href="tel:+919962718100">+91 99627 18100</a>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-label">Email Address</span>
                  <a className="info-link email-link" href="mailto:kaytech422@gmail.com">kaytech422@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Subpage: Commercial Page
  if (currentPage === 'commercial') {
    return (
      <div className="page-shell subpage-container">
        <header className="subpage-header-wrap">
          <div className="subpage-nav">
            <button className="subpage-back" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
              ← Back to Home
            </button>
            <div className="nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>About Us</a>
              <a href="#residential" onClick={(e) => { e.preventDefault(); setCurrentPage('residential'); window.scrollTo(0, 0); }}>Residential</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }}>Contact</a>
            </div>
          </div>
          <div className="subpage-title-grid">
            <div>
              <p className="eyebrow">Division: Commercial & Institutional</p>
              <h1>Built for scale.</h1>
            </div>
            <p>
              Our commercial projects include completed educational campuses, college blocks, and retail frontages. Built with scheduled discipline, structural longevity, and active site management.
            </p>
          </div>
        </header>

        <main className="subpage-content">
          <div className="projects-grid">
            {projects.filter(p => p.division === 'commercial').map((project) => (
              <article
                key={project.title}
                className={`project-card ${project.gallery ? 'is-clickable' : ''}`}
                onClick={() => project.gallery && setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span>{project.status}</span>
                </div>
                <div className="project-content">
                  <p>{project.location}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Subpage: Residential Page
  if (currentPage === 'residential') {
    return (
      <div className="page-shell subpage-container">
        <header className="subpage-header-wrap">
          <div className="subpage-nav">
            <button className="subpage-back" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
              ← Back to Home
            </button>
            <div className="nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>About Us</a>
              <a href="#commercial" onClick={(e) => { e.preventDefault(); setCurrentPage('commercial'); window.scrollTo(0, 0); }}>Commercial</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }}>Contact</a>
            </div>
          </div>
          <div className="subpage-title-grid">
            <div>
              <p className="eyebrow">Division: Residential Builds</p>
              <h1>Future Living.</h1>
            </div>
            <p>
              Custom villas, independent homes, and premium residential spaces designed around durability and premium finish standards.
            </p>
          </div>
        </header>

        <main className="subpage-content">
          <div className="projects-grid" style={{ marginBottom: '4rem' }}>
            {projects.filter(p => p.division === 'residential').map((project) => (
              <article
                key={project.title}
                className={`project-card ${project.gallery ? 'is-clickable' : ''}`}
                onClick={() => project.gallery && setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span>{project.status}</span>
                </div>
                <div className="project-content">
                  <p>{project.location}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </article>
            ))}
          </div>

          <section className="coming-soon-residential">
            <div className="coming-soon-info">
              <span className="coming-soon-badge">Pipeline Status</span>
              <h2>Residential pipeline opening soon</h2>
              <p>
                We are currently in the planning and pre-construction stages for several premium residential sites in Chennai and Coimbatore. Detailed architectural drawings, plot options, and villa handovers will be published here.
              </p>

              <div className="residential-inquiry-box">
                <h3>Request early layouts</h3>
                <p>Sign up to receive early brochures, floor plans, and priority booking details before the official launch.</p>
                <form className="inquiry-inline-form" onSubmit={(e) => handleSubmitForm(e, 'residential')}>
                  <input type="email" name="email" placeholder="Enter your email address" required aria-label="Email address for notification" />
                  <button type="submit" disabled={residentialFormStatus.state === 'submitting'}>
                    {residentialFormStatus.state === 'submitting' ? '...' : 'Submit'}
                  </button>
                </form>
                {residentialFormStatus.message && (
                  <p className={`form-feedback ${residentialFormStatus.state}`}>
                    {residentialFormStatus.message}
                  </p>
                )}
              </div>
            </div>

            <div className="coming-soon-visual">
              <div className="blueprint-grid"></div>
              <div className="blueprint-circle">
                <span className="blueprint-text">IN DESIGN</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Home Page View
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Kaytech home">
            <img src="/gallery/kaytech-logo.jpg.png" alt="Kaytech" />
          </a>
          <div className="nav-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>About Us</a>
            <a href="#commercial" onClick={(e) => { e.preventDefault(); setCurrentPage('commercial'); window.scrollTo(0, 0); }}>Commercial</a>
            <a href="#residential" onClick={(e) => { e.preventDefault(); setCurrentPage('residential'); window.scrollTo(0, 0); }}>Residential</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }}>Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy-block">
            <p className="eyebrow">Chennai based construction company</p>
            <h1>Built work, not borrowed promises.</h1>
            <p className="hero-copy">
              Kaytech delivers schools, homes, commercial spaces, factories, and custom developments with the discipline of a site team that has lived through real deadlines.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">View project proof</a>
              <a className="btn btn-secondary" href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }}>Start a build</a>
            </div>
          </div>

          <div className="site-board" aria-label="Kaytech project summary">
            <div className="board-rule" />
            <p className="board-label">Active measure</p>
            <strong>30 years</strong>
            <span>Founder-led construction experience across Tamil Nadu</span>
          </div>
        </div>

        <div className="hero-photo-strip" aria-label="Completed campus images">
          <img src="/gallery/front.jpg.png" alt="Sri Chaitanya Techno School front elevation" />
          <img src="/gallery/outside.png" alt="School campus entrance with steel canopy" />
        </div>
      </header>

      <main className="main-flow">
        <section className="stats-section" aria-label="Kaytech numbers">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="method" className="section method-section">
          <div className="section-heading">
            <p className="eyebrow">How the work is held</p>
            <h2>Simple controls, closely watched.</h2>
          </div>
          <div className="method-grid">
            {operatingNotes.map((note) => (
              <article key={note} className="method-card">
                <span aria-hidden="true" />
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section capability-section">
          <div className="section-heading">
            <p className="eyebrow">Build range</p>
            <h2>From campus blocks to custom homes.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.title} className="capability-card">
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section portals-section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Our Portfolio Divisions</p>
              <h2>Segregated by project scope.</h2>
            </div>
            <p>
              Explore our completed institutional and commercial developments, or look through our upcoming premium residential villa and apartment pipeline.
            </p>
          </div>

          <div className="portals-grid">
            {/* Commercial Portal Card */}
            <article className="portal-card" onClick={() => { setCurrentPage('commercial'); window.scrollTo(0, 0); }}>
              <div className="portal-card-bg">COM</div>
              <div className="portal-header">
                <p className="eyebrow">Division 01</p>
                <h3>Commercial & Institutional</h3>
                <p className="portal-desc">
                  Schools, college campuses, retail hubs, and industrial shells delivered with schedule discipline.
                </p>
              </div>
              <div>
                <div className="portal-stats">
                  <div className="portal-stat-item">
                    <span className="portal-stat-num">{projects.filter(p => p.division === 'commercial').length}</span>
                    <span className="portal-stat-label">Active Records</span>
                  </div>
                  <div className="portal-stat-item">
                    <span className="portal-stat-num">30+</span>
                    <span className="portal-stat-label">Years Exp</span>
                  </div>
                </div>
                <div className="portal-footer">
                  <span>Explore commercial works</span>
                  <span className="portal-arrow" aria-hidden="true">→</span>
                </div>
              </div>
            </article>

            {/* Residential Portal Card */}
            <article className="portal-card residential-portal" onClick={() => { setCurrentPage('residential'); window.scrollTo(0, 0); }}>
              <div className="portal-card-bg">RES</div>
              <div className="portal-header">
                <p className="eyebrow">Division 02</p>
                <h3>Residential Builds</h3>
                <p className="portal-desc">
                  Custom villas, independent homes, and modern layouts designed for comfort and durability.
                </p>
              </div>
              <div>
                <div className="portal-stats">
                  <div className="portal-stat-item">
                    <span className="portal-stat-num">{projects.filter(p => p.division === 'residential').length}</span>
                    <span className="portal-stat-label">Active Records</span>
                  </div>
                  <div className="portal-stat-item">
                    <span className="portal-stat-num">In Design</span>
                    <span className="portal-stat-label">Pipeline Status</span>
                  </div>
                </div>
                <div className="portal-footer">
                  <span>View residential pipeline</span>
                  <span className="portal-arrow" aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section about-section">
          <div className="about-copy">
            <p className="eyebrow">About Kaytech</p>
            <h2>New company, seasoned hands.</h2>
            <p>
              Kaytech Constructions was established in 2023 in Chennai, backed by more than three decades of construction experience. The team works across Tamil Nadu on residential, commercial, educational, industrial, and customized development projects.
            </p>
            <a href="#about" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-flex' }} onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>
              Explore Our Core Values & Policies
            </a>
          </div>
          <div className="ledger">
            <div><span>Established</span><strong>2023</strong></div>
            <div><span>Head office</span><strong>Chennai</strong></div>
            <div><span>Engineers</span><strong>30+</strong></div>
            <div><span>Field crew</span><strong>100+</strong></div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <img className="footer-logo" src="/gallery/kaytech-logo.jpg.png" alt="Kaytech" />
          <p className="eyebrow">Start the conversation</p>
          <h2>Bring the site, scope, or first sketch.</h2>
        </div>
        <form className="contact-form" onSubmit={(e) => handleSubmitForm(e, 'footer')}>
          <input type="text" name="name" placeholder="Your name" aria-label="Your name" required />
          <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
          <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required />
          <button type="submit" className="btn btn-primary" disabled={footerFormStatus.state === 'submitting'}>
            {footerFormStatus.state === 'submitting' ? 'Sending...' : 'Request a call'}
          </button>
          {footerFormStatus.message && (
            <p className={`form-feedback ${footerFormStatus.state}`}>
              {footerFormStatus.message}
            </p>
          )}
        </form>
        <div className="footer-contact">
          <div className="footer-links">
            <a className="footer-email" href="mailto:kaytech422@gmail.com">kaytech422@gmail.com</a>
            <a href="tel:+919444418100">+91 94444 18100</a>
            <a href="tel:+919962718100">+91 99627 18100</a>
          </div>
          <a
            className="footer-address-link"
            href="https://maps.google.com/?q=Ground+Floor,+Sri+balaji+flats,+No.3,+Ganga+Garden,+Street,+Keelkattalai,+Chennai,+Tamil+Nadu+600117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Ground Floor, Sri balaji flats, No.3, Ganga Garden, Street, Keelkattalai, Chennai, Tamil Nadu 600117
          </a>
        </div>
      </footer>
    </div>
  );
}

