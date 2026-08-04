import { useEffect, useState } from "react";
import { getCAPAs } from "../api/capaApi";
import toast from "react-hot-toast";

export default function useCAPA() {

  const [capas, setCAPAs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCAPAs = async () => {

    try {

      const res = await getCAPAs();

      setCAPAs(res.data);

    } catch {

      toast.error("Unable to load CAPA");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadCAPAs();

  }, []);

  return {

    capas,
    loading,
    loadCAPAs,

  };

}