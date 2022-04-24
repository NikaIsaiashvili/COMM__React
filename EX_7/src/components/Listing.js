function BlockList() {
  const categories = [1, 2, 3, 4];

  return (
    <div className="block-listing">
      {categories.map(
        (element,
        (num) => (
          <span key={num} className={`badge-${num}`}>
            {" "}
            {`Category ${num}`}{" "}
          </span>
        ))
      )}
    </div>
  );
}
export default BlockList;
