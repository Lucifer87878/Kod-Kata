const RepeatText = ({ count, text }) => {
    // Skapa en array med <p>-taggar
    const pTags = Array.from({ length: count }, (index) => (
      <p key={index}>{text}</p>
    ));
  
    // Rendera <div> som innehåller alla <p>-taggar
    return <div>{pTags}</div>;
  };
  
  export default RepeatText;