

function parseTime(time) {
    const [time12Hour, period] = time.split(' ');
    let [hour, minute] = time12Hour.split(':');

    if(period.toLowerCase() == 'pm' && hour < 12)
        hour = (+hour) + 12
    else if(period.toLowerCase() == 'am' && hour == 12)
        hour = 0

    return new Date(`2024-01-01T${hour}:${minute}-08:00`);
}
function getRange(time1 = "1:00 am", time2 = "1:00 am") {

    let date1 = parseTime(time1);
    let date2 = parseTime(time2);

    let localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let options = {hour12: true, hour: 'numeric', minute: 'numeric', timeZone: localTimeZone};

    document.write(`${date1.toLocaleString('en-US', options)} - ${date2.toLocaleString('en-US', options)}`.toLowerCase());
}
function getTimeZone() {
    let timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date();
    const options = { timeZone: timeZoneName, timeZoneName: 'short' };
    const [abbreviation] = new Intl.DateTimeFormat('en-US', options)
        .formatToParts(date)
        .find(part => part.type === 'timeZoneName')
        .value
        .split(' ');
    console.log(abbreviation);

    document.write(abbreviation);
}