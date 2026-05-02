import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import resume from "../assets/resume.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError("");
  };

  const onLoadError = (error: Error) => {
    setError(error.message);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md text-center">
          <p className="font-semibold">Error loading PDF</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-background  p-6 mx-auto max-w-fit">
          <Document
            file={resume}
            onLoadSuccess={onLoadSuccess}
            onLoadError={onLoadError}
            loading={
              <div className="flex items-center justify-center py-12 min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              </div>
            }
          >
            <div className="space-y-6">
              {numPages > 0 &&
                Array.from({ length: numPages }, (_, index) => (
                  <div key={`page_${index + 1}`} className="relative">
                    {numPages > 1 && (
                      <div className="text-center mb-3">
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                          Page {index + 1} of {numPages}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <Page
                          pageNumber={index + 1}
                          width={Math.min(
                            900,
                            typeof window !== "undefined"
                              ? window.innerWidth - 120
                              : 900
                          )}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          loading={
                            <div className="flex items-center justify-center h-96">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Document>
        </div>
      </div>
    </div>
  );
}
