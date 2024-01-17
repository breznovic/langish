export const loadDataFromLocalStorage = (key: string) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.log("Error loading data from localStorage:", error);
    return undefined;
  }
};
