import { manufacturers } from "@constants";

export function filteredManufacturer(query: string): string[] {
  const result =
    query == ""
      ? manufacturers
      : manufacturers.filter((m) => {
          return m
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });
  return result;
}
