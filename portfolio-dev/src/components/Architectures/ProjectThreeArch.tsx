import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const ProjectThreeArch = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
        <PDFViewer
          config={{
            src: "",
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

export default ProjectThreeArch;
