import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const ProjectTwoArch = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
        <PDFViewer
          config={{
            src: "https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/87d225a0ea652a0c03baced8aad8874c87b1feba/Windtalk%20App%20-%20Architecture.pdf",
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

export default ProjectTwoArch;
