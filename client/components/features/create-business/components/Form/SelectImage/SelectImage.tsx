import { useField } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ImageScroll from '../../../../../image/scroll/ImageScroll';
import MyLabel from '../MyLabel';
import MySubLabel from '../MySubLabel';

interface SelectImage {
  inputName: string;
}

function SelectImage({ inputName }: SelectImage) {
  const [selectedImages, setSelectedImages] = useState<File[]>();
  const [imagePreview, setImagePreview] = useState<string[]>();

  const [_field, _meta, helpers] = useField(inputName);

  // convert filelist to image urls in order to be rendered
  useEffect(() => {
    if (!selectedImages) return;

    const imageUrls: string[] = [];

    // create objectURLs for multiple image files
    selectedImages.forEach((image) => {
      const objectURL = URL.createObjectURL(image);
      imageUrls.unshift(objectURL);
    });

    setImagePreview(imageUrls);

    // free memory whenever component is unmounted
    return () => {
      imageUrls.forEach((imageURL) => {
        URL.revokeObjectURL(imageURL);
      });
    };
  }, [selectedImages]);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    // convert to array to perform array methods
    const filesArr = Array.from(e.target.files);
    setSelectedImages(filesArr);

    // update formik state
    helpers.setValue(e.target.files);
  };

  return (
    <>
      <div className="mb-5 lg:mb-0">
        <MyLabel>Images</MyLabel>
        <MySubLabel>
          Upload images you want to include on your business profile.
        </MySubLabel>
      </div>
      <div>
        <input
          type="file"
          id="image"
          onChange={handleSelect}
          accept="image/*"
          multiple
          hidden
        />
        <label
          htmlFor="image"
          className="inline-block cursor-pointer rounded-md bg-primaryred px-6 py-2 text-white hover:bg-red-500"
        >
          Upload
        </label>
        <p className="mt-3 text-gray-500">Select up to max of 10 images</p>

        {imagePreview && (
          <div className="flex w-full">
            <ImageScroll
              noItems={imagePreview.length}
              initialItems={2}
              className="mb-4"
            >
              {imagePreview.map((image, index) => (
                <div
                  key={index}
                  className="slider-img relative h-[150px] shrink-0"
                >
                  <Image
                    src={image}
                    key={index}
                    alt="image"
                    layout="fill"
                    className="slider-next-img"
                    objectFit="cover"
                  />
                </div>
              ))}
            </ImageScroll>
          </div>
        )}
      </div>
    </>
  );
}

export default SelectImage;
