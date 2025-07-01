// GeradorDePdf.jsx - Versão moderna e visualmente elegante
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logoBase64 from "../../../../imagens/LogoBase";

export function gerarPdf(cliente, servicos) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const azulClaro = [0, 153, 255];
  const margem = 14;

  doc.addImage(logoBase64, "PNG", margem, 10, 42, 42); // ⬅️ aumentamos de 35x35 → 42x42

  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(...azulClaro); // ← azul claro em "BIG"
  doc.text("BIG", margem + 44, 22); 

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...azulClaro); // ← azul claro nos subtítulos
  doc.text("Refrigeração", margem + 44, 30);
  doc.text("Manutenção", margem + 44, 36);
  doc.text("Instalação", margem + 44, 42);

  // Linha divisória (meio apagada)
  doc.setDrawColor(0, 0, 0); // Preto
  doc.setLineWidth(0.3); // Fina
  doc.line(margem, 50, pageWidth - margem, 50);

  // === Título do documento ===
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...[0,0,0]);
  doc.setFontSize(20);
  doc.text("ORÇAMENTO", pageWidth / 2, 60, { align: "center" });

  // === Cliente ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(`${cliente}`, margem, 70);

  // === Tabela ===
  const colunas = ["Serviço", "Qtde", "Valor Unitário", "Subtotal"];
  const linhas = servicos.map(({ nome, quantidade, valorUnitario }) => [
    nome,
    quantidade,
    `R$ ${valorUnitario.toFixed(2).replace(".", ",")}`,
    `R$ ${(quantidade * valorUnitario).toFixed(2).replace(".", ",")}`,
  ]);

  autoTable(doc, {
    startY: 78,
    head: [colunas],
    body: linhas,
    theme: "striped",
    styles: {
      fontSize: 11,
      cellPadding: 4,
      valign: "middle",
    },
    headStyles: {
      fillColor: azulClaro,
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineColor: 230,
    tableLineWidth: 0.3,
    margin: { left: margem, right: margem },
    didDrawPage: (data) => {
      const total = servicos.reduce(
        (acc, item) => acc + item.quantidade * item.valorUnitario,
        0
      );
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(0);
      doc.text(
        `Total: R$ ${total.toFixed(2).replace(".", ",")}`,
        margem,
        data.cursor.y + 10
      );
    },
  });

 const pageHeight = doc.internal.pageSize.height;
const rodapeAltura = 60; // altura do rodapé
const rodapeY = pageHeight - rodapeAltura;

// Fundo cinza bem apagado
doc.setFillColor(230, 230, 230); // cinza claro suave
doc.rect(0, rodapeY, pageWidth, rodapeAltura, "F");

// Texto preto para melhor leitura
doc.setTextColor(0, 0, 0);
doc.setFontSize(13);
doc.setFont("helvetica", "normal");

// Nome do técnico um pouco acima do rodapé
doc.text("Técnico: Claudio Gadelha Ferreira", margem, rodapeY - 10);
doc.setDrawColor(0, 0, 0);
doc.setLineWidth(0.5);
doc.line(margem, rodapeY - 8, pageWidth - margem, rodapeY - 8);
// Informações da empresa no rodapé
doc.setFont("helvetica", "bold");
doc.text("Big Refrigeração", margem, rodapeY + 10);
doc.setFont("helvetica", "normal");
doc.text("Tel: (91) 99906-9633", margem, rodapeY + 18);
doc.text("Residencial Viver Primavera, Rua do Ronario,", margem, rodapeY + 26);
doc.text("Bloco 28, Ap 202", margem, rodapeY + 34);
doc.text("Bairro Tapana - Belém/PA | CEP: 66625-890", margem, rodapeY + 42);

doc.setFontSize(10);
doc.text("CNPJ: 58.228.122/0001-10", margem, rodapeY + 50);



  doc.save("orcamento.pdf");
}
