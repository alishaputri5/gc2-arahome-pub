

export default function Pagination({nextPage, previousPage, currentPage, pagination}) {
  return(
    <div className="max-w-screen-xl mx-auto mt-12 py-6 px-4 text-gray-600 md:px-8">
    <div className="flex items-center justify-between text-m text-gray-600 font-medium">
      <a
      
        className="px-4 py-2 border rounded-lg text-black hover:bg-gray-50"
        onClick={previousPage}
      >
        Previous
      </a>
      <div>
        Page {currentPage} of {pagination?.totalPage === 0 ? 1 : pagination?.totalPage}
      </div>
      <a
       
        className="px-4 py-2 text-black border rounded-lg duration-300 hover:bg-gray-50"
        onClick={nextPage}
      >
        Next
      </a>
    </div>
  </div>
  )
}