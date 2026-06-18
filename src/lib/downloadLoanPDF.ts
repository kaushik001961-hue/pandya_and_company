import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface LoanData {
  amount: number;
  rate: number;
  years: number;
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

export function downloadLoanPDF(data: LoanData) {
  const doc = new jsPDF();

  const img = new Image();

  img.src = "/logo.png";

  img.onload = () => {

    // ================= HEADER =================

    doc.setFillColor(15, 30, 80);
    doc.rect(0, 0, 210, 38, "F");

    // Company Logo

    doc.addImage(
      img,
      "PNG",
      10,
      5,
      24,
      24
    );

    // Company Name

    doc.setTextColor(255, 255, 255);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);

    doc.text(
      "PANDYA & COMPANY",
      40,
      15
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    doc.text(
      "Chartered Accountants & Financial Consultants",
      40,
      22
    );

    doc.text(
      "Income Tax • GST • Audit • Loans • Investments",
      40,
      29
    );

    // ================= REPORT TITLE =================

    doc.setTextColor(0, 0, 0);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    doc.text(
      "Professional Loan EMI Report",
      15,
      50
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    doc.text(
      `Generated : ${new Date().toLocaleString()}`,
      15,
      57
    );

    // ================= SUMMARY TABLE =================

    autoTable(doc, {

      startY: 64,

      head: [["Loan Details", "Value"]],

      body: [

        [
          "Loan Amount",
          `₹ ${data.amount.toLocaleString()}`
        ],

        [
          "Interest Rate",
          `${data.rate}%`
        ],

        [
          "Loan Tenure",
          `${data.years} Years`
        ],

        [
          "Monthly EMI",
          `₹ ${data.emi.toFixed(2)}`
        ],

        [
          "Total Interest",
          `₹ ${data.totalInterest.toFixed(2)}`
        ],

        [
          "Total Payment",
          `₹ ${data.totalPayment.toFixed(2)}`
        ],

      ],

      headStyles: {
        fillColor: [15, 30, 80],
      },

      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },

    });

    // ================= EMI SCHEDULE =================

    const monthlyRate = data.rate / 12 / 100;

    const months = data.years * 12;

    let balance = data.amount;

    const rows: any[] = [];

    for (let i = 1; i <= months; i++) {

      const interest = balance * monthlyRate;

      const principal = data.emi - interest;

      balance -= principal;

      rows.push([

        i,

        `₹ ${principal.toFixed(2)}`,

        `₹ ${interest.toFixed(2)}`,

        `₹ ${Math.max(balance, 0).toFixed(2)}`,

      ]);

    }

    autoTable(doc, {

      startY: (doc as any).lastAutoTable.finalY + 10,

      head: [[
        "Month",
        "Principal",
        "Interest",
        "Outstanding Balance"
      ]],

      body: rows,

      styles: {
        fontSize: 8,
      },

      headStyles: {
        fillColor: [15, 30, 80],
      },

      alternateRowStyles: {
        fillColor: [250, 250, 250],
      },

    });

    // ================= FOOTER =================

    const footerY =
      (doc as any).lastAutoTable.finalY + 15;

    doc.setFont("helvetica", "bold");

    doc.setFontSize(12);

    doc.text(
      "Pandya & Company",
      15,
      footerY
    );

    doc.setFont("helvetica", "normal");

    doc.setFontSize(10);

    doc.text(
      "Chartered Accountants & Financial Consultants",
      15,
      footerY + 6
    );

    doc.text(
      "Loan | GST | Tax | Accounting | Business Consultancy",
      15,
      footerY + 12
    );

    doc.text(
      "www.pandyaandcompany.in",
      15,
      footerY + 18
    );

    // ================= DISCLAIMER =================

    doc.setTextColor(120);

    doc.setFontSize(8);

    doc.text(
      "This report is computer generated and intended for estimation purposes only.",
      15,
      285
    );

    doc.text(
      "Actual EMI may vary depending on lender terms and processing charges.",
      15,
      290
    );

    // ================= SAVE =================

    doc.save("Pandya-Company-Loan-EMI-Report.pdf");

  };

  img.onerror = () => {
    alert("Logo image not found. Please place logo.png inside the public folder.");
  };
}