function FilePreview({ file, setFiles }) {
  const isImage = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file.Location);
  return (
    <div>
      <div className={`thumbnail${isImage ? '' : ' thumbnail--file'}`}>
        <div className="img-container">
          {isImage ? <img src={file.Location} alt="..." /> : <p className="approved">{file.key}</p>}
        </div>
        <span className="cross-btn" onClick={() => { setFiles(files => files.filter(f => f != file)) }}><i className='fa fa-close'></i></span>
      </div>
    </div>

  );
}

export default FilePreview;