import React, { useState } from "react";

interface ProjectMediaUploadProps {
  onUpload: (mediaFiles: File[]) => void;
}

const ProjectMediaUpload: React.FC<ProjectMediaUploadProps> = ({
  onUpload,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (selectedFiles.length + files.length > 19) {
        alert("You can upload a maximum of 15 images and 4 videos.");
        return;
      }
      setSelectedFiles((prev) => [...prev, ...files]);
      onUpload(files);
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setSelectedFiles((prev) => prev.filter((file) => file !== fileToRemove));
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Upload Media</h3>
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-orange-500 file:text-white hover:file:bg-orange-600"
      />
      <ul className="mt-4 space-y-2">
        {selectedFiles.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-2"
          >
            <p className="text-sm text-gray-700">{file.name}</p>
            <button
              onClick={() => handleRemoveFile(file)}
              className="text-red-500 hover:underline text-xs"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMediaUpload;
