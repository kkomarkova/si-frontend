
    const ShowPagination=({postsPerPage,setProducts, data,setCurrentpage, currentPage}) =>{
    const pageNumbers = [];
    const totalPosts = data.length;
    console.log(totalPosts);
    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
      pageNumbers.push(i)
    }
    console.log(pageNumbers);
    const pagination = (pageNumbers) => {
      console.log(pageNumbers)
      const indexOfLastPage = currentPage * 10;
      const indexOfFirstPage = indexOfLastPage - 10;
      setCurrentpage(pageNumbers)
      
      const newProducts=data.slice(
        indexOfFirstPage,
        indexOfLastPage
      )
      
      setProducts(newProducts)
      console.log(newProducts)
    }

    return(
      <>
      <h1>Pagination</h1>
      <nav>
      <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className={currentPage === number ? 'page-item active' : 'page-item' }>
        <button onClick={()=> pagination(number)
          
        } className="page-link"> {number} </button>
        </li>
      ))}
      </ul>
      </nav>
      </>
    )
  }
  export default ShowPagination;
  