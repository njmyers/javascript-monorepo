/**
 * creates an S3 compatible object from a filepath
 * @return {array}     an array of objects with filePath and streams
 */
const createDirectoryObject = (path) => ({ Key: path });

export default createDirectoryObject;
