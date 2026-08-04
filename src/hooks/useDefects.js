import { useEffect, useState } from "react";
import { getDefects } from "../api/defectApi";
import toast from "react-hot-toast";

export default function useDefects() {
  const [defects, setDefects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDefects = async () => {
    try {
      const res = await getDefects();
      setDefects(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load defects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDefects();
  }, []);

  return {
    defects,
    loading,
    loadDefects,
  };
}