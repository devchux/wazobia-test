import { ChangeEvent, useState } from "react";

export const useFile = () => {
    const [fileName, setFileName] = useState("");
    const [filePreview, setFilePreview] = useState("");

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
  
      if (!file) return;
  
      setFileName(file.name);
      setFilePreview(URL.createObjectURL(file));
    };
    return { handleImageChange, filePreview, fileName }
}