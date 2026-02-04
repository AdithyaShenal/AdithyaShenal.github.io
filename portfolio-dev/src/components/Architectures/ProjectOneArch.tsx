import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const ProjectOneArch = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
        <PDFViewer
          config={{
            src: "https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/b7fe6d816cc9470e9f61b7551c58f375d92c335e/jayani_anuththara_intern_cv.pdf",
            theme: { preference: "dark" },
            disabledCategories: ["annotations"],
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};

export default ProjectOneArch;
