const preprocessText = (originalText) => {
    // Removing special characters
    let cleanedText = originalText.replace(/[^a-zA-Z0-9 ]/g, "");
  
    // Lowercasing all text
    cleanedText = cleanedText.toLowerCase();
  
    // Removing stopwords
    const stopwords = ["a", "an", "the", "and", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "I", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];
    const textArray = cleanedText.split(" ");
    cleanedText = textArray.filter(word => !stopwords.includes(word)).join(" ");
  
    return cleanedText;
  }
  export default preprocessText;
