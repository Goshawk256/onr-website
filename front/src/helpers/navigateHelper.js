import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

export const navigateTo = (navigationRoute) => {
  navigate(navigationRoute);
};
