import multer from 'multer';

/**
 * returns a  middleware to process files
 */
function uploadFiles() {
  const upload = multer({
    storage: storage('../client/public/uploads/images/business/'),
  });

  return upload.array('image', 10);
}

const storage = (path: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path);
    },
    filename: (_req, file, cb) => {
      const currentDate = new Date().toISOString().split('')[0];

      //! Suffix might not be 100% unique
      const uniqueSuffix =
        currentDate + '-' + Date.now() + Math.round(Math.random() * 1e9);

      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });

  return storage;
};

export default uploadFiles;
