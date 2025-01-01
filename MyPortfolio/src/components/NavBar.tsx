import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";
import logo from "../assets/sklogo.png";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [scale, setScale] = useState(1.0);

  const pdfPath = "/Srinivas OverLeaf Resume.pdf";

  useEffect(() => {
    if (isResumeModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isResumeModalOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResumeModal = () => {
    setIsResumeModalOpen(!isResumeModalOpen);
    setPageNumber(1);
    setScale(1.0);
    setIsLoading(true);
    setPdfError(null);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setPdfError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("PDF Load Error:", error);
    setIsLoading(false);
    setPdfError("Failed to load PDF. Please try again.");
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => {
      const nextPage = prevPageNumber + offset;
      return nextPage > 0 && nextPage <= (numPages || 1)
        ? nextPage
        : prevPageNumber;
    });
  };

  const adjustScale = (delta: number) => {
    setScale((prevScale) => {
      const newScale = prevScale + delta;
      return Math.min(Math.max(newScale, 0.5), 2);
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isResumeModalOpen) return;

      switch (e.key) {
        case "ArrowRight":
          changePage(1);
          break;
        case "ArrowLeft":
          changePage(-1);
          break;
        case "Escape":
          toggleResumeModal();
          break;
        case "+":
          adjustScale(0.1);
          break;
        case "-":
          adjustScale(-0.1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumeModalOpen, numPages]);

  const handleLinkClick = (
    e: React.MouseEvent,
    href: string,
    label: string
  ) => {
    e.preventDefault();
    if (label === "Resume") {
      toggleResumeModal();
      setIsMobileMenuOpen(false);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Navigation */}
        <div className="mx-auto hidden max-w-4xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#" className="block">
                <img src={logo} width={130} alt="logo" className="h-auto" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm text-white transition-colors hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) =>
                        handleLinkClick(e, item.href, item.label)
                      }>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="block">
                <img src={logo} alt="logo" width={90} className="m-2 h-auto" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5 text-white" />
                ) : (
                  <FaBars className="m-2 h-6 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 pb-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg text-white transition-colors hover:text-yellow-400"
                    onClick={(e) => handleLinkClick(e, item.href, item.label)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 h-[90vh] w-full max-w-4xl rounded-lg bg-gray-100 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-gray-800">Resume</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>
                    Page {pageNumber} of {numPages || "-"}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => changePage(-1)}
                      disabled={pageNumber <= 1}
                      className="rounded p-1 hover:bg-gray-200 disabled:opacity-50"
                      aria-label="Previous page">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => changePage(1)}
                      disabled={pageNumber >= (numPages || 1)}
                      className="rounded p-1 hover:bg-gray-200 disabled:opacity-50"
                      aria-label="Next page">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustScale(-0.1)}
                    className="rounded-lg p-1 hover:bg-gray-200"
                    aria-label="Zoom out">
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <span className="min-w-[3rem] text-center text-sm">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => adjustScale(0.1)}
                    className="rounded-lg p-1 hover:bg-gray-200"
                    aria-label="Zoom in">
                    <ZoomIn className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={pdfPath}
                  download
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                  <Download className="h-4 w-4" />
                  Download
                </a>
                <button
                  onClick={toggleResumeModal}
                  className="rounded-full p-2 transition-colors hover:bg-gray-200"
                  aria-label="Close modal">
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="relative h-[calc(90vh-100px)] w-full overflow-auto rounded-lg bg-gray-50 shadow-inner">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                </div>
              )}

              {pdfError ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
                  <span className="text-red-500">{pdfError}</span>
                  <button
                    onClick={() => {
                      setIsLoading(true);
                      setPdfError(null);
                    }}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="flex min-h-full items-center justify-center p-4">
                  <Document
                    file={pdfPath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={null}
                    className="mx-auto"
                    options={{
                      cMapUrl: "https://unpkg.com/pdfjs-dist@4.8.69/cmaps/",
                      cMapPacked: true,
                    }}>
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className="max-h-[calc(90vh-120px)] w-auto rounded-lg shadow-lg"
                      loading={null}
                    />
                  </Document>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
