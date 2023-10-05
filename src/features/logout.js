import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
      navigate('/');
      localStorage.removeItem('authToken');
      window.location.reload(); // Refresh the page to reflect logout
    };
  
    return <button className="logout" onClick={handleLogout}>Logout</button>;
}
export default Logout;  