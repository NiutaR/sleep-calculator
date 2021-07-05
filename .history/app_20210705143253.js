const getSleepHours = (day) => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 4;
    } else if (day === 'saturday') {
        return 24;
    } else if (day === 'sunday') {
        return 2;
    } else {
        return "Day Value Error"
    }
}