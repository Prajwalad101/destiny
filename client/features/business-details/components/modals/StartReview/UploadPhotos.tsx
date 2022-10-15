import Image from 'next/image';
import File from 'public/illustrations/business-details/File.svg';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { classNames } from 'utils/tailwind';

export default function UploadPhotos() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragReject, isDragAccept, open } =
    useDropzone({
      onDrop,
      noClick: true,
      accept: {
        'image/*': ['.jpeg', '.png'],
      },
    });

  const acceptClassName = isDragAccept ? ' bg-gray-50 border-blue-400 ' : '';

  return (
    <div className="mb-10 md:mb-16">
      <p className="mb-3 text-lg font-medium">Upload Photos</p>
      <div
        {...getRootProps()}
        className={classNames(
          'flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 py-5',
          acceptClassName
        )}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <div>
            <Image src={File} alt="file-illustration." width={45} height={45} />
          </div>
          <p className="mb-2 text-lg text-gray-700">Drag and Drop files here</p>
          <p className="mb-5 text-sm text-gray-400">
            Files supported: JPG, PNG, JPEG
          </p>
          <button
            type="button"
            onClick={open}
            className="rounded-md bg-gray-200 px-7 py-2.5 text-gray-700 transition-colors hover:bg-gray-300"
          >
            Browse
          </button>
        </div>
        {isDragReject && (
          <p className="text-gray-400">File type is not allowed</p>
        )}
      </div>
    </div>
  );
}
