function filterLeetcode(fromDate, toDate, contestsData) {
    console.log('contestsData: ', contestsData);
    if(contestsData === undefined){
        return [];
    }
    let startDate = new Date(fromDate);
    let endDate = new Date(toDate);
    let filteredContests = contestsData.filter((contest) => {
        let date = new Date(contest.contest.startTime * 1000);
        return date >= startDate && date <= endDate;
    })
    return filteredContests
}

function filterCodechef(fromDate, toDate, contestsData) {
    console.log('contestsData: ', contestsData);
    let startDate = new Date(fromDate);
    let endDate = new Date(toDate);
    let filteredContests = contestsData.filter((contest) => {
        console.log('contest: ', contest);
        if (contest.end_date != null) {
            let date = new Date(contest.end_date.split(" ")[0]);
            console.log('date: ', date);
            return date >= startDate && date <= endDate;
        }
    });
    return filteredContests
}

function filterCodeforces(fromDate, toDate, contestsData) {
    console.log(contestsData);
    let startDate = new Date(fromDate);
    let endDate = new Date(toDate);
    let filteredContests = contestsData.filter((contest) => {
        let date = new Date(contest.ratingUpdateTimeSeconds * 1000);
        return date >= startDate && date <= endDate;
    });
    return filteredContests
}

export { filterLeetcode, filterCodechef, filterCodeforces };