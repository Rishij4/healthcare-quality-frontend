import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDashboard } from "../api/dashboardApi";
import { setDashboard } from "../redux/slices/dashboardSlice";

export default function useDashboard() {

    const dispatch = useDispatch();

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const data = await fetchDashboard();

                dispatch(setDashboard(data));

            } catch (err) {

                console.error(err);

            }

        };

        loadDashboard();

    }, [dispatch]);

}