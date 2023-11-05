

export const styleFunc = (item, currentDate, currentPage,showPage,showPage2) => {
    if (item == currentDate[0] && currentPage == showPage) {
        return { color: "white" }
    } else if (item == currentDate[1] && currentPage == showPage2) {
        return { color: "white" }
    }
    else {
        return { color: "gray" }
    }}