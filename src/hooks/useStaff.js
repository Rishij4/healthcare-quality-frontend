import { useEffect, useState } from "react";
import { getStaff } from "../api/staffApi";
import toast from "react-hot-toast";

export default function useStaff() {

    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadStaff = async () => {

        try {

            const res = await getStaff();

            setStaff(res.data);

        } catch {

            toast.error("Unable to load staff");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadStaff();

    }, []);

    return {

        staff,
        loading,
        loadStaff,

    };

}