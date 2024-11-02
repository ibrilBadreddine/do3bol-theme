import "./upload.style.scss";
import { useState } from "react";
import Icon from "@/views/components/shared/icons";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);

  /**
   *
   * @param event HTMLInputElement
   * @returns Files
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files?.length && setFiles([...files, ...e.target.files]);

  return (
    <div className="upload-container">
      <div className="files-input">
        <div className="input-box">
          <div className="box-icon">
            <Icon name="photo" size={30} />
          </div>
          <span className="box-title">
            Drag your photo here, or choose file
          </span>
          <p className="box-subtitle">Maximum file size 2mb</p>
        </div>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          multiple
        />
      </div>
      <div className="files-output">
        {files?.map((file, i) => (
          <div key={i} className="output-box">
            <div className="box-preview">
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <div className="box-info">
                <span>{file.name.split(".")[0]}</span>
                <p>
                  {file.name.split(".")[1].toUpperCase() + " - "}
                  {Number((file.size / 1024 / 1024).toFixed(2)) < 1
                    ? (file.size / 1024).toFixed(2) + " kb"
                    : (file.size / 1024 / 1024).toFixed(2) + " mb"}
                </p>
              </div>
            </div>
            <div className="box-actions">
              <button
                onClick={() =>
                  setFiles(files.filter((fl) => fl.name != file.name))
                }
                className="icon sm">
                <Icon name="trash" size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
