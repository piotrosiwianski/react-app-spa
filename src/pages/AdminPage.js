import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

const permission = true;

const AdminPage = () => {
    return ( 
        <>
        <Routes>
            <Route path="*" element={permission ? (<h3>Strona admina</h3>) : (<Navigate to="/login" replace/>)}/>
        </Routes>
        </>
     );
}
 
export default AdminPage;