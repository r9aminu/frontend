import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../apis";

export default function useFetchCategories(serviceId) {
  return useQuery({
    queryKey: ["categories", serviceId],
    queryFn: () => fetchCategories(serviceId),
    enabled: !!serviceId,
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
