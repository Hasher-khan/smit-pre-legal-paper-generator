import { jsPDF } from 'jspdf';

/**
 * Generates a clean, professional, publication-grade vector PDF of the legal document.
 * This guarantees crisp text, perfect page breaks, correct margins, and zero visual glitches.
 */
export function generateLegalPdf(activeDoc) {
  if (!activeDoc) return;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 20; // 20mm margins
  const printableWidth = pageWidth - margin * 2; // 170mm
  let y = 22;

  // Helper to trigger page break cleanly
  const checkPageBreak = (neededHeight = 12) => {
    if (y + neededHeight > pageHeight - 22) {
      doc.addPage();
      y = 22;
      addPageHeader();
    }
  };

  // Header on Page 2+
  const addPageHeader = () => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`PRE-LEGAL DRAFT • REF: ${activeDoc.docRefId} • ${activeDoc.jurisdictionName}`, margin, 14);
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.2);
    doc.line(margin, 16, pageWidth - margin, 16);
  };

  // --- DOCUMENT COVER / TOP HEADER (Page 1) ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text(`PRE-LEGAL DRAFT  •  REF: ${activeDoc.docRefId}  •  JURISDICTION: ${activeDoc.jurisdictionName.toUpperCase()}`, pageWidth / 2, y, { align: 'center' });
  y += 7;

  // Document Title
  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // slate-900
  const titleLines = doc.splitTextToSize(activeDoc.docTitle.toUpperCase(), printableWidth);
  doc.text(titleLines, pageWidth / 2, y, { align: 'center' });
  y += (titleLines.length * 7) + 2;

  // Date and Metadata Sub-header
  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Effective Date: ${activeDoc.dateStr}   |   Tone & Framework: ${activeDoc.toneName}`, pageWidth / 2, y, { align: 'center' });
  y += 6;

  // Thick Horizontal Rule
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageWidth - margin, y);
  y += 9;

  // --- SECTION 1: RECITALS AND PARTIES ---
  checkPageBreak(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('1. RECITALS AND PARTIES', margin, y);
  y += 2.5;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  doc.setFont('times', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  
  // Split recitals paragraphs
  const recitalParagraphs = (activeDoc.recitals || '').split('\n').filter(p => p.trim());
  for (const para of recitalParagraphs) {
    const lines = doc.splitTextToSize(para, printableWidth);
    for (const line of lines) {
      checkPageBreak(6);
      doc.text(line, margin, y);
      y += 5.5;
    }
    y += 2.5;
  }
  y += 4;

  // --- SECTION 2: DEFINED TERMS ---
  if (activeDoc.definedTerms && activeDoc.definedTerms.length > 0) {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('2. DEFINED TERMS', margin, y);
    y += 2.5;
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    for (const dt of activeDoc.definedTerms) {
      checkPageBreak(10);
      const termPrefix = `"${dt.term}": `;
      const fullText = `${termPrefix}${dt.definition}`;
      const dtLines = doc.splitTextToSize(fullText, printableWidth - 4);
      
      for (let i = 0; i < dtLines.length; i++) {
        checkPageBreak(5.5);
        if (i === 0) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9.5);
          doc.setTextColor(15, 23, 42);
        } else {
          doc.setFont('times', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(30, 41, 59);
        }
        doc.text(dtLines[i], margin + 2, y);
        y += 5.5;
      }
      y += 2;
    }
    y += 4;
  }

  // --- SECTION 3: OPERATIVE CLAUSES ---
  if (activeDoc.operativeClauses && activeDoc.operativeClauses.length > 0) {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('3. OPERATIVE CLAUSES & TERMS', margin, y);
    y += 2.5;
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    for (const clause of activeDoc.operativeClauses) {
      checkPageBreak(14);
      
      // Section Header (e.g. SECTION 1. DEFINITION OF CONFIDENTIAL INFORMATION)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(clause.num, margin, y);
      y += 5;

      // Section Content
      doc.setFont('times', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(30, 41, 59);
      const clauseLines = doc.splitTextToSize(clause.content, printableWidth - 4);
      for (const line of clauseLines) {
        checkPageBreak(5.5);
        doc.text(line, margin + 4, y);
        y += 5.5;
      }
      y += 4;
    }
  }

  // --- SECTION 4: GOVERNING LAW & DISPUTE RESOLUTION ---
  checkPageBreak(22);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('4. GOVERNING LAW AND DISPUTE RESOLUTION', margin, y);
  y += 2.5;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  doc.setFont('times', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  const dispParagraphs = (activeDoc.disputeResolution || '').split('\n').filter(p => p.trim());
  for (const para of dispParagraphs) {
    const lines = doc.splitTextToSize(para, printableWidth);
    for (const line of lines) {
      checkPageBreak(5.5);
      doc.text(line, margin, y);
      y += 5.5;
    }
    y += 2;
  }
  y += 8;

  // --- SECTION 5: EXECUTION & SIGNATURE BLOCKS ---
  checkPageBreak(55); // Ensure entire signature area fits on page
  
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  const closingText = activeDoc.closingText || `IN WITNESS WHEREOF, the parties hereto have executed this ${activeDoc.docTitle} as of the Effective Date written above.`;
  const closingLines = doc.splitTextToSize(closingText, printableWidth);
  for (const line of closingLines) {
    doc.text(line, pageWidth / 2, y, { align: 'center' });
    y += 5;
  }
  y += 12;

  // Side-by-side Party A & Party B Signatures
  const colWidth = (printableWidth - 20) / 2;
  const col1X = margin;
  const col2X = margin + colWidth + 20;

  // Titles
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(`PARTY A: ${(activeDoc.partyA || 'FIRST PARTY').toUpperCase()}`, col1X, y);
  doc.text(`PARTY B: ${(activeDoc.partyB || 'SECOND PARTY').toUpperCase()}`, col2X, y);
  y += 16;

  // Signature Underlines
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.4);
  doc.line(col1X, y, col1X + colWidth, y);
  doc.line(col2X, y, col2X + colWidth, y);
  y += 5;

  // Signature Details
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);

  doc.text('By: _________________________________', col1X, y);
  doc.text('By: _________________________________', col2X, y);
  y += 5;

  doc.text(`Name: ${activeDoc.partyA || 'First Party'}`, col1X, y);
  doc.text(`Name: ${activeDoc.partyB || 'Second Party'}`, col2X, y);
  y += 4.5;

  doc.text('Title: Authorized Signatory', col1X, y);
  doc.text('Title: Authorized Signatory', col2X, y);
  y += 4.5;

  doc.text(`Date: ${activeDoc.dateStr}`, col1X, y);
  doc.text(`Date: ${activeDoc.dateStr}`, col2X, y);
  y += 12;

  // --- FOOTER FOR ALL PAGES ---
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    
    // Bottom border
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`LegalGen AI • Ref: ${activeDoc.docRefId} • Confidential Pre-Legal Document`, margin, pageHeight - 10);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  }

  // Save the PDF
  const safeName = (activeDoc?.docTitle || 'legal_document').toLowerCase().replace(/[^a-z0-9]+/g, '_');
  doc.save(`${safeName}_${activeDoc?.docRefId || 'draft'}.pdf`);
}
