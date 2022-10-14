import { BsImages } from 'react-icons/bs';

export default function UploadPhotos() {
  return (
    <div className="mb-10 md:mb-16">
      <p className="mb-3">Upload photos</p>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-gray-500 py-5 md:py-10">
        <BsImages size={40} />
        <div className="text-center">
          <p className="mb-1 cursor-pointer underline hover:text-gray-700">
            Click to upload
          </p>
          <p className="hidden text-gray-700 md:block">
            or drag and drop images
          </p>
        </div>
      </div>
    </div>
  );
}
