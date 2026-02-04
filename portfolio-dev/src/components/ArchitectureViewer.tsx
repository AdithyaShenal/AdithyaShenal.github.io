import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const ArchitectureViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold">System Architecture</h1>
          <p className="text-sm text-base-content/60">
            Designed & documented by me
          </p>
        </div>

        {/* PDF */}
        <div className="border border-gray-500/40 rounded-xl bg-base-100 p-4 overflow-auto">
          <Document
            file="/pdfs/system-architecture.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={page} scale={1.2} />
          </Document>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-1 rounded-full border border-gray-500/40"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {page} / {numPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, numPages ?? p))}
            className="px-4 py-1 rounded-full border border-gray-500/40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureViewer;
