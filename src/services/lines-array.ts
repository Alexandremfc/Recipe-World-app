
export const linesArray = (text: string) => {
    return text.split("\n").filter((line) => line.trim() !== "");
  };