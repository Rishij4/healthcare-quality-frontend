import { useEffect, useState } from "react";
import { getAppointments } from "../api/appointmentApi";
import toast from "react-hot-toast";

export default function useAppointments() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {

    try {

      const res = await getAppointments();

      setAppointments(res.data);

    } catch {

      toast.error("Unable to load appointments");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadAppointments();

  }, []);

  return {
    appointments,
    loading,
    loadAppointments,
  };

}