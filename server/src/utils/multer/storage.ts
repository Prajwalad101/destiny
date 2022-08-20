import multer from 'multer';

export const storage = (path: string) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path);
    },
    filename: (req, file, cb) => {
      const currentDate = new Date().toISOString().split('T')[0];
      //! Suffix might not be 100% unique
      const uniqueSuffix =
        currentDate + '-' + Date.now() + Math.round(Math.random() * 1e9);

      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });

  return storage;
};
