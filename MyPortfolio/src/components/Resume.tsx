import React from 'react';
import { Download, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-4xl h-[80vh] p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 text-sm border rounded hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <iframe
          src="/path-to-your-resume.pdf"
          className="w-full h-full rounded border"
          title="Resume PDF"
        />
      </div>
    </div>
  );
};

export default ResumeModal;