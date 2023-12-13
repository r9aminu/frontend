import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "../../../apis";

export default function useFetchServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
