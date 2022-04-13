class TimeUtils{
    static getLastDayStartAndEnd(){

        const endOfDay = new Date(new Date().setHours(0, 0, 0, 0));
        const startOfDay = new Date(new Date(endOfDay).setDate(endOfDay.getDate() - 1))

        return {
            startOfDay,
            endOfDay
        }
    }
}

module.exports = TimeUtils;