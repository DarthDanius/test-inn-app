function dateToString(date) {
    if (!(date instanceof Date)) {
        throw new Error('Неверный формат агрумента. Ожидается тип Date')
    }
    let year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    if (month.length < 2) month = '0' + month
    let day = (date.getDate()).toString()
    if (day.length < 2) day = '0' + day

    return `${year}-${month}-${day}`
}
function datetimeToString(date) {
    if (!(date instanceof Date)) {
        throw new Error('Неверный формат агрумента. Ожидается тип Date')
    }
    let year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    if (month.length < 2) month = '0' + month
    let day = (date.getDate()).toString()
    if (day.length < 2) day = '0' + day
    let hours = (date.getHours()).toString()
    if (hours.length < 2) hours = '0' + hours
    let minutes = (date.getMinutes()).toString()
    if (minutes.length < 2) minutes = '0' + minutes

    return `${year}-${month}-${day} ${hours}:${minutes}`
}

module.exports = {dateToString, datetimeToString}