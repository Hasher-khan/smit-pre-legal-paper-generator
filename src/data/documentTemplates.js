// Document Types and templates dataset written in clean, easy English without fake stats

export const DOCUMENT_TYPES = [
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement (NDA)',
    shortCode: 'NDA',
    category: 'Confidentiality',
    description: 'Keep your private business ideas, financial details, and trade secrets safe when talking with partners or clients.',
    popular: true,
    variants: [
      { id: 'mutual', label: 'Two-Way (Both sides protect secrets)' },
      { id: 'unilateral', label: 'One-Way (You share, recipient keeps secret)' }
    ],
    defaultClauses: [
      'Definition of confidential information',
      'Exclusions from confidentiality',
      'Rules for keeping information secret',
      'Duration of confidentiality obligations',
      'Legal remedies if secrets are disclosed'
    ]
  },
  {
    id: 'contractor',
    title: 'Independent Contractor Agreement',
    shortCode: 'ICA',
    category: 'Work & Services',
    description: 'Agreement for hiring a freelancer or contractor. Covers work deliverables, payment amount, dates, and work ownership.',
    popular: true,
    variants: [
      { id: 'fixed_fee', label: 'Fixed Price Project' },
      { id: 'hourly', label: 'Hourly Rate / Ongoing Work' }
    ],
    defaultClauses: [
      'Scope of work and deliverables',
      'Independent contractor status',
      'Intellectual property ownership assignment',
      'Payment terms and invoice approvals',
      'Termination and cancellation notice period'
    ]
  },
  {
    id: 'terms_privacy',
    title: 'Website Terms of Service & Privacy',
    shortCode: 'TOS',
    category: 'Website & Digital Rules',
    description: 'Rules for people using your website or mobile application. Protects your company and explains how user data is handled.',
    popular: true,
    variants: [
      { id: 'saas', label: 'Web Application / SaaS' },
      { id: 'ecommerce', label: 'Online Store / Shopping Site' }
    ],
    defaultClauses: [
      'User account rules and eligibility',
      'Website content and trademark rights',
      'Disclaimer of warranties and liability limit',
      'Prohibited website activities',
      'User data privacy disclosure'
    ]
  },
  {
    id: 'cease_desist',
    title: 'Cease & Desist Warning Notice',
    shortCode: 'C&D',
    category: 'Formal Warning',
    description: 'Formal written demand warning an infringing party to stop copying your work, using your brand, or breaking a contract.',
    popular: false,
    variants: [
      { id: 'ip_infringement', label: 'Copyright / IP Infringement' },
      { id: 'contract_breach', label: 'Contract Breach / Unpaid Debt' }
    ],
    defaultClauses: [
      'Statement of legal ownership and rights',
      'Demand to halt unauthorized activity immediately',
      'Demand for written compliance confirmation',
      'Response deadline date',
      'Notice of future legal action if ignored'
    ]
  },
  {
    id: 'partnership_memo',
    title: 'Founder & Partnership Agreement',
    shortCode: 'MOU',
    category: 'Business Partners',
    description: 'Agreement between co-founders setting business share percentages, roles, voting rules, and share vesting schedules.',
    popular: false,
    variants: [
      { id: 'equal_split', label: '50 / 50 Equal Share Split' },
      { id: 'vesting_split', label: 'Role-Based Share Allocation' }
    ],
    defaultClauses: [
      'Business ownership percentages',
      'Capital contributions and funding',
      'Founder roles and decision thresholds',
      '4-Year share vesting schedule',
      'Rules if a partner leaves the company'
    ]
  }
];

export const JURISDICTIONS = [
  { code: 'US-DE', name: 'Delaware, USA', region: 'United States' },
  { code: 'US-CA', name: 'California, USA', region: 'United States' },
  { code: 'US-NY', name: 'New York, USA', region: 'United States' },
  { code: 'US-TX', name: 'Texas, USA', region: 'United States' },
  { code: 'US-FL', name: 'Florida, USA', region: 'United States' },
  { code: 'US-WA', name: 'Washington, USA', region: 'United States' },
  { code: 'UK-ENG', name: 'England & Wales', region: 'United Kingdom' },
  { code: 'CA-ON', name: 'Ontario, Canada', region: 'Canada' },
  { code: 'EU-DE', name: 'Germany / European Union', region: 'European Union' },
  { code: 'IN-MH', name: 'Maharashtra, India', region: 'India' },
  { code: 'AU-NSW', name: 'New South Wales, Australia', region: 'Australia' },
  { code: 'SG-SG', name: 'Singapore', region: 'Singapore' }
];

export const PROTECTIVE_TONES = [
  { id: 'balanced', label: 'Balanced & Fair', desc: 'Standard terms suitable for everyday business agreements.' },
  { id: 'protective', label: 'Extra Protection & Strict', desc: 'Maximum protection for your business secrets and rights.' },
  { id: 'founder_friendly', label: 'Simple & Startup Friendly', desc: 'Easy terms designed to sign quickly without deal friction.' }
];

export function generateLegalDocumentContent(data) {
  const { docType, partyA, partyB, terms, jurisdiction, tone, customClauses } = data;
  const today = new Date();
  const dateStr = terms.effectiveDate || today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const docRefId = `LGAI-${Math.floor(100000 + Math.random() * 900000)}`;

  const jurObj = JURISDICTIONS.find(j => j.code === jurisdiction) || JURISDICTIONS[0];
  const jurName = jurObj.name;

  let docTitle = "";
  let recitals = "";
  let definedTerms = [];
  let operativeClauses = [];
  let disputeResolution = "";
  let closingText = "";

  const nameA = partyA.name ? partyA.name.trim() : '[PARTY A NAME]';
  const typeA = partyA.entityType || 'Corporation';
  const addrA = partyA.address ? partyA.address.trim() : '[PARTY A ADDRESS]';

  const nameB = partyB.name ? partyB.name.trim() : '[PARTY B NAME]';
  const typeB = partyB.entityType || 'Individual / Entity';
  const addrB = partyB.address ? partyB.address.trim() : '[PARTY B ADDRESS]';

  if (docType === 'nda') {
    docTitle = terms.variant === 'mutual' 
      ? "MUTUAL NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT" 
      : "UNILATERAL NON-DISCLOSURE AGREEMENT";

    recitals = `THIS NON-DISCLOSURE AGREEMENT (the "Agreement") is made effective as of ${dateStr} (the "Effective Date"), by and between:

PARTIES:
1. ${nameA}, a ${typeA} located at ${addrA} ("Disclosing Party" or "Party A"); and
2. ${nameB}, a ${typeB} located at ${addrB} ("Receiving Party" or "Party B").

BACKGROUND:
The parties wish to engage in business discussions and share confidential information. Both parties agree to protect all shared information according to the terms set forth below.`;

    definedTerms = [
      { term: 'Confidential Information', definition: `All business plans, technical data, customer records, code, financial details, and proprietary files disclosed by Party A.` },
      { term: 'Permitted Purpose', definition: terms.customScope || `Evaluating and discussing commercial collaboration between the parties.` }
    ];

    operativeClauses = [
      {
        num: 'SECTION 1. CONFIDENTIALITY OBLIGATIONS',
        content: `Party B agrees to hold all Confidential Information in strict confidence. Party B shall not disclose, copy, or transfer this information to any third party without express written permission from Party A.`
      },
      {
        num: 'SECTION 2. EXCLUSIONS FROM CONFIDENTIALITY',
        content: `Information is not considered confidential if: (a) it is or becomes publicly available through no breach of this Agreement; (b) Party B lawfully knew it prior to disclosure; (c) Party B developed it independently; or (d) disclosure is required by court order.`
      },
      {
        num: 'SECTION 3. TERM AND RETURN OF MATERIALS',
        content: `This Agreement shall remain effective for a period of ${terms.duration || '2 Years'} from the Effective Date. Upon request, Party B shall return or securely destroy all copies of Confidential Information within seven (7) business days.`
      },
      {
        num: 'SECTION 4. REMEDIES FOR BREACH',
        content: `Party B acknowledges that unauthorized disclosure of Confidential Information will cause irreparable injury. Party A shall be entitled to seek immediate injunctive relief and monetary damages under law.`
      }
    ];

  } else if (docType === 'contractor') {
    docTitle = "INDEPENDENT CONTRACTOR SERVICES AGREEMENT";

    recitals = `THIS INDEPENDENT CONTRACTOR AGREEMENT (the "Agreement") is executed on ${dateStr} (the "Effective Date"), by and between:

CLIENT: ${nameA}, a ${typeA} located at ${addrA} ("Client"); and
CONTRACTOR: ${nameB}, a ${typeB} located at ${addrB} ("Contractor").

BACKGROUND:
Client desires to retain Contractor to perform professional services, and Contractor agrees to complete such deliverables under the terms herein.`;

    definedTerms = [
      { term: 'Services and Deliverables', definition: terms.customScope || `Professional services, design, advisory, or software development described in the scope of work.` },
      { term: 'Compensation Structure', definition: terms.rate ? `Agreed fee of ${terms.rate}, payable upon invoice approval.` : `Agreed commercial rates billed upon invoice approval.` }
    ];

    operativeClauses = [
      {
        num: 'SECTION 1. PERFORMANCE OF SERVICES',
        content: `Contractor agrees to perform all assigned work diligently and professionally. Contractor retains full direction over the specific tools, working hours, and methods used to complete the deliverables.`
      },
      {
        num: 'SECTION 2. INTELLECTUAL PROPERTY ASSIGNMENT',
        content: `Contractor agrees that all work product, designs, code, reports, and inventions created for Client shall belong exclusively to Client as "work made for hire" upon full payment.`
      },
      {
        num: 'SECTION 3. INDEPENDENT CONTRACTOR STATUS',
        content: `Contractor is an independent contractor and not an employee of Client. Contractor assumes full responsibility for all tax withholdings, insurance, and business expenses.`
      },
      {
        num: 'SECTION 4. TERMINATION',
        content: `Either party may terminate this Agreement by providing ${terms.noticePeriod || '14 Days'} written notice. Client shall pay Contractor for all satisfactory work completed prior to the termination date.`
      }
    ];

  } else if (docType === 'cease_desist') {
    docTitle = "FORMAL CEASE AND DESIST DEMAND NOTICE";

    recitals = `DATE OF NOTICE: ${dateStr}

TO (RECIPIENT):
${nameB}
${addrB}

FROM (SENDER / LEGAL OWNER):
${nameA}
${addrA}

RE: DEMAND TO IMMEDIATELY CEASE AND DESIST UNLAWFUL CONDUCT`;

    definedTerms = [
      { term: 'Infringing Activity', definition: terms.customScope || `Unauthorized distribution, public reproduction, or commercial use of Sender's copyrighted work, trademark, or contract default.` },
      { term: 'Compliance Deadline', definition: terms.deadline || `Seven (7) business days from receipt.` }
    ];

    operativeClauses = [
      {
        num: 'SECTION 1. STATEMENT OF RIGHTS AND VIOLATION',
        content: `Sender ${nameA} is the exclusive legal owner of the work and property in question. It has come to our attention that recipient ${nameB} is using or distributing this property without authorization under ${jurName} law.`
      },
      {
        num: 'SECTION 2. MANDATORY DEMANDS FOR COMPLIANCE',
        content: `You are hereby formally DEMANDED to immediately: (a) Cease and desist all further unauthorized use, copying, or selling of Sender's property; (b) Destroy all infringing copies; and (c) Provide written confirmation certifying compliance.`
      },
      {
        num: 'SECTION 3. RESERVATION OF LEGAL REMEDIES',
        content: `Failure to respond in writing by ${terms.deadline || '7 Business Days'} will compel Sender to initiate immediate formal legal proceedings to seek damages, injunctions, and court costs under ${jurName} law.`
      }
    ];

  } else if (docType === 'terms_privacy') {
    docTitle = "WEBSITE TERMS OF SERVICE AND PRIVACY DISCLOSURE";

    recitals = `PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OR USING THE WEBSITE OPERATED BY ${nameA}.

THIS AGREEMENT governs the access and usage of all digital platforms and services provided by ${nameA} ("Company", "We", "Us").`;

    definedTerms = [
      { term: 'User', definition: `Any person or entity accessing, registering, or using the website or platform.` },
      { term: 'Platform Services', definition: terms.customScope || `Online application, software tools, and associated digital features.` }
    ];

    operativeClauses = [
      {
        num: 'SECTION 1. USER ELIGIBILITY AND ACCOUNT OBLIGATIONS',
        content: `By using the Platform, you represent that you possess full legal capacity to enter into binding contracts under ${jurName} law. You are responsible for keeping account credentials confidential.`
      },
      {
        num: 'SECTION 2. RESTRICTIONS ON USE',
        content: `Users agree not to: (a) copy or reverse engineer platform code; (b) launch automated scrapers or bots; (c) use the site for unlawful purposes; or (d) violate third-party copyright rights.`
      },
      {
        num: 'SECTION 3. DISCLAIMER AND LIMITATION OF LIABILITY',
        content: `THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. COMPANY SHALL NOT BE LIABLE FOR INDIRECT OR INCIDENTAL DAMAGES. TOTAL LIABILITY IS CAPPED AT $100 OR FEES PAID IN THE PRIOR 3 MONTHS.`
      }
    ];

  } else {
    docTitle = "FOUNDER PARTNERSHIP MEMORANDUM OF UNDERSTANDING";

    recitals = `THIS FOUNDER AGREEMENT is made effective on ${dateStr}, by and between:

FOUNDER A: ${nameA}, holding a ${terms.equityA || '50'}% initial equity share; and
FOUNDER B: ${nameB}, holding a ${terms.equityB || '50'}% initial equity share.

BACKGROUND:
The founders intend to establish and operate a commercial business named ${terms.companyName || '[COMPANY NAME]'} ("Venture") under the governing rules below.`;

    definedTerms = [
      { term: 'Founding Equity Split', definition: `Founder A: ${terms.equityA || '50'}% | Founder B: ${terms.equityB || '50'}% (Subject to 4-Year Vesting with 1-Year Cliff).` },
      { term: 'Venture Scope', definition: terms.customScope || `Development, launch, and growth of the company product and commercial operations.` }
    ];

    operativeClauses = [
      {
        num: 'SECTION 1. GOVERNANCE AND DECISION THRESHOLDS',
        content: `Founder A shall serve as Chief Executive Officer, and Founder B shall serve as Chief Technology Officer. Major decisions (expenditures > $5,000, equity grants) require unanimous written approval.`
      },
      {
        num: 'SECTION 2. REVERSE VESTING AND DEPARTURE',
        content: `Founder shares shall vest over 4 years with a 1-year cliff. If a founder departs prior to the 1-year cliff, their unvested shares shall be repurchased by the venture for nominal consideration ($1.00).`
      },
      {
        num: 'SECTION 3. INTELLECTUAL PROPERTY ASSIGNMENT',
        content: `All ideas, designs, code, repositories, and trade secrets created by either founder for the venture shall belong exclusively to the company.`
      }
    ];
  }

  disputeResolution = `GOVERNING LAW AND DISPUTE RESOLUTION:
This Agreement shall be governed by and construed in accordance with the substantive laws of ${jurName}. 

Any dispute arising out of or relating to this Agreement shall be resolved first through good-faith negotiation. If unresolved after thirty (30) days, the dispute shall be submitted to binding arbitration in ${jurName}.`;

  closingText = `IN WITNESS WHEREOF, the parties hereto have executed this ${docTitle} as of the Effective Date written above.`;

  if (customClauses && customClauses.trim().length > 0) {
    operativeClauses.push({
      num: `SECTION ${operativeClauses.length + 1}. SPECIAL CUSTOM CLAUSES`,
      content: customClauses.trim()
    });
  }

  return {
    docRefId,
    dateStr,
    docTitle,
    recitals,
    definedTerms,
    operativeClauses,
    disputeResolution,
    closingText,
    jurisdictionName: jurName,
    toneName: PROTECTIVE_TONES.find(t => t.id === tone)?.label || 'Balanced & Fair',
    partyA: nameA,
    partyB: nameB
  };
}
