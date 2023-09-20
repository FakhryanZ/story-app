const DateConverter = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = new Date(date).toLocaleDateString('id-ID', options);
    return dateFormatted;
}

export default DateConverter