export async function News() {
  return (
    <div>
      {data?.map((newData, index) => (
        <div key={index}>
          <img src={newData.urlToImage} alt="imagen noticia" />
          <div>
            <h3>{newData.title}</h3>
            <p>{newData.description}</p>
            <span>{newData.publishedAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
