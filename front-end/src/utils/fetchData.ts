export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fetchedData = await response.json();
    return fetchedData;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
};
