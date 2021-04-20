export function RenderPagination(props){
    return (
        <>
            <div className="table-pagination">
                <span className="selectPage" onClick={props.prevPage} >{props.iconBack}</span>
                {!(props.page-1 <= 0) && 
                    <span  className="selectPage" onClick={props.prevPage}>{props.page-1}</span>
                }
                <span className="selectPage currentPage" >{props.page}</span>
                {!(props.page+1 > props.countPages ) &&
                    <span  className="selectPage" onClick={props.nextPage}>{props.page+1}</span>
                }
                <span className="selectPage" onClick={props.nextPage}>{props.iconNext}</span>
            </div>
        </>
    )
}

export function next(page, countPages){
    return new Promise(resolve => {
        let nextPage = page+1
        if(nextPage > countPages){
            nextPage = page
        }
        return resolve(nextPage)
    })
}
export function prev(page){
    return new Promise (resolve => {
        let prevPage = page-1
        if(prevPage <= 0){
            prevPage = page
        }
        return resolve(prevPage)
    })
}