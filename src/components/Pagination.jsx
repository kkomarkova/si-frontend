
    function showPagination(postsPerPage, data,setCurrentpage, currentPage) {
    const pageNumbers = [];
    const totalPosts = data.length;
    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
      pageNumbers.push(i)
    }

    const pagination = (pageNumbers) => {
      setCurrentpage({currentPage: pageNumbers})
    }

    return(
      <nav>
      <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className={currentPage === number ? 'page-item active' : 'page-item' }>
        <button onClick={()=> pagination(number)} className="page-link"> {number} </button>
        </li>
      ))}
      </ul>
      </nav>
    )
  }
  export default showPagination;
  