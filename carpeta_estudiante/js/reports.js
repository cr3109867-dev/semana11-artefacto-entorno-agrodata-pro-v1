const Reports = (() => {
  function buildPlainTextReport(report) {
    const lines = [];
    lines.push('REPORTE DE INTEGRIDAD - AGRODATA INTEGRIDAD PRO');
    lines.push('=================================================');
    lines.push(`Fecha de generación: ${new Date().toLocaleString()}`);
    lines.push('');
    lines.push(`Total de registros analizados: ${report.summary.total}`);
    lines.push(`Registros válidos: ${report.summary.valid}`);
    lines.push(`Advertencias: ${report.summary.warnings}`);
    lines.push(`Errores: ${report.summary.errors}`);
    lines.push(`Porcentaje de integridad: ${report.summary.integrityRate}%`);
    lines.push('');
    lines.push('PROBLEMAS DETECTADOS:');

    report.issues.forEach((issue, index) => {
      lines.push(`${index + 1}. [${issue.type.toUpperCase()}] ${issue.source} fila ${issue.rowNumber}: ${issue.message}`);
    });

    return lines.join('\n');
  }

  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportTxt(report) {
    downloadFile('reporte_integridad.txt', buildPlainTextReport(report), 'text/plain;charset=utf-8');
  }

  function exportJson(report) {
    downloadFile('reporte_integridad.json', JSON.stringify(report, null, 2), 'application/json;charset=utf-8');
  }

  function exportPdf(report) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const marginLeft = 14;
    let y = 18;

    doc.setFontSize(16);
    doc.text('Reporte de integridad - AgroData Integridad Pro', marginLeft, y);
    y += 10;

    doc.setFontSize(11);
    doc.text(`Fecha de generación: ${new Date().toLocaleString()}`, marginLeft, y);
    y += 8;
    doc.text(`Total de registros analizados: ${report.summary.total}`, marginLeft, y);
    y += 7;
    doc.text(`Registros válidos: ${report.summary.valid}`, marginLeft, y);
    y += 7;
    doc.text(`Advertencias: ${report.summary.warnings}`, marginLeft, y);
    y += 7;
    doc.text(`Errores: ${report.summary.errors}`, marginLeft, y);
    y += 7;
    doc.text(`Porcentaje de integridad: ${report.summary.integrityRate}%`, marginLeft, y);
    y += 10;

    doc.setFontSize(13);
    doc.text('Problemas detectados', marginLeft, y);
    y += 8;
    doc.setFontSize(9);

    if (!report.issues.length) {
      doc.text('No se detectaron problemas de integridad.', marginLeft, y);
    } else {
      report.issues.forEach((issue, index) => {
        const text = `${index + 1}. [${issue.type.toUpperCase()}] ${issue.source} fila ${issue.rowNumber}: ${issue.message}`;
        const lines = doc.splitTextToSize(text, 180);
        if (y + lines.length * 5 > 280) {
          doc.addPage();
          y = 18;
        }
        doc.text(lines, marginLeft, y);
        y += lines.length * 5 + 2;
      });
    }

    doc.save('reporte_integridad.pdf');
  }

  return { buildPlainTextReport, exportTxt, exportJson, exportPdf };
})();
