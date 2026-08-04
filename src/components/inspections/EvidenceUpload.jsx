import { useState } from "react";
import toast from "react-hot-toast";

import { uploadEvidence }
from "../../api/evidenceApi";

export default function EvidenceUpload({ inspectionId }) {

  const [file, setFile] = useState(null);

  const upload = async () => {

    if (!file) {

      toast.error("Select a file");

      return;

    }

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "inspection",
      inspectionId
    );

    try {

      await uploadEvidence(formData);

      toast.success("Evidence Uploaded");

    } catch {

      toast.error("Upload Failed");

    }

  };

  return (

    <div className="border rounded-lg p-5">

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        onClick={upload}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
      >

        Upload

      </button>

    </div>

  );

}