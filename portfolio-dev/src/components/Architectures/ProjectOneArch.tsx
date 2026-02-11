import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const ProjectOneArch = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
        <PDFViewer
          config={{
            src: "https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/17279db5fae4688abdbadbea148bd86ee56afc2b/Milkflow%20-%20System%20Architecture.pdf",
            theme: { preference: "dark" },
            disabledCategories: [
              "annotation",
              "print",
              "export",
              "redaction",
              "panel",
            ],
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};

export default ProjectOneArch;
// https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/17279db5fae4688abdbadbea148bd86ee56afc2b/Milkflow%20-%20Software%20Requirements%20Specification.pdf
