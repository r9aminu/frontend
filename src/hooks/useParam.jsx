import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useParam() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("serviceId")) {
      return navigate("/");
    }
  }, [searchParams, navigate]);

  return searchParams.get("serviceId");
}
