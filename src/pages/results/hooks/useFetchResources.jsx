import { useQuery } from "@tanstack/react-query";
import { fetchFilteredResources } from "../../../apis";

export default function useFetchResources({ serviceId, categories = [], isEnabled }) {
  return useQuery({
    queryKey: ["resources", ...categories],
    queryFn: () => fetchFilteredResources(serviceId, categories),
    enabled: isEnabled,
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
