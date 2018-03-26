export const secondsToTime = (duration) => {
    const minutesPerDay = Math.floor(duration / 60);
    const minutesLeftPerDay = (minutesPerDay % 60)
    const hoursPerDay = Math.floor(minutesPerDay / 60);    
    const secondsLeftPerDay = (duration % 60);

    return {
        hours: hoursPerDay,
        minutes: minutesLeftPerDay,
        seconds: secondsLeftPerDay
    };
}
export const pagesEveryDay = (pages, days) => {
    const pagesPerDay = Math.ceil(this.book.volumeInfo.pages / this.totalDays);
    return {
        pages: pagesPerDay
    };
}