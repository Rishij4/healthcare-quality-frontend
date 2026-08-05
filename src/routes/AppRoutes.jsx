import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import InspectionList from "../pages/inspections/InspectionList";
import Reports from "../pages/reports/Reports";
import Analytics from "../pages/analytics/Analytics";
import Profile from "../pages/profile/Profile";

import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import Patients from "../pages/patients/Patients";
import AddPatient from "../pages/patients/AddPatient";
import EditPatient from "../pages/patients/EditPatient";
import PatientDetails from "../pages/patients/PatientDetails";
import AddInspection from "../pages/inspections/AddInspection";
import DepartmentList from "../pages/departments/DepartmentList";
import AddDepartment from "../pages/departments/AddDepartment";
import StaffList from "../pages/staff/StaffList";
import AddStaff from "../pages/staff/AddStaff";
import EditStaff from "../pages/staff/EditStaff";
import StaffDetails from "../pages/staff/StaffDetails";
import RoleList from "../pages/roles/RoleList";
import PermissionList from "../pages/permissions/PermissionList";
import InspectionDetails from "../pages/inspections/InspectionDetails";
import AppointmentList from "../pages/appointments/AppointmentList";
import AddAppointment from "../pages/appointments/AddAppointment";
import DefectList from "../pages/defects/DefectList";
import CAPAList from "../pages/capa/CAPAList";
import Notifications from "../pages/notifications/Notifications";
import AddDefect from "../pages/defects/AddDefect";
import EditDefect from "../pages/defects/EditDefect";
import DefectDetails from "../pages/defects/DefectDetails";
import AddCAPA from "../pages/capa/AddCAPA";
import EditCAPA from "../pages/capa/EditCAPA";
import CAPADetails from "../pages/capa/CAPADetails";
import AppointmentDetails from "../pages/appointments/AppointmentDetails";
import EditAppointment from "../pages/appointments/EditAppointment";
import EditDepartment from "../pages/departments/EditDepartment";
import DepartmentDetails from "../pages/departments/DepartmentDetails";
export default function AppRoutes() {
  return (
    <Routes>

      {/* Redirect root URL */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inspections"
        element={
          <ProtectedRoute>
            <InspectionList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
      <Route
  path="/patients"
  element={
    <ProtectedRoute>
      <Patients />
    </ProtectedRoute>
  }
/>

<Route
  path="/patients/add"
  element={
    <ProtectedRoute>
      <AddPatient />
    </ProtectedRoute>
  }
/>

<Route
  path="/patients/edit/:id"
  element={
    <ProtectedRoute>
      <EditPatient />
    </ProtectedRoute>
  }
/>
<Route
  path="/patients/view/:id"
  element={
    <ProtectedRoute>
      <PatientDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/inspections/add"
  element={
    <ProtectedRoute>
      <AddInspection />
    </ProtectedRoute>
  }
/>
<Route
  path="/departments"
  element={
    <ProtectedRoute>
      <DepartmentList />
    </ProtectedRoute>
  }
/>
<Route
  path="/departments/add"
  element={
    <ProtectedRoute>
      <AddDepartment />
    </ProtectedRoute>
  }
/>
<Route
    path="/staff"
    element={
        <ProtectedRoute>
            <StaffList />
        </ProtectedRoute>
    }
/>
<Route
    path="/roles"
    element={
        <ProtectedRoute>
            <RoleList />
        </ProtectedRoute>
    }
/>
<Route
  path="/permissions"
  element={
    <ProtectedRoute>
      <PermissionList />
    </ProtectedRoute>
  }
/>
<Route
  path="/inspections/:id"
  element={
    <ProtectedRoute>
      <InspectionDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/appointments"
  element={
    <ProtectedRoute>
      <AppointmentList />
    </ProtectedRoute>
  }
/>

<Route
  path="/appointments/add"
  element={
    <ProtectedRoute>
      <AddAppointment />
    </ProtectedRoute>
  }
/>
<Route
  path="/defects"
  element={
    <ProtectedRoute>
      <DefectList />
    </ProtectedRoute>
  }
/>

<Route
  path="/capa"
  element={
    <ProtectedRoute>
      <CAPAList />
    </ProtectedRoute>
  }
/>
<Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>

<Route
  path="/defects/add"
  element={
    <ProtectedRoute>
      <AddDefect />
    </ProtectedRoute>
  }
/>

<Route
  path="/defects/edit/:id"
  element={
    <ProtectedRoute>
      <EditDefect />
    </ProtectedRoute>
  }
/>

<Route
  path="/defects/:id"
  element={
    <ProtectedRoute>
      <DefectDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/capa/add"
  element={
    <ProtectedRoute>
      <AddCAPA />
    </ProtectedRoute>
  }
/>

<Route
  path="/capa/edit/:id"
  element={
    <ProtectedRoute>
      <EditCAPA />
    </ProtectedRoute>
  }
/>

<Route
  path="/capa/:id"
  element={
    <ProtectedRoute>
      <CAPADetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/appointments/edit/:id"
  element={
    <ProtectedRoute>
      <EditAppointment />
    </ProtectedRoute>
  }
/>

<Route
  path="/appointments/:id"
  element={
    <ProtectedRoute>
      <AppointmentDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/staff/add"
  element={
    <ProtectedRoute>
      <AddStaff />
    </ProtectedRoute>
  }
/>

<Route
  path="/staff/edit/:id"
  element={
    <ProtectedRoute>
      <EditStaff />
    </ProtectedRoute>
  }
/>

<Route
  path="/staff/:id"
  element={
    <ProtectedRoute>
      <StaffDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/departments/edit/:id"
  element={
    <ProtectedRoute>
      <EditDepartment />
    </ProtectedRoute>
  }
/>

<Route
  path="/departments/:id"
  element={
    <ProtectedRoute>
      <DepartmentDetails />
    </ProtectedRoute>
  }
/>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
