import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Upload = () => {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState({ name: "", size: "", url: "" });
  const [file, setFile] = useState("");

  const handleFile = (e) => {
    const { name, size } = e.target.files[0];

    setData({ ...data, name: name, size: size });
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      throw new Error("File invalid to be processed");
    }
  };
  return (
    <>
      <div className="h-[200px] w-full bg-gray-50 flex items-center justify-center">
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label
            className="h-[100px] w-[300px] bg-gray-200  flex items-center justify-center rounded-md cursor-pointer border border-blue-500 active:bg-blue-600 active:text-white"
            htmlFor="form"
          >
            Click to Select a file
          </label>
          <input
            onChange={handleFile}
            placeholder="clli"
            className="hidden"
            id="form"
            type="file"
            accept="images/*"
          />
          {fileName ? <p>{fileName}</p> : <p>No file Selected Yet</p>}
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Upload;
