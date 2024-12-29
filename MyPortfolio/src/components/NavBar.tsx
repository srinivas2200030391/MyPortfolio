import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";
import logo from "../assets/sklogo.png";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const pdfPath = "Srinivas OverLeaf Resume.pdf";

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
  };

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
        <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
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
              <h2 className="text-xl font-bold text-gray-800">Resume</h2>
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

            <div className="relative h-[calc(90vh-100px)] w-full overflow-hidden rounded-lg bg-gray-50 shadow-inner">
              <iframe
                src={pdfPath}
                className="h-full w-full"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
